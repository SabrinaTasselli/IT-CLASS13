import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Unit Tests', () => {
    describe('checkEmail', () => {
        beforeEach(() => {
            jest.restoreAllMocks();
        });
        it("The email should be an string", () => {
            jest.spyOn(basicOperations, "isString").mockReturnValue(false);
              expect(complexOperations.checkEmail("sabrinatasselli@gmail.com")).toBe("The email should be an string");
        });
        it("The email is an string, the email is not valid", () => {
            jest.spyOn(basicOperations, "isString").mockReturnValue(true);
            jest.spyOn(basicOperations, "validateEmail").mockReturnValue(false);
              expect(complexOperations.checkEmail("sabrinatasselli@gmail.com")).toBe("The email is invalid");
        });
        it("The email is an string, the email is valid", () => {
          jest.spyOn(basicOperations, "isString").mockReturnValue(true);
          jest.spyOn(basicOperations, "validateEmail").mockReturnValue(true);
            expect(complexOperations.checkEmail("sabrinatasselli@gmail.com")).toBe("The email is valid");
        });
    });
  });

describe('complexOperation - Unit Tests', () => {
  describe('calculateArea', () => {
      beforeEach(() => {
          jest.restoreAllMocks();
      });
      it("The figure is not supported", () => {
        jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(false);
          expect(complexOperations.calculateArea("pentagon")).toBe("pentagon is not supported");
      });
      it("nro 1 and nro 2 are numbers", () => {
        jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(false);
            expect(complexOperations.calculateArea("5")).toBe("number1 and number2 should be numbers");
      });
      it("calculate square area", () => {
        jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
        jest.spyOn(basicOperations, "multip").mockReturnValue(15);
          expect(complexOperations.calculateArea("square")).toBe(15);
      });
      it("calculate rectangle area", () => {
        jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
        jest.spyOn(basicOperations, "multip").mockReturnValue(15);
          expect(complexOperations.calculateArea("rectangle")).toBe(15);
      });
      it("calculate triangle area", () => {
        jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
        jest.spyOn(basicOperations, "multip").mockReturnValue(15);
        jest.spyOn(basicOperations, "division").mockReturnValue(7.5);
        expect(complexOperations.calculateArea("triangle")).toBe(7.5);
      });
      it("calculate circle area", () => {
        jest.spyOn(basicOperations, "isSupportedFigure").mockReturnValue(true);
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
        jest.spyOn(basicOperations, "exponent").mockReturnValue(64);
        //const radio = 8;
        expect(complexOperations.calculateArea("circle")).toBe(201.06192982974676);
      });
  });
});

describe('complexOperation - Unit Tests', () => {
  describe('sumGratherThan', () => {
      beforeEach(() => {
          jest.restoreAllMocks();
      });
      it("The parameters are not numbers", () => {
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(false);
          expect(complexOperations.sumGratherThan("cinco")).toBe("The params should be numbers");
      });
      it("the sum number is grater than number 3", () => {
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
        jest.spyOn(basicOperations, "sum").mockReturnValue(10);
        expect(complexOperations.sumGratherThan(1, 1, 3)).toBe("10 is grather than 3");
      });
      it("the sum number is lower than number 3", () => {
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
        jest.spyOn(basicOperations, "sum").mockReturnValue(10);
        expect(complexOperations.sumGratherThan(1, 1, 20)).toBe("10 is less than 20");
      });
});
});
describe('complexOperation - Unit Tests', () => {
  describe('intersectionBetweenArrays', () => {
      beforeEach(() => {
          jest.restoreAllMocks();
      });
      it("the parameters are not arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(false);
          expect(complexOperations. intersectionBetweenArrays(2, 3)).toBe("The params should be arrays");
      });
      it("There are not matching elements between arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
        jest.spyOn(basicOperations, "arrayIntersection").mockReturnValue("");
        expect(complexOperations.intersectionBetweenArrays([1,2,3], [4,5,6])).toBe("There are not matching elements");
      });
      it("There are matching elements between arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
        jest.spyOn(basicOperations, "arrayIntersection").mockReturnValue(["banana"]);
        expect(complexOperations.intersectionBetweenArrays(["banana","apple"], ["banana","pineapple"])).toStrictEqual(["banana"]);
      });
  });
});

describe('complexOperation - Unit Tests', () => {
  describe('sortArrayOfObjectsByKey', () => {
      beforeEach(() => {
          jest.restoreAllMocks();
      });
      it("the parameters are not arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(false);
          expect(complexOperations.sortArrayOfObjectsByKey(2, 3)).toBe("The first param should be an array");
      });
      it("the parameters are not arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
        jest.spyOn(basicOperations, "isString").mockReturnValue(false);
          expect(complexOperations.sortArrayOfObjectsByKey(2, "firstname")).toBe("The second param should be an string");
      });
      it("the parameters are not arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
        jest.spyOn(basicOperations, "isString").mockReturnValue(true);
        jest.spyOn(basicOperations, "arrayElementsAreObjectWithKey").mockReturnValue(false);
          expect(complexOperations.sortArrayOfObjectsByKey([{firstname:"sabrina", age:"33"}, {firstname:"rodrigo", age:"41"}, {age:"4"}], "firstname")).toBe("Some elements in the array does not have the firstname property");
      });
      it("the parameters are not arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
        jest.spyOn(basicOperations, "isString").mockReturnValue(true);
        jest.spyOn(basicOperations, "arrayElementsAreObjectWithKey").mockReturnValue([{firstname:"sabrina", age:"33"}, {firstname:"rodrigo", age:"41"}, {firstname:"milo", age:"04"}], "age");
          expect(complexOperations.sortArrayOfObjectsByKey(1, "age")).toStrictEqual([{firstname:"milo", age:"04"}, {firstname:"sabrina", age:"33"}, {firstname:"rodrigo", age:"41"}], "firstname");
      });
    });
  });

describe('complexOperation - Unit Tests', () => {
  describe('numberOfOddAndEvenNumbers', () => {
      beforeEach(() => {
          jest.restoreAllMocks();
      });
      it("the parameter is not arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(false);
          expect(complexOperations.numberOfOddAndEvenNumbers(2)).toBe("The param should be an array");
      });
      it("the parameter is not arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(false);
          expect(complexOperations.numberOfOddAndEvenNumbers(2)).toBe("The array should have only numbers");
      });
      it("the parameter is not arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
        jest.spyOn(basicOperations, "getOddNumbersFromArray").mockReturnValue([3,5]);
          expect(complexOperations.numberOfOddAndEvenNumbers(2, 1)).toBe({"even": 0, "odd": 2});
      });
      it("the parameter is not arrays", () => {
        jest.spyOn(basicOperations, "isArray").mockReturnValue(true);
        jest.spyOn(basicOperations, "isNumber").mockReturnValue(true);
        jest.spyOn(basicOperations, "getEvenNumbersFromArray").mockReturnValue([2,5]);
          expect(complexOperations.numberOfOddAndEvenNumbers(0, 1)).toBe({"even": 1, "odd": 1});
      });
    });
  });  