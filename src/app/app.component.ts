import { Component } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">Heroes</a>
   <router-outlet></router-outlet>
  `
})
export class AppComponent {
  public name = 'Angular 2 Webpack Starter';
  public title = 'Tour of Heroes';
}
