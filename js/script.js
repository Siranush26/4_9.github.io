/*Task 1
Ստեղծել երկու select , առաջինում մարզերն են, երկրորդում՝ քաղաքները։ 
Ամեն մարզ ընտրելիս երկրորդում պիտի մնան միայն այդ մարզի քաղաքները։ */

function dropdown(){
    let country=document.getElementById("input").value;
    if (country==="Armenia"){
        city=["Vanadzor","Erevan", "Gyumri"]
    }
    else if(country==="USA"){
        city=["Los Angeles","Washington","Glendel"]
    }
    else{
        city=[];
    }
    let string="";
   /*
    for(  let i=0;i<city.length;i++)
    {      
          
          string=string+"<option>"+city[i]+"</option>";
          
    }
  */
    city.forEach(function(value) {
    return string=string+"<option>"+value+"</option>";
});
    string="<select>"+string+"</select"
    document.getElementById("output").innerHTML=string
}


/*Task 2
Ստեղծել ֆունցկիա , getAvgAgeByColor անունով,  որը որպես արգումենտ ստանում է զանգված, որի ամեն անդամը օբյեկտ է որտեղ գրված է մարդու մասին ինֆորմացիա (անուն, տարիք, մազերի գույն) եվ ստանում է երկրորդ արգումենտ մազերի գույն։  Ֆունկցիան պետք է վերադարձնի միջին տարիքը այն մարդկանց ում մազերի գույնը համապատասխանում է երկրորդ արգումենտով փոխանցված գույնին։    getAvgAgeByColor([
        {name: "Joe", age: 13, hairColor: "red"}, 
        {name: "Mike", age: 10, hairColor: "brown"}, 
        {name: "Jane", age: 4, hairColor: "red"}, 
        {name: "Susan", age: 30, hairColor: "brown"}
    ], "brown"); 
   // պետք է վերադարձնի 20,  միջին տարիքը այն մարդկանց ում մազերի գույնը շագանակագույն է։
   */
function getAvgAgeByColor(array, color) {
    let filtered = array.filter(function (obj) {
        return obj.hairColor === color;
    });
    let ages = filtered.reduce(function (aggr, obj) {
        return aggr + obj.age;
    }, 0);

    return ages / filtered.length
}

console.log("Task 2"+"="+getAvgAgeByColor([
    { name: "Joe", age: 13, hairColor: "red" },
    { name: "Mike", age: 10, hairColor: "brown" },
    { name: "Jane", age: 4, hairColor: "red" },
    { name: "Susan", age: 30, hairColor: "brown" }
], "brown"))

// 2 tarberak

let arr = [
    { name: "Joe", age: 13, hairColors: "red" },
    { name: "Mike", age: 10, hairColors: "brown" },
    { name: "Jane", age: 4, hairColors: "red" },
    { name: "Susan", age: 30, hairColors: "brown" }
]

let color = arr.filter(function (arr) {

    return arr.hairColors == "brown"

}).map(function (arr) {

    return arr.age

})

let average = color.reduce(function (aggr, val) {
    return (aggr + val) / color.length

})

console.log("Task2 2 tarberak"+"="+average)



/*
Task 3
Ստեղծել reduce անունով ֆունկցիա, որը կաշխատի ճիշտ նույն ձև ինչպես Array.prototype.reduce()  մեթոդը։ 
   reduce([5, 9, 10], function(acc, val, i) {   // should return 24
         return acc + val;
    }, 0);
*/

function reduce(acc,val){
acc = [5, 9, 10];
let sum = 0;
for( val = 0; val < acc.length; val++) {
    sum += acc[val];
}
return sum
}

console.log("Task 3 without reduce"+"="+reduce())//24


let arrr=[5,9,10].reduce(function(ac,value){
    return ac+value ;
},0);

console.log("Task 3 with reduce"+"="+arrr)

/*Task 4 
Ֆունկցիա, որը կստանի տեքստային արժեք ու դրա միջից կգտնի այն տառը,
 որը մի անգամ է կրկնվում ու վերադարձնի այն։
 */

function singleOccurrence(str){
let s=str.split("")
for (let i=0; i<str.length;i++){
        s=str.charAt(i);
    
}
    return s.toUpperCase()
}

console.log("Task4"+" "+ JSON.stringify(singleOccurrence("EFFEAABbc"))) //"C"
console.log("Task4"+" "+JSON.stringify(singleOccurrence("AAAAVNNNNSS")))//"S" false-> "V"
console.log("Task4"+" "+JSON.stringify(singleOccurrence("S")))//"S"

/*
Task 5
Գրել ֆունկցիա removeAtIndex անունով, որը կստանա զանգված ու թիվ և կվերադարձնի նոր զանգված: 
Նոր զանգվածը կպարունակի առաջինի բոլոր արժեքները, բայց տրված թվով ինդեքսի արժեքը հեռացված կլինի: 
     removeAtIndex([5, 10, 15, 20], 2); // վերադարձնում է [5, 10, 20]


function removeAtIndex(arr,index){
  
   return arr.filter(function(val,i){
       return i !==index;
    })
    
}

alert(removeAtIndex([5, 10, 15, 20], 2)) //վերադարձնում է [5, 10, 20]
*/


