import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'introduction-angular';

  person = {
    name: 'Jution',
    age: 25,
    address: 'Jakarta Barat'
  };

  isValid(): boolean {
    return true;
  }

  numberCheck(a: number): boolean {
    if (a < 10) {
      return true
    }
    else {
      return false
    }
  }
}
