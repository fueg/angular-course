import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../shared/model/hero';
import { HeroService } from '../../../shared/data-access/hero.service';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
})
export class HeroDashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  }
}
