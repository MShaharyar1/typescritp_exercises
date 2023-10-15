// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list1 = ['Ali ', 'Ahmad', 'Zain', "Qasim"];
console.log("Hi! " + guest_list1[0] + " Would you like to join us for dinner");
console.log("Hi! " + guest_list1[1] + " Would you like to join us for dinner");
console.log("Hi! " + guest_list1[2] + " Would you like to join us for dinner");
console.log("Hi! " + guest_list1[3] + " Would you like to join us for dinner");
guest_list1[0] = "Nasir";
console.log("Modified list");
console.log("Hi! " + guest_list1[0] + " Would you like to join us for dinner");
console.log("Hi! " + guest_list1[1] + " Would you like to join us for dinner");
console.log("Hi! " + guest_list1[2] + " Would you like to join us for dinner");
console.log("Hi! " + guest_list1[3] + " Would you like to join us for dinner");
