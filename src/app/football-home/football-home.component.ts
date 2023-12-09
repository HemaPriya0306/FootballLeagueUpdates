import { Component, OnInit } from '@angular/core';
import { CountryDetails } from '../model/model';
import { Countries } from '../common/constants';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-football-home',
  templateUrl: './football-home.component.html',
  styleUrls: ['./football-home.component.scss']
})
export class FootballHomeComponent implements OnInit {

  countries: CountryDetails[] = [];

  selectedCountry?: CountryDetails;
  leagueId!: number;
  season!: string;

  constructor(private footballService: FootballService) { }

  ngOnInit(): void {
    this.countries = Countries;
    let selCountry = localStorage.getItem('selectedCountry');
    if (selCountry) {
      this.selectedCountry = JSON.parse(selCountry);
      this.onClickCountry(JSON.parse(selCountry));
    }

  }

  onClickCountry(country: CountryDetails): void {
    this.selectedCountry = country;
    localStorage.setItem('selectedCountry', JSON.stringify(country));
    this.footballService.getSelectedLeagueId(country.name, country.leagueName, true).subscribe((data) => {
      if (data.response.length > 0) {
        this.leagueId = data.response[0].league.id;
        this.season = data?.response[0].seasons[0].year.toString();
      } else {
        data.errors && data.errors.rateLimit ? alert(data.errors.rateLimit) : alert("Problem detected. Please try after some time");
      }
    });
  }

}
