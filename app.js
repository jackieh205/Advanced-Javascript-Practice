name = 'Jackie';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);

}
console.log('some text');
let avg = findAvg(20, 20);
console.log('the answer', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ["grapefruit", "cheeries", "mango"];
let leastFav;
function fruitfavePrint() {
    let favFruit = fruits[0];
    leastFav = fruits[2];
    console.log(favFruit);
    console.log(leastFav);

    function myFave() {
         
        favFruit = fruits
        console.log(favFruit);
        
    }

 

}

//myFave();
fruitfavePrint();


callMyName()
function callMyName (){
   
    console.log("Hello " + " "+  "Jackie")
}


var theClass = function (){
   
    alert("this class is hard");
}
theClass();