import { fakeAsync, tick } from "@angular/core/testing";

describe('Async Testing', () => {
  it('Asynchronous test example with jasmine done()', (done: DoneFn) => {
    let test: boolean = false;
    setTimeout(() => {
      console.log('running assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000)
  });

  it('Asynchronous test example - setTimeOut', fakeAsync(() => {
    let test: boolean = false;
    setTimeout(() => {
      console.log('running assertions setTimeout');
      test = true;
      expect(true).toBeTruthy();
    }, 1000);

    tick(); //uji coba antrian;
    tick(1000);
    expect(test).toBeTruthy();
  }));
});