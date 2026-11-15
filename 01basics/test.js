// //***variables***
// console.log("karan")
// const accountid= 111
// let email="karan@gmail.com"
// var password="123"
// let accountstate;
// var accountstate3;
// // hmesha let hi use krna h
// console.table([accountid,email,password,accountstate,accountstate3])
// //***data types***
// /* string,boolean,number
// null -->> standalone value
//  undefined
//  symbol-->>unique
//  object
//  */
// console.log(typeof null); //object
// console.log(typeof undefined); // undefined
// ///***data type conversion***
// let score=false
// const val=Number(score)
// console.log(val) 
// //when converted to number
// //"33abc"-->NaN
// //null-->0
// //undefined-->NaN
// //true-->1
// //false-->0
// let val1=200
// let bool=Boolean(val1)
// console.log(bool)
// console.log(typeof(bool))
// //***operations***
// // 2**2 means 2^2
// let str1="karan"
// let str2="jangid"
// let str3=str1+str2
// console.log(str3)
// let x=3
// console.log(x++) // first print ,then increment
// console.log(++x) // first increment, then print
// let y=3
// let z=y++ // first assign the value to z, then increment
// let zz=++y //first increment,then assign the value to zz
// console.log(z) 
// console.log(zz)
// console.log("2"==2) //string is converted to number and then it is checked
// console.log("2"===2) //strictly checks the data type
// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined<=0)
// console.log(undefined<0)
// console.log(undefined>0)// undefined gives false to all comparisons with zero

