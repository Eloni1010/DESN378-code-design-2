// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: [Your Name]
// Date: [Date]
// ============================================
// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
let num = Math.random();
if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
let hour = 9;
if (hour < 12) {
  console.log("Good morning 🌞, Time to get up, make some coffee, and take a shower!");
}
// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// -------------------------------------------
let hour = 17;
if (hour < 12) {
  console.log("Good morning 🌞, Time to get up, make some coffee, and take a shower!");
} else {
  console.log("Good afternoon ☁️, Time to make some tea, do some homework, and listen to some music.");
}
// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
let ph = 9
if (ph > 7) {
  console.log("Basic");
} else if (ph < 7) {
  console.log("Acidic");
} else {
  console.log("Neutral");
}
// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
let question = "Should I eat chocolate when I get home?";
let answer = Math.floor(Math.random() * 10);
if (answer = 1) {
  console.log (`Question: ${question}
  Answer: Yes - definitely.`);
} else if (answer = 2) {
  console.log (`Question: ${question}
  Answer: It is decidedly so.`);
} else if (answer = 3) {
  console.log (`Question: ${question}
  Answer: Without a doubt.`);
} else if (answer = 4) {
  console.log (`Question: ${question}
  Answer: Reply hazy, try again.`);
} else if (answer = 5) {
  console.log (`Question: ${question}
  Answer: Ask again later.`);
} else if (answer = 6) {
  console.log (`Question: ${question}
  Answer: Better not tell you now.`);
} else if (answer = 7) {
  console.log (`Question: ${question}
  Answer: My sources say no.`);
} else if (answer = 8) {
  console.log (`Question: ${question}
  Answer: Outlook not so good.`);
} else {
  console.log (`Question: ${question}
  Answer: Very doubtful.`);
}
// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------
let aqi ="59";
if (aqi > 0 && aqi < 50){
  console.log("Good");
} else if (aqi > 51 && aqi < 100) {
console.log("Moderate")
}  else if (aqi > 101 && aqi < 150){
console.log(`Unhealthy (Sensitive Groups)`);
} else if (aqi > 151 && aqi < 200){
  console.log("Unhealthy");
} else if (aqi > 201 && aqi < 300){
  console.log("Very Unhealthy");
} else {
  console.log("Hazardous")
}
// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------
let player = 2;
let computer = Math.floor(Math.random() * 3);
if (computer === 0 && player === 0){
  console.log("Tie");
} else if (computer === 0 && player === 1){
  console.log("You Win!");
} else if (computer === 0 && player === 2){
  console.log("You lose...");
} else if (computer === 1 && player === 1){
  console.log("Tie");
} else if (computer === 1 && player === 0){
  console.log("You lose...");
} else if (computer === 1 && player === 2){
  console.log("You Win!");
} else if (computer === 2 && player === 2){
  console.log("Tie");
} else if (computer === 2 && player === 1){
  console.log("You lose...");
} else {
  console.log("You Win!");
}