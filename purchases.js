var purchases = [
    {
      item: 'Carrot',
      units: 20,
    },
    {
      item: 'Apple',
      units: 2,
    },
    {
      item: 'Guava',
      units: 1,
    },
  ];
  var rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
  };
  
  var discounts = {
    // values are in percentages.
    Apple: 10,
  };
  
  var taxes = {
    // values are in percentages.
    Carrot: 5,
    Guava: 10,
    Apple: 5,
  };

  const totalAmount = purchases.map((products) => ({
    ...products,
    rate:rates[products.item],
    discount : discounts[products.item] * (rates[products.item])/100 || 0,
    tax : rates[products.item] * ((taxes[products.item])/100) || 0
  }));

  const sumTotal = totalAmount.map(({rate,discount,tax,units}) => rate-discount+tax*units );

  const finalAmount = sumTotal.reduce((acc, sum) => acc+sum ,0);

  console.log(finalAmount);
  



  


