import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  data = ['ape', 'human', 'lion'];
  GetData(){
    return 'Some data from my test service';
  }
}
