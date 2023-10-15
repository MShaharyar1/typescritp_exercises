function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Assign additional properties to the car object
    for (var i = 0; i < options.length; i += 2) {
        var key = options[i];
        var value = options[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with the required information and additional properties
var carInfo = createCar('Toyota', 'Camry', 'color', 'blue', 'year', 2022);
// Print the resulting car object
console.log(carInfo);
