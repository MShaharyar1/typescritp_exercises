
function showMagicians(magicians: string[]): void {
    console.log('Magician names:');
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  // Array of magician names
  const magicianNames: string[] = ['David Copperfield', 'Harry Houdini', 'Luna Lovegood', 'Gandalf'];
  
  // Call the function to display magician names
  showMagicians(magicianNames);
  