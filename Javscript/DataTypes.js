let num=28
// let userName="Joseph Vijay "Noob" gives 
// a error to solve use a \ backslash
let userName="Joseph Vijay \"Noob"
console.log(userName)
let user_Name="Jo\tseph Vi\v\v\vjay \"Noob" // \v for vertical tab \t fr horizontal
// \b for backspace
console.log(user_Name)
console.log(typeof userName)
console.log(typeof num) //typeof keyword to determine the type of the variable
let num2=10_000_000_0000 // to differntiate number use _
console.log(typeof num2)
console.log(Number.MAX_VALUE)//largest number allowed in js
console.log(Number.MAX_VALUE * 100) //infinity allowed in java script
let num3=1242425142342134252 //long numbers cannot be displayed in js
console.log(num3)
let num4=123142142424512341234n //add n @ the end for using big int
console.log(num4)
// console.log(num4 + 10)  cannot add a big int with a int this will give a error
//so use "n" at the end of the arguments fr this operation
let bool=5
console.log(bool)
console.log(num * "New") //this gives NAN not a  number
console.log(typeof(num * "New")) //gives the number as type cz its number
//these are all for interview purposes
