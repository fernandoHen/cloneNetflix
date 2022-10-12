import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
menuOpened: boolean = false;

listTitles = [{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 1',
    relevance: 18,
    age: 16,
    parts: 2,
    categories: ['Drama', 'Ação', 'Filme de fantasia']
  }, 
  {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 2',
    relevance: 98,
    age: 12,
    parts: 2,
    categories: ['Drama', 'Ação', 'Filme de fantasia']
  },
  {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 3',
    relevance: 100,
    age: 0,
    parts: 2,
    categories: ['Drama', 'Ação', 'Filme de fantasia']
  },
  {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 4',
    relevance: 100,
    age: 18,
    parts: 2,
    categories: ['Drama', 'Ação', 'Filme de fantasia']
  }];

  setMenuState(state: boolean): void {
    this.menuOpened = state;
    console.log('1');
  }
  

  closeMenu() {
    this.menuOpened = false;
  }

}
