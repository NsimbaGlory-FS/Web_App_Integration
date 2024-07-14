const creditCard = require(".");

describe("Obscure a credit card number function Test", function () {
  test("As a user I want to test positive for a credit card function.", function () {
    console.log(creditCard("123456789012"));
    expect(creditCard("123456789012")).toEqual(true);
  });
});

test("As a user I want to test negative for a credit card function.", () => {
  expect(creditCard("ABC9012")).toEqual(false);
});

test("As a user I enter correct information and did not received incorrect output.", function () {
  expect(creditCard("123456789012")).not.toEqual(false);
});
