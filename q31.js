var users = [];
function handleUsers() {
    if (users.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        console.log("Existing users:", users.map(function (user) { return user.username; }).join(", "));
        // Remove all usernames from the array
        users.length = 0;
        console.log("All usernames removed.");
    }
}
handleUsers();
