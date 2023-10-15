function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwich order summary:');
    console.log('Items: ', items.join(', '));
}
// Call the function with different numbers of arguments to order sandwiches
orderSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
orderSandwich('Turkey', 'Bacon', 'Avocado');
orderSandwich('Tuna', 'Lettuce', 'Onion', 'Pickles', 'Mayonnaise');
