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
var magicianNames1 = ['David Copperfield', 'Harry Houdini', 'Luna Lovegood', 'Gandalf'];
// Modify the magician names to include 'the Great'
var greatMagicians = makeGreat(magicianNames1);
// Call the function to display modified magician names
showMagicians(greatMagicians);
