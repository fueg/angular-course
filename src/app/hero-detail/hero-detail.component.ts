import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  heroForm!: FormGroup<{ name: FormControl<string | null>; description: FormControl<string | null | undefined> }>;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
      this.createForm(hero);
    });
  }

  private createForm(hero: Hero) {
    this.heroForm = new FormGroup({
      name: new FormControl<string>(hero.name, Validators.required),
      description: new FormControl<string | undefined>(hero.description),
    });
  }

  isValid(): boolean {
    return this.heroForm.valid;
  }

  goBack(): void {
    this.location.back();
    this.heroForm.reset();
  }

  save(): void {
    if (this.hero) {
      this.hero.name = this.heroForm.controls.name.value!;
      this.hero.description = this.heroForm.controls.description.value!;

      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
