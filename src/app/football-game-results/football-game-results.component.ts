import { Component, OnDestroy } from '@angular/core';
import { FixtureResponse } from '../model/model';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballService } from '../services/football.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-football-game-results',
  templateUrl: './football-game-results.component.html',
  styleUrls: ['./football-game-results.component.scss']
})
export class FootballGameResultsComponent implements OnDestroy {
  results: FixtureResponse[] = [];
  teamId!: number;
  routeSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private footballService: FootballService) {
    let state = this.router.getCurrentNavigation()?.extras.state;
    this.routeSubscription = this.route.params.subscribe(params => {
      this.teamId = params['id'];
    });
    if (state && state['leagueId'] && state['season']) {
      this.getGameResults(state['leagueId'], state['season']);
    }
  }

  getGameResults(leagueId: number, season: string) {
    this.footballService.getGameResults(this.teamId, leagueId, season).subscribe((data) => {
      this.results = data?.response?.slice(0, 10) ?? [];
    })
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
