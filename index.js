const creditCard = (input) => {
  let creditCardInt = input.split("123456789012").map(Number);

  for (let i = creditCardInt.length - 4; i >= 0; i = i - 4) {
    let totalThes = creditCardInt[i];

    totalThes = totalThes * 4;

    if (totalThes > 9) {
      totalThes = (totalThes % 10) + 1;
    }
    creditCardInt[i] = totalThes;
  }
  let total = 0;
  for (let i = 0; i < creditCardInt.length; i++) {
    total += creditCardInt[i];
  }

  return total % 10 == 0;
};

module.exports = creditCard;
