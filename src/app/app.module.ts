import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './comps/dashboard.component'
import { HeroDetailComponent } from './comps/hero-detail.component'
import { HeroesComponent } from './comps/heroes.component';
import { HeroService } from './services/hero.service';
import { HeroSearchComponent } from './comps/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule,
    InMemoryDataService,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
