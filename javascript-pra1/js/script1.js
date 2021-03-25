// function //
function add(a , b){
    var add = a + b;
   return add;
}
var value = add(10,20);
console.log(value);

// object //
var car = {
   color:"white",
   model:"audi",
   wheel:4,
};
console.log(car.color);

// datatypes //
var x = 10;
var y ="doe john"
var a = true;
var b = null;
console.log(typeof (x));
console.log(typeof (y));
console.log(typeof (a));
console.log(typeof (b));

  //fun ex//
function myfun(a,b)
{
   return a * b;
}
var value = myfun(10 , 20);
console.log(value);
 
//object ex//
var person = {
   name : "john",
   age : 20,
   gender : "Male",
};
console.log(person.age , person["gender"]);

//nested object//
var car = 
{
    engine : {
       length : 10,
      diameter :100,
      },
      model : "audi",
      color : "white",
};
  var length = 50;

console.log(car["color"]);
console.log(car.engine["length"]);
console.log(length);
console.log(car.engine[length]);

//arrays//
var array =[ 1 , "some" , 2, true]
console.log(array[0]);
console.log(array);
console.log(array[1]);

//events//
function dosearch() {
var val = document.getElementById('num').value;
console.log("susmi said:", val);
}

//if else//
var age = 18;
if (age >= 18)
{
   console.log("eligible for vote");
}
else{
   console.log("not eligible");
}

//example//

var dog = {
   legs : 4
};

var snake = {
   legs : 0
};

if(dog.legs == 4)
{
   console.log("dog can walk");
}
else{
   console.log("dog cannot walk");
}
if(snake.legs == 0)
{
   console.log("snake can walk");
}
else{
   console.log("snake cannot walk");
}

//array concat with two arrays()//

var arr1 = [1 , 2 , 3];
var arr2 = ['a' , 'b' , 'c'];
console.log(arr1.concat(arr2));

//concat three arrays//

var num1 = [1 , 2 , 3];
var num2 = [4 , 5 , 6];
var num3 = [7 , 8 , 9];
console.log(num1.concat(num2 , num3));

var num1 = [1 , 2 , 3];
var num2 = [4 , 5 , 6];
var num3 = [7 , 8 , 9];
numbers = num1.concat(num2 , num3);
console.log(numbers);

//concat values into an array//

var words = ['a' , 'b' ,'c'];
var numbers =words.concat( 1 ,2 ,3);
console.log(numbers);

//concat nested arrays//
  
var num1 = [1];
var num2 = [2 , [3] , [4] , 5];
var numbers = num1.concat(num2);
console.log(numbers);

//array reverse//
 
var num = [1 , 2, 3];
console.log(num.reverse());

//strings concat//

var str1 = 'Hello';
var str2 = 'World';
console.log(str1.concat(str2));
console.log(str2.concat(str1));


var word = 'Hello' ;
console.log(word.concat('good morning',' Have a nice day.'));

//strings sub() , sup()//

var superText = 'superscript';
var subText = 'subscript';
console.log('This is a ' + 'superText'.sup());
console.log('This is a ' + 'subText'.sub());

var superText = 'hello';
var subText = 'world';
console.log('This is a ' + 'hello'.sup());
console.log('This is a ' + 'world'.sub());

//string tolowercase()//

var sentence = 'There Is a Box On Table';
console.log(sentence.toLowerCase());

//switch expressions//

var expr = "python";
switch (expr)
{
   case "c":
       console.log("c progrmming language");
       break;
   case "python":
   case "JavaScript":
       console.log(" scripting langauge");
      break;
   default:
       console.log("doesnt match");
}
 //using for loop//

for(i=0; i<5; i++)
{
   console.log(i);
}

//using for loop an array//
  var arr = [10,20,30,40,50,60,70];
 for(i= 0; i < arr.length; i++)
 {
    if(arr[i]<50){
    console.log (arr[i], "is less than 50");
    }
    else{
       console.log(arr[i], "is grater than 50");
    }
 }

//print table//
var val= 2;
for(i=1; i<=10; i+=2)
{
   console.log(val+ '*' + i + '=' + val*i);
}

//while statement//
var sum = 0;
var i = 0;
while (i <= 10) {
   sum += i;
   console.log(sum);
   i++;

}






