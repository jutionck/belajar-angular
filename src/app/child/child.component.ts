import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {

  childName: string = 'Child Component'
  counter: number = 0;
  interval: any;

  @Input()
  bootcampName: string = '';

  constructor() {
    console.log(`${this.childName} constructor called!`);
  }
  ngOnInit(): void {
    console.log(`${this.childName} ngOnInit called!`);

    // Demo onDestroy
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1
    //   console.log(this.counter);
    // }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log(`${this.childName} ngOnDestroy called`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${this.childName} ngOnChanges called!`);
    console.log(changes);
  }
}
