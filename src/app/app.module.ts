import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { MatchesComponent } from './matches/matches.component';
import { VenueComponent } from './venue/venue.component';
import { ResultComponent } from './result/result.component';
import { ListComponent } from './list/list.component';
import { SummaryComponent } from './summary/summary.component';

import {HttpClientModule} from '@angular/common/http';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    TeamsComponent,
    PlayersComponent,
    MatchesComponent,
    VenueComponent,
    ResultComponent,
    ListComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
