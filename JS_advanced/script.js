/* function constructor */
//function constructor
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job : 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function(){
    //     console.log(2016 - this.yearOfBirth);
    // }
}

//adding function to prototype property
Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
}

//adding attributes to protype property
Person.prototype.lastname = 'Smith';

//instantiate object 
var john = new Person('John', 1990, 'teacher');
john.calculateAge();


var jane = new Person('Jane', 1969, 'designer');
var mark= new Person('Mark', 1948, 'retired');

jane.calculateAge();
mark.calculateAge();

console.log(john.lastname);
console.log(jane.lastname);
console.log(mark.lastname);

/* Prototype chain in console */

/* Object.create */
var personProto = {
    calculateAge: function(){
        console.log(2016- this.yearOfBirth);
    }
}

var john= Object.create(personProto);
john.name = 'John';
john.yearOfBirth =1990;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value : 'designer'}
    })

/* Primitives vs objects */
var a = 23;
var b = a;
a=46;
console.log(a); //46
console.log(b); //23

var obj1 = {
    name: 'John',
    age:26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); //30
console.log(obj2.age) //30

//functions
var age =27;
var obj={
    name:'Jonas',
    city:'Lisbon'
};
function change(a,b){
    a=30;
    b.city='San Francisco';
}
change(age,obj);
console.log(age); //27
console.log(obj.city); //San Francisco

/* Passing function as arguments */
var years = [1990,1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for ( var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(ele){
    return 2016- ele;
}

function isFullAge(ele){
    return ele >= 18;
}

function maxHeartRate(ele){
    if(ele >= 18 && ele <= 81){
    return Math.round(206.9 - (0.67*ele));
    }else{
        return -1;
    }
}
var ages = arrayCalc(years, calculateAge);
console.log(ages) //[26, 51, 79, 11, 18]

var fullages = arrayCalc(ages,isFullAge);
console.log(fullages) //[true, true, true, false, true]

var rates= arrayCalc(ages, maxHeartRate);
console.log(rates); //[189, 173, 154, -1, 195]

/* Function returning Functions */

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ' how are you?');
        }
    }else if (job === 'teacher'){
        return function(name){
            console.log(' how old are you?'+ name)
        }
    }else{
        return function(name){
            console.log(name+ ' what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher')
teacherQuestion('John'); // how old are you?John

interviewQuestion('teacher')('mark'); //how old are you mark

/* Immediately invoked function expression IIFE */
//hide score
// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

//to treat as expression put whole function in bracket ()
(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function(goodluck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5); //true

/* Closures */
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2015- yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990); //41
retirement(66)(1990)// 41

/* Bind, call and apply */

var john ={
    name: 'john',
    age: 26,
    job:'teacher',
    presentation : function(style, timeOfDay){
        if (style === 'formal'){
            console.log(this.name + this.age + this.job)
        }else if (style === 'friendly'){
            console.log(this.name + this.age + this.job)
        }
    }
}

var emily= {
    name: 'emily',
    age: 35,
    job:'designer'
}
john.presentation('formal', 'morning');

//as use of this pass emily
john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily,['friendly', 'afternoon'])

//bind returns a function
var johnFriendly= john.presentation.bind(john, 'friendly');
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');


/* Challenge 
*  question on console,answer on prompt input and find score
* give privacy to function
*/

// (function(){
        //code here
// })();

(function(){
    function Question(question,answers,correct){
        this.question =question;
        this.answers=answers;
        this.correct=correct;
    }
    
    Question.prototype.displayQuestion= function(){
        console.log(this.question);
        for (var i=0;i<this.answers.length;i++){
            console.log(this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback){
        var sc;
        if (ans == this.correct){
            console.log('correct answer')
            sc=callback(true)
        }else{
            console.log('wrong answer');
            sc= callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore= function(score){
        console.log('your current score' +score);
        }


    var q1 = new Question('Is javascript the cooleset programming lang?', ['yes', 'No'] ,0);
    var q2 = new Question(' Who are you?',['rupa','kumari'],1)
    
    var questions=[q1,q2];

    function score(){
        var sc = 0;
        return function(correct){
            if (correct){
                sc++;
            }
            return sc
        }
    }

    var keepscore= score();

    function nextQuestion(){
        var n = Math.floor(Math.random() *  questions.length);
        
        questions[n].displayQuestion()
        
        var answer = prompt("please select  the correct answer.");
        
        if (answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepscore);
            nextQuestion();
        }
        
    }

    nextQuestion();

})();


