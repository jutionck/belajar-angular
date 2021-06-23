# Angular Hands On - Angular Unit Testing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.13.

## STEP

### PART Introduction Unit Testing

> _Ketika kita membuat sebuah project angular, sebeneranya kita sudah terinstall unit testing bawaan nya yaitu ***karma***, bisa di perlihatkan pada sebuah project trainee terdapat file bernama `karma.conf.json`_

> _Untuk melakukan testing pun bisa langsung di praktikan dengan cara mengetikkan `ng test` atau dapat melalui command npm dengan menjalankan `npm run test` silahkan cek pada file `package.json` bagian **script** `"test": "ng test",`_

> _Ketika melakukan npm run test akan otomatis browser chrome akan terbuka dan akan melihat hasil testing dari `karma.conf.js`. `karma.conf.js` itu sendiri menggunakan dependency dari **jasmine**_

> _Selanjutnya adalah kita akan melihat **coverage** pada sebuah testing_

1. Open `package.json` and add some scripts `test:coverage` as shown below:

```json
"scripts": {
    "ng": "ng",
    "start": "ng serve --open",
    "build": "ng build",
    "test": "ng test",
    "test:coverage": "ng test --no-watch --code-coverage",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }
```

2. Trying in your vs code terminal and type this `npm run test:coverage`

> _Jelaskan bahwa ketika melukan command test file yang terbaca adalah file yang mempunyai nama file `.spec.ts`_

3. Open `app.component.spec.ts`, if not exist, crate a file `app.component.spec.ts` and add script:

```typescript
describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as lifecycle 'ngOnInit''`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.ngOnInit).toBeTruthy();
  });
});
```

> _Penjelasan code diatas adalah :_
