import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballHomeComponent } from './football-home/football-home.component';
import { FootballGameResultsComponent } from './football-game-results/football-game-results.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: FootballHomeComponent},
  {path:'game-results/:id', component: FootballGameResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
