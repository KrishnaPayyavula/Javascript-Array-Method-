// Javascript Array method Examples

// 1. Concat Method
// the array concat method is used to join two or more arrays together as a new array(result) and without changing their initial values or array

let a = ['tosin', 'mayor', 'wunmi'],
    b = ['busayo', 'morayo', 'dupe'],
    c = a.concat(b);
    // result will be ['tosin', 'mayor', 'wunmi','busayo', 'morayo', 'dupe'];
    console.log(c);

// 2. the EVERY array Method
// the every array method return true or false as the result and it always has a callback function, it's used to check wether an item is part of an items e.g maybe a child is part of a family

    let numbers = [1, 2, 4, 5, 6];
    let result = numbers.every(isPositive);
    console.log(result)
    //reult = true
   
//    ps it will return TRUE as a result
   
//    callback function isPositive ps: the callback function can take in (item, index array)
function isPositive(items) {
    return items > 0;
}


// 3. the FILL array Method
// the fill array method is used to fill up an array with a particular values or value and it modify and array i.e it changes the original array

/* ex1 */    
let number1 = [1, 2, 3, 4, 5],
    number2 = [1, 2, 3, 4, 5],
    result1 =  number1.fill(0),
    result2 = number2.fill(6, 0, 3); //6 is the number to fill , while zero is the index to start from while 3 is the amount to fill 
    console.log(result1);
    //result = [0, 0, 0, 0, 0]
    console.log(result2);
    //result = [6, 6, 6, 4, 5];

/* ex2 */
function fillNum (n) {
    return Array(n).
           fill(0).
           map((_, index) => index +1)
}

console.log(fillNum(10));


// 4. the Filter array Method
// the filter array method takes a callback function and it returns a result which is true for the callback function by filtering the original array ps: it doesn't change the original array

/* ex1 */    
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = numbers.filter(evenNum);
// result = [0, 2, 4, 6, 8, 10]
console.log(result)

// function to generate even Number
function evenNum(item) {
    return item % 2 === 0;
}

/* ex2 */    
let persons = [
    {
        name: 'oluwatosin',
        age: 30  
    },

    {
        name: 'mayor',
        age: 20 
    },

    {
        name: 'wunmi',
        age: 18
    }

]

result =persons.filter((person) => {
    return person.age >= 20;
})

console.log(result);

// result = [{name: 'oluwatosin', age: 30}, {name: 'mayor', age: '20'}]


// 5. the Find array Method
// the array find method is used to look or check wether there is a particular item in the array as the name implies 'find';
// ps: it can also take a callback function

/* ex1 */  
persons = [
    {
        name: 'oluwatosin',
        age: 30  
    },

    {
        name: 'mayor',
        age: 20 
    },

    {
        name: 'wunmi',
        age: 18
    }

]

result = persons.find(findPerson)
age = persons.find(findPerson).age

// function find person
function findPerson(person){
    return person.name == 'oluwatosin'
}

console.log(result);
//{name: "oluwatosin", age: 30}
console.log(age);
//30



// 6. the array FINDINDEX(findIndex) Method
// the array find index method works in a similar way as the find array method just that it return the index in it's case
/* ex1 */
numbers = [1, 2, ,3 ,4 ,5, 6];
result = numbers.findIndex((value) => value === 2);
console.log(result);
// result = 1 //2 has an index of 1

// 7. the array FLAT method
// the array flat method is a type of array method that concat all subArrays into one array depending on the values input into in e.g (1 or 2) but it can also take (infinity) as a values to concat any n number of sub arrays into one
/* ex1 */
let subArrays = [1, [2, [3, [4, [5]]]]],
    concatResult = subArrays.flat(3);
    // result = [1, 2, 3, 4, [5]] ps; js is zero based
console.log(concatResult)
/* ex2 */
    concatResult = subArrays.flat(Infinity);
    console.log(concatResult);
    // result = [1, 2, 3, 4, 5] ps;


 // 8 the FOREACH array Method
// the forEach method is an array that is used to loop through an array and it takes in a callback fuction whhich takes in parameters (value, index, and the array which is called upon);
/* ex1 */
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number, index, array) => {
    result = number + '['+ index + ']';
    console.log(result);
});
/* ex2 */
numbers = [1, 2, 3, 4, 5, 1, 2, 1, 2, 3, 3, 3, 4, 5];
let count = {};
numbers.forEach((number) => {
    if(count[number]){
        count[number]++;
    }else{
        count[number] = 1;
    }
});
console.log(count);
// result = array.js:164 {1: 3, 2: 3, 3: 4, 4: 2, 5: 2}


