//named function//
function msg(){
    console.log("named function");
}
msg();

//function//
function myfun(a,b){
    return a*b;
}
value=myfun(20,3);
console.log(value);
 
//closure//
var n = 10;
function sum(){
    console.log(n+n);
}
sum();

//display specific character//
var str ="javascript";
console.log(str.charAt(0));

//if-else//
var a=10;
if(a%2==0){
    console.log("even number");
}
else{
    console.log("odd number");
}

//if-elseif//
var a=25;
if(a==10){
    console.log("a is equal to 10");
}
else if(a==20){
    console.log("a is equal to 20");
}
else if(a==25){
    console.log("a is equal to 25");
}
else{
    console.log("not equal to 25");
}

//obj ex//
var car = {
    name:"bmw",
    color:"white",
};
console.log(car.color,car["name"]);

//array ex//
var arr=["a","b","c"];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}  
 
//another example//

var arr=[1,2,3];
//var somenum=[];
for(i=0;i<arr.length;i++){
    /*somenum.push(arr[i]*10);
    console.log(somenum);
    ------------------------*/
    /*console.log(arr[i]*10);
    -------------------------*/
console.log("max:",Math.max(...arr));


//multiplication//
var mul=5;
for(i=1;i<=10;i++){
    console.log(mul,"*",i,"=",mul*i);
}

//for each//
var color=["red","green","blue"];
console.log(color);

color.forEach(val => {
    val+=2;
    console.log(val);
});

//map//
let caps=color.map(colors => colors.toUpperCase());
    console.log(caps);

let num=[1,2,3,4];//not using for statement//
let somenum=num.map(numbs => numbs * 10);
console.log(somenum);

//array helper functions//

let nums = [1,4,30,2,100,6];
console.log(nums);
console.log(nums.sort());


//for each//
let numbers = [1,2,3,4,5];
sum = 0;
numbers.forEach((num) => {
    sum += num;
});
console.log(sum);



//-------------------------//

let colors = ["red" , "green" ,"blue"];
colors.forEach(val => {
    val += 2;
console.log(val);
});

//map//

let capscolor = colors.map((color) => color.toUpperCase());
console.log(capscolor);

//------------//

let array = [40,50,60];
let result = array.map(num => num *2);
console.log(result);
/*array.forEach((num) => {
    //num *= 2;
    //console.log(num);
});*/

//find//

var people = [
    { name: "amar" , age:35 },
    { name: "bob" , age:15 },
    { name: "rahul" , age:25 },
    { name: "tej" , age:30 },
];
 
 var one = people.find(person => person.age > 15 && person.age < 30);
 console.log(one);

//every//
 var two = people.every(person => person.age > 40  && person.age < 30);
 console.log(two);

//some//
let three = people.some((person) => person.age > 15 && person.age < 30);
console.log(three);


//filter//
var arraynumbers = [3,40,2,20,7,1,40,30];
var lessthan20 = arraynumbers.filter(res => res < 20);
console.log(lessthan20);

var voteeligible = [
    { name : "ram", age : 17 },
    { name : "sitha", age : 18 },
    { name : "anee", age : 20 },
    { name : "raj", age : 30 },
];
var eligiblity = voteeligible.filter(person => person.age >= 18);
console.log("eligible for vote: ${eligiblity}");
}
//reduce
var number = [17, 5, 20];

function myFunc(val, num) {
  return val - num;
}
console.log(number.reduce(myFunc));

