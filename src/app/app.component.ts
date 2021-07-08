import { Component } from '@angular/core';
import { IncrementDecrementService } from './increment-decrement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'introduction-angular';

  constructor(public incrementDecrementService: IncrementDecrementService) { }

  increment() {
    this.incrementDecrementService.increment();
  };

  decrement() {
    this.incrementDecrementService.decrement();
  }
}
