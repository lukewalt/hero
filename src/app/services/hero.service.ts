import { Hero } from '../comps/hero';
import { HEROES } from '../mock-heroes';
import { Injectable } from '@angular/core';

// decorator tells TypeScript to emit metadata about the service.
@Injectable()

export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))

  }
}
