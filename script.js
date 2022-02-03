// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
    ['How many planets are in the Solar System?', '8'],
    ['How many continents are there?', '7'],
    ['How many legs does an insect have?', '6'],
    ['What year was JavaScript created?', '1995']
];

// 2. Store the number of questions answered correctly 

let score = 0;
let right = [];
let wrong = [];

// --------------------------------------------------------
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < quiz.length; i++) {
    let question = quiz[i][0];
    let answer = quiz[i][1];
    let response = prompt(question);

    if (response === answer) {
        score++;
        right.push(question);
    } else {
        wrong.push(question);
    }
}
/* 4. This function Loops through an array then 
builds and returns the final list items
*/

function list(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

// --------------------------------------------------------
// 5. Displays the number of correct answers to the user

let html = `
<h1>You got ${score} out of 4 questions correct</h1>
 <h2>Right One's:</h2>
 <ol> ${list(right)} </ol>

 <h2>Wrong One's:</h2>
  <ol> ${list(wrong)} </ol>
`;
document.querySelector('main').innerHTML = html;