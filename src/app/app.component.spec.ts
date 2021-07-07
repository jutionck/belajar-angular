describe('The Common Matcher', () => {
  //nested describe
  describe('#toBe', () => {
    it('check value by toBe matcher', () => {
      const a = true;
      expect(a).toBe(true); // success | positive case
      expect(a).not.toBe(false); // success | negative case
    });
  });

  describe('#toEqual', () => {
    const person = [
      {
        name: 'Nova',
        age: 22,
        address: 'Jakarta'
      }
    ];
    it('check value toEqual person', () => {
      // expect(person.name).toEqual('Nova');
      // expect(person.age).toEqual(22);

      // length => array
      expect(person.length).toEqual(1);
      expect(person.length).toBe(1);
    });
  });
});

describe('The Truthiness Matcher', () => {
  describe('#toBeNull', () => {
    const number = null;
    it('test value null', () => {
      expect(number).toBeNull();
    });
  });

  describe('#toBeDefined', () => {
    const number = null;
    it('test value toBeDefined', () => {
      expect(number).toBeDefined();
    });
  });

  describe('#toBeUnDefined', () => {
    let number;
    it('test value toUnBeDefined', () => {
      expect(number).toBeUndefined();
    });
  });

  describe('#toBeTruthy', () => {
    const number = 10; //true
    const number2 = null // false
    it('test value toBeTruthy', () => {
      expect(number).toBeTruthy();
    });
  });

  describe('#toBeFalsy', () => {
    const number = 10; //true
    const number2 = null // false
    it('test value toBeFalsy', () => {
      expect(number2).toBeFalsy();
    });
  });

});

describe('The Number Matcher', () => {
  const value = 2 + 2;
  describe('#toBeGreaterThan', () => {
    it('two plus two', () => {
      expect(value).toBeGreaterThan(3);
    });
  });
  describe('#toBeGreaterThanOrEqual', () => {
    it('two plus two', () => {
      expect(value).toBeGreaterThanOrEqual(4);
    });
  })
  describe('#toBeLessThan', () => {
    it('two plus two', () => {
      expect(value).toBeLessThan(5);
    });
  });
  describe('#toBeLessThanOrEqual', () => {
    it('two plus two', () => {
      expect(value).toBeLessThanOrEqual(6);
    });
  });
  it('toBe & toEqual', () => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  describe('#toBeCloseTo', () => {
    const value = 0.1 + 0.2;
    it('toCloseTo', () => {
      expect(value).toBeCloseTo(0.3);
    });
  });
});

// expect(actual).matcher(expected)

describe('The String Matcher', () => {
  // toMatch(/../)

  describe('#toMacth', () => {
    it('there is a "camp" in Enigmacamp', () => {
      expect('Enigmacamp').toMatch(/camp/);
    });
  });
});

describe('The Array Matcher', () => {
  it('the program language list has Go on it', () => {
    const programmingLaguange = ['Go', 'Java', 'Kotlin', 'Angular'];
    expect(programmingLaguange).toContain('Go');
  });
});

describe('A Spy', () => {

  let foo, bar = null;

  beforeEach(() => {
    foo = {
      setBar: (value) => {
        bar = value
      }
    };
    // syp on
    spyOn(foo, 'setBar');
    foo.setBar(123);
    foo.setBar(456, 'another arg');
  });

  it('tracks that the spy was called', () => {
    expect(foo.setBar).toHaveBeenCalled();
  });

  it("tracks that the spy was called x times", function () {
    expect(foo.setBar).toHaveBeenCalledTimes(2);
  });

  it("tracks all the arguments of its calls", function () {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another arg');
  });
});

describe('A spy, when created manually', () => {

  let whatAmI;

  beforeEach(() => {
    whatAmI = jasmine.createSpy('whatAmI');

    whatAmI('I', 'am', 'a', 'spy');
  });

  it('tracks that the spy was called', () => {
    expect(whatAmI).toHaveBeenCalled();
  })
})
