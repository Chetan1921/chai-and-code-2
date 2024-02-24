let my=new Array(1,2,3,4)
console.log(my[0])//1
let myarray=["chetan","sandeep","vipin","anuj"]
//array method-->
myarray.push("salman")
console.log(myarray)
myarray.pop()
console.log(myarray)
my.unshift(9)//[9,1,2,3,4]
console.log(my)
my.shift()//[1,2,3,4]
console.log(my)
console.log(my.includes(8))//false
const newarray=my.join()//add all element of array into a string
console.log(newarray)//1,2,3,4 type will be string
console.log(my)
let myarray1=[1,2,3,4,5,6,7,8,9]
let slicearray=myarray1.slice(1,4)
console.log("slice array:",slicearray)
console.log("after slicing array will:",myarray1)
let splicearray=myarray1.splice(1,4)
console.log("splice array:",splicearray)
console.log("after splicing array will:",myarray1)

let marvel=["thor","ironman","captain","wanda"]
let dc=["suerman","aquaman","batman"]
let hero=marvel.push(dc)
console.log(hero)//["thor","ironman","captain","wanda",["suerman","aquaman","batman"]]//this is not done to merge
console.log(marvel)
let hero2=marvel.concat(dc)//["thor","ironman","captain","wanda","suerman","aquaman","batman"]  by this we can merge only 2 array at a time
console.log(hero2)
// next method
let hero3=[...marvel,...dc]
console.log(hero3)
console.log(Array.from("hiteh"))
console.log(Array.of(1,2,3,4))
console.log(isArray("hiteh"))



