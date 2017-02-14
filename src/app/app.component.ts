import {
  Component,
  ViewEncapsulation
} from '@angular/core';

export class Hero {
  public id: number;
  public name: string;
}

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,  
  template: `
     <h1>{{title}}</h1>
    <h2>{{hero.name}} details!!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})
export class AppComponent {  
  public name = 'Angular 2 Webpack Starter';
  public title = 'Tour of Heroes';
  
  public hero: Hero = {
    id: 3,
    name: 'Windstorm'
  };
}
