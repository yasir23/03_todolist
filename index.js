#! /usr/bin/env node 
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`LETS DESCIPLINE YOURSELF \n`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let Todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer
        .prompt([{
            name: "TODO",
            type: "input",
            message: "what are your plans today, start todo?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "want to add more \n",
            default: false,
        },
    ]);
    const { TODO, addmore } = answers;
    loop = addmore;
    if (TODO) {
        Todos.push(TODO);
    }
    else {
        console.log(`please give valid todos`);
    }
}
console.log(Todos, ' \n');
