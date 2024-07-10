const creditCard = require(".");

describe("Obscure a credit card number function Test", function () {
  test("As a user I want to test positive for a credit card function.", function () {
    expect.assertEquals(creditCard("123456789012"));
  });
});

test("As a user I want to test negative for a credit card function.", () => {
  expect.assertEquals(creditCard("********9012"));
});
