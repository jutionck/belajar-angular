import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'introduction-angular';


  // example Statement Coverage
  /**
   * jumlah script function sum di bawah ini adalah 5 baris
   * contoh: kita mengisi number1 = 10, number2 = 15
   * maka baris yang di execute adalah = 1,2,3,5
   * perhitunganya adalah (jumlah execute / total script) x 100
   * hasilnya adalah (4/5) x 100 = 80%
   */
  sum(number1: number, number2: number): number {
    const result = number1 + number2;
    if (result > 0) console.log('Positve', result);
    else console.log('Negative', result);

    return result;
  }
}
