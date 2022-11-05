///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

var totalAcres = 0;

for (let i = 0; i <= 6; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}

console.log(totalAcres);

console.log("---------------------")

// Explanation: In this problem, I created a 'totalAcres' variable with a starting value of 0 since it must be initialized and will increase as the for loop goes through each array.  After that, I made a for loop that starts at index 0 and ends at index 6. This is because there are seven items in each of the arrays so the for loop will go through each of the items in all three arrays. In the for loop, I set totalAcres to plus equals (+=) each item in each array, which is demonstrated through the name of the array next to a square bracket with the letter representing the index of said array (i.e. fujiAcres[i]). Then, I console logged the 'totalAcres'.

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

var averageDailyAcres = totalAcres / 7;
console.log(averageDailyAcres);

console.log("---------------------")

// Explanation: In this problem, I created a 'averageDailyAcres' and set it to the previously created 'totalAcres' variable divided by 7 to find the average number of acres picked per day. Then, I console logged 'averageDailyAcres'.

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174
let days = 0

// CODE HERE

while (acresLeft > 0) {
    days++;
    acresLeft = acresLeft - averageDailyAcres;
}

console.log(days);

console.log("---------------------")

// Explanation: In this problem, I created a while loop that uses the provided variables 'acresLeft' and 'days'. In the while loop, I set the condition to make the loop run until the 'acresLeft' variable was less than 0. Each time the loop runs, the 'days' variable will be increased by one because the '++' operator. The 'acresLeft' variable will also decrease by the previous created variable 'averageDailyAcres'. The acresLeft will be updated because it is equaled to acresLeft variable minus the averageDailyAcres variable. So, it will decrease each time the loop runs. Then, I console logged the 'days' variable.

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

fujiTons = fujiAcres.slice(0, 7);
galaTons = galaAcres.slice(0, 7);
pinkTons = pinkAcres.slice(0, 7);

for (var i = 0; i <= 6; i++) {
    fujiTons[i] = fujiTons[i] * 6.5;
    galaTons[i] = galaTons[i] * 6.5;
    pinkTons[i] = pinkTons[i] * 6.5;
}

console.log("Fuji Tons: ", fujiTons);
console.log("Gala Tons:", galaTons);
console.log("Pink Tons: ", pinkTons);

console.log("---------------------")

// Explanation: In this problem, I set fujiTons, galaTons, and pinkTons to a shallow copy of fujiAcres, galaAcres, and pinkAcres respectively. Each of these sliced, shallow copies start at an index of 0 and end at an index of 6. Then, I created a for loop that that multiplied each item in the fujiTons, galaTons, and pinkTons arrays by a value of 6.5, which represents the amount of tons in each acres of the orchard. Then, I console logged the fujiTons, galaTons, and pinkTons variables.

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

for (let i = 0; i <= 6; i++) {
    fujiPounds += fujiTons[i] * 2000;
    galaPounds += galaTons[i] * 2000;
    pinkPounds += pinkTons[i] * 2000;
}

console.log("Fuji Pounds: ", fujiPounds);
console.log("Gala Pounds: ", galaPounds);
console.log("Pink Pounds: ", pinkPounds);

console.log("---------------------")

// Explanation: In this problem, I created a for loop starting from index 0 and ending at index 6. Using the provided, initialized variables 'fujiPounds', 'galaPounds', and 'pinkPounds', I set them to equal to their respective Tons values (fujiPounds, galaPounds, pinkPounds) multiplied by 2000 (the number of pounds in a ton). When written this way, each value in the Tons arrays is multiplied by 2000 and that product is added to the respective Pounds variable. Then, each new product is added to the Pounds variable every time the for loops run. Then, I console logged the fujiPounds, galaPounds and pinkPounds variables.

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log("Fuji Profit: ", fujiProfit);
console.log("Gala Profit: ", galaProfit);
console.log("Pink Profit: ", pinkProfit);

console.log("---------------------")

// Explanation: In this problem, I set each Profit variable to equal the product of their respective Pounds and Price variables. Then I console logged each Profit variable. 

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit;

console.log("Total Profit: ", totalProfit)

//Explanation: In this final problem, I created a 'totalProfit' variable and set it equal to the sum of all the profit variables (fujiProfit, galaProfit, and pinkProfit). Then, I console logged the total profit variable.