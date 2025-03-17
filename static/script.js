let x = 5;
let y = 7;


let z = x + y;


console.log(z);


let A = "Hello ";
let B = "world!";

let C = A + B;


console.log(C);


function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);}

SumNPrint(x, y);  
SumNPrint(A, B); 

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
  for (let i = 0; i < arr.length; i++) 
    {
    if (arr[i] === "Banana") 
    {
      alert("Found Banana in the array!");
    }
  }
}

findTheBanana(L1);
findTheBanana(L2);

let L3 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L4 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBananaForEach(arr) {
  arr.forEach(function(item) {
    if (item === "Banana") {
      alert("Found Banana using forEach!");
    }
  });
}

findTheBananaForEach(L3);
findTheBananaForEach(L4);


function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting;
  
    if (h >= 0 && h < 5) {
      greeting = "Good night";
    } else if (h < 12) {
      greeting = "Good morning";
    } else if (h < 18) {
      greeting = "Good afternoon";
    } else if (h < 20) {
      greeting = "Good evening";
    } else {
      greeting = "Good night";
    }
  
    let greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.innerHTML = `${greeting}, I am Florence Liu`;
    }
  }
  
  if (window.location.href.indexOf("index.html") !== -1 || 
      window.location.pathname === "/" ||
      window.location.pathname === "/index.html") 
      {
        greetingFunc();}