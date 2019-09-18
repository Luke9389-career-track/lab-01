const SchemaValidator = require('../lib/Schema');
const errors = require('../lib/Errors');

describe('Schema', () => {

  const personSchema = {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    married: { type: 'boolean' },
    kids: { type: 'number' },
  };

  const schemaValidator = new SchemaValidator(personSchema);

  const validModel = {
    firstName: 'Linda',
    lastName: 'Woida',
    married: true,
    kids: 1,
  };

  const semiValidModel = {
    firstName: 'Linda',
    lastName: 'Woida',
    married: 'true',
    kids: '1',
  };

  const invalidModel = {
    firstName: [1, 2, 3, 4],
    lastName: 'Woida',
    married: [1, 2, 3, 4],
    kids: 1,
  };

  it('validates a correct model', () => {
    expect(schemaValidator.validate(validModel)).toEqual(validModel);
  });

  it('validates a semi-correct model', () => {
    expect(schemaValidator.validate(semiValidModel)).toEqual(validModel);
  });
  
  it('throws on invalid model', () => {
    expect(()=>{
      schemaValidator.validate(invalidModel);
    }).toThrow(errors.ModelError);
  });

  // more test cases...
});