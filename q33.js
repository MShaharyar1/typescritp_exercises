function getOrdinal(number) {
    if (number === 1) {
        return "".concat(number, "st");
    }
    else if (number === 2) {
        return "".concat(number, "nd");
    }
    else if (number === 3) {
        return "".concat(number, "rd");
    }
    else {
        return "".concat(number, "th");
    }
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinal = getOrdinal(number);
    console.log(ordinal);
}
