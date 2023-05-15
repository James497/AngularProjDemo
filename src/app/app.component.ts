import { Component } from '@angular/core';
import { TestService } from './test.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <p [@myAwesomeAnmation]='state' (click)="animateMe()">{{dataVariable}}</p>
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
  //styleUrls: ['./app.component.css'],
  styles:[
    `p{
      width: 200px;
      background: light;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      font-size: 1.5em;
    }`
  ],
  animations: [
    trigger('myAwesomeAnmation',[
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('200ms ease-in', style({
        transform: 'translateY(40px)'
      }))),
    ]),
  ]
})
export class AppComponent {
  state:string = 'small';
  constructor(private testService : TestService) {

  }
  title = 'AngularProjDemo';
  myArr = ['orange', 'apple', 'guava'];
  str:string = "something";
  dataVariable:string = '';
  OnClick(event:Event){
    console.log(event);
    
  }
  animateMe(){
    this.state = (this.state == 'small' ? 'large' : 'small');
  }
  ngOnInit(){
    console.log(this.testService.data);
    this.dataVariable = this.testService.GetData();
  }
}
