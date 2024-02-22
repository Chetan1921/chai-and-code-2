//1-primitive
//--->>>  number,string,bigint,boolean,null,undefined,symbol
let x=BigInt('201992132132')
console.log(x)//201992132132
let islog=false
console.log(islog)//false

let t=null
console.log(null)//null
let age
console.log(age)//undefined
//2 reference datatype or non primititve datatype 
//-->>> object,array,function

//array
let array=["chetan","sandeep","vipin"]
for(let i=0;i<array.length;i++)
{
    console.log(array[i])
}

///object
let obj={
    name:"chetan",
    age:23,
    gender:"male",
    dob:"10/02/2001"

}
console.log(obj.name)
console.log(obj.age)
console.log(obj.gender)
// function

let myfunction=function()
{
    console.log("chetan sharma")
}
myfunction(); //call function after defination
