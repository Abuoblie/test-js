const readlineSync = require("readline-sync");
/*console.log("hello");
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);
var n =1;
let age = 20
console.log("next year you will be "+ (age+n));
let name;
let city;
name = readlineSync.question("what is your name?");
city = readlineSync.question("where are u from?");
console.log("welcome " + name +" from " + city);
var num1= 0.00;
let num2= 0.00;
num1= readlineSync.question("enter a number with two decimal places?");
num1= parseInt(num1);
num2=readlineSync.question("enter a second number with two decimal places?")
console.log(num1 + " x " + num2 +" = "+ (num1*num2));
let n1 = readlineSync.question("please enter a number");
let n2 = readlineSync.question("please enter a number");
n1 = parseInt(n1);
n2 = parseInt(n2);
let n3 = n1%n2;
console.log("the rest of the division is "+ n3);
var min =readlineSync.question("please enter a min number");
var max = readlineSync.question("please enter max number");
var curent = readlineSync.question("please enter curent number");
if (min < curent && curent < max ) {
    console.log("the curent number "+ curent + " is accepted");
}
else if (min > max) {

    console.log("the min can not be greather than the max please try again later");
}
var daysOfTheWeek = ["monday","tuesday", "wednessday", "thursday", "friday", "saturday", "sunday"]
 var day = readlineSync.question("please enter a number between 1 and 7")

    console.log(day +" => "+ daysOfTheWeek[day-1]);

//ex3

 let day = readlineSync.question("please enter a number ");
 var n = 0.00;
  var sum = 0.00;
 for(let index = 0; index < day; index++) { 
    n = readlineSync.question("please enter a number ")
    sum += parseFloat(n);  
 }
console.log(sum);

let marray = [1, 2, 3, 4, 5];
let narray = [100, 101, 102];
var sum = 0;


for (let index = 0; index < marray.length; index++) {
    sum =(sum + marray[index]);  
}
var average = (sum/marray.length);
console.log("the sum of the array is " + sum + " and the average is " + average);

sum = 0;
average = 0;

for (let element of narray) {
    sum = (sum + element);   
}
var average = (sum/narray.length);
console.log("the sum of the array is " + sum + " and the average is " + average);

var dup = marray.slice(0,marray.length);
for(let element of marray){
    console.log(element);
}
var abc =[];
i=0;
for (let element of narray) {
    abc[i]=element;
    console.log( abc[i]);  
    i++; 
}
console.log('next');
for (let element of abc) {
    console.log(element);    
}
var min=narray[0];
let max = min;
for (let element of narray) {
    
    if (min>element) {
        min = element;
    }
    if (max < element) {
        max = element;
    }
}
console.log("the minimum of the array is "+ min +" and the max is "+ max);
//ex4
function calcSurface(length , width) {
    return length*width;
}
let length=readlineSync.question("enter the length of the rectangle");
let width=readlineSync.question("enter the width of the rectangle");
console.log(calcSurface(length , width)+"m²");

function Rand10() {
    return Math.round(Math.random()*10);
}
function multiRand(n) {
    var randArray=[];
    for (let index = 0; index < n; index++) {
        randArray[index] = Rand10();    
    }
    return randArray;
}
var n = readlineSync.question("pease enter the number of rands")
var ResArray = multiRand(n);
function Average(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = (sum + array[index]);
    }
    return (sum / array.length);
}
function min(array) {
    var min = array[0];
    for (let element of array) {
        if (min > element) {
            min = element;
        } 
    }
    return min;
}
function max(array) {
    var max = array[0];
    for (let element of array) {
        if (max < element) {
            max = element;
        }   
    }
    return max;
}
for (let element of ResArray) {
    console.log(element);
}
console.log("the array has an average of "+ Average(ResArray));
console.log("a minimum of "+ min(ResArray));
console.log("and a maximum of "+ max(ResArray));
//ex5
function askTvSerie() {
    var Name = readlineSync.question("please enter name of your favorite Tv series \n");
    var year = readlineSync.question("please enter year of production \n");
    var NameOfCastmembers = [null];
    console.log("please enter the names of cast members you know press enter after each name to finish enter o")
        var temp = readlineSync.question("please enter a name \n");
        var i=0;
    while (!(temp === "o")){    
        NameOfCastmembers[i] = temp;
        var temp = readlineSync.question("please enter a name \n");
        i++;
    } 
    myTvSeriesObject = {
        SeriesName : Name,
        YearOfProduction : year,
        CastMembers : NameOfCastmembers
    }; 
  return myTvSeriesObject;
}
   var tvSerie = askTvSerie();
   
   
function randomizeCast(tvSerie) {
    var ctr = tvSerie.CastMembers, index, tp;
    var lent = ctr.length;

    while (lent>0) {
         index = Math.floor(Math.random() * lent)+1;
         lent--
         tp = tvSerie.CastMembers[lent];
         tvSerie.CastMembers[lent] = tvSerie.CastMembers[index];
         tvSerie.CastMembers[index] = tp;
    }
    return tvSerie.CastMembers;
}
var CastSeries = randomizeCast(tvSerie);
console.log("Randome caste members");
for(let element of CastSeries){
    console.log(element);
}
//ex6
class circle {
    constructor(xpos, ypos, radius){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xpos = this.xpos - xOffset;
        this.ypos = this.ypos - yOffset;
    }
    get surface (){
        return Math.PI*(this.radius)^2;
    }
}
var rd = new circle(1,2,3);
rd.move(0,1);
console.log(rd.xpos + " " + rd.ypos);
console.log(rd.surface);*/

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
   
     collides(otherRectangle) {
        if ( 
            this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.topLeftYPos + this.length > otherRectangle.topLeftYPos){
        
            return true;
        }
        return false;
         
     }
    
}

let tt = new Rectangle(10,12,13,16);
let otherRectangle = new Rectangle(20,40,13,16);
console.log("collision test is "+ tt.collides(otherRectangle));
var count=0
var topLeftXPos=[],
    topLeftYPos=[],
          width=[],
         length=[],
         rectangle=[],
         collingRechtangles=[];

for (let j = 0; j < 1000; j++){
     topLeftXPos[j] = Math.floor(Math.random()*1000)+1;
     topLeftYPos[j]= Math.floor(Math.random()*1000)+1;
     width[j]= Math.floor(Math.random()*1000)+1;
     length[j] = Math.floor(Math.random()*1000)+1;
}
for (let index = 0; index < 999; index++) {
    rectangle[index]  = new Rectangle(topLeftXPos[index], topLeftYPos[index], width[index], length[index]);
     for (let i = index+1; i < 1000; i++) {
        rectangle[i]  = new Rectangle(topLeftXPos[i], topLeftYPos[i], width[i], length[i]);
         if (rectangle[index].collides(rectangle[i])) {
            collingRechtangles[i] = "Rechtangle :"+ index + "Rechtangle :"+ i +" collided";
            count = (count+1);
         }
         
     } 
}

for(let element of collingRechtangles){
    console.log(element)
}
console.log(count + " rectangle collided ");



