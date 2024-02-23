// primitive datatype use stack memory
// non-primitive datatype use heap memory
let obj={
    name:"aman",
    age:23,
    email:"dwlke@gmail.com"
}
let obj1=obj
obj1.name="asda"
console.log(obj.name)//asda  in non primitive datatype we use reference so we can change value by refeerence because it use heap memory
let myname="chetan"
let my=myname
my="sharma"
console.log(my)
console.log(myname)//primitive datatype use stack memory so no reference it create copy 
