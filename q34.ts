const favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Print pizza names
console.log('Pizza names:');
for (const pizza of favoritePizzas) {
  console.log(pizza);
}

// Print sentences about liking each pizza
console.log('\nSentences about liking each pizza:');
for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Print additional sentence about loving pizza
console.log('\nI really love pizza!');

