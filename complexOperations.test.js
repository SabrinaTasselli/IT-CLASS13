import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it("The email is not an string", () => {
      expect(complexOperations.checkEmail(5)).toBe("The email should be an string");
    });
    it("The email is an string", () => {
      expect(complexOperations.checkEmail("5")).toBe("The email is invalid");
    });
    it("the email should have @", () => {
      let email = "sabrinatasselli.com"
      expect(complexOperations.checkEmail(email)).toBe("The email is invalid");
    });
    it("the email should have .com", () => {
      let email = "sabrinatasselli@"
      expect(complexOperations.checkEmail(email)).toBe("The email is invalid");
    });
    it("the email should have @ and .com", () => {
      let email = "sabrinatasselli"
      expect(complexOperations.checkEmail(email)).toBe("The email is invalid");
    });
    it("the email should have @ and .com", () => {
      let email = "sabrinatasselli@gmail.com"
      expect(complexOperations.checkEmail(email)).toBe("The email is valid");
    });
  });

  describe('calculateArea', () => {
    it("calculate pentagon area", () => {
      expect(complexOperations.calculateArea("pentagon", 3, 5)).toBe("pentagon is not supported");
    });
    it("calculate square area with nro2 undefined", () => {
      expect(complexOperations.calculateArea("square", 3)).toBe(0);
    });
    it("calculate square area with nro1 as a string", () => {
      expect(complexOperations.calculateArea("square", "3", 5)).toBe("number1 and number2 should be numbers");
    });
    it("calculate square area with nro2 as a string", () => {
      expect(complexOperations.calculateArea("square", 3, "5")).toBe("number1 and number2 should be numbers");
    });
    it("calculate square area", () => {
      expect(complexOperations.calculateArea("square", 3, 5)).toBe(15);
    });
    it("calculate rectangle area", () => {
      expect(complexOperations.calculateArea("rectangle", 3, 10)).toBe(30);
    });
    it("calculate triangle area", () => {
      expect(complexOperations.calculateArea("triangle", 3, 5)).toBe(7.5);
    });
    it("calculate circle area", () => {
      expect(complexOperations.calculateArea("circle", 3)).toBe(28.274333882308138);
    });
  });

  describe('sumGratherThan', () => {
    it("paramets undefined", () => {
      expect(complexOperations.sumGratherThan()).toBe("The params should be numbers");
    });
    it("number 1 as a string", () => {
      expect(complexOperations.sumGratherThan("1", 4, 5)).toBe("The params should be numbers");
    });
    it("number 2 as a string", () => {
      expect(complexOperations.sumGratherThan(1, "4", 5)).toBe("The params should be numbers");
    });
    it("number 3 as a string", () => {
      expect(complexOperations.sumGratherThan(1, 4, "5")).toBe("The params should be numbers");
    });
    it("the sum number is grater than number 3", () => {
      expect(complexOperations.sumGratherThan(1, 4, 3)).toBe("5 is grather than 3");
    });
    it("the sum number is lower than number 3", () => {
      expect(complexOperations.sumGratherThan(1, 4, 6)).toBe("5 is less than 6");
    });
  });

  describe('intersectionBetweenArrays', () => {
    it("First param is not an arrays", () => {
      expect(complexOperations.intersectionBetweenArrays(2, [2,3,4])).toBe("The params should be arrays");
    });
    it("Second param is not an arrays", () => {
      expect(complexOperations.intersectionBetweenArrays([2,3,4], 2)).toBe("The params should be arrays");
    });
    it("There are not matching elements between arrays", () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3], [4,5,6])).toBe("There are not matching elements");
    });
    it("There are matching elements between arrays", () => {
      expect(complexOperations.intersectionBetweenArrays(["banana","apple","orange"], ["banana","pineapple","orange"])).toStrictEqual(["banana", "orange"]);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it("The first param is not an array", () => {
      expect(complexOperations.sortArrayOfObjectsByKey("firstname:sabrina", "firstname")).toBe("The first param should be an array");
    });
    it("The second param is not an string", () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{firstname:"sabrina", age:"33"}, {firstname:"rodrigo", age:"41"}], 33)).toBe("The second param should be an string");
    });
    it("Some elements in the array does not have the first name property", () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{firstname:"sabrina", age:"33"}, {firstname:"rodrigo", age:"41"}, {age:"4"}], "firstname")).toBe("Some elements in the array does not have the firstname property");
    });
    it("sort array by age", () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{firstname:"sabrina", age:"33"}, {firstname:"rodrigo", age:"41"}, {firstname:"milo", age:"04"}], "age")).toStrictEqual([{firstname:"milo", age:"04"}, {firstname:"sabrina", age:"33"}, {firstname:"rodrigo", age:"41"}]);
    });
    it("sort array by name", () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{firstname:"sabrina", age:"33"}, {firstname:"rodrigo", age:"41"}, {firstname:"milo", age:"04"}], "firstname")).toStrictEqual([{firstname:"milo", age:"04"}, {firstname:"rodrigo", age:"41"}, {firstname:"sabrina", age:"33"}]);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it("The param is not an array", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers("1,2,3,4,5,6")).toBe("The param should be an array");  
    });
    it("The array have numbers and strings", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(["1",2,3,4,5,6])).toBe("The array should have only numbers");  
    });
    it("The array not have integer numbers", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1.5,2.5,3.5,4.5,])).toStrictEqual({"even": 0, "odd": 4});  
    });
    it("The array have odds and even numbers", () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4,5,6])).toStrictEqual({"even": 3, "odd": 3});  
    });
  });
});  