
const n = 6; // number of days forward
// get output location on document to append within list
const output = document.getElementsByTagName("ul");
// Intl.DateTimeFormat Options
const options = { weekday: 'long'}; // vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);

document.getElementById('today').innerHTML = `Today is ${todaystring}. `;
//To change the innerHTML property of an existing element.
//This line of code uses an existing variable that has already 
//selected an element and changes its innerHTML property value.

// next n days
for (let i = 1; i <= n; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);//sum i to get next day


	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
	item = document.createElement("li"); // list item <>
	item.textContent = nextdaystring;
	output[0].appendChild(item);
}


// To change the inline CSS style of an element.
// This line of code changes the text-align CSS property of the selected element.
// article.style.textAlign = 'right';







//Check Your Understanding

// const DAYS = 6;
// const LIMIT = 30;
// let studentReport = [11, 42, 33, 64, 29, 37, 44];

// //for loop
// for (let i = 0; i < studentReport.length; i++) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
// }
// // for each
// studentReport.forEach(function(item){
//     if (item < LIMIT) {
//         console.log(item);
//     }
// });

// //while 
// let i = 0;
// while (i < LIMIT) {
//     if (studentReport[i] < LIMIT){
//         console.log(studentReport[i]);
//     }
//     i++;
// }

// //for in
// for (item in studentReport) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
// }






// // reusable!
// myInfo = {
//     name: "Brother T",
//     photo: "images/photo.jpg",
//     favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
//     hobbies: ["Reading", "Fishing", "Camping"],
//     placesLived: [
//       {
//         place: "Rexburg, ID",
//         length: "5 years",
//       },
//       {
//         place: "Ammon, ID",
//         length: "3 years",
//       },
//       {
//         place: "Sandy, UT",
//         length: "1 year",
//       },
//     ],
//   };
//   const foodsElement = document.querySelector("#favorite-foods");
//   const placesElement = document.querySelector("#places-lived");
//   // requires a list, and a callback that will produce an html string for each item in the list
//   // returns a string of html
//   function generateListMarkup(list, templateCallback) {
//     const htmlList = list.map(templateCallback);
//     return htmlList.join("");
//   }
//   // requires an food string
//   // returns that string embedded in HTML markup
//   function foodsTemplate(food) {
//     return `<li>${food}</li>`;
//   }
  
//   // requires an place string
//   // returns that string embedded in HTML markup
//   function placesTemplate(place) {
//     return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
//   }
  
//   foodsElement.innerHTML = generateListMarkup(
//     myInfo.favoriteFoods,
//     foodsTemplate
//   );
//   placesElement.innerHTML = generateListMarkup(
//     myInfo.placesLived,
//     placesTemplate
//   );