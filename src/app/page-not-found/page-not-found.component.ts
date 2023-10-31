import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="center"> 
    <p><strong> Cette page n'existe pas </strong> </p>
    <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat"> Retourner a l'accueil  </a>

  </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
