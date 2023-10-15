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
  const magicianNames1: string[] = ['David Copperfield', 'Harry Houdini', 'Luna Lovegood', 'Gandalf'];
  
  // Modify the magician names to include 'the Great'
  const greatMagicians = makeGreat(magicianNames1);
  
  // Call the function to display modified magician names
  showMagicians(greatMagicians);
  