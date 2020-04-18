function showMessage(message){
    //alert(message)
    console.log(message)
}
//Declaring variable
let price = 10
showMessage(price);

//Data type of variable
showMessage(typeof price);

//precedence left to right
//^,*,/,%,+,-
showMessage(3*2+4);   

//printing variable's value with backticks``
let name='Rupa'
showMessage(`Hello ${name}`)

//concatenate string
showMessage(name + 'kumari')

//uppercase
showMessage(name.toUpperCase())

//substring
showMessage(name.substring(1))

//length
showMessage(name.length)

//type convertion
let x=10
showMessage(typeof x.toString()) //string

//string to num
x=Number.parseFloat("10.3")
showMessage(typeof x) //number

//NAN
x=Number.parseFloat("A10.3")
showMessage(x) //NAN not a number if at start of num is char

//End of num with string
x=Number.parseFloat("10.3A")
showMessage(typeof x) //number

//boolean
x=true
showMessage(x)

//negate
x=!true
showMessage(x)

//null and undefined
x=null

//object
let person={first:'rupa',last:'kumari'}
showMessage(person.first)

//conditional
if(true){
    showMessage('true')
}

//truthy and falsy
/* truthy"any string num
   falsy empty string,null,undefined,false,NAN
*/

//condition : toFixed to roundoff and + to convert string type of it to integer
if(+(1.1+1.3).toFixed(2) !== 2.4){
    showMessage('true')
}

//if -else if- else
let age=20
if(age>20){
    showMessage('true')
}
else if (age <= 20){
    showMessage('false')
}
else{
    showMessage('else part')
}

//== and === comparison
if(1 == "1"){
    showMessage('true') // returns true
}
else{
    showMessage('false')
}

// ===
if(1 === "1"){
    showMessage('true') 
}
else{
    showMessage('false')// return false
}

//ternary operator (condition)? true : false
let p = 10;
(p > 10)? showMessage('true') : showMessage('false');

//for loops
for(let i=0;i<5;i++){
    console.log(i)
}

//while loop
let i=4
while(i >0){
    console.log(i);
    i--;
}

//do-while
i=4;
do{
    console.log(i)
    i--;
}while(i>0);

//function
function logMessage(){
    console.log('Function msg')
}
logMessage();

//function expression
let myFunction=function loggingfunction(){
    console.log('here is a message')
}
myFunction();

//passing arguments to function
let myFunction2=function loggingfunction(message,firstname){
    console.log('here is a message')
}
myFunction2('hello','how are you');

//return value to function
function getSecretCode(value){
    let code=value*42
    return code
}
let secretCode=getSecretCode(2)
showMessage(secretCode) //84

//function scope
let key=42
function getSecretCode2(value){
    let keyGenerator=function(){
    let key=12
    console.log('in key generator',key) //12
    return key
    }
    let code=value*keyGenerator();
    console.log('in key secretGenerator',key) //42
    return code
}
secretCode=getSecretCode2(2)
showMessage(secretCode)

//Objects
let mySymbol=Symbol();
person={
    name:'john',
    age:32,
    partTime:false,
    [mySymbol]:'SecretMessage'
};
person['age']=33
// or person.age=33
showMessage(person.age)//33

//object methods
person={
    name:'john',
    age:32,
    partTime:false,
    showInfo:function(realAge){
        showMessage(this.name + 'is' +realAge)
    }
};
showMessage(typeof person.showInfo);// function

//passing objects to function
person={
    name:'john',
    age:32,
    partTime:false
};
function incrementAge(p){
    p.age++
}
incrementAge(person);
showMessage(person.age) //33

//built in date object
let now=new Date()
showMessage(now.toDateString())//Sat Apr 18 2020

//math object
showMessage(Math.abs(-42))

//string object
let s='hello'
showMessage(s.charAt(0)) //h

//DOM:Document Object Model :message_d from index.html h1 tag id
function printHeader(message){
    document.getElementById('message_id').textContent=message
}
printHeader('cool')

//styling DOM object
let header=document.getElementById('message_id')
header.style.color='red'
header.style.fontWeight='300'

//accessing button in DOM
let btn=document.getElementById('review')

btn.addEventListener('click',function(){
    console.log('click')
})

//hiding and showing dom objects
btn=document.getElementById('review')

btn.addEventListener('click',function(){
    const review=document.getElementById('review_id')
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none')
        btn.textContent='CLOSE REVIEW'
    }
    else{
        review.classList.add('d-none')
        btn.textContent='SEE REVIEW'
    }
});

//array
let values=[1,2,3]
//or let values=Array.of(1,2,3)
console.log(values)
console.log(Array.isArray(values))//true
console.log(values[0])

//add element to array
values.push(4)
console.log(values)

//pop element
last=values.pop() //last elemet i.e 4
console.log(last)

//first ele
first=values.shift() //1
console.log(first)

//unshift to add elemeny in front
values.unshift('hello')
console.log(values)  //['hello',2,3]

//slice and splice
/* slice: no effect on original array splice:effect on original array */

//slice
values=['a','b','c','d','e']
const newValues=values.slice(1,4) //b.c,d
console.log(newValues)

//splice
nvalues=['a','b','c','d','e']
nvalues.splice(2,2) //(index of ele to delete,num of ele to delete)
console.log(nvalues) //[a,b,e]

//add element using splice
nvalues=['a','b','c','d','e']
nvalues.splice(2,1,'hello') 
console.log(nvalues) // [a,b,hello,d,e]

//indexOf
const pvalues=['a','b','c']
indx =pvalues.indexOf('b') //1
console.log(indx)

//filter function
const set=pvalues.filter(function(item){
    return item > 'b';
});
console.log(set) //c

//find function
const tvalues=['a','bbb','c']
const found=tvalues.find(function(item){
    return item.length > 1
});
console.log(found) //bbb

//foreach 
const lvalues=['a','b','c']
lvalues.forEach(function(item){
    console.log(item)
})

//use at start of js file to use strict mode: to handle undefined variables
'use strict';