// //mainly two types of data types
// //1.primitive(with copy)-->>all comes in a stack memory
// //String,Number,Null,Undefined,BigInt,Symbol,Boolean
// //2. Nonprimitive(with reference)-->>all comes in a heap memory
// //Array,Objects,Functions
// let id=Symbol('123')
// let anotherid=Symbol('123')
// console.log(id)
// console.log(anotherid)
// console.log(id===anotherid)
// console.log(typeof(null))// typeof null is object
// let arr=["1","2","3","4","5"]
// console.log(typeof arr) //typeof an array is also object
// //typeof symbol is symbol
// //******string******
// let sccore=10
// let repocount=40
// console.log(`my score is ${sccore} and my number of repo is ${repocount}`)
// //inside ${} i can do anything like function call,any operation,like object.id
// let strr=new String('   my n amekaran  ')
// console.log(strr[0])
// console.log(strr.length)
// console.log(strr.toUpperCase())
// console.log(strr.charAt(3))
// console.log(strr.trim())
// console.log(strr.includes('myka'))
// console.log(strr.indexOf(' '))
// console.log(strr.lastIndexOf('m'))
// console.log(strr.slice(5,9))
// console.log(strr.replace('my','sa'))
// console.log(strr.replaceAll('m','s'))
// console.log(strr.split(' '))
// console.log(strr.startsWith(' '))
// console.log(strr.endsWith(' '))
// console.log(strr.repeat(2))
// console.log(strr.trim().toUpperCase())
// //******numbers******
// let num=100
// let num1=new Number(100)
// console.log(num)
// console.log(num1)
// console.log(num1.toString().length)
// console.log(typeof num1)//object
// console.log(num===num1)
// let numm=123.8967
// console.log(numm.toFixed(2))
// console.log(numm.toPrecision(4))
// let num2=1000000
// console.log(num2.toLocaleString('en-IN'))
// //******Math******
// console.log(Math)
// console.log(Math.ceil(9.2))
// console.log(Math.floor(9.9))
// console.log(Math.random())// always gives value between 0 to 1
// console.log(Math.min(8,9,0))
// const min=10
// const max=20
// console.log(Math.floor((Math.random()*(max-min+1))+min))//very imp just remember it
//******Date and time******
// let date=new Date(2026,11,14,11,39);
// console.log(date.toLocaleString())
// let time=Date.now()// current time from 1jan 1970
// console.log(Math.floor(time/1000)) //convert milliseconds time in seconds time
// console.log(date.getTime())//time for a date
// console.log(date.getMonth()) // month starts from 0 so 11 means december
// console.log(date.getDay()) // day also starts from 0
// console.log(date.toLocaleString('default',{
//    day:"2-digit",
//    month:"short",
//    year:"numeric",
//    weekday:"long"
// }))// very imp syntax of localestring(locale,object)
// //******array******
// const arr=[1,2,3,4,5,true,"karan"]
// const arr1=new Array(1,2,3,4,5,6)
// arr.push(9)
// arr.pop()
// arr.unshift(9) //add 9 to the left most of array
// console.log(arr)
// arr.shift() //removes element from left most of array
// console.log(arr)
// arr.shift() 
// console.log(arr)
// console.log(arr.includes(5))
// const newarr=arr.join() //take all the elements of arr and convert them into a string 
// console.log(arr)
// console.log(newarr)
// console.log(typeof newarr) // string
//very imp diff between slice and splice
// let arr2=[1,2,3,4,5,6]
// console.log("A",arr2)
// console.log(arr2.slice(1,4)) // the last range is not included and it does not modify the array
// console.log("B",arr2)
// console.log(arr2.splice(2,5)) // the last range is included and the array is also modified
// console.log("C",arr2)
// let arr3=["karan","jangid","spiderman","django"]
// let arr4=["react","express","node","mongodb"] 
// let arr5=[...arr3,...arr4] //spread operator combines all the elements of all the array
// console.log(arr5)
// const arr6=[1,2,[3,4],7,[4,5,[8,9,0]]]
// console.log(arr6.flat(Infinity))
// console.log(Array.from("karan"))
// console.log(Array.from(new Map([
//     ["name","karan"],
//     ["age","22"]
// ])))
// console.log(Array.from("12345",(valuee)=>Number(valuee)))//syntax Array.from(arraylikeobject,mapfunction)
// //Array.from() creates an array from an iterable or array-like object.
// console.log(Array.from({0:1,1:2,2:3,3:4,length:4},(value,index)=>value+1))
// console.log(Array.from({length:7},(value,index)=>index-7))
// console.log(Array.of(1,2,3,4,5,5,6,"jj"))
//Array.of() creates a new array using the values passed as arguments.
//******object******
//two methods to create object --constructor and literal method
// Object.create //produces singleton by constructor method
// const neww=new Object() //creates singleton object
// const sym=Symbol("key1")
// const obj={
//     name:"karan",
//     symm:"symbol of key 2",
//     [sym]:"symbol of key1", //way to define symbol as a key
//     1:"jj",
//     "full name":"karanjangid",
//     age:22,
//     email:"karan@gmail.com",
//     lastloggin:false
// }
// console.log(typeof obj.lastloggin)
// console.log(obj["full name"])
// console.log(obj["1"])
// console.log(obj.symm)
// console.log(typeof symm)
// console.log(typeof obj.symm)
// console.log(obj[sym]) // way to access symbol
// console.log(typeof obj[sym])
// console.log(typeof sym) 
// obj.email="karan@chatgpt.com"
// // Object.freeze(obj) //freeze the changes in object
// // obj.email="karan@microsoft.com"
// // console.log(obj)
// obj.greeting=function greet(){
//    console.log("hello function")
// }
// obj.greetingtwo=function greet2(){
//    console.log(`hello the name in object is ${this.name}`)
// }
// // console.log(obj)
// console.log(obj.greeting())
// console.log(obj.greetingtwo())
// const obj1={
//     name:"karanjangid",
//     fullname:{
//         username:{
//             email:"ding@gmail.com",
//             password:"123"
//         }
//     }
// }
// console.log(obj1.fullname?.username.email) //the ? asks is fullname exists then only read it further
// const obj2={
//     1:"a",
//     2:"b"
// }
// const obj3={
//     3:"c",
//     4:"d"
// }
// const obj4={...obj2,...obj3}
// console.log(obj4)
// console.log(Object.keys(obj4)) // provides the keys of an object in array
// console.log(Object.values(obj4)) // provides the values of an object in array
// console.log(obj4.hasOwnProperty('6'))
// //******destructure of an object******
// const course={
//     coursename:"js in hindi",
//     courseprice:"999",
//     courseinstructor:"karan"
// }
// const {coursename}=course //destructuring of an object
// const {coursename:namee}=course //destructuring of an object
// console.log(namee)
// console.log(coursename)
//******function******
// function userloggedin(username){
//     if(!username){
//         console.log(`please enter a valid username`)
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(userloggedin()) // it will give undefined just logged in
// // console.log(userloggedin("karan"))
function calculateCartPrice(val1,val2,...num1){ // rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500,600,700))
//passing object as a parameter in function
user={
    username:"karan",
    email:"karan@gmail.com",
    age:22
}
function foruser(objectname){
    // console.log(`username is ${objectname.username} and email is ${objectname.email} and age is ${objectname.age}`)
}
foruser(user)
foruser({
    username:"sam",
    email:"sam.com",
    password:"sammpassword"
})
//passing array as a parameter in function
newarray=[1,2,3,4,5,6,7]
function forarray(anyarray){
    return anyarray[4]
}
// console.log(forarray(newarray))
// console.log(forarray([100,200,300,400,500]))
//about scope
// if(true){
//     const username="karan"
//     if(username==="karan"){
//         const website=" youtube"
//         console.log(username+website) 
//     }
//     console.log(website)
// }
// console.log(username)
//types to declare a function +++++++interesting++++++++++
// console.log(addone(3))
// function addone(num){
//     return num+1
// }
// console.log(addtwo(8))
// const addtwo=function(num){
//     return num+2
// }
// console.log(addtwo(8))
// about this 
//this refers to an object
//If a normal function called directly this refers to the global object.
//In an object method, this refers to the current object. 
//An object method is a function defined as a property inside an object.
// console.log(this) //in node it refers to {} and in browser it refers to a window
// this about normal function
//this depends on how the function is called
//user.greet() → user -->>called by object
// greet() → global object -->>directly called
// function greett(){
//     console.log(this) // here this refers to the global object
// }
// greett()
// normal func inside a normal func
// const user = {
//     name: "Karan",

//     func1: function() {
//         function func2() {
//             console.log(this);
//         }

//         func2();
//     }
// };

// user.func1(); //func1 gets user as its this
//func2 is called directly So func2 gets its own this, which is the global object
// const userr = {
//     name: "Rahul",
//     greet: function() {
//         console.log(this.name);
//     }
// };
// const myFunction = userr.greet; //it only gives the reference of the function
// myFunction();
// function chai(){
//     let username="karan"
//     console.log(this)
// }
// chai()
// const useer = {
//     name: "Karan",
//     greet: function() {
//         console.log(this);
//     }
// };
// useer.greet();
//this depends on where the arrow function is created
//It inherits this from its surrounding lexical scope. Calling it through an object does not change its this.
// const funn=()=>{
//     let username="karan"
//     console.log(this)
// }
// funn() //arror function inherit this from their surrounding lexical scope
// in normal arrow function it gives {}
// const user1 = {
//     name: "Karan",

//     funn: () => {
//         console.log(this);
//     }
// };

// user1.funn(); // inside an object method this still refers to {}
//++++++Arrow function inside a normal function++++++
// const user2 = {
//     name: "Karan",

//     funn: function() {
//         const arrow = () => {
//             console.log(this.name);
//         };

//         arrow();
//     }
// };
// user2.funn() //funn is called through user2, its this refers to user2
// arrow function inside an arrow function
// const greet = () => {
//     const arrow = () => {
//         console.log(this);
//     };

//     arrow();
// };

// greet();
// two normal functions outside the arrow function
//An arrow function inherits this from the surrounding scope where it is created
//case 1
// const user3= {
//     name: "Karan",
//     func1: function() {
//         this.name = "Func1";
//         function func2() {
//             this.name = "Func2";
//             const arrow = () => {
//                 console.log(this.name);
//             };
//             arrow();
//         }
//         func2();
//     }
// };
// user3.func1();
// //case 2
// const user4 = {
//     name: "Karan",
//     func1: function() {
//         this.name = "Func1";
//         const arrow = () => {
//             console.log(this.name);
//         };
//         function func2() {
//             this.name = "Func2";
//             arrow();
//         }
//         func2();
//     }
// };
// user4.func1();
// another way to declare arrow function
// const add=(num1,num2)=>{
//     return num1+num2
// }
// const add1=(num1,num2)=>({username:"sam"}) //implicit return in () brackets
// console.log(add1(3,3))
//++++++++IIFE(Immdiately invoked function expressions)+++++++ jb global variables problem krte h tb use krte h
//()()
// (function chaii(){
//     console.log(`DB CONNECTED`)
// })(); //here ; is used to stop the execution of IIFE
// (aurcode=(name)=>{ //named IIFE
//     console.log(`DB CONNECTED2 for ${name}`)
// })("sam")

//var out of scope bi access krskte h 
//agr declare krne se phle access krte h toh undefined btata h
//falsy values-->> 0,-0,null,undefined,NaN,BigInt 0n,""
//truthy values-->> "0",'false'," ",[],{},function(){}
//every array,object,function is truthy value
if(()=>{console.log("sammm")}){
    console.log("abc")
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("empty object")
}