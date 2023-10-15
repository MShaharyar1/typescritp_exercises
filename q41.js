function showMagicians(magicians) {
    console.log('Magician names:');
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician names
var magicianNames = ['David Copperfield', 'Harry Houdini', 'Luna Lovegood', 'Gandalf'];
// Call the function to display magician names
showMagicians(magicianNames);
