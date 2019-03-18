import { Component, Injectable, OnInit, OnDestroy, AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewInit } from '@angular/core';

@Injectable()
export class GlobalService implements OnDestroy{
  constructor() {
    console.log('GlobalService is construct');
  }

  ngOnDestroy() {
    console.log('GlobalService is destroy');
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit {
  isActive: boolean;

  constructor() {
    console.log('appComponent => constructor');
    this.isActive = false;
  }

  toggle(){
    this.isActive = !this.isActive;
  }

  ngOnInit() {
    console.log('appComponent => ngOnInit');
  }

  ngOnDestroy() {
    console.log('appComponent => ngOnDestroy');
  }

  ngAfterContentChecked() {
    console.log('appComponent => ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('appComponent => ngAfterViewChecked');
  }
  ngAfterViewInit() {
    console.log('appComponent => ngAfterViewInit');
  }
  ngAfterContentInit() {
    console.log('appComponent => ngAfterContentInit');
  }
}
