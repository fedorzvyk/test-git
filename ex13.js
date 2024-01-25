const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let area = 0;
  data.shops.forEach(shop => {
    area += shop.width * shop.length;
    // console.log(area);
  });
  const needBudget = area * data.height * data.moneyPer1m3;
  if (needBudget <= data.budget) {
    console.log('Бюджета достаточно');
    return 'Бюджета достаточно';
  } else {
    console.log('Бюджета недостаточно');
    return 'Бюджета недостаточно';
  }
}

isBudgetEnough(shoppingMallData);
