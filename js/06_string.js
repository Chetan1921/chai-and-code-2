const name="harsh"
let value=23
console.log(name+value)//harsh23 in string
console.log(name-value)
let mystring=new String('23')
let my=new String('24')
console.log(typeof (mystring-my))//number
///second way to use string is in bactics--->`{}`
console.log(`my name is ${name} and my age is ${value}`)//me can use differnt properties of string in bactics usin ${} sign  also called string interpolation
console.log(`my name length is ${name.lenght}`)
console.log(`my name in capital is ${name.toUpperCase()}`)
console.log(name.charAt(3))
console.log(name.indexOf('r'))
let newname=name.substring(0,3)//substring(startingindex,length of substring)
console.log(newname)

let string2=name.slice(1,3)//"ar"
console.log(string2)//"ar"
let newstring="  hitesh    "
console.log(newstring)
console.log(newstring.trim())//output->"hitesh" trim() remove white space
// replace method replace some part of string to other
let email="200104022@gmail.com"
console.log(email.replace('@','&'))//"200104200&gmail.com"
console.log(email.includes('gmail'))
let myname="he-is-goog-boy"
console.log(myname.split('-'))///split('reference',no upto split)






