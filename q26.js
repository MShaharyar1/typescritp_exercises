// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var alien_color1 = "green";
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color1 == "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien_color1 === "green") {
    console.log("the player just earned 10 points.");
}
// • Write one version of this program that runs the if block and another that runs the else block.
if (alien_color1 == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log(" the player just earned 10 points.");
}
