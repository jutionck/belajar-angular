import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges {

  parentName: string = 'Parent Component'
  isChild: boolean = true; //Nilai awal

  @Input()
  bootcampName: string = ''

  constructor() {
    console.log(`${this.parentName} constructor called!`);
  }

  ngOnInit(): void {
    console.log(`${this.parentName} ngOnInit called!`);
  }

  toggleChild(): void {
    this.isChild = !this.isChild;
  }

  ngOnChanges(): void {
    console.log(`${this.parentName} ngOnChanges called!`);
  }
}
