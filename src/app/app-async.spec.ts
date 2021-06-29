import { fakeAsync, tick } from "@angular/core/testing";

describe('AysncTest', () => {
  it('asynchronous test example - setTimeout', () => {
    let test: boolean = false;
    setTimeout(() => {
      console.log('running assertions');
      test = true;
      expect(test).toBeTruthy();
    }, 1000);
    // akan fail karena test bersifat async tetapi belum menerapakan fakeAsync
  });

  // fakeAsync & tick => sebuah fungsi untuk perjalanan waktu
  // tick ini sama seperti setTimeOut (unit test) -> mock setTimeOut
  // yang mana tick ini pasti ada fakeAsync()
  // tick ini gak boleh kurang dari setTimeOut, tapi bisa lebih

  it('asynchronous test example - setTimeout with fakeAsync', fakeAsync(() => {
    let test: boolean = false;
    setTimeout(() => {
      console.log('running assertions setTimeOut with fakeAsync');
      test = true;
    }, 1000);
    expect(test).toBe(false)
    tick(500);
    expect(test).toBe(false);
    tick(500);
    expect(test).toBe(true);
  }));
});