import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  @Input()
  heroes: Hero[] = [];

  @Output()
  delete = new EventEmitter<Hero>();

  deleteHero(hero: Hero): void {
    this.delete.emit(hero);
  }
}