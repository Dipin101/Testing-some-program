// //Coding Challenge 1

// let Mark = { 
//     'mass': 240,
//     'height': 140,

// }
// let John = { 
//     'mass': 200,
//     'height': 100,
// }
// let markBMI, johnBMI
// let high 
// markBMI = Mark['mass']/(Mark['height']*Mark['height'])
// johnBMI = John['mass']/(John['height']*John['height'])

//  console.log('Mark BMI = '+markBMI)
//  console.log('John BMI = '+johnBMI)

// // if( markBMI>johnBMI ) {
// //     high = true
// // } else {
// //     high = false
// // }   

// // alert('Is Mark\'s BMI higher than John?')
// // console.log('Is Mark\'s BMI higher than John?')
// // if(high === true){
// //     console.log(high)
// // } else {
// //     console.log(high)
// // }

// //if wanna make short
// high = markBMI>johnBMI
// console.log('Is Mark\'s BMI higher than John?'+ high)


//Coding Challenge 2

// let John = [89, 120, 103] 
// let Mike = [116, 94, 123]
// let Mary = [97, 134, 105]
// let sum1 = 0
// let sum2 = 0
// let sum3 = 0
// let avgJohn, avgMike, avgMary, message

// for(let i=0; i < 3; i++) {
//     sum1 += John[i]
//     sum2 += Mike[i]
//     sum3 += Mary[i]
// }

// avgJohn = sum1 / 3
// avgMike = sum2 / 3
// avgMary = sum3 / 3

// console.log('avgJohn: '+avgJohn)
// console.log('avgMike: '+avgMike)
// console.log('avgMary: '+avgMary)

// function winner(avgJohn, avgMark, avgMary) {
//     if(avgJohn > avgMark && avgMary < avgJohn){
//         message = 'John Wins'
//         console.log(message)
        
//     } else if( avgJohn < avgMark && avgMary < avgMark ){
//         message = 'Mark Wins'
//         console.log(message)
//     } else if( avgJohn < avgMary && avgMary > avgJohn ) {
//         message = 'Mary Wins'
//         console.log(message)
//     }
//     else{
//         message = 'It\'s a draw'
//         console.log(message)
//     }
// }

// winner(avgJohn,avgMike,avgMary)


//Coding Challenge 3

// let restaurant = [124, 48, 268]
// let tips = 0
// let tip = []
// let total = []

// function tipCalculator(restaurant) {
// restaurant.forEach(x => {
//     if(x < 50){
//         tips = x*0.2
//         x = x + tips
//         total.push(x)
//         tip.push(tips)
//     } else if (x > 50 && x < 200) {
//         tips = x*0.15
//         x = x + x*0.2
//         total.push(x)
//         tip.push(tips)
//     } else {
//         tips = x*0.1
//         x = x + x*0.2
//         total.push(x)
//         tip.push(x)
//     }
// });
// console.log(tip)
// console.log(total)
// }
// tipCalculator(restaurant)

//Coding challenge 5

//Coding Challenge 1

// let Mark = { 
//     'mass': 240,
//     'height': 140,
//     calcBMI: function(){
//         this.bmi = this.mass /(this.height*this.height)
//         return this.bmi
//     } 
// }
// let John = { 
//     'mass': 200,
//     'height': 100,
//     calcBMI: function(){
//         this.bmi = this.mass /(this.height*this.height)
//         return this.bmi
//     } 
// }
// let markBMI = Mark.calcBMI()
// let johnBMI = John.calcBMI()

//  console.log('Mark BMI = '+markBMI)
//  console.log('John BMI = '+johnBMI)
 
// function higher(markBMI, johnBMI){

//     if( markBMI > johnBMI) {
//     console.log('Mark\'s BMI higher than John by '+ (markBMI - johnBMI))
//     }
//     else if( markBMI < johnBMI) {
//     console.log('John\'s BMI higher than Mark by '+ (johnBMI - markBMI))
//     } 
//     else {
//     console.log('They both have the same BMI')
//     }
// }
// higher(markBMI, johnBMI)

//Coding Challenge 6

