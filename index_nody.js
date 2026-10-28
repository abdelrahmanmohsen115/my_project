
// let myname="abdo"
// let myage=19
// console.log("my name is "myname"my age is"myage);
// //console.log(myage);
// /*abdo 
// mohsen 
// ahmad
// */

// console
// window.alert("hello javaskript");
// console.log("heiio node js ");

//console 
// console.log("main abdo");
// console.error("error man");
// console.table(["abdo","mohsen","ahmad"]);

//datetype
/*
string
numper
arrys => object
object
boolean
undefined
*/
// console.log("abdo mohsen")
// console.log(typeof "abdo mohsen")// string
// console.log(typeof 5000)//numper
// console.log(typeof 5000.30)// numper
// console.log(typeof[10,20,30])//  arrys (object)
// console.log(typeof["as","ah","ab"])//arrys(opject)
// console.log(typeof{name:"abdo ",age : 19,country :"egypt"}) //object 
// console.log(typeof true)//boolean
// console.log(typeof false)//boolean
// console.log(typeof undefined) //undefined


//varible 
// var user ="ahmad"
// let users ="abdo"
// console.log(user)
// console.log(users)


// var a =1
// var a = 2
// console.log(a)

// let aabb =1

// console.log(aabb)
// const a =1
// const a = 2
// console.log(a)
// console.log("abdo mohsen 'ahmad'")


//task 1 

// let myname="abdo" ;
// let age=19 ; 
// let country = "egypt" ;
// console.log(" my name is " + myname + " my age is " + age + " my country is " + country );
// let my_name ="abdo"//string
// let birhyear=2007//numper
// let curantyear=2026
// let age =curantyear-birhyear
// console.log("my name is " +my_name+" and my age is " +age+" years old")

//plus
// let firstname ="abdelrahman"
// let lastname="mohsen"
// console.log(firstname+" "+lastname)

// uary plas
// console.log(100) //numper
// console.log("100") // string 
// console.log(+"100")//numper


// let a= "20"
// let b =10
// console.log(a+b)//output=1020 error
// console.log(+a+b)
// let a=10
// a+=40
// console.log(

// string
// console.log("hello' javaskript'")
// console.log('hello\' javaskript')

// //backslah
// console.log("hello javaskript\
//      hello backand")
// //input//hello javaskript  hello backand

// console.log("hello javaskript\nhello backand")
// //input//
// // hello javaskript 
// // hello backand
// console.log("hello javaskript \t hello backand")//space
// //input//hello javaskript          hello backand


//backtec
// console.log(`abdo nohsen ahmad `)
// console.log(`abdo
// nohsen`)

// let first_name="abdo"
// let last_name="mohsen"
// // console.log(last_name.concat(" "+last_name))
// console.log(`my name is ${first_name} and my last name ${last_name}`)
// // output // my name is abdo and my last name mohsen

// string mathods
// 1.lenght 
// let name ="abdo mohsen"
// console.log(name.length)

//2.charAT(),at(),charCodeAt(),[]
// console.log(name[15])
// console.log(name.charAt(15))
// console.log(name.charCodeAt(15))
// console.log(name.at(15))

//3. slice(start,end)
// let name ="abdo mohsen"
// console.log(name.slice(1,10))

// 4. touppercase ,tolowercase 
// let name ="abdo mohsen"
// console.log(name.toUpperCase(name))
// console.log(name.toLowerCase(name))
// 5.trimming 
// let name ="        abdomohsen       "
// console.log(name.trim())
// console.log(name.trimStart())
// console.log(name.trimEnd())
//pading(padStart,padEnd)
// let name ="123456"
// console.log(name.padStart(6,"*"))

//repeat(5)
// let name ="medo "
// console.log(name.repeat(5))

//replace
// let name ="medo mohsen  mohsen"
// console.log(name.replace("nedo","abdo"))
// // replaceAll
// console.log(name.replaceAll("nedo","abdo"))
// split 
// let text ="abdo mohsen ahmad ibrhem"
// console.log(text.split(","))
// let num = +"6";
// console.log(typeof(num))


// console.log(numper.MAX_SAFE_INTEGER)
// console.log(numper.MIN_SAFE_INTEGER)
// console.log(numper.MAX_VALUE)
//mathods numper

// 1.toString
// let name= "5"
// console.log(name.toString())

// 2.toFixed
// let x = 10.123456;
// console.log(x.toFixed(2));

