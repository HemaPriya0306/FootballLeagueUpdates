import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FootballHomeComponent } from './football-home/football-home.component';
import { FootballStandingsComponent } from './football-standings/football-standings.component';
import { FootballGameResultsComponent } from './football-game-results/football-game-results.component';

@NgModule({
  declarations: [
    AppComponent,
    FootballHomeComponent,
    FootballStandingsComponent,
    FootballGameResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
