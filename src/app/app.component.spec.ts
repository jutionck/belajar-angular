import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { AppComponent } from "./app.component";

// Common Matcher
describe('A suite is just a function', () => {
  it('and so is a spec', () => {
    const a = true;
    expect(a).toBe(true);
  });
});

describe('The "toBe" matcher compares with ===', () => {
  it('and has a positive case', () => {
    expect(true).toBe(true);
  });

  it('and has a negative case', () => {
    expect(false).not.toBe(true)
  });
});

describe('The "toBeEqual" matcher object assignment', () => {

  const person = {
    name: "Jution",
    age: 25,
    address: "Jakarta Barat",
  };

  it('object assignment', () => {
    expect(person).toEqual({
      name: "Jution",
      age: 25,
      address: "Jakarta Barat",
    })
  });
});

// Other Matcher
describe('The "toBeCloseTo" matcher specified precision of the expected value', () => {
  const a = 0.2;
  const b = 0.1;
  const c = a + b; //0.30000000000000004
  const expected = 0.3;
  // it('adding works sanely with simple decimals', () => {
  //   expect(c).toBe(expected); // fail
  // });

  // solution use toBeCloseTo
  it('adding works sanely with simple decimals', () => {
    expect(c).toBeCloseTo(expected, 5); // fail
  });
});


// Truthiness Matcher
describe('The Truthiness', () => {
  it('test null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('test zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

describe('The toBeDefined and toBeUndefined check that a variable is not undefined', () => {

  let number = 10;
  let number2;

  it('there is a number variable has initialize "10" ', () => {
    expect(number).toBeDefined();
  });

  it('there is a number2 variable has not initialize', () => {
    // expect(number2).toBeUndefined();
    expect(number2).not.toBeDefined();
  });

  describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>
    let component: AppComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent]
      }).compileComponents();
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });

    it('defined component variable in AppComponent', () => {
      expect(component).toBeDefined();
    });
  });
});

describe('The toBeTrue, toBeFalse, toBeTruthy', () => {

  const a: boolean = true;
  const b: boolean = false;

  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('check variable a & b and function isValid', () => {
    expect(a).toBeTrue();
    expect(b).toBeFalse();
    expect(component.isValid).toBeTruthy();
  });
});

describe('The toBeFalsy and toBeTruthy', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('have a function numberCheck, with arg 5', () => {
    // expect(component.numberCheck(5)).toBeFalsy(); //fail
    expect(component.numberCheck(5)).toBeTruthy();
  });

  it('have a function numberCheck, with arg 10', () => {
    expect(component.numberCheck(10)).toBeFalsy();
    // expect(component.numberCheck(10)).toBeTruthy(); //fail
  });
});

// Number Matcher
describe('The Number Matcher', () => {
  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
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

// String Matcher
describe('The String Macther', () => {

  it('there is no 1 in 2345', () => {
    expect('2345').not.toMatch(/1/);
  });
  it('but there is a "camp" in Enigmacamp', () => {
    expect('Enigmacamp').toMatch(/camp/); //case sensitive
  });
});

// Array Matcher
describe('The Array Matcher', () => {
  const programLanguages = [
    'Java',
    'JavaScript',
    'Kotlin',
    'TypeScript',
    'Go',
    'Python',
    'Ruby',
    'R',
    'Dart',
  ];
  it('the program language list has Go on it', () => {
    expect(programLanguages).toContain('Go');
  });
});

// Asynchronous 
describe('The Testing Asynchronous Code', () => {

  describe('#callbacks', () => {
    function fetchData(callback) {
      setTimeout(() => {
        callback('Enigmacamp');
      }, 1000);
    }

    it('the data is Enigmacamp', () => {
      function callback(data) {
        expect(data).toBe('Enigmacamp');
      }
      fetchData(callback);
    });

    // solution
    it('the data is Enigmacamp with done', (done) => {
      function callback(data) {
        expect(data).toBe('Enigmacamp');
        done();
      }
      fetchData(callback);
    });
  });

  describe('#promise', () => {
    function fetchData() {
      return new Promise((resolve) => {
        resolve('Enigmacamp');
      })
    };

    it('the data is Enigmacamp', () => {
      return fetchData().then(data => {
        expect(data).toBe('Enigmacamp');
      });
    });
  });

  describe('#async/await', () => {
    function fetchData() {
      return new Promise((resolve, reject) => {
        try {
          resolve('Enigmacamp');
        } catch {
          reject('error')
        }
      })
    };

    it('the data is Enigmacmap', async () => {
      await fetchData().then(data => {
        expect(data).toBe('Enigmacamp');
      })
    });
  });
});