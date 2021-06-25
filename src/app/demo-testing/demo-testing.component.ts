import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-testing',
  templateUrl: './demo-testing.component.html',
  styleUrls: ['./demo-testing.component.scss']
})
export class DemoTestingComponent implements OnInit {

  isOn: boolean = false;

  clicked(): void {
    this.isOn = !this.isOn
  }

  get message(): string {
    return `The light is ${this.isOn ? 'On' : 'Off'}`
  }

  ngOnInit(): void {
  }

}
