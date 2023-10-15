function makeShirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`You have created a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Create a large shirt with the default message
  makeShirt();
  
  // Create a medium shirt with the default message
  makeShirt('Medium');
  
  // Create a small shirt with a custom message
  makeShirt('Small', 'Custom message for a small shirt');
  