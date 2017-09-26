import { Component, OnInit } from '@angular/core';
import { Hero } from './comps/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {


  title = 'Tour of Heros';

  //array of heroes
  heroes: Hero[];

  //selecting logic
  selectedHero: Hero;

  constructor(private heroService: HeroService) { };

  getHeroes(): void {
    // constructor allows access to service where we can call a method from the file
    // here the service returns an async call so we .then to set returned data to this.heroes
    this.heroService.getHeroes().then( heroes => this.heroes = heroes )
  };

  // calls function that pulls data from our service
  // afforded through OnInit
  ngOnInit(): void {
    this.getHeroes()
  };


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

}
