import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<app-template-layout>
    <router-outlet></router-outlet>
    </app-template-layout>`
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
