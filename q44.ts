function orderSandwich(...items: string[]): void {
    console.log('Sandwich order summary:');
    console.log('Items: ', items.join(', '));
  }
  
  // Call the function with different numbers of arguments to order sandwiches
  orderSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
  orderSandwich('Turkey', 'Bacon', 'Avocado');
  orderSandwich('Tuna', 'Lettuce', 'Onion', 'Pickles', 'Mayonnaise');
  