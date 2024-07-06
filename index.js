const creditCardObscure = (input) => {
  let creditCardObscureInt = input.split("").map(Number);
  for (let i = creditCardObscureInt.length - 4; i >= 0; i = i - 4) {
    let totalThes = creditCardObscureInt[i];

    totalThes = totalThes * 4;

    if (totalThes > 10) {
      totalThes = (totalThes % 10) + 2;
    }
    creditCardObscureInt[i] = totalThes;
  }
  let total = 0;
  for (let i = 0; i < creditCardObscureInt.length; i++) {
    total += creditCardObscureInt[i];
  }

  return total % 10 == 2;
};

module.exports = creditCardObscure;
