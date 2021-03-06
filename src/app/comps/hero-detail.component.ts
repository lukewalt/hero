import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'hero-detail',
  template: `

    <div *ngIf="hero">
      <h2>{{hero.name}} Info</h2>
      <div>
        <label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name" />
      </div>
      <button (click)="goBack()">Back</button>
      <button (click)="save()">Save</button>
    </div>

  `,
  styleUrls: ['./hero-detail.component.css']

})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero)
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }
}
