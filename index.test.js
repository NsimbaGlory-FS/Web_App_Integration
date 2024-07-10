describe("Obscure a credit card number function Test", () => {
  test("As a user I want to test positive for a credit card function.", () => {
    expect(creditCard([123456789012])).toEqual();
  });
});

test("As a user I want to test negative for a credit card function.", () => {
  expect(creditCard("********9012")).toEqual();
});
