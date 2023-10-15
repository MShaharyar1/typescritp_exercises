// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let fav_loc:string[]=["London", "Melburn", "San Wagas ", "Tokyo"]
// • Print your array in its original order.
console.log(fav_loc)
// • Print your array in alphabetical order without modifying the actual list.
let fav_loc1:string[]=fav_loc.sort()
console.log("Sorted Array"+ fav_loc1)
// • Show that your array is still in its original order by printing it.
console.log("Orignal Array" + fav_loc)
// • Print your array in reverse alphabetical order without changing the order of the original list.
let fav_loc2=fav_loc.sort((a,b)=>b.localeCompare(a))
console.log( "Reversed Array "+  fav_loc2)
// • Show that your array is still in its original order by printing it again.
console.log("Orignal array " + fav_loc)
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(fav_loc2)
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
let fav_loc3:string[]=fav_loc2.sort((a,b)=> b.localeCompare(a))
console.log("Reversed Order Array " + fav_loc3)
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let fav_loc4:string[]=fav_loc1.sort((a,b)=>(b).localeCompare(a))
console.log("Reverwed alphabatical order array  " + fav_loc4)
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let fav_loc5:string[]=fav_loc4.sort((a,b)=>b.localeCompare(a))
console.log("Reversed alphabatical order array  " + fav_loc5)
