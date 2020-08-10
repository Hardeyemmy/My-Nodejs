const questions = [
    "What is your name?",
    "Which natonality are you?",
    "Which  country will you rather emigrate to?",
    "Are you a programmer?"
]


const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();

const answers = [];
process.stdin.on("data", data => {
   answers.push(data.toString().trim());

   if (answers.length < questions.length) {
       ask(answers.length);
   } else {
       process.exit();
   }
})

process.on("exit", () => {
        const [name, nationality, country] = answers;
        console.log(`
    
        Thank you ${name}, 

        ${nationality} developers are welcome in ${country}!
        
        `)
})