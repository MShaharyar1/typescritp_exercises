// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var num = [1, 2, 3];
var get_num = num[3];
console.log("the intentional error will be " + get_num);
//correction 
var get_org = num[2];
console.log("there is the correct array format: " + get_org);
