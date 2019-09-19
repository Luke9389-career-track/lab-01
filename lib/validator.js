
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  if(isNaN(input)) {
    return false;
  } else {
    return typeof input === 'number';
  }
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = input => {
  return input instanceof Array;
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isObject = input => {
  if(String(input) === '[object Object]') {
    return true;
  } else { return false; }
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = input => {
  return typeof input === 'function';
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = (input) => {
  return input.every(isString);
};

/**
 * Is this an array of numbers?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfNumbers = (input) => {
  return input.every(isNumber);
};

/**
 * Is this an array of objects?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfObjects = (input) => {
  return input.every(isObject);
};

/**
 * Is this an array of booleans?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfBooleans = (input) => {
  return input.every(isBoolean);
};

/**
 * Based on a set of rules, what is correct validator?
 * Pass the validator a string that matches a key in the validatorList.
 * @param string
 * @returns {boolean}
 */
const getValidator = (input) => {
  const validatorList = {
    string: isString,
    number: isNumber,
    array: isArray,
    object: isObject,
    boolean: isBoolean,
    function: isFunction,
    strings: isArrayOfStrings,
    numbers: isArrayOfNumbers,
    objects: isArrayOfObjects,
    booleans: isArrayOfBooleans
  };
  return validatorList[input];
};

class TypeError extends Error {
  constructor(input) {
    super(`input could not be coerced to type: ${input}`);
  }
}

/**
 * Cast to a string or throw an error.
 * @param input
 * @returns {string}
 */
const castToString = input => {
  if(isArray(input) || isObject(input)) {
    throw new TypeError('string');
  }
  else { return String(input); }
};


/**
 * Cast to a string or throw an error.
 * @param input
 * @returns {string}
 */
const castToNumber = input => {
  if(isNumber(input)) {
    return input;
  } else if(isString(input)) {
    const temp = Number(input);
    if(isNumber(temp)) {
      return temp;
    } else { throw new TypeError('number'); }
  } else { throw new TypeError('number'); }
};

/**
 * Cast to a string or throw an error.
 * @param input
 * @returns {string}
 */
const castToBoolean = input => {
  if(isBoolean(input)) {
    return input;
  } 
  else if(isString(input)) {
    if(input.toLowerCase() === 'true') { return true; }
    else if(input.toLowerCase() === 'false') { return false; }
    else { throw new TypeError('boolean'); }
  }
  else { throw new TypeError('boolean'); }
};

/**
 * Cast to a date or throw an error.
 * @param input
 * @returns {string}
 */
const castToDate = input => {
  if(input instanceof Date) {
    return input;
  } else if(isString(input)) {
    if(input.match(/Pacific Daylight Time/)) {
      return input;
    } else { throw new TypeError('date'); }
  }
  else { throw new TypeError('date'); }
};

/**
 * Based on a set of rules, what is correct caster?
 * Pass the caster a string that matches a key in the casterList.
 * @param string
 * @returns {boolean}
 */
const getCaster = (input) => {
  const casterList = {
    string: castToString,
    number: castToNumber,
    boolean: castToBoolean,
    date: castToDate,
  };
  return casterList[input];
};

module.exports = {
  isString,
  isNumber,
  isArray,
  isObject,
  isFunction,
  isBoolean,

  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,

  getValidator,

  castToString,
  castToNumber,
  castToBoolean,
  castToDate,

  getCaster,

  TypeError
};


