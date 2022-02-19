const readline = require('readline'); // require node readline module
const { stdin: input, stdout: output } = require('process');  //capture input / send output from process object

const rl = readline.createInterface({ input, output });
//readline createInterface method sends prompts for user input to stdout
//reads user input from stdin
//createInterface is a constructor class!


let profile = {}

rl.question(`hello, what is your name? (or nickname?) : `, (answer1) => {
  profile.name = answer1;
  console.log(`hi, ${answer1}, nice to meet you! \n`);

  rl.question('so..what do you eat for breakfast? : ', (answer2) => {
    console.log(`mmm... ${answer2} sounds tasty. \n`);

    rl.question(`what do you do for fun? : `, (answer3) => {
      console.log(`cool, i like ${answer3} too! \n`);
      
      rl.question(`what's the last band / show you went to see? : `, (answer4) => {
        console.log(`oh yeah, i like ${answer4}'s older stuff  \n`);
      
        rl.question(`what is your biggest fear? : `, (answer5) => {
          console.log(`yeah, ${answer5} is too scary for me, too. \n`);

          rl.question(`what is your super power? : `, (answer4) => {
            console.log(`that's great. the world needs more people like you, ${answer1}.  \n`);

            rl.close();

          });

        });
  
      });

    });

  });

});

// console.log(profile);



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
  