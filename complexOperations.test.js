import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('first test for checkEmail', () => {
      test("the e-mail can not be empty", () => {
        expect(complexOperations.checkEmail(email)).not.toBe(" ");
      });
    });
  });

  decsribe('calculateArea', () => {
    it('first test for calculateArea', () => {

    });
  });

  decsribe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {

    });
  });

  decsribe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  decsribe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  decsribe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      
    });
  });
});