// hours to seconds//
function convertHoursToSeconds(hours){
    return Math.floor(hours * 60 * 60);
}
console.log(convertHoursToSeconds(1));
console.log(convertHoursToSeconds(10));

//third one//
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

//fourth one//


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

//sixth one//
function checkvoteeligibility(age){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkvoteeligibility(18));
console.log(checkvoteeligibility(17));


//eigth one//
function numbersstring(string)
{
    len=string.length;
    for(i=0;i<len;i++){
        if(len%2==0){
            return "even";
        }
        else{
            return "odd";
        }
    } 
}
console.log(numbersstring("javascript"));
console.log(numbersstring("css"));

//nineth one//
/*function newword(string){
   var string = [" "];
   var res = string.substring(1); 
}
console.log(newword("uxfactory"));*/

//eleventh one//
function divisionofnumbers(a,b){
    if(a%b == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(divisionofnumbers(2,3));
console.log(divisionofnumbers(21,3));

//12 one//
function wholesquare(a,b){
    var add = a + b;
    Math.pow(add);
    
     if(add%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(wholesquare(2,3));
console.log(wholesquare(1,3));

//14 one//
function oppositenumber(a){
    if(a>=0){
       return a=a*-1;
    }
    else{
        return a;
    }
}
console.log(oppositenumber(3));
console.log(oppositenumber(7));

//15 one//
function biggestnumber(a,b,c){
    if(a>b && a>c){
        console.log(a);
    }
    else if(b>c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}
biggestnumber(2,1,6);

//first one///
function averageSum(array){
var sum=0;
var average;
for(i=0;i<array.length;i++){
    sum=sum+array[i];
    average=sum/array.length;
}
console.log(sum,average);
}
averageSum([10,20,30,40]);


//fourth one//
function myfun(string){
   var newstring=string.split("");
   var reversearray=newstring.reverse();
   var joinarray=reversearray.join("#");
   return joinarray;
}
console.log(myfun('HTML'));

//second one//
function multiplyByLength(arr){
    var somearray=[];
    for(i=0;i<arr.length;i++){
        newarray = arr[i] * arr.length;
        somearray.push(newarray);
    }
    return somearray;
}
console.log(multiplyByLength([2,3,1,0]));

//third one//
function multiplicationTable(n){
    var i=1;
    var n;
    /*for(i=1;i<11;i++){
        console.log(n ,"*", i ,"=", n*i);
    }*/
    while(i<11){
        
        console.log(n ,"*", i ,"=", n*i);
        i++;
    }
}
multiplicationTable(5);

//fifth one//
/*
function sumArray(arrays){
    //var somearray=[];
    sum=0;
    for(i=0;i<arrays.length;i++){
        sum+=arrays[i];
    }
    return sum;
}
console.log(sumArray([[1,2,3][1,3,4]]));*/

//sixth one//
function evenandoddarray(array){
    for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            console.log(array[i]);
        }
    }
}
evenandoddarray([12,5,7,10,1]);




















































