function showMagicians(magicians: string[]): void {
    console.log('Magician names:');
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
  }
  
  // Array of magician names
  const magicianNames_11: string[] = ['David Copperfield', 'Harry Houdini', 'Luna Lovegood', 'Gandalf'];
  
  // Make a copy of the original array
  const originalMagicians = magicianNames_11.slice();
  
  // Modify the magician names to include 'the Great' and store in a new array
  const greatMagicians11 = makeGreat(originalMagicians);
  
  // Call the function to display the original magician names
  console.log('Original Magicians:');
  showMagicians(magicianNames);
  
  // Call the function to display the modified magician names
  console.log('\nModified Magicians:');
  showMagicians(greatMagicians11);
  