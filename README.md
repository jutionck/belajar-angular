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

> _**Assert** masih banyak lagi ya._

### PART Unit Testing For Component

1. Create unit testing `app/app.component.spec.ts`

```typescript
export class AppComponent {
  title = "introduction-angular";

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
    if (result > 0) console.log("Positve", result);
    else console.log("Negative", result);

    return result;
  }
}
```

```typescript
describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'introduction-angular'`, () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("introduction-angular");
  });

  it(`should have a function sum(5, 6), result 11`, () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.sum(5, 6)).toEqual(11);
  });
});
```

2. Create unit testing `app/template/layouts/template-layout.component.spec.ts`

```typescript
describe("TemplateLayoutComponent", () => {
  let component: TemplateLayoutComponent;
  let fixture: ComponentFixture<TemplateLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TemplateLayoutComponent] });
    fixture = TestBed.createComponent(TemplateLayoutComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  // nativeELement
  it("should have <app-header>", () => {
    // buat variabel untuk deteksi tag html
    const templateElement: HTMLElement = fixture.nativeElement;
    const appHeader = templateElement.querySelector("app-header");
    expect(appHeader).toBeTruthy();
  });
});
```

Modify `app/template/layouts/template-layout.component.html` with script :

```html
<app-header></app-header>

<!-- Uji coba membuat tag p -->
<p>Template Layout Works!</p>

<div class="container">
  <div class="row">
    <div class="col-12">
      <ng-content></ng-content>
    </div>
  </div>
</div>
```

Open again `app/template/layouts/template-layout.component.spec.ts` and modify like above :

```typescript
describe("TemplateLayoutComponent", () => {
  let component: TemplateLayoutComponent;
  let fixture: ComponentFixture<TemplateLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TemplateLayoutComponent] });
    fixture = TestBed.createComponent(TemplateLayoutComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

  // nativeELement
  it("should have <app-header>", () => {
    // buat variabel untuk deteksi tag html
    const templateElement: HTMLElement = fixture.nativeElement;
    const appHeader = templateElement.querySelector("app-header");
    expect(appHeader).toBeTruthy();
  });

  it('should have <p> with "Template Layout Works!"', () => {
    // buat variabel untuk deteksi tag html
    const templateElement: HTMLElement = fixture.nativeElement;
    const p = templateElement.querySelector("p");
    expect(p.textContent).toEqual("Template Layout Works!");
  });

  // debugElement
  it('should have <p> with "Template Layout Works!" use debugElement', () => {
    // buat variabel untuk deteksi tag html
    const templateDebug: DebugElement = fixture.debugElement;
    const templateElement: HTMLElement = templateDebug.nativeElement;
    const p = templateElement.querySelector("p");
    expect(p.textContent).toEqual("Template Layout Works!");
  });
});
```

> _Challenge trainee dengan membuat spec test pada file di bawah ini:_

<br>

3. Create unit testing `app/template/components/header/header.component.spec.ts`
4. Create unit testing `app/pages/pages.component.spec.ts`
5. Create unit testing `app/pages/landing/components/carousel/carousel.component.spec.ts`
6. Create unit testing `app/pages/landing/components/landing/landing.component.spec.ts`

7. Create unit testing `app/pages/todos/components/todo-list/todo-list.component.spec.ts`

```typescript
describe("TodoListCoomponent", () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TodoListComponent] });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector("h1");
  });

  // That test fails, because createComponent() doesn't bind data;
  it("should display original title", () => {
    expect(h1.textContent).toContain(component.title);
  });
});
```

> _Jalankan, akan fail. Solusinya adalah menggunakan `detectChanges()`_
> Open again `app/pages/todos/components/todo-list/todo-list.component.spec.ts` add script like this :

```typescript
it("no title in the DOM after createComponent()", () => {
  expect(h1.textContent).toEqual("");
});

// so, solution: use detectChanges()
it("should display original title after detectChanges()", () => {
  fixture.detectChanges();
  expect(h1.textContent).toContain(component.title);
});
```

8. Create unit testing `app/pages/todos/components/todo-form/todo-form.component.spec.ts`
9. Create unit testing `app/pages/users/components/list/list-user.component.spec.ts`
10. Create unit testing `app/pages/users/components/form/form-user.component.spec.ts`

### PART Unit Testing For Directive

1. Create unit testing `shared/directives/bs-button/bs-button.directive.spec.ts`

```html
<div class="row">
  <h1>My Todo Form</h1>

  <div class="alert alert-info" *ngIf="loading">
    Menyimpan data, silahkan tunggu...
  </div>

  <form action="" [formGroup]="todoForm">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">V</span>
      <input
        type="text"
        class="form-control"
        placeholder="Task name"
        formControlName="label"
      />
      <button
        type="button"
        appBsButton
        color="dark"
        buttonStyle="outline"
        (click)="addTask()"
      >
        ADD
      </button>
    </div>
  </form>
