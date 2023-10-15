function describeCity(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York'); // Defaults to 'Unknown' country
describeCity('Tokyo', 'Japan');
