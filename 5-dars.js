// 1-masala

//1//

function addNumbers() {
    const num1 = Number(prompt("Birinchi sonni kiriting:"));
  
    const num2 = Number(prompt("Ikkkinchi sonni kiriting:"));
  
    const sum = num1 + num2;
  
    alert(` ${num1} va ${num2} yi'gindisi: ${sum}`);
  }


//2//
  const numbers = [7, 2, 3, 4, 5];
  const total = sumArray(numbers);

  function sumArray(arr) {
    let sum = 0;
  
    for (const num of arr) {
      sum += num;
    }
  
    return sum;
  }
    
  console.log("Arrayning yig'indisi:", total); 

  //3//

  let mixedArray = [1, -2, 3, -4, 5];

  function makeMusbat(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        arr[i] *= -1;
      }
    }
  
    return arr;
  }
  
  const positiveArray = makeMusbat(mixedArray);
  console.log("Musbat array:", positiveArray); 
  
  //7//
  let myArray = [8, 9, 3, 0];
  function changejuft(arr) {
    let firstEl = arr[0];
  
    if (firstEl % 2 !== 0) {
      firstEl += 1;
    } else {
      firstEl += 1;
    }
  
    arr[0] = firstEl;
  
    return arr;
  }
  
const modifiedArray = changejuft(myArray);

console.log("O'zgargan array:", modifiedArray); 


//6//
function calculateArifmetik(numbers) {
    const num1 = Number(prompt("Son kiriting:"));
    const num2 = Number(prompt("Son kiriting:"));
    const num3 = Number(prompt("Son kiriting:"));
    const numbers = [num1, num2, num3];
   
    let sum = 0;
    for (const number of numbers) {
      sum += number;
    }
    return sum / numbers.length;
  }
  
  const arithmeticMean = calculateArifmetik(numbers);
  console.log(`Uchta sonning orta arifmetigi: ${arithmeticMean}`);
  

  //2-masala//

  //1//

let array = [1, 2, 3, 4, 5];
let sum = array[0] + array[array.length - 1]; 
console.log(`Birinchi va oxirgi qiymatlar yig'indisi: ${sum}`); 

//2//

let numberlist = [6,7,9,10]
let maxNum = numberlist[0]

for( let i=0; i< numberlist.length; i++){
    if(maxNum< numberlist[i]){
        maxNum= numberlist
    }
}

console.log("Max number:"+ maxNum)

//3//
let originalArray = [1, 2, 3, 4, 5];
function birqiymatosh(arr, qiymat = 1) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] += qiymat;
    }
    return arr;
  }
  
  const scaledArray = birqiymatosh(originalArray); 
  console.log(scaledArray);

  //5//

  let numberList1 = [6,9, 12, 56]
  let numberList2 = [5, 6, 56, 33]


  for (let i= 0; i< numberList1.length; i++){
    for( let j=0; j< numberList2.length; j++){
        console.log(numberList2[j]);
    }
  }

//4//
const userInputNumber = prompt("Son kiriting:");

const number = parseInt(userInputNumber);

let divisibleNumbers = "";

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    divisibleNumbers += i + " "; 
  }
}

console.log( ${number}, ga bolinadigan sonlar bu: ${divisibleNumbers});
