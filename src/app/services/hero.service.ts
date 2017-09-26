import { Injectable } from '@angular/core';
import { Hero } from '../comps/hero';
import { HEROES } from '../mock-heroes';

// decorator tells TypeScript to emit metadata about the service.
@Injectable()

export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  };
}
