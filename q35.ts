const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print animal names
console.log('Animal names:');
for (const animal of animals) {
  console.log(animal);
}

// Print statements about each animal
console.log('\nStatements about each animal:');
for (const animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print additional sentence about what these animals have in common
console.log('\nAny of these animals would make a great pet!');