// let johnAvgTip, markAvgTip
// let obj={ 
//     'John':{
//     'name': 'John Smith',
//     'restaurant': [124, 48, 268, 180, 42],
//     tipCalculator: function() {
//         let tips = 0
//         let tip = []
//         let total = []
//         this.restaurant.forEach(x => {
//             if(x < 50){
//                 tips = x*0.2
//                 x = x + tips
//                 total.push(x)
//                 tip.push(tips)
//             } else if (x >= 50 && x < 200) {
//                 tips = x*0.15
//                 x = x + tips
//                 total.push(x)
//                 tip.push(tips)
//             } else {
//                 tips = x*0.1
//                 x = x + tips
//                 total.push(x)
//                 tip.push(tips)
//             }
//         })
//         console.log('John total tip stored in array: '+tip)
//         console.log('John total stored in array: '+total)
//         let sum =0
//         for(let i=0;i<tip.length;i++){
//             sum += tip[i]
//         }
//         johnAvgTip = sum/tip.length
//         }
//     },

//     'Mark':{
//         'name': 'John Smith',
//         'restaurant': [77, 375, 110, 45],
//         tipCalculator: function() {
//             let tips = 0
//             let tip = []
//             let total = []
//             this.restaurant.forEach(x => {
//                 if(x < 100){
//                     tips = x*0.2
//                     x = x + tips
//                     total.push(x)
//                     tip.push(tips)
//                 } else if (x >= 100 && x < 300) {
//                     tips = x*0.1
//                     x = x + tips
//                     total.push(x)
//                     tip.push(tips)
//                 } else {
//                     tips = x*0.25
//                     x = x + tips
//                     total.push(x)
//                     tip.push(tips)
//                 }
//             })
//             console.log('Mark total tip stored in array: '+tip)
//             console.log('Mark total tip stored in array: '+total)
//             let sum =0
//             for(let i=0;i<tip.length;i++){
//                 sum += tip[i]
//             }
//             markAvgTip = sum/tip.length
            
//             }
//         },
// }    

// obj['John'].tipCalculator()
// obj['Mark'].tipCalculator()

// if(johnAvgTip > markAvgTip)
// {
//     console.log('Average tip for John is higher by '+johnAvgTip)
// }
// else if(johnAvgTip < markAvgTip)
// {
//     console.log('Average tip for Mark is higher by '+markAvgTip)
// }


//Hoisting

// function abc(){
//     a+=10
//     console.log(a)
// }
// var a=20
// abc()   

//lexical scoping
// let a = 'Hello'
// first()

// function first() {
//     let b = 'HI'
//     second()

//     function second(){
//         let c = 'Hey'
//         console.log(a+' '+b+' '+c)
//     }
// }

//This keyword


let date = new Date()
let currentYear = date.getFullYear()

// calculateAge(1985)

// function calculateAge(year) {
//     console.log(currentYear - year)
//     console.log(this)
// }

// var john = {
//     'name': 'John',
//     'yearOfBirth': 1990,
//     calculateAge: function(){
//         console.log(this)
//         console.log(currentYear - this.yearOfBirth)

//         function innerFunc(){
//             console.log(this)
//         }
//         innerFunc()
//     }
// }

// john.calculateAge()

// var mike = {
//     'name': 'Mike',
//     'yearOfBirth': 1984,
// }
// mike.calculateAge = john.calculateAge
// mike.calculateAge()

//find second largest number
// let num = [4,5,9,6,7,8]
// let largest, secondLargest
// largest = num[0]
// secondLargest = num[0]


// for(let i=0; i<num.length; i++) {
//     if(num[i] > largest){
//         secondLargest = largest
//         largest =  num[i]
//         continue
//     }
//     if(num[i] > secondLargest && num[i]<largest){
//         secondLargest = num[i]
//     }
// }
// console.log(secondLargest)

//Reverse a string or number
// let s = 1234
// let rev
// try{
// rev = s.split("").reverse().join("");
// console.log(rev)
// }
// catch(err){
//     console.log(err)
// }

// let a = -5
// try {
//     if(a > 0) throw "Yes"; 
//     else if(a < 0) throw "Negative error";
//     else throw "Zero Error"
// } 
// catch(err) {
//         console.log(err)
// } 


//tallest girls in group
// let a = [1,2,3,4,4]
// let tallest, count
// count = 0
// tallest = a[0]
// for(let i=0;i<a.length;i++){
//     if(a[i] > tallest){
//         tallest = a[i]
//     }
// }
// for(let i=0;i<a.length;i++) { 
//     if(a[i] == tallest){
//         count++
//     }
// }
// console.log(count)

