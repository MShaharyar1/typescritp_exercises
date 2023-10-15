function showMagicians(magicians) {
    console.log('Magician names:');
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Array of magician names
var magicianNames_11 = ['David Copperfield', 'Harry Houdini', 'Luna Lovegood', 'Gandalf'];
// Make a copy of the original array
var originalMagicians = magicianNames_11.slice();
// Modify the magician names to include 'the Great' and store in a new array
var greatMagicians11 = makeGreat(originalMagicians);
// Call the function to display the original magician names
console.log('Original Magicians:');
showMagicians(magicianNames);
// Call the function to display the modified magician names
console.log('\nModified Magicians:');
showMagicians(greatMagicians11);
