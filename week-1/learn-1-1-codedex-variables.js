// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: [Your Name]
// Date: [Date]
// ============================================
// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------
const firstName = "Eloni";
const favoriteColor = "Purple";
let currentLocation = "School";
let mood = "Tired";
console.log( firstName );
mood = "Exhausted";
console.log( mood )
// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------
let companyName = "Park Planet";
let foundingYear = 2025;
let isActive = true;
let fundingAmount;
console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);
// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------
let temp = 43;
let celcius = (temp-32)/1.8;
console.log(celcius);
// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------
let billAmount = 20.00;
let tipPercent = 10;
let tipAmount = billAmount * (tipPercent / 100);
let total = billAmount + tipAmount;
console.log(total)
// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------
let numberOfSongs = 30;
let avgSongLength = 3;
let totalMinutes = numberOfSongs * avgSongLength;
let hours = totalMinutes / 60;
console.log("There are " + numberOfSongs + " in this playlist.");
console.log("The average song length is " + avgSongLength);
console.log("This playlist is "+ totalMinutes + " minutes long or about " + hours);