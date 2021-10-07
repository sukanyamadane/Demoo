import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { ListComponent } from './list/list.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';

import { ResultComponent } from './result/result.component';
import { SummaryComponent } from './summary/summary.component';
import { TeamsComponent } from './teams/teams.component';
import { VenueComponent } from './venue/venue.component';


const routes: Routes = [
  {path:'',component:CountriesComponent },
  {path:'teams', component:TeamsComponent},
  {path:'players', component:PlayersComponent},
  {path:'venue', component:VenueComponent},
  {path:'matches', component:MatchesComponent},
  {path:'list',component:ListComponent},
  {path:'summary', component:SummaryComponent},
  {path:'result',component:ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
