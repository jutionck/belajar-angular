# Introduction Angular Unit Testing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

### Part Introduction Matcher

1. Common Matchers

   - `toEqual`
   - `toBe`

2. Truthiness
   - `toBeNull` matches only `null`
   - `toBeUndefined` matches only `undefined`
   - `toBeDefined` is the opposite of `toBeUndefined`
   - `toBeTruthy` matches anything that an if statement treats as `true`
   - `toBeFalsy` matches anything that an if statement treats as `false`

### PART Practice Matcher

Open `app.component.spec.ts` :

#### Common Matcher

1. `toBe()` :
   > _expect the actual value to be === to the expected value. Example : `expect(thing).toBe(realThing);`_

```typescript
describe("A suite is just a function", () => {
  it("and so is a spec", () => {
    const a = true;
    expect(a).toBe(true);
  });
});
```

2. `not: matchers` :
   > _expect the negative case_

```typescript
describe('The "toBe" matcher compares with ===', () => {
  it("and has a positive case", () => {
    expect(true).toBe(true);
  });

  it("and has a negative case", () => {
    expect(false).not.toBe(true);
  });
});
```

3. `toEqual()` :

   > _Use .toEqual to compare recursively all properties of object instances (also known as "deep" equality). It calls Object.is to compare primitive values, which is even better for testing than === strict equality operator._

```typescript
describe('The "toBeEqual" matcher object assignment', () => {
  const person = {
    name: "Jution",
    age: 25,
    address: "Jakarta Barat",
  };

  it("object assignment", () => {
    expect(person).toEqual({
      name: "Jution",
      age: 25,
      address: "Jakarta Barat",
    });
  });
});
```

#### Truthiness Matcher

Example :

```typescript
describe("The Truthiness", () => {
  it("test null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it("test zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});
```

#### Number Matcher

Example :

```typescript
describe("The Number Matcher", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // menjadi lebih besar dari
    expect(value).toBeGreaterThanOrEqual(3.5); // menjadi lebih besar dari atau setara
    expect(value).toBeLessThan(5); // menjadi lebih kurang dari
    expect(value).toBeLessThanOrEqual(4.5); // menjadi kurang dari atau setara
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
});
```

#### String Matcher

Example :

```typescript
describe("The String Macther", () => {
  it("there is no 1 in 2345", () => {
    expect("2345").not.toMatch(/1/);
  });
  it('but there is a "camp" in Enigmacamp', () => {
    expect("Enigmacamp").toMatch(/camp/); //case sensitive
  });
});
```

#### Array Matcher

Example :

```typescript
describe("The Array Matcher", () => {
  const programLanguages = [
    "Java",
    "JavaScript",
    "Kotlin",
    "TypeScript",
    "Go",
    "Python",
    "Ruby",
    "R",
    "Dart",
  ];
  it("the program language list has Go on it", () => {
    expect(programLanguages).toContain("Go");
  });
});
```

### Part Testing Asynchronous Code

Example :

```typescript
describe("The Testing Asynchronous Code", () => {
  describe("#callbacks", () => {
    function fetchData(callback) {
      setTimeout(() => {
        callback("Enigmacamp");
      }, 1000);
    }

    it("the data is Enigmacamp", () => {
      function callback(data) {
        expect(data).toBe("Enigmacamp");
      }
      fetchData(callback);
    });

    // solution
    it("the data is Enigmacamp with done", (done) => {
      function callback(data) {
        expect(data).toBe("Enigmacamp");
        done();
      }
      fetchData(callback);
    });
  });

  describe("#promise", () => {
    function fetchData() {
      return new Promise((resolve) => {
        resolve("Enigmacamp");
      });
    }

    it("the data is Enigmacamp", () => {
      return fetchData().then((data) => {
        expect(data).toBe("Enigmacamp");
      });
    });
  });

  // chalenge change with async/await
});
```

> _Challenge, change code using async/await_

> Jawaban :

```typescript
describe("#async/await", () => {
  function fetchData() {
    return new Promise((resolve, reject) => {
      try {
        resolve("Enigmacamp");
      } catch {
        reject("error");
      }
    });
  }

  it("the data is Enigmacmap", async () => {
    await fetchData().then((data) => {
      expect(data).toBe("Enigmacamp");
    });
  });
});
```

### Part More Than Practice

1. `toBeDefined() and toBeUndefined()` :
   > _Use .toBeDefined to check that a variable is not undefined._

```typescript
describe("The toBeDefined and toBeUndefined check that a variable is not undefined", () => {
  let number = 10;
  let number2;

  it('there is a number variable has initialize "10" ', () => {
    expect(number).toBeDefined();
  });

  it("there is a number2 variable has not initialize", () => {
    // expect(number2).toBeUndefined();
    expect(number2).not.toBeDefined();
  });

  describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });

    it("defined component variable in AppComponent", () => {
      expect(component).toBeDefined();
    });
  });
});
```

2. `toBeTrue(), toBeFalse()` :
   > _handles both a primitive boolean type, use .toBeTrue if value to be true, use .toBeFalse if value to be false and use .toBeTruthy when you don't care what a value is, you just want to ensure a value is true in a boolean context._

Open `app.component.ts` and add script :

```typescript
isValid(): boolean {
    return true;
  }
```

```typescript
describe("The toBeTrue, toBeFalse, toBeTruthy", () => {
  const a: boolean = true;
  const b: boolean = false;

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it("check variable a & b and function isValid", () => {
    expect(a).toBeTrue();
    expect(b).toBeFalse();
    expect(component.isValid).toBeTruthy();
  });
});
```

3. `toBeFalsy() :`
   > _Use .toBeFalsy when you don't care what a value is, you just want to ensure a value is false in a boolean context_

Open `app.component.ts` and add script :

```typescript
numberCheck(a: number): boolean {
    if (a < 10) {
      return true
    }
    else {
      return false
    }
  }
```

```typescript
describe("The toBeFalsy and toBeTruthy", () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it("have a function numberCheck, with arg 5", () => {
    // expect(component.numberCheck(5)).toBeFalsy(); //fail
    expect(component.numberCheck(5)).toBeTruthy();
  });

  it("have a function numberCheck, with arg 10", () => {
    expect(component.numberCheck(10)).toBeFalsy();
    // expect(component.numberCheck(10)).toBeTruthy(); //fail
  });
});
```

#### Others Matcher

1. `toBeCloseTo(expected, precisionopt)` :
   > _expect the actual value to be within a specified precision of the expected value._

```typescript
describe('The "toBeCloseTo" matcher specified precision of the expected value', () => {
  const a = 0.2;
  const b = 0.1;
  const c = a + b; //0.30000000000000004
  const expected = 0.3;
  it("adding works sanely with simple decimals", () => {
    expect(c).toBe(expected); // fail
  });

  // solution use toBeCloseTo
  it("adding works sanely with simple decimals", () => {
    expect(c).toBeCloseTo(expected, 5); // fail
  });
});
```

> _**toBeCloseTo(expected, precision)** default **precison** is 2_
