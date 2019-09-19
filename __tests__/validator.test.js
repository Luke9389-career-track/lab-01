const validator = require('../lib/validator.js');

describe('validator module', () => {

  const str = 'yes';
  const str2 = '3';
  const str3 = 'true';
  const str4 = 'false';
  const str5 = String(new Date);
  const num = 1;
  const arr = [];
  const obj = { x: 'y' };
  const func = () => { };
  const bool = false;
  const date = new Date;

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNumber(str)).toBeFalsy();
      expect(validator.isNumber(num)).toBeTruthy();
      expect(validator.isNumber(arr)).toBeFalsy();
      expect(validator.isNumber(obj)).toBeFalsy();
      expect(validator.isNumber(func)).toBeFalsy();
      expect(validator.isNumber(bool)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeTruthy();
      expect(validator.isArray(obj)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isObject(str)).toBeFalsy();
      expect(validator.isObject(num)).toBeFalsy();
      expect(validator.isObject(arr)).toBeFalsy();
      expect(validator.isObject(obj)).toBeTruthy();
      expect(validator.isObject(func)).toBeFalsy();
      expect(validator.isObject(bool)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isBoolean(str)).toBeFalsy();
      expect(validator.isBoolean(num)).toBeFalsy();
      expect(validator.isBoolean(arr)).toBeFalsy();
      expect(validator.isBoolean(obj)).toBeFalsy();
      expect(validator.isBoolean(func)).toBeFalsy();
      expect(validator.isBoolean(bool)).toBeTruthy();
    });

    it('functions', () => {
      expect(validator.isFunction(str)).toBeFalsy();
      expect(validator.isFunction(num)).toBeFalsy();
      expect(validator.isFunction(arr)).toBeFalsy();
      expect(validator.isFunction(obj)).toBeFalsy();
      expect(validator.isFunction(func)).toBeTruthy();
      expect(validator.isFunction(bool)).toBeFalsy();
    });
  });

  describe('performs array validation of', () => {

    const arrayOfStrings = ['a', 'b', 'c'];
    const arrayOfNumbers = [1, 2, 3];
    const arrayOfObjects = [{}, {}, {}];
    const arrayOfBooleans = [true, false, true];

    it('strings', () => {
      expect(validator.isArrayOfStrings(arrayOfStrings)).toBeTruthy();
      expect(validator.isArrayOfStrings(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfBooleans)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isArrayOfNumbers(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfNumbers)).toBeTruthy();
      expect(validator.isArrayOfNumbers(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfBooleans)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isArrayOfObjects(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfObjects)).toBeTruthy();
      expect(validator.isArrayOfObjects(arrayOfBooleans)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isArrayOfBooleans(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfBooleans)).toBeTruthy();
    });
  });

  describe('get validator for', () => {

    it('strings', () => {
      expect(validator.getValidator('string')).toBe(validator.isString);
    });

    it('numbers', () => {
      expect(validator.getValidator('number')).toBe(validator.isNumber);
    });

    it('arrays', () => {
      expect(validator.getValidator('array')).toBe(validator.isArray);
    });

    it('objects', () => {
      expect(validator.getValidator('object')).toBe(validator.isObject);
    });

    it('booleans', () => {
      expect(validator.getValidator('boolean')).toBe(validator.isBoolean);
    });

    it('functions', () => {
      expect(validator.getValidator('function')).toBe(validator.isFunction);
    });

    it('array of strings', () => {
      expect(validator.getValidator('functions')).toBe(validator.isArrayOfFunctions);
    });

    it('array of numbers', () => {
      expect(validator.getValidator('numbers')).toBe(validator.isArrayOfNumbers);
    });

    it('array of objects', () => {
      expect(validator.getValidator('objects')).toBe(validator.isArrayOfObjects);
    });

    it('array of booleans', () => {
      expect(validator.getValidator('booleans')).toBe(validator.isArrayOfBooleans);
    });

  });

  describe('performs casting to', () => {
    describe('strings', () => {
      it('from strings', () => {
        expect(validator.castToString(str)).toBe(str);
      });
      it('from numbers', () => {
        expect(validator.castToString(num)).toBe('1');
      });
      it('from booleans', () => {
        expect(validator.castToString(bool)).toBe('false');
      });
      it('from dates', () => {
        expect(validator.castToString(date)).toMatch(/2019/);
      });
      it('from arrays', () => {
        expect(() => {
          validator.castToString(arr);
        }).toThrow(validator.TypeError);
      });
      it('from objects', () => {
        expect(() => {
          validator.castToString(obj);
        }).toThrow(validator.TypeError);
      });
    });
  });
  describe('performs casting to', () => {
    describe('numbers', () => {
      it('from non-number strings', () => {
        expect(() => {
          validator.castToNumber(str);
        }).toThrow(validator.TypeError);
      });
      it('from number strings', () => {
        expect(validator.castToNumber(str2)).toBe(3);
      });
      it('from numbers', () => {
        expect(validator.castToNumber(num)).toBe(1);
      });
      it('from booleans', () => {
        expect(() => {
          validator.castToNumber(bool);
        }).toThrow(validator.TypeError);
      });
      it('from dates', () => {
        expect(() => {
          validator.castToNumber(date);
        }).toThrow(validator.TypeError);
      });
      it('from arrays', () => {
        expect(() => {
          validator.castToNumber(arr);
        }).toThrow(validator.TypeError);
      });
      it('from objects', () => {
        expect(() => {
          validator.castToNumber(obj);
        }).toThrow(validator.TypeError);
      });
    });
  });
  describe('performs casting to', () => {
    describe('booleans', () => {
      it('from non-bool-string', () => {
        expect(() => {
          validator.castToBoolean(str);
        }).toThrow(validator.TypeError);
      });
      it('from true-string', () => {
        expect(validator.castToBoolean(str3)).toBe(true);
      });
      it('from false-string', () => {
        expect(validator.castToBoolean(str4)).toBe(false);
      });
      it('from dates', () => {
        expect(() => {
          validator.castToBoolean(date);
        }).toThrow(validator.TypeError);
      });
      it('from arrays', () => {
        expect(() => {
          validator.castToBoolean(arr);
        }).toThrow(validator.TypeError);
      });
      it('from objects', () => {
        expect(() => {
          validator.castToBoolean(obj);
        }).toThrow(validator.TypeError);
      });
    });
  });
  describe('performs casting to', () => {
    describe('dates', () => {
      it('from string', () => {
        expect(validator.castToDate(str5)).toMatch(/2019/);
      });
      it('from number', () => {
        expect(() => {
          validator.castToDate(num);
        }).toThrow(validator.TypeError);
      });
      it('from boolean', () => {
        expect(() => {
          validator.castToDate(bool);
        }).toThrow(validator.TypeError);
      });
      it('from dates', () => {
        expect(validator.castToDate(String(date))).toMatch(/2019/);
      });
      it('from arrays', () => {
        expect(() => {
          validator.castToDate(arr);
        }).toThrow(validator.TypeError);
      });
      it('from objects', () => {
        expect(() => {
          validator.castToDate(obj);
        }).toThrow(validator.TypeError);
      });
    });
  });
});