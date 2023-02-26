import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../shared/model/hero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent {
  @Input()
  hero: Hero | undefined;

  @Output()
  back = new EventEmitter();

  @Output()
  save = new EventEmitter();

  goBack(): void {
    this.back.emit();
  }

  saveHero(): void {
    if (this.hero) {
      this.save.emit(this.hero);
    }
  }
}