const readline = require('readline'); // require node readline module
const { stdin: input, stdout: output } = require('process');  //capture input / send output from process object


const askQuestions = () => {

  const rl = readline.createInterface({ input, output });

  rl.question(`hello, what is your name? (or nickname?) : `, (answer1) => {
    profile.name = answer1;
    console.log(`hi, ${answer1}, nice to meet you! \n`);
  
    rl.question('so..what do you eat for breakfast? : ', (answer2) => {
      profile.breakfast = answer2;
      console.log(`mmm... ${answer2} sounds tasty. \n`);
  
      rl.question(`what do you do for fun? : `, (answer3) => {
        profile.fun = answer3;
        console.log(`cool, i like ${answer3} too! \n`);
        
        rl.question(`what's the last band / show you went to see? : `, (answer4) => {
          profile.band = answer4;
          console.log(`oh yeah, i like ${answer4}, but their older stuff was better.  \n`);
        
          rl.question(`what is your biggest fear? : `, (answer5) => {
            profile.fear = answer5;
            console.log(`yeah, ${answer5} are too scary for me, too. \n`);
  
            rl.question(`what is your super power? : `, (answer6) => {
              profile.superPower = answer6;
              console.log(`that's great. the world needs more people like you, ${answer1}.  \n`);


              profile.sayBlurb();
  
              rl.close();
  
            });
  
          });
    
        });
  
      });
  
    });
  
  });

};

let profile = {

  sayBlurb() {
    console.log(`here is your personal profile: \n\nhi, my name is ${this.name} and i like to ${this.fun}. my favourite band is ${this.band}, my biggest fear is ${this.fear}, and my super power is ${this.superPower}. will you be my friend?\n`);
  }

};
askQuestions();




/*

r1.question('what do you eat for breakfast? ', (answer1) => {
  //.question expects a query and a callback (can handle some additional options too)
  //query will be printed to stdout and then question waits for a reponse
  //when a response is recieved, callback is invoked with user's input
    
    console.log(`great, you eat ${answer1} for breakfast.`);
    //callback -> do something with user input
  
    r2.question(`what is your name or nickname? `, (answer2) => {
      console.log(`hi, ${answer2}, nice to meet you!`);
  });
  
  r1.close();
  // closes the interface and relinguishes control of input / output streams
  
  });
  
  */