// 3.parseint ,parsefloat

// let name = "10.123";
// console.log(parseInt(name));
// console.log(parseFloat(name));

// mathods object
// let num = 5.9
// console.log(Math.round(num))
// let ner = 6.2
// console.log(Math.floor(ner))

// let par = 6.5
// console.log(Math.ceil(par))
// console.log(Math.max(10,20,30))
// console.log(Math.min(10,20,30))
// console.log(Math.random())
// console.log(Math.abs(-5))
// console.log(Math.pow(5,9))\

// if cooundithan
// let score = 0
// if (score > 60){
//     console.log("suaases")
// }else if(score == 0){
//     console.log("ex")
// }
// else{
//     console.log("faild")
// }
// nested if
// let score = 0
// if (score > 60){
//     console.log("suaases")
//     if (score == 0){
//     console.log("ex")
// }
// }
// else{
//     console.log("faild")
// }



// switch
// let day = 5
// switch(day){
//    case 0:
//       console.log("sutarday")
//           break
//     case 1:
//      console.log("sunday")
//     break

//     case 3:
//      console.log("manday")
//         break

//     case 4:
//      console.log("tharsday")
//          break
// default:
//     console.log("not defind")

// }


// array
// create array
// let name =["abdo","mohsen","ahmad"]
// //accessing arrey
// console.log(name[1])

// modifiy array elment
// console.log(name[1])
// name[2]="ibrahim"
// console.log(name)

// // nested arrys
// let skills = [
//     "html", "css",       // index 0, index 1
//     ["js", "php"]        // index 2
// ];

// console.log(skills[2][1]);
// //cheak arrey
// console.log(Array.isArray(skills))

// mathodsarray
// 1..lenght
// let skills = [
//     "html" ,"css",
//     "pnp","js"
// ]
// console.log(skills.length())
// console.log(skills[skills.length-1])
// // 2...at
// console.log(skills[skills.at[-1]])
// 3..toString
// console.log(skills.toString())
// //4.join
// console.log(skills.join("/"))
// // 5.pop
// console.log(skills.pop())
// console.log(skills);
// // 6.push
// console.log(skills.push("react"))
// console.log(skills);
//7..shift
// console.log(skills)
// console.log(skills.shift())
// console.log(skills)
// //7..unshift
// console.log(skills.unshift("react"))
// console.log(skills)
// //7..delete
// console.log(delete skills[2])

// console.log(skills)
// //7..concat
// let num1 =[1,2,3,4]
// let num2 =[5,6,7,8]
// console.log(num1.concat(num2))
//7..splice()
// num1.splice(1,2,5,3)
// console.log(num1);
//7..slice()
// let name =num1.slice(1,3)
// console.log(name)

//8..scerch (includes)
// console.log(num1.includes(3))
// console.log(num1.includes(10))

// 9..sort 
// let name =["sara","mohsen","ahmad"]
// console.log(name.sort())
// //9..reversed
// console.log(name.reverse())

// loop
// 1.for

// for(let i=0 ; i <=100 ;i++){

//     console.log(i);
    
// }

// let my_skills = ["html","css","js","php","react"]
// for (let i =0;i < 5;i++){
//     console.log(my_skills[i])
// }

// let my_skills = ["1.html","2.css","3.js","4.php","5.  react"]
// for (let i =0;i < my_skills.length ;i++){
//     console.log(my_skills[i])
// }

// nested for loop

// for(let x = 0; x <=12 ;x++){
//      for(let j = 0 ; j <=12 ; j++)

//          console.log(` ${x} * ${j} = ${x*j}`)
// }

// break . continue
// for(let x = 0; x <=12 ;x++){
//    if(x==10){

//      continue
//    } 
      
//        console.log(x)


// }

// for(let x = 0; x <=12 ;x++){
//    if(x==10){

//      break
//    } 
      
//        console.log(x)


// }

//while loop 
// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let name =["1.abdo","2.mohsen","3.ahmad","4.salah","5.mo","6.aya","7.hashem","8.mona"];
// let i =0 ;
// /while(i < name.length){
//     console.log(name[i])
//     i++;

// }
//do (while)
// let i =0
// do{
// console.log(i)
// i++;
// }while (false)


// console.log(i)

// function name() {
//     console.log("hi abdo")
// }
// n.02...ame()

