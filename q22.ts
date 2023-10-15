// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let num:number []=[1 ,2 ,3 ];
let get_num:number=num[3]
console.log("the intentional error will be " + get_num);
//correction 
let get_org:number=num[2];
console.log("there is the correct array format: " + get_org);
