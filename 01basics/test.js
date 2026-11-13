//***variables***
console.log("karan")
const accountid= 111
let email="karan@gmail.com"
var password="123"
let accountstate;
var accountstate3;
// hmesha let hi use krna h
console.table([accountid,email,password,accountstate,accountstate3])
//***data types***
/* string,boolean,number
null -->> standalone value
 undefined
 symbol-->>unique
 object
 */
console.log(typeof null); //object
console.log(typeof undefined); // undefined
///***data type conversion***
let score=false
const val=Number(score)
console.log(val) 
//when converted to number
//"33abc"-->NaN
//null-->0
//undefined-->NaN
//true-->1
//false-->0
let val1=200
let bool=Boolean(val1)
console.log(bool)
console.log(typeof(bool))
//***operations***
// 2**2 means 2^2
let str1="karan"
let str2="jangid"
let str3=str1+str2
console.log(str3)
let x=3
console.log(x++) // first print ,then increment
console.log(++x) // first increment, then print
let y=3
let z=y++ // first assign the value to z, then increment
let zz=++y //first increment,then assign the value to zz
console.log(z) 
console.log(zz)
console.log("2"==2) //string is converted to number and then it is checked
console.log("2"===2) //strictly checks the data type
console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined<=0)
console.log(undefined<0)
console.log(undefined>0)// undefined gives false to all comparisons with zero

//mainly two types of data types
//1.primitive(with copy)-->>all comes in a stack memory
//String,Number,Null,Undefined,BigInt,Symbol,Boolean
//2. Nonprimitive(with reference)-->>all comes in a heap memory
//Array,Objects,Functions
let id=Symbol('123')
let anotherid=Symbol('123')
console.log(id)
console.log(anotherid)
console.log(id===anotherid)
console.log(typeof(null))// typeof null is object
let arr=["1","2","3","4","5"]
console.log(typeof arr) //typeof an array is also object
//typeof symbol is symbol
//******string******
let sccore=10
let repocount=40
console.log(`my score is ${sccore} and my number of repo is ${repocount}`)
//inside ${} i can do anything like function call,any operation,like object.id
let strr=new String('   my n amekaran  ')
console.log(strr[0])
console.log(strr.length)
console.log(strr.toUpperCase())
console.log(strr.charAt(3))
console.log(strr.trim())
console.log(strr.includes('myka'))
console.log(strr.indexOf(' '))
console.log(strr.lastIndexOf('m'))
console.log(strr.slice(5,9))
console.log(strr.replace('my','sa'))
console.log(strr.replaceAll('m','s'))
console.log(strr.split(' '))
console.log(strr.startsWith(' '))
console.log(strr.endsWith(' '))
console.log(strr.repeat(2))
console.log(strr.trim().toUpperCase())
//******numbers******
let num=100
let num1=new Number(100)
console.log(num)
console.log(num1)
console.log(num1.toString().length)
console.log(typeof num1)
console.log(num===num1)
let numm=123.8967
console.log(numm.toFixed(2))
console.log(numm.toPrecision(4))
let num2=1000000
console.log(num2.toLocaleString('en-IN'))
//******Math******
console.log(Math)// always gives value between 0 to 1
console.log(Math.ceil(9.2))
console.log(Math.floor(9.9))
console.log(Math.random())
console.log(Math.min(8,9,0))
const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1))+min))