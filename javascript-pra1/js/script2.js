function demo(){

    var somenumber=document.getElementById('age').value;

    if(somenumber % 2 == 0){
        arr[i]=somenumber;
        ++i;
        document.getElementById("print").innerHTML=[arr];
    }
    
    /*console.log(somenumber);
    if(somenumber >= 18){
        console.log("elgible for vote");
    }
    else{
        console.log("not eligible");
    }*/

//one//
var arr=[10,20,30,40,50,7];
for(i=0;i<arr.length;i++)
{
    if(arr[i]>arr.length){
      arr.length=arr[i];

    }
}
console.log(arr.length);

//two//
var arr=[20,30,40,10];
console.log("max:",Math.max(...arr));
/*
//pattern//
var arr=[1,2,3,4]
for(i=4;i>=0;i--)
{
    var str="";
    for(j=1; j<=i;j++){
        str+=i;
    }
    console.log(j);

}

/*
class rectangle {
    constructor(a,b){
        this.length = a;
        this.breadth = b;
    }
    area(){
        return this.lenth *  this.breadth;
    } 
}
*/

///string //

function funName(a, b) {
    var x = a.indexOf(b);
        console.log(x);
        if(x == 0){
            return true;
        }
        else{
            return false;
        }
}
var obj = funName('my name is ram', 'java');
console.log(obj);


//using temp variable:swap two numbers//
var num1 = 10;
var num2 = 20;
var temp;

temp = num1;
num1 = num2;
num2 = temp;

console.log(num1 , num2);

//without using temp variable//
let a = 5;
let b = 6;

//[a, b] = [b, a];
//console.log(a, b);

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

//no of occuranances//
var arr = [1, 2, 2, 3, 4, 2];
var n = 2; 
var count = 0;
for(var i = 0; i <= arr.length; i++){
    if(arr[i] == n){
        count++;
    }
}
console.log('count:',count);


//string//
function myfunction(a,b){
   var x = a.indexOf(b);
   console.log(x);
   if( x != -1){
    return true;
    }
    else{
    return false;
    }
}
var string = myfunction("It is string9", "string");
console.log(string);

}

//even numbers upto given no//
var n = 6;
for(i = 1; i <= n; i++)
{
    if(i%2 == 0){
        console.log(i);
    }
}
//patterns//
var n = 4;
for(i = 1; i <= n; i++){
    for(j = 1; j <= i; j++){
        console.log(j);
 
    }
}


var fruits1={ 
    type:"A",
    name:"bananna,apple,pineapple",
};
var fruits2={
    type:"B",
    name:"custeredapple,guava,lemon",
};
var fruits3={
    type:"C",
    name:"apricot,blackberry,coconut",
}; 
  
function typeoffruits(type)
{
    if(type === "c")
    {
        return fruits3.name;
    }
    else if(type ==="B")
    {
        return fruits2.name;
    }
    else if(type === "A")
    {
        return fruits1.name;
    }
    else {
      return "not found";
    }
}
console.log(typeoffruits("c"));


function fruittype(type){
switch(type){
    case'A':
    return "fruits1.name";
    break;
    case'B':
    return "fruits2.name";
    break;
    case'C':
    return "fruits3.name";
    break;
    default:
        return"no available fruits";
}
  }
  console.log(typeoffruits('A'));


  function maxNum(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>c && b>a){
        return b;
    }
    else{
        return c;
    }
}
console.log(maxNum(12,6,5));

var arr1 = [1,2,3];
var arr2 = [1,3,4];
if(arr1==arr2)
{
    console.log(true);
}
else{
    console.log(false);
}


function oddNum(a){
var n;
    for(n=1; n<=a; n++){
        if(n%2==0){
        console.log(n);
        }
    }
}
oddNum(4);
//var position = oddNum(4);
//console.log(position);


// hours to seconds//
function convertHoursToSeconds(hours){
    return Math.floor(hours * 60 * 60);
}
console.log(convertHoursToSeconds(1));
console.log(convertHoursToSeconds(10));



function myFun(num1,num2,operator){
    return num1 + num2;
}
var operator ="/";
switch(operator){
    case "+" :
       console.log("addition of two numbers", ('num1' + 'num2'));
       break;
    case "-" :
        console.log("subtraction of two numbers", ('num1' - 'num2'));
        break;
    case "*" :
        console.log("multiplication of two numbers", ('num1' * 'num2'));
        break;
    case "/" :
        console.log("division of two numbers", ('num1' / 'num2'));
        break;
    default:
        console.log("nothing")  ;      
}
myFun(10,20,'+');


////////third one//////

function division(a)
{
        if(a%3 == 0){
            return true;
        }
        else{
            return false;
        }
    }
console.log(division(9));
console.log(division(13));

/////fourth one////

///fifth one/////

function printOdd(n){
    for(i=1;i<=n;i++){
        if(i%2==1){
        console.log(i);
    }
}
}
printOdd(5);
//console.log(printOdd(5));

/*function palindrome(str)
{
    const len = string.length;
    for(i=0;i<len/2;i++){
        if(string[i]!==string[len-1-i]){
            return 'it is not palindrome';
        }
    }
    return "it is palindrome";
}
const string = prompt("enter string: ")
console.log(palindrome("madam"));*/

/*
function Even(){
    let num = [1,2,3,4,5,6];
    for(i=0;i<=6;i++){
        if(num[i]%2===0){
          console.log(num[i]); 
        }
    }
}
Even();


function evenNumArray(array){
    var arr = [4,5,67,8,2,8,60];
    var even = arr.filter(number => number % 2 == 0);
    console.log("even numbers:"+ even);
    //console.log("odd numbers:"+ even);

}
evenNumArray();


function factorialize(num) {

    return (num * (num - 1));
    
  }
  console.log(factorialize(5));*/

/*
  function duplicate(arr)//[2,3,2,6,6,6]
{
    duplicateArray=[];
    for(i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            var storedValue=findElement(arr[j],duplicateArray);
            if(storedValue==false)
            {
                if(arr[i]==arr[j])
                {
                    duplicateArray.push(arr[j]);
                }
            }
        }
    }
    console.log(duplicateArray);
}
function findElement(value,duplicateArray)
{
    for(var k=0; k<duplicateArray.length; k++)
    {
        if(value==duplicateArray[k])
        {
            return true;
        }
    }
    return false;
}
duplicate([2,3,2,6,6,6]);*/

/*function getDuplicate(arr){
    var sortedarray = arr.slice().sort;
    var results = [];
    for(i=0; i< sortedarray.length-1; i++){
        if(sortedarray[i+1] === sortedarray[i]){
            results.push(sortedarray[i]);
        }
    }
    return results;
}
var numbers = [2,3,2,6,6,6];
console.log(getDuplicate(numbers));*/

/*function operat(a,b,c)
{
    var re;
    if(c=="+")
    {
        re=a+b;
        return re;
    }
}
console.log(operat(2,3,"+"));*/
/*
var n=3;
for(i=n;i>0;i--)
{
    var str="";
    for(j=i;j>=1;j--)
    {
       str=str+j;
    }
    console.log(str);
}


function factorial(n){
    if(n==1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(5));


function factorial(n) {
    var fact = 1;
    for(var i = n; i >=1; i--){
        fact = fact * i;
    }
    console.log(fact);  
}
factorial(5);*/

var numbersArray=[[2,[4,5],6,7],[5,8,[9,4,30]]];
var sum=0;
//console.log(numbersArray.length);
//var firstArray=numbersArray[0];
//console.log(firstArray[0]);
//console.log(numbersArray[0][1].length);
console.log(numbersArray[1][2][2]);

for(var i=1;i<numbersArray.length;i++){
    sum=0;
    for(var j=0;j<numbersArray[i][2].length;j++){
        
        sum=sum+numbersArray[i][2][j];
    }
    console.log(sum);
}


















