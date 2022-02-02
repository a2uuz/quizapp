// const quiz = [
// ['do you like me?', 'for real..'],
// ['would you die for me?', 'if you could!'],
// ['i do really wanna die', 'in peace']
// ];


// function app(game){
//     let ask = "";
//     for (let i = 0; i < game.length; i++) {
//         ask += prompt(`${game}`);
//     }
//     return ask;
// }

// document.querySelector('main')
// .innerHTML = `<ol>${app(quiz)}<ol>`

const quiz = [
['do you javascript?', 'for real..'],
['would you die for react?', 'if you could!'],
['do you really wanna learn Node..', 'in peace?']
];


// --------------------------------------------------------


function app(game){
    
    for (let i = 0; i < game.length; i++) {
        let ask = prompt(`${quiz[i][0]}, ${quiz[i][1]}`);
        let score = 0;
        if (ask.toLowerCase() === "yes") {
        score += 1;
        }else{
        score = `None :(`;
        }

    }
    return score;
}
// --------------------------------------------------------

document.querySelector('main')
.innerHTML = `You got ${app(quiz)} out of 3 questions correct`;