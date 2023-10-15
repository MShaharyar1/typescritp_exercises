interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow additional properties
  }
  
  function createCar(manufacturer: string, model: string, ...options: any[]): Car {
    const car: Car = {
      manufacturer,
      model,
    };
  
    // Assign additional properties to the car object
    for (let i = 0; i < options.length; i += 2) {
      const key = options[i];
      const value = options[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the function with the required information and additional properties
  const carInfo = createCar('Toyota', 'Camry', 'color', 'blue', 'year', 2022);
  
  // Print the resulting car object
  console.log(carInfo);
  