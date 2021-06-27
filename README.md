# Angular Hands On - Angular Unit Testing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.13.

## STEP

### PART Introduction Unit Testing

> _Ketika kita membuat sebuah project angular, sebenarnya kita sudah terinstall unit testing bawaan nya yaitu **karma**, bisa diperlihatkan pada sebuah project trainee terdapat file bernama `karma.conf.json`_

> _Untuk melakukan testing pun bisa langsung dipraktekkan dengan cara mengetikkan `ng test` atau dapat melalui command npm dengan menjalankan `npm run test` silahkan cek pada file `package.json` bagian **script** `"test": "ng test",`_

> _Ketika melakukan npm run test akan otomatis browser chrome akan terbuka dan akan melihat hasil testing dari `jasmine framework`. `karma.conf.js` itu sendiri merupakan test runner yang digunakan oleh **jasmine**_

> _Selanjutnya adalah kita akan melakukan konfigurasi pada file `package.json`_

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

> _Uji coba dengan mengetikkan ini di terminal VS Code `npm run test:coverage`, ketika command tersebut di jalankan akan otomatis membuat sebuah direktori **coverage** yang di dalamnya ada sebuah file `index.html` silahkan buka di browser._

> _Jelaskan bahwa ketika melukan command test file yang terbaca adalah file yang mempunyai nama file `.spec.ts`_

2. Open `app.component.spec.ts`, if not exist, create a file `app.component.spec.ts` and add script:

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

> _Penjelasan code diatas adalah :_ <br> > _`describe` merupakan sebuah function yang menerima 2 buah parameter, pertama adalah `string` biasanya di buat untuk mendeskripsikan apa yang akan di tes, kemudian kedua adalah function, biasanya sebuah `arrow function` contohnya adalah :_

```typescript
describe("Suite description", () => {
  /* … */
});
```

> _bisa juga seperti ini, karena `describe` dapat `nested` :_

```typescript
describe("Suite description", () => {
  describe("One aspect", () => {
    /* … */
  });
  describe("Another aspect", () => {
    /* … */
  });
});
```

> _`beforeEach(async ()` merupakan sebuah function untu menangani asynchrounus funcition_ > _Selanjutnya adalah function `it` adalah sebuah function yang menerima dua buah parameter sama seperti `describe`, contoh kode ny adalah :_

```typescript
describe("Suite description", () => {
  it("Spec description", () => {
    /* … */
  });
  /* … more specs …  */
});
```

> _Terakhir adalah `assert` dengan di kode di tulis dengan :_

```typescript
expect(app).toBeTruthy();
```

> \_**Assert** masih banyak lagi ya.

### PART Unit Testing For Component

1. Create unit testing `app/app.component.spec.ts`
2. Create unit testing `app/template/layouts/template-layout.component.spec.ts`
3. Create unit testing `app/template/components/header/header.component.spec.ts`
4. Create unit testing `app/pages/pages.component.spec.ts`
5. Create unit testing `app/pages/landing/components/carousel/carousel.component.spec.ts`
6. Create unit testing `app/pages/landing/components/landing/landing.component.spec.ts`
7. Create unit testing `app/pages/todos/components/todo-list/todo-list.component.spec.ts`
8. Create unit testing `app/pages/todos/components/todo-form/todo-form.component.spec.ts`
9. Create unit testing `app/pages/users/components/list/list-user.component.spec.ts`
10. Create unit testing `app/pages/users/components/form/form-user.component.spec.ts`

### PART Unit Testing For Directive

1. Create unit testing `shared/directives/bs-button/bs-button.directive.spec.ts`
2. Create unit testing `shared/directives/bs-input/bs-input.directive.spec.ts`

### PART Unit Testing For Pipe

1. Create unit testing `shared/pipes/custom-date.pipe.spec.ts`
2. Create unit testing `shared/pipes/relative-form.pipe.spec.ts`

### PART Unit Testing For Routing

1. Create unit testing `app/app-routing.module.spec.ts`
2. Create unit testing `app/pages/pages-routing.module.spec.ts`
3. Create unit testing `app/pages/landings/landing-routing.module.spec.ts`
4. Create unit testing `app/pages/todos/todo-routing.module.spec.ts`
5. Create unit testing `app/pages/users/users-routing.module.spec.ts`

### PART Unit Testing For Service

1. Create unit testing `app/pages/todos/service/todo.service.spec.ts`
2. Create unit testing `app/shared/services/flash.service.spec.ts`
3. Create unit testing `app/shared/services/string.service.spec.ts`

### PART Unit Testing For Service with HTTP Services

1. Create unit testing `app/pages/users/service/user.service.spec.ts`
