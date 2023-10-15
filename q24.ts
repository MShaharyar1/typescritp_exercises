//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
let dark_web1:string="01"
console.log("Is darkweb safe?");
console.log(dark_web1=="0");
//• Tests using the lower case function
let bla:string="MARKET"
let ack:string=bla.toLowerCase();
console.log("Will it print this in lower case: ");
console.log(ack=="market")
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a_num:number= 25;
console.log("If the number is less than 25 ")
console.log(a_num<25);
console.log("if number is greater than 25  show ");
console.log(a_num>25);
//• Tests using "and" and "or" operators
//for and opperator ;
let type=true;
let typb=false;
let typec=type&&typb;
console.log(type +"first statemant" + typb+"2nd statement " + typec+"by using AND ");
let typeb=false;
typec=type||typeb;
console.log(type +"first statemant" + typeb+"2nd statement " + typec+"by using OR  ");

//• Test whether an item is in a array
let arraay1=[2, 3, 4];
let not_array="hellow world";
console.log(Array.isArray(arraay1));

//• Test whether an item is not in a array
console.log (Array.isArray(not_array))