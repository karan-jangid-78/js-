//for of loop-->>used for maps-->>it can't iterate objects directly
//syntax
//for(const i of iteratable){
//}
// const arr=[1,2,3,4,5,6,7,8,9,0]
// for (const i of arr){
//     console.log(i)
// }

// const mp=new Map()
// mp.set(1,"one")
// mp.set("2",2)
// mp.set('name','sami')
// console.log(mp)
// const mp2=new Map([
//     [1,"oneone"],
//     ["two",22],
//     [true,false]
// ])
// console.log(mp2)
// for(const [key,value] of mp2){
    // console.log(`key is ${key} and value is ${value}`)
// }
//for in loop -->>used for objects
//  user={
//     username:"karan",
//     age:22,
//     username:"sam",
//     price:20000
// }
// // console.log(user.username)
// for(const i in user){
//     console.log(i)
//     console.log(user[i])
// }
//forEach loop-->>in this we can pass function as a paramter
//disadvantage-->>it returns undefined always
// const arr=[1,2,3,4,5,6,66,77,88]
// arr.forEach((value,index)=>{
// // console.log(value,index)
// })
// const array=[
//     {
//         name:"karan",
//         age:22,
//         email:"karan@ai.com"
//     }, 
//     {
//         name:"sam",
//         age:23,
//         email:"sam@ai.com"
//     },
//     {
//         name:"jangid",
//         age:24,
//         email:"jangid@ai.com"
//     }
   
// ]
// for(let i=0;i<array.length;i++){
//     // console.log(array[i].name)
// }
// const number=array.forEach((value,index)=>{
//     // console.log(value.name,index)
//     return value
// })
// console.log(number) //it returns undefined always
// filter-->>it also takes callback function as a parameter and have to give a condition and returns an array
// const arr1=[1,2,3,4,5,6,66,77,88,99]
// const a=arr1.filter((num)=>num>4)
// // console.log(a)
// const b=arr1.filter((num)=>{num>4})
// console.log(b)
// const c=arr1.filter((num)=>{ return num>4})
// console.log(c)
//map-->>takes callback func as a parameter and returns an array
// const arr2=[1,2,3,4,5,6,66,77,88,99,100]
// const d=arr2.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=51)
// // console.log(d)
// //reduce-->>takes callback func as a parameter and returns a value
// const arr3=[1,2,3,4,5,6,66,77,88,99,100,1122000]
// let val=arr3.reduce((acc,curval)=>{ 
//     // console.log(`acc is ${acc}`)
//     return acc+curval},1)
//     console.log(val)
// const val1=arr3.reduce((acc,curval)=>acc+curval,20)
// console.log(val1)
