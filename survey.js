const readline = require('readline'); // require node readline module 
const { stdin: input, stdout: output } = require('process');  //capture input / send output from process object

const rl = readline.createInterface({ input, output });
//readline createInterface method sends prompts for user input to stdout 
//reads user input from stdin 
//createInterface is a constructor class!

rl.question(`hello, what is your name? (or nickname?) `, (answer1) => {
  console.log(`hi, ${answer1}, nice to meet you!`);

  rl.question('so..what do you eat for breakfast? ', (answer2) => {
    console.log(`mmm... ${answer2} sounds tasty.`);

    rl.question(`what do you do for fun? `, (answer3) => {
      console.log(`cool, i like ${answer3} too!`);
    

    rl.close();
    
    });

  });

});




// r1.question('what do you eat for breakfast? ', (answer1) => {
//   //.question expects a query and a callback (can handle some additional options too)
//   //query will be printed to stdout and then question waits for a reponse
//   //when a response is recieved, callback is invoked with user's input
    
//     console.log(`great, you eat ${answer1} for breakfast.`);
//     //callback -> do something with user input
  
//     r2.question(`what is your name or nickname? `, (answer2) => {
//       console.log(`hi, ${answer2}, nice to meet you!`);
//   });
  
//   r1.close();
//   // closes the interface and relinguishes control of input / output streams
  
//   });
  