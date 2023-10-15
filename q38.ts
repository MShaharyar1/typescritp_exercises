function describeCity(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for different cities
  describeCity('Karachi', 'Pakistan');
  describeCity('New York');  // Defaults to 'Unknown' country
  describeCity('Tokyo', 'Japan');
  