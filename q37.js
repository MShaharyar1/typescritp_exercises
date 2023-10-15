function makeShirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("You have created a ".concat(size, "-sized shirt with the message: \"").concat(message, "\"."));
}
// Create a large shirt with the default message
makeShirt();
// Create a medium shirt with the default message
makeShirt('Medium');
// Create a small shirt with a custom message
makeShirt('Small', 'Custom message for a small shirt');
