import { Component, Input, OnChanges } from '@angular/core';
import { FootballService } from '../services/football.service';
import { Standing } from '../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-football-standings',
  templateUrl: './football-standings.component.html',
  styleUrls: ['./football-standings.component.scss']
})
export class FootballStandingsComponent implements OnChanges {

  @Input() leagueId!: number;
  @Input() season!: string;

  standings: Standing[] = [];

  tableHeaders = ["SL", "Logo", "Name", "Games", "W", "L", "D", "Goal Difference", "Points"];

  constructor(private footballService: FootballService, private router: Router) { }

  ngOnChanges(): void {
    if (this.leagueId && this.season) {
      console.log(this.leagueId, this.season);
      this.footballService.getStandings(this.leagueId, this.season).subscribe((data) => {
        if (data.response.length > 0) {
          this.standings = data.response[0].league.standings[0];
        }
      });
    }
  }

  goToGameResults(standing: Standing) {
    this.router.navigate([`/game-results/${standing.team.id}`], { state: { leagueId: this.leagueId, season: this.season } });
  }

}
