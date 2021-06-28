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
});
```

> _Challenge trainee dengan membuat spec test pada file di bawah ini:_
>
> 1. Create unit testing `app/template/components/header/header.component.spec.ts`
> 2. Create unit testing `app/pages/pages.component.spec.ts`
> 3. Create unit testing `app/pages/landing/components/carousel/carousel.component.spec.ts`
> 4. Create unit testing `app/pages/landing/components/landing/landing.component.spec.ts`

3. Create unit testing `app/pages/todos/components/todo-list/todo-list.component.spec.ts`

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

> _Challenge trainee again_
>
> 1. Create unit testing `shared/directives/bs-input/bs-input.directive.spec.ts`

### PART Unit Testing For Pipe

Create file `app/shared/pipes/custome-date.pipe.spec.ts` and add script this:

```typescript
describe("CustomDatePipe", () => {
  const date: Date = new Date();
  const customeDate: CustomeDatePipe = new CustomeDatePipe();
  const expectDate = "Tgl 28 Juni 2021";

  it("transform date with customDate", () => {
    expect(customeDate.transform(date)).toBe(expectDate);
  });
});
```

> _Challenge trainee again_
>
> 1. Create unit testing, create file `app/shared/pipes/relative-from.pipe.spec.ts`

### PART Unit Testing For Module

1. Create file `app/module.spec.ts` add script this :

```typescript
describe("Module", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
        TemplateModule,
        PagesModule,
        LandingModule,
        TodoModule,
        UsersModule,
      ],
    });
  });

  it("initialize AppModule", () => {
    const module = TestBed.inject(AppModule);
    expect(module).toBeTruthy();
  });

  it("initialize SharedModule", () => {
    const module = TestBed.inject(SharedModule);
    expect(module).toBeTruthy();
  });

  it("initialize TemplateModule", () => {
    const module = TestBed.inject(TemplateModule);
    expect(module).toBeTruthy();
  });

  it("initialize PagesModule", () => {
    const module = TestBed.inject(PagesModule);
    expect(module).toBeTruthy();
  });

  it("initialize LandingModule", () => {
    const module = TestBed.inject(LandingModule);
    expect(module).toBeTruthy();
  });

  it("initialize TodoModule", () => {
    const module = TestBed.inject(TodoModule);
    expect(module).toBeTruthy();
  });

  it("initialize UsersModule", () => {
    const module = TestBed.inject(UsersModule);
    expect(module).toBeTruthy();
  });
});
```

### PART Unit Testing For Service Without HTTP Service

1. Create unit testing `app/pages/todos/service/todo.service.spec.ts`

```typescript
describe("TodoService()", () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should have method getTaskPromise()", () => {
    expect(service.getTaskPromise).toBeTruthy();
  });

  it("should have method getTaskObservable()", () => {
    expect(service.getTaskObservable).toBeTruthy();
  });

  it("should have method getTaskObservable()", () => {
    expect(service.getTaskObservable).toBeTruthy();
  });

  it("should have method watch", () => {
    expect(service.watch).toBeTruthy();
  });
});
```

> _Pada testing independent service ada `TestBed.inject(TodoService);` untuk memanggil servive dengan menggunakan `inject`_

#### Day 2

In file `app/pages/todos/service/todo.service.spec.ts` modify like this:

```typescript
describe('TodoService', () => {

  // .... ///
const mockTask: Todo = {
    id: 1,
    label: 'Task 4',
    checked: true
  };

it('should have metod setTask', () => {
    expect(service.setTask(mockTask)).toBeTruthy();
  });

}
```

### Part Unit Testing Component with FormGroup and ReacriveForm

1. Open file `app/pages/todos/component/todo-form/todo-form.component.ts` and modify script :

```typescript
  @Output() outputTask: EventEmitter<Todo> = new EventEmitter();

  // modify line code this
  todoForm: FormGroup = new FormGroup({
    label: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });

  addTask(): void {
    console.log(this.todoForm.value);
    const { id, label, checked }: Todo = this.todoForm.value;
    const todo: Todo = {
      id,
      label,
      checked
    };

    this.loading = true;
    this.outputTask.emit(todo)
  }

  // ... ///
}
```

> _Ada perubahan di form, kita tambahkan validasi untuk pengecekan ketika di test_

2. Open file `app/pages/todos/component/todo-form/todo-form.component.spec.ts` and modify script :

```typescript
describe("TodoFormComponent", () => {
  let fixture: ComponentFixture<TodoFormComponent>;
  let bsBtn: DebugElement[];
  let component: TodoFormComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BsButtonDirective, TodoFormComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).createComponent(TodoFormComponent);

    // initial binding
    fixture.detectChanges();

    // all element with an attached BsButtonDirective
    bsBtn = fixture.debugElement.queryAll(By.directive(BsButtonDirective));

    //PART Reactive Form
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  // button tests
  it("should have one appBsButton elements", () => {
    expect(bsBtn.length).toBe(1);
  });

  // PART ReactiveForm
  it("form invalid when empty", () => {
    expect(component.todoForm.valid).toBeFalsy();
  });

  it("label field validity", () => {
    let errors = {};
    let label = component.todoForm.controls["label"];
    // expect(label.valid).toBeFalsy();

    // Label field is required
    errors = label.errors || {};
    expect(errors["required"]).toBeTruthy();

    // Set label to something
    label.setValue("Cry");
    errors = label.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["minlength"]).toBeTruthy();

    // Set label to something correct
    label.setValue("Swimming");
    errors = label.errors || {};
    expect(errors["required"]).toBeFalsy();
    expect(errors["minlength"]).toBeFalsy();
  });

  it("submitting a form emits a label", () => {
    expect(component.todoForm.valid).toBeFalsy();
    component.todoForm.controls["label"].setValue("travelling");
    expect(component.todoForm.valid).toBeTruthy();

    let task: Todo;
    // Subscribe to the Observable and store the user in a local variable.
    component.outputTask.subscribe((value) => (task = value));

    // Trigger the loading
    component.loading;
    expect(component.loading).toBe(false);

    // Trigger the login function
    component.addTask();

    // Now we can check to make sure the emitted value is correct
    expect(task.label).toBe("travelling");
  });
});
```

> _Sekarang `todo-form.component.ts` kembali kan seperti semula_

Open file `todo-form.component.spec.ts` again and modify like this :

```typescript
it('submitting a form emits a label', async () => {
    expect(component.todoForm.valid).toBeFalsy();
    component.todoForm.controls['label'].setValue("travelling");
    expect(component.todoForm.valid).toBeTruthy();

    let task: Todo = {
      id: 4,
      label: 'travelling',
      checked: false
    }
    // Subscribe to the Observable and store the user in a local variable.
    component.outputTask.subscribe((value) => task = value);

    // Trigger the loading
    expect(component.loading).toBe(false);

    // Trigger the login function
    component.addTask();

    // await todoService.setTask(task)
    //   .then(() => todoService.getTaskPromise())
    //   .then((task) => {
    //     expect(component.loading).toBe(true);
    //     expect(task).toEqual(task);
    //   });
    expect(task.label).toEqual("travelling");
  });
});
```

### PART fakeAsync and Tick

> _Sebelum masuk sini, silahkan tambahkan dahulu di beberapa `spec.ts` di bagian `configureTestingModule` => `schemas: [ CUSTOM_ELEMENTS_SCHEMA ]` agar di console tidak merah_

1. Create a file `app/app-async.spec.ts`
2. Modify that file :

```typescript
describe("Async Testing", () => {
  it("Asynchronous test example with jasmine done()", (done: DoneFn) => {
    let test: boolean = false;
    setTimeout(() => {
      console.log("running assertions");
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it("Asynchronous test example - setTimeOut", () => {
    let test: boolean = false;
    setTimeout(() => {
      console.log("running assertions");
      test = true;
      expect(true).toBeTruthy();
    }, 1000);
  });
});
```

> _Jalankan `npm run test` dan lihat pada bagian console, harusnya jika benar ada error Unchaugh expect... Karena yang di test adalah asynchronous, barulah kita menggunakan **fakeAsync** dan **tick** | perjalanan zona waktu, keduanya merupakan dependency dari `Zone.js`_

3. Modify `app/app-async.spec.ts` :

```typescript
  // ... //

  it("Asynchronous test example - setTimeOut", fakeAsync(() => {
    let test: boolean = false;
    setTimeout(() => {
      console.log("running assertions setTimeout");
      test = true;
      expect(true).toBeTruthy();
    }, 1000);
    tick(); //uji coba antrian;
    tick(1000);
    expect(test).toBeTruthy();
  }));
});
```

> _Cek kembali pada console dan lihat perubahan nya. Tetapi di console masih ada yang error `expec`. Kenapa ? ya karena itu merupakan sebuah aysnchonous, maka dari itu silahkan ubah pada `todo-list.component.spec.ts`_

4. Open file `todo-list.component.spec.ts` :

```typescript
it("should showing tasks after Angular calls ngOnInit with observable", fakeAsync(() => {
  comp.ngOnInit();
  expect(comp.loading).toBe(true);
  const taskList = todoService.getTaskObservable();
  taskList.subscribe((tasks) => {
    comp.tasks = tasks;
    expect(comp.tasks).toEqual(todoService.tasks);
    // expect(comp.tasks.length).toEqual(tasks.length);
  });

  tick(5000); //antrian ada 3
}));
```

### PART Unit Testing For Routing

1. Create unit testing `app/pages/landings/landing-routing.module.spec.ts`

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

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      tick(50);
      //ini harus ada, Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
      expect(location.path()).toBe("/home");
    });
  }));
});
```

> _Challenge Time_:
>
> 1. Create unit testing `app/pages/todos/todo-routing.module.spec.ts`
> 2. Create unit testing `app/pages/users/users-routing.module.spec.ts`

### PART Unit Testing Component With Dependency

1. Create unit testing `app/pages/users/components/list/list-user.component.spec.ts`
2. Create unit testing `app/pages/todos/components/todo-form/todo-form.component.spec.ts`
3. Create unit testing `app/pages/users/components/form/form-user.component.spec.ts`

Open file `app/pages/todos/components/todo-list/todo-list.component.spec.ts` and add script:

> _The following **TodoListComponent** depends on the TodoService to showing list todo_

```typescript
describe("TodoListComponent with Dependency", () => {
  let comp: TodoListComponent;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        TodoListComponent,
        {
          provide: TodoService,
        },
      ],
    });
    // inject both the component and the dependent service.
    comp = TestBed.inject(TodoListComponent);
    todoService = TestBed.inject(TodoService);
  });

  it("should not have task list after construction", () => {
    expect(comp.tasks).toEqual([]);
  });

  it("should showing tasks after Angular calls ngOnInit with observable", () => {
    comp.ngOnInit();
    expect(comp.loading).toBe(true);
    const taskList = todoService.getTaskObservable();
    taskList.subscribe((tasks) => {
      comp.tasks = tasks;
      expect(comp.tasks).toEqual(todoService.tasks);
      expect(comp.tasks.length).toEqual(tasks.length);
    });
  });
});
```

Still in the same file `app/pages/todos/components/todo-list/todo-list.component.spec.ts` demo observable convert to promosie :

```typescript
// adding below describe('TodoListComponent with Dependency'....)
const taskMock: Todo[] = [
  {
    id: 1,
    label: "Task 1",
    checked: true,
  },
  {
    id: 2,
    label: "Task 2",
    checked: false,
  },
  {
    id: 3,
    label: "Task 3",
    checked: false,
  },
];

// .... //
it("should showing tasks after Angular calls ngOnInit convert Observable toPromise", () => {
  comp.ngOnInit();
  expect(comp.loading).toBe(true);
  todoService.getTaskObservable().toPromise();
  expect(taskMock).toEqual(todoService.tasks);
});
```

> _Challenge Time:_
>
> 1. Create unit testing `app/pages/todos/components/todo-form/todo-form.component.spec.ts`

### PART Unit Testing Component with Dependency (Service & HTTP Service)

1. Create unit testing `app/pages/users/components/list/list-user.component.spec.ts`

```typescript
describe("ListUserComponent", () => {
  let component: ListUserComponent;
  let userService: UserService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        ListUserComponent,
        {
          provide: UserService,
        },
      ],
    });

    component = TestBed.inject(ListUserComponent);
    userService = TestBed.inject(UserService);
  });

  it("should not have user list after construction", () => {
    expect(component.users).toEqual([]);
  });

  it("should showing users after Angular calls ngOnInit with observable", () => {
    const dummyUsers = [
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
    component.ngOnInit();
    const userList = userService.getAll(1);
    userList.subscribe((users: any) => {
      component.users = users;
      expect(component.users).toEqual(dummyUsers);
      // expect(comp.tasks.length).toEqual(tasks.length);
    });
  });
});
```

> _Challenge Time_
>
> 1. Create unit testing `app/pages/users/components/form/form-user.component.spec.ts`

### PART Unit Testing For Service with HTTP Services

1. Create unit testing `app/pages/users/service/user.service.spec.ts`

```typescript
const page = 1;
const expectedUrl = `https://reqres.in/api/users`;

describe("UserServie", () => {
  let injector: TestBed;
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    injector = getTestBed();
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // HttpTestingController#verify to make sure that there are no outstanding requests:
  // afterEach(() => {
  //   httpMock.verify();
  // });

  it("should be created", inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe("#getUsers", () => {
    it("should return an Observable<Response<User[]>>", () => {
      const dummyUsers = [
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
      userService.getAll(1).subscribe((response: any) => {
        console.log(response);
        expect(response.length).toBe(6);
        expect(response).toEqual(dummyUsers);
      });
      const request = httpMock.expectOne(`${expectedUrl}?page=${page}`);
      request.flush(dummyUsers);
      expect(request.request.method).toBe("GET");
    });
  });
});
```

2. Open file `app/pages/users/model/user.model.ts` modify become :

```typescript
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  job?: string;
}
```

3. Open the file `app/pages/users/service/user.service.spec.ts` modify become :

```typescript
const page = 1;
const expectedUrl = `https://reqres.in/api/users`;

describe("UserServie", () => {
  let injector: TestBed;
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    injector = getTestBed();
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // HttpTestingController#verify to make sure that there are no outstanding requests:
  // afterEach(() => {
  //   httpMock.verify();
  // });

  it("should be created", inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe("#getUsers", () => {
    it("should return an Observable<Response<User[]>>", () => {
      const dummyUsers = [
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
      userService.getAll(1).subscribe((response: any) => {
        console.log(response);
        expect(response.length).toBe(6);
        expect(response).toEqual(dummyUsers);
      });
      const request = httpMock.expectOne(`${expectedUrl}?page=${page}`);
      request.flush(dummyUsers);
      expect(request.request.method).toBe("GET");
    });
  });

  describe("#saveUser", () => {
    it("should return an Observable<User>", () => {
      const dummyUser: User = {
        id: 0,
        first_name: "Jution",
        last_name: "Candra",
        email: "jutionck@mipdevp.com",
        avatar: "-",
        job: "Trainer",
      };
      userService.save(dummyUser).subscribe((response) => {
        expect(response.first_name).toBe("Jution");
      });
      const request = httpMock.expectOne(`${expectedUrl}`);
      expect(request.request.method).toBe("POST");
      request.flush(dummyUser);
    });
  });
});
```

### PART Code Coverage

> _Run with `npm run test:coverage` in terminal VS Code and Look at your root project now there is **coverage** directory, open `index.html` and running to browser._

### Challenge

> 1. Create unit test for login service to API
> 2. Completed all your component with unit test
