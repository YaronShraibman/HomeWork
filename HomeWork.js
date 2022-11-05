function pizzaOrder(drink, topping, toppingType, order) {
  drink = prompt("Please Choose a Drink: soft drink / alcohol / no drinks ?");
  topping = prompt("Please Choose a Topping:");
  toppingType = prompt(
    "Would you like the topping all over the pizza or only half? :"
  );
  order = alert(
    "You ordered a pizza. The drink you choose is: " +
      drink +
      ". The additional topping will be " +
      topping +
      " for " +
      toppingType
  );
}

function burgerOrder(cookSize, cheese, toppingType, order) {
  cookSize = prompt("Please Choose a coocking size: M/MW/WD");
  cheese = prompt("would you like to add cheese?");
  if ((cheese = "yes")) {
    cheese = "with cheese";
  } else {
    cheese = "without cheese";
  }
  order = alert("Your ordered a " + cookSize + " burger " + cheese);
}
