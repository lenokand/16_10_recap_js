let numbers = [6,9,1,15,20];
numbers.push(2);
numbers.pop()
numbers.splice(3, 1, 56)

numbers.unshift(1)
let newArr = numbers.concat([1,2,3])
console.log(newArr)
console.log(numbers)
console.log(addValues(numbers));


function addValues(numbers){
    let sum = 0;

    // for (let i=0; i<numbers.length; i++){

    // }
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
};

const h1Elements = document.getElementsByTagName("h1");
console.log(h1Elements[0]);

const h1 = document.querySelector("h1");
console.log(h1);

const elem = document.querySelector(".red");


let currentAge; 
do{
    currentAge = +prompt("What is your age?");
} while(isNaN(currentAge) || currentAge <=0 );

let retireAge;
do{
    retireAge = +prompt("At what age would you like to retire?");
} while(isNaN(retireAge) || retireAge <=0 || (retireAge - currentAge) <=0 );


let leftYears = retireAge - currentAge;

alert(`You have ${leftYears} ${leftYears == 1? "year" :"years"} left until you can retire.
    It's ${findYear()}, so you can retire in ${findYear() + leftYears}`)


function findYear(){
    currentYear = new Date().getFullYear();
    console.log(currentYear);
    return currentYear
}

