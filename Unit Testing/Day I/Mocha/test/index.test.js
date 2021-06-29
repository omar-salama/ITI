const { capitalizeText, createArray } = require("../index");
const expect = require("chai").expect;
const assert = require("chai").assert;
const should = require("chai").should();

//**  first problem
describe("testing capitalizeText function", () => {
  it("should return a string", () => {
    expect(capitalizeText("someText")).to.be.a("string");
    // assert.isString(capitalizeText("someText"))
  });
  it("should return the string capitalized", () => {
    expect(capitalizeText("someText")).to.equal("SOMETEXT");
    // assert.equal(capitalizeText("someText"), "SOMETEXT")
  });
  it("should throw TypeError if a number is passed", () => {
    expect(() => {
      capitalizeText(12);
    }).to.throw(TypeError, "parameter should be string");
  });
});

//** second problem
describe("testing createArray function", () => {
  let i = 1;
  beforeEach(() => {
    return i++;
  });
  it("function should return an array", () => {
    expect(createArray(4)).to.be.an("array");
  });
  it("passing 3 params should return array of length 3 && test if it includes 1", () => {
    createArray(i)
      .should.be.an("array")
      .have.lengthOf(i)
      .that.includes(i - 1);
  });
  it("pending");
});
