var favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Print pizza names
console.log('Pizza names:');
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Print sentences about liking each pizza
console.log('\nSentences about liking each pizza:');
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print additional sentence about loving pizza
console.log('\nI really love pizza!');
