
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`make up meaningful message`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(input){
    super(`The model could not be coerced because ${input}`);
  }
}

module.exports = {
  CastError,
  ModelError
};