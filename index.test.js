describe("Obscure a credit card number function Test", () => {
  test("As a user I want to test positive for a credit card function.", () => {
    expect(creditCardObscure("123456789012"), "########9012").toEqual(9);
  });
});

test("As a user I want to test negative for a credit card function.", () => {
  expect(creditCardObscure("9012"), "#9012").toEqual(4);
});
