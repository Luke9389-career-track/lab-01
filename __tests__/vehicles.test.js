const Vehicles = require('../lib/vehicles');

describe('Vehicles', () => {

  describe('Car', () => {

    const car = new Vehicles.Car('foo');

    it(`Car has 4 wheels`, () => {
      expect(car.wheels).toEqual(4);
    });

    it(`Car can drive`, () => {
      expect(car.drive()).toBeTruthy();
    });

    it(`Car can stop`, () => {
      expect(car.stop()).toBeTruthy();
    });

    it(`Car cannot do a wheelie`, () => {
      expect(car.wheelie).toBeUndefined();
    });
  });

  describe(`Motorcycle`, () => {
    const motorcycle = new Vehicles.Motorcycle('foo');

    it(`Motorcycle has 2 wheels`, () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it(`Motorcycle can drive`, () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it(`Motorcycle can stop`, () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it(`Motorcycle cannot do a wheelie`, () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });
  });
});
