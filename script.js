const quiz = [ 
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']  
];

let score = 0;
// --------------------------------------------------------

for (let i = 0; i < quiz.length; i++) {
    let question = quiz[i][0];
    let answer = quiz[i][1];
    let response = prompt(question);

    if (response === answer) {
        score++;
    }
}

// --------------------------------------------------------

let html = `<h1>You got ${score} out of 4 questions correct</h1>`;
document.querySelector('main').innerHTML = html; 