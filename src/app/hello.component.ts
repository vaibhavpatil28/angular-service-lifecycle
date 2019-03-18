import { Component, Input, OnDestroy, OnInit, Injectable } from '@angular/core';

import {GlobalService} from './app.component';

@Injectable()
export class LocalService implements OnDestroy{
  constructor() {
    console.log('localService is construct');
  }

  ngOnDestroy() {
    console.log('localService is destroy');
  }
}

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [LocalService]
})
export class HelloComponent implements OnInit, OnDestroy {
  @Input() name: string;

  constructor(private localService: LocalService, private globalService: GlobalService) {
    console.log('constructor => helloComponent : name = '+ this.name);
  }

  ngOnInit(){
    console.log('hello component init : name = '+ this.name);
  }

  ngOnDestroy() {
    console.log('hello component destroy');
  }
}
