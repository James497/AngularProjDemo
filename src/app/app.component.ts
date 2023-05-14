import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello there! {{title}}</h1>
  <ul>
    <li *ngFor="let val of myArr">{{val}}</li>
  </ul>
  <div *ngIf="str == 'something'; then templ1 else templ2">
  </div>
  <ng-template #templ1 > Comparison is true</ng-template>
  <ng-template #templ2 > Comparison is false</ng-template>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProjDemo';
  myArr = ['orange', 'apple', 'guava'];
  str = "something";
}
