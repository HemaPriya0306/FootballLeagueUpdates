import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl, ServiceHeaders } from '../common/constants';
import { OverallFixtures, OverallLeague, Standings } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  headers = ServiceHeaders;
  baseUrl = BaseUrl;

  constructor(private http: HttpClient) { }

  getSelectedLeagueId(country: string, league_name: string, current: boolean): Observable<OverallLeague> {
    const endpoint = `${this.baseUrl}leagues?name=${league_name}&country=${country}&current=${current}`;
    return this.http.get<OverallLeague>(endpoint, { headers: this.headers });
  }

  getStandings(id: number, year: string): Observable<Standings> {
    const endpoint = `${this.baseUrl}standings?league=${id}&season=${year}`;
    return this.http.get<Standings>(endpoint, { headers: this.headers });
  }

  getGameResults(id: number, league_id: number, year: string): Observable<OverallFixtures> {
    const endpoint = `${this.baseUrl}fixtures?league=${league_id}&season=${year}&team=${id}`;
    return this.http.get<OverallFixtures>(endpoint, { headers: this.headers });
  }
}
