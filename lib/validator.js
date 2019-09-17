
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
  return typeof input === 'number';
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
  if(isArray(input)) {
    return false;
  } else {
    return typeof input === 'object';
  }
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
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
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

  getValidator
};