// function name(username) {
//     console.log(`hi ${username}`)
// }
// name("abdo")
// name("mohsen")
// name("ahmad")
// name("ibrahim")


// function usernumper(limt){
//     for (let i =0 ;i< 10 ;i++)
//         if(i %2==0){
//             console.log(i)
//         }
// }

// usernumper(5)

// function sey_hello(a,b){
//    return a ,b

// }
// console.log(sey_hello(5,7))

// nasted function

// function seyhello(name){

//     function helloname(hello){
//        console.log(`hello ${name}`)
//     }
//     helloname()
    
// }
// seyhello("abdo")


// function calc(x,y){
//      function plus(){
//         console.log(x+y)
//      }
//      plus()
// function minus(){
//         console.log(x-y)
//      }
// minus()

//      }
// calc(5,6)



// scope global
// let name ="abdo" 
// console.log(name)

// // scope local
// function nasted(){
//     let name1 = "ALa" //scope local
//     console.log(`hello ${name1}`)
// }
// nasted()

//scope block
// var x=1
// if(true){    ////scope block
//     let x =1     ///scope block
//     console.log(x)   ///scope block
// }
//scope laxical
// let x = 2 
// function name (){
//     // scope laxical
    
//     function hello(){
//         // let x= 1 
//     console.log(x)
// }
// hello()  //scope laxical
// }
// name ()
//regular expresstion
// 1..match
// let my_pstring="hello abeo my skills ABDO is backand javaskript "
// let s= /ABDO/gi
// console.log(my_pstring.match(s));

// let mynumper="123@#$%%*678"
// let b =/[^1-9]/gi
// console.log(mynumper.match(b))

// let email = `abdo@1.com  mohsen@2.com  ahmad1@.com  122mo@.com`;
// // let invalid=/\w@\d.com/g
// let invalid=/\w\d@.com/g
// console.log(email.match(invalid))

// let n =`abdomohsen123@gmail.com  abdelrahmanmohsen526@gmail.com bodymohsen123@gmail.com`
// let moor =/\w\d@\w+.com/g
// console.log(n.match(moor))

//object
//key value 

// let her = {
//     name: "abdo",
//     age: "20",
//     isstudent: false,

//     great: function () {
//         return "hello";
//     }
// };

// console.log(her.name);
// console.log(her.great());

//nested object

// let skills = {
//     frontand: {
//         html: 60,
//         css: 50,
//         js: 10,
//         react: 59
//     },

//     backand: {
//         js: 40,
//         php: 70,
//         nodejs: 45
//     }
// };

// console.log(skills.backand);
// console.log(skills.backand.php);
// console.log(skills.frontand);
// console.log(skills.frontand.html);


// let user = {}
// user.age=20
// user.name="abdo"
// user.sey_hello=function(){
//     return "hello"

// }
// console.log(user)


//json

// const conast_let = {
//     "name": "abdo",
//     "age": 20,
//     "score": {
//         "scoermath": 20,
//         "scoernon": 30
//     },
//     "my_skills": ["html", "css", "js"]
// };

// console.log(typeof conast_let);
// let sutarday =JSON.parse(conast_let)
// console.log(typeof sutarday)



// synchronous,asynchronous
//1... synchronous
// console.log("abdo")
// console.log("mohsen")
// console.log("ahmad")

// asynchronous
// console.log("abdo")
// setTimeout(() => {
//     console.log("mohsen")

// },2000);
// console.log("ahmad")


// execution stack ,wepapi , 
// function medo(){
//     console.log("abdo") //execution stack
// };
// function mo (){
// console.log("mohsen") //execution stack
//   medo()
// };

// function salah(){
// setTimeout(() => {  //wepapi
//     console.log("ahmad")
// },2000);
//   medo()
// };
// medo()
// salah()
// mo()

//promise
// const promise = new Promise((resolve, reject) => {
//   const condition = true;

//   if (condition) {
//     resolve("welcome name");
//   } else {
//     reject("goodbye");
//   }
// }).then(
//   (result) => console.log(`good ${result}`),
//   (reason) => console.log(`good ${reason}`)
// );

// console.log(promise);


// function name() {
//    return "abdo mohsen ahmad"
// }
// async function my_name( ){
//   const man= await name()
//   console.log( "my name", man)
  
// }
// my_name()




// console.log(5=="5")  // true 
// console.log(5==="5")  //false



let n 
let m = null
// console.log(n)
console.log(m)