// 9.  the Array.from method
// the Array.from  method is used to to convert a set of numbers, strings , object etc to an array , it takes (the var or container to convert , Number or a callback to convert it to a number or string etc)
/* ex1*/
numbers = '1234567890';
result = Array.from(numbers);
console.log(result); 
// result = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// to convert it to a number
result = Array.from(numbers, Number); //or
result = Array.from(numbers, converToNum);

function converToNum(x) {
  return  Number(x)
};
console.log(result);
// result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/* ex2*/
numbers = [1, 2, 3, 4, 5, 1, 2,3 ,1 ,3 ,2 ,5 ,3 ,4 ,4];
let noMultiple = new Set(numbers);
console.log(noMultiple);
// result = {1, 2, 3, 4, 5};
result = Array.from(result);
console.log(result);
// result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


// 10. the INCLUDE array Method 
//  the include array method is kinda similar to the the every array method , it's used to check wether an item is available in a set of items , it  returns true or false
/* ex1*/
numbers = [1,3,4,5,];
result = numbers.includes(2);
console.log(result);
// result = false
result = numbers.includes(5);
console.log(result);
// result = true


// 11. the INDEXOF(indexOf)/LASTINDEXOF(lastIndexOf)
// the INDEXOF(indexOf)/LASTINDEXOF(lastIndexOf) array method is used to check for the index of an item in a set of items and it returns the idex of the item when it's available and -1 if it's doesn't exist ps: if the item appear twice in the set of items it return the first indexof while the LASTINDEXOF(lastIndexOf) returns the last index of the item that appear twice.
/* ex1 */
let names  = ['tosin', 'mayor', 'wunmi', 'dupe'];
result = names.indexOf('wunmi');
console.log(result);
//result = 2
/* ex2 */
result = names.indexOf('morayo');
console.log(result);
//result = -l
/* ex3 */
names = ['tosin', 'mayor', 'wunmi', 'dupe', 'wunmi', 'mayor'];
result = names.indexOf('wunmi');
console.log(result);
//result = 2
/* ex4 */
result = names.lastIndexOf('wunmi');
console.log(result);
// result = 4

// 12. the Array.isArray Method
// the Array.isArray method is used to test or check if a var or an item is an array  ps; the isArray is a sub-class of of the Array class so is Array.isArray
/* ex1 */
names = ['tosin', 'mayor', 'wunmi'];
let items = 'pencil biro paper';
numbers = '12344';
result = Array.isArray(names);
console.log(result);
//result = true;
result = Array.isArray(items);
console.log(result);
//result = false
result = Array.isArray(numbers);
console.log(result);
//result = false;

// 13. the array Join Method
// the array join method concatenate all the items in an array into a string , and uses the (,) as a default separator of the srtring
/* ex1 */
names = ['tosin', 'mayor', 'wunmi'];
result  = names.join();
console.log(result);
// result =  tosin,mayor,wunmi


/* ex2 */
result = names.join(' - ');
console.log(result);
// result = tosin - mayor - wunmi

// 14. the map function array method
// the map funtion array takes in a calllback function and it's a non mutating array i.e it doesn't change the original value from which it's modified 
/* ex1 */
numbers = [1 , 2, 3, 4, 5, 6];
result = numbers.map((num, index, arry) => {
    return num * 2;
});
console.log(result);
// result = [2, 4, 6, 8, 10, 12]
/* ex2 */ 
numbers = ['1', '2', '3', '4', '5'];
result = numbers.map(Number);
console.log(result)
// result =  [1, 2, 3, 4, 5]

// 15. the pop array Method
// the pop array pop out the last item in the array as the name implies, and return the item pop out incase you 've got something to do with it
/* ex1 */
numbers = [1, 2, 3, 4, 5];
result = numbers.pop();
console.log(result);
// result = 5 // the number that was pop out
console.log(numbers);
//result = [1, 2, 3, 4];


//16. the push array method
// the push array method usually push in new items into the array , and return the new length of the array
/* ex1 */
numbers = [1, 2, 3, 4, 5, 6];
result = numbers.push(7, 8, 9 , 10);
console.log(result);
// result = 10;
console.log(numbers);
// result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//17. the reduce method
// the reduce method takes in the items in an array and reduce it to a single value, it takes in a callback function and an initial value , while the callback takes in accumulator which is the initial value, the value, index and the array which is called upon (acc, valu, indexx, arra)
/* ex1 */
numbers = [1, 2, 3, 4 , 5];
result = numbers.reduce(callBack, 0);
function callBack(accum, value, index, arr) { 
    return accum + value
};
console.log(result);
// result = 15;

/* ex2 */
let product = [
    {
        item: 'laptop',
        unit: 3,
        unitPrice: 1500
    },

    {
        item: 'desktop',
        unit: 2,
        unitPrice: 1000
    },

    {
        item: 'phone',
        unit: 5,
        unitPrice: 500
    }
]

result = product.reduce(callback, 0); //ps: the 0 is optional as the redcuce method will take it as 0, i ghuess
function callback(acc, product) {
    return acc + (product.unit * product.unitPrice );
}
console.log(result);
// result = 9000;

// 18. the reverse array method
// the reserve array method is used to reverse the items in an array as the name inplies and it changes the original array i.e it mutates it
/* ex1 */
numbers = [1, 2, 3, 4, 5];
result = numbers.reverse();
console.log(result);
// [5, 4, 3, 2 ,1];
console.log(numbers)
// [5, 4, 3, 2 ,1];
// or if you don't want it to mutate the original array we use the spread method
let newArr = [...numbers].reverse();
console.log(newArr);
// result should be [5, 4, 3 ,2, 1] but due to the initial example above you can see the effect if  you clear the above example


// 19. the shift array Method
// the shift array method is the opposite of the pop array method that's its pop out the first item unlike the pop method which pop out the last item
/* ex1 */
numbers = [1, 2, 3 ,4];
result = numbers.shift();
console.log(result);
// result = 1
console.log(numbers);
// result = [2, 3, 4];

//20. the slice Method;
// the slice array method doesn't mutates the original array unlike the splice method , it takes in 2 parameter the starting index and the last index of which it wouldn't slice the last one
/* ex1 */
numbers = [1, 2, 3, 4 ,5, 6];
result = numbers.slice(3);
console.log(result);
//result = [4, 5, 6];
result = numbers.slice(1, 3)
console.log(result);
//result = [2, 3];


//21. the some array Method
// the some method returns true or false , it check if the condition given is true for the array, it takes in a callback function
/* ex1 */
numbers = [1, 2, 3, 4, 5, 6];
result = numbers.some((num) => {
   return num > 5
});
console.log(result);
// result = true;
result = numbers.some((num) => {
    return num > 6
});
console.log(result);
// result = false;


// 22. the sort array Method
//  the sort array method help sorts the items in array by default in an ascending order i.e from the smallest but this is easy for strings by default it converts the items to string first , when it comes to number we use a callback function
/* ex1 */
names = ['tosin', 'mayor', 'wunmi', 'dupe'];
result = names.sort();
console.log(result);
//result = ["dupe", "mayor", "tosin", "wunmi"];

/* ex2 */
numbers = [29, 15, 78, 2, 56, 90]; //if we use the sort method without the callback it will not sort them properly
result = numbers.sort(sortFun);
function sortFun(a, b) {
    return a - b;

    // coonditions   a -b will be in ascending order but b - a will be in descending order
    // if a - b > 0 .... b will come first
    // if a - b < 0 ... a wii come first
    // if a - b = 0 ... nothing will change 
};
console.log(result);
// result = [2, 15, 29, 56, 78, 90]

//23. the splice array method
// the array splice method can takes in three parameters (the index where to start,  number to remove, numbers to add); ps it use to modify the original array unlike the slice method which doesn't
/* ex1 */
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let say we want to remove 2, 3, 4
result = numbers.splice(1, 3);
console.log(result);
//result = [2, 3, 4] ;
console.log(numbers); //you will see it will change the array
//result = [1, 5, 6, 7, 8, 9];

/* ex2 */ //to add new numbers
numbers = [1, 2, 3, 12, 12, 24, 7, 8, 9];
result = numbers.splice(3, 3, 4, 5, 6);
console.log(result); //it will return the splice number
//result = [12, 12, 24];
console.log(numbers);
// result = [1, 2, 3, 4, 5, 6, 7, 8, 9]


//24.the unshift array Method
//the unshift array method add item(items) to the beginning of an array unlike the push method which add item(items) to the back of an array , and it's returns the total length of the array
/* ex1 */
numbers = [3, 4 ,5];
result = numbers.unshift(1, 2); // it will return the total length of the array 
console.log(result);
//result = 5;
console.log(numbers); //it will return the new numbers at the beginning plus the old ones
//result = [1, 2, 3, 4, 5];