</div>
```

```typescript
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BsButtonDirective } from "src/app/shared/directives/bs-button/bs-button.directive";
import { TodoFormComponent } from "./todo-form.component";

describe("TodoFormComponent", () => {
  let fixture: ComponentFixture<TodoFormComponent>;
  let bsBtn: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BsButtonDirective, TodoFormComponent],
    }).createComponent(TodoFormComponent);

    // initial binding
    fixture.detectChanges();

    // all element with an attached BsButtonDirective
    bsBtn = fixture.debugElement.queryAll(By.directive(BsButtonDirective));
  });

  // button tests
  it("should have one appBsButton elements", () => {
    expect(bsBtn.length).toBe(1);
  });
});
```

2. Create unit testing `shared/directives/bs-input/bs-input.directive.spec.ts`

> _Challenge trainee again_

### PART Unit Testing For Pipe

Open file `app/pages/users/components/list/list-user.component.spec.ts` and add script this:

```typescript
// ... //
const titleCase: TitleCasePipe = new TitleCasePipe();

// ... //
it('transforms "abc" to "Abc"', () => {
  expect(titleCase.transform("abc")).toBe("Abc");
});

it('transforms "abc def" to "Abc Def"', () => {
  expect(titleCase.transform("abc def")).toBe("Abc Def");
});

// ... more tests ...
it('leaves "Abc Def" unchanged', () => {
  expect(titleCase.transform("Abc Def")).toBe("Abc Def");
});

it('transforms "abc-def" to "Abc-def"', () => {
  expect(titleCase.transform("abc-def")).toBe("Abc-def");
});

it('transforms "   abc   def" to "   Abc   Def" (preserves spaces) ', () => {
  expect(titleCase.transform("   abc   def")).toBe("   Abc   Def");
});
```

### PART Unit Testing For Service

1. Create unit testing `app/pages/todos/service/todo.service.spec.ts`

```typescript
describe("TodoService", () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should have method getTaskPromise", () => {
    expect(service.getTaskPromise()).toBeTruthy();
  });

  it("should have method getTaskObservable", () => {
    expect(service.getTaskObservable()).toBeTruthy();
  });
});
```

> _Pada testing independent service ada `TestBed.inject(TodoService);` untuk memanggil servive dengan menggunakan `inject`_

### PART Unit Testing For Module

1. Open file `app/app.component.spec.ts` add script this :

```typescript
// Testing module
describe("AppModule", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
  });

  it("initializes AppModule", () => {
    const module = TestBed.inject(AppModule);
    expect(module).toBeTruthy();
  });
});

describe("PagesModule", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PagesModule],
    });
  });

  it("initializes PagesModule", () => {
    const module = TestBed.inject(PagesModule);
    expect(module).toBeTruthy();
  });
});
```

> _Challenge traine dengan membuat unit testing module lain seperti `landing.module`, `todo.module` dan `user.module`_

### PART Unit Testing For Routing

> _Part ini jelaskan dahulu untuk melakukan testing routing kita perlu menggunakan function `fakeAsync` dan `tick`_

1. Create unit testing `app/app-routing.module.spec.ts`

```typescript
describe("fakeAsync and tick", () => {
  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));
});
```

> _Jelaskan apa itu `fakeAsync`. **fakeAsync** adalah sebuah fungsi untuk menghandle testing yang asyncrhounus, pasangannya adalag `tick`. **tick** ibarat `setTimeOut`_

```typescript

```

2. Create unit testing `app/pages/pages-routing.module.spec.ts`
3. Create unit testing `app/pages/landings/landing-routing.module.spec.ts`

```typescript
describe("Router: Landing()", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [LandingComponent, AppComponent],
    });

    router = TestBed.inject(Router); // yang lama pakai get
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      tick(50);
      //ini harus ada, Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
      expect(location.path()).toBe("/home");
    });
  }));
});
```

4. Create unit testing `app/pages/todos/todo-routing.module.spec.ts`
5. Create unit testing `app/pages/users/users-routing.module.spec.ts`

### PART Unit Testing For Service with HTTP Services

1. Create unit testing `app/pages/users/service/user.service.spec.ts`

```typescript
const page = 1;
const expectedUrl = `https://reqres.in/api/users?page=${page}`;

const expectGetUser = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];

describe("UserServie", () => {
  let userService: UserService;
  let controller: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    userService = TestBed.inject(UserService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it("should be created", inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it(`list user from ${expectedUrl}`, () => {
    let users: User[];
    userService.getAll(page).subscribe((response: Response<User[]>) => {
      users = response.data;
    });
    const request = controller.expectOne(expectedUrl);
    request.flush(expectGetUser);

    expect(expectGetUser.length).toBe(6);
    expect(users).toEqual(expectGetUser);
    expect(request.request.method).toBe("GET");
  });
});
```
