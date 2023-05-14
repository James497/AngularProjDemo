import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  template: `
  <p>{{dataVariable}}</p>
  <h1>Hello there! {{title}}</h1>
  <ul>
    <li *ngFor="let val of myArr">{{val}}</li>
  </ul>
  <div *ngIf="str == 'something'; then templ1 else templ2">
  </div>
  <ng-template #templ1 > Comparison is true</ng-template>
  <ng-template #templ2 > Comparison is false</ng-template>
  <button (click)="OnClick($event)">Click me</button>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private testService : TestService) {

  }
  title = 'AngularProjDemo';
  myArr = ['orange', 'apple', 'guava'];
  str:string = "something";
  dataVariable:string = '';
  OnClick(event:Event){
    console.log(event);
    
  }
  ngOnInit(){
    console.log(this.testService.data);
    this.dataVariable = this.testService.GetData();
  }
}
