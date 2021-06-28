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

  it('Asynchronous test example - setTimeOut', () => {
    let test: boolean = false;
    setTimeout(() => {
      console.log('running assertions');
      test = true;
      expect(true).toBeTruthy();
    }, 1000);
  })
})