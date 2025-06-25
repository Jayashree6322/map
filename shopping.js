const items = [
    { name:"Apple",category:"fruit",price:100,quantity:2 },
    { name:"Banana",category:"fruit",price:80,quantity:4 },
    { name:"Carrot",category:"vegetable",price:60,quantity:3 },
    { name:"Tomato",category:"vegetable",price:40,quantity:5 },
    { name:"Notebook",category:"stationery",price:10,quantity:8 },
    { name:"Pen",category:"stationery",price:5,quantity:20 },
    { name:"Eraser",category:"stationery",price:4,quantity:10 },
    { name:"Orange",category:"fruit",price:50,quantity:6 },
    { name:"Potato",category:"vegetable",price:20,quantity:7 },
    { name:"Scale",category:"stationery",price:15,quantity:9 }
];

const itemDiscounts = {
    Apple:5,
    Tomato:6,
    Notebook:10
};

const categoryDiscounts = {
    fruit:2,
    vegetable:3,
    stationery:5
};

const taxes = {
    fruit:4,
    vegetable:7,
    stationery:9
};

const result = items.map((item) => {
   const total = item.price*item.quantity;
   const specialDiscount = itemDiscounts[item.name] ? itemDiscounts[item.name]/100 : categoryDiscounts[item.category]/100;
   const finalAmount = total - specialDiscount;
   const tax = finalAmount+taxes[item.category]/100;

return {
    name:item.name,
    totalPrice:total,
    finalPrice:finalAmount.toFixed(2),
    taxApplied:tax.toFixed(2)
};
}); 



console.table(result);






