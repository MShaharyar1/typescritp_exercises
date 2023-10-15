function checkUsernames(currentUsers, newUsers) {
    var _loop_1 = function (newUser) {
        var isUsernameTaken = currentUsers.some(function (currentUsername) { return currentUsername.toLowerCase() === newUser.toLowerCase(); });
        if (isUsernameTaken) {
            console.log("Username '".concat(newUser, "' is not available. Please choose a different username."));
        }
        else {
            console.log("Username '".concat(newUser, "' is available."));
        }
    };
    for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
        var newUser = newUsers_1[_i];
        _loop_1(newUser);
    }
}
var currentUsers = ['John', 'Alice', 'Bob', 'Mary', 'Eve'];
var newUsers = ['Mike', 'John', 'Sarah', 'Alice', 'Mark'];
checkUsernames(currentUsers, newUsers);
