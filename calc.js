const readline = require('readline');
const operations = require('./operations.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`
Calc.js

Welcome to the node.js calculator app!
Version: 1.0.0

Usage: You will be prompted for two numbers, 
then asked to select your operation of choice.

`);

const doTheMath = (rl) => {
    rl.question('Enter the first number: ', x => {
        rl.question('Enter the second number: ', y => {
            rl.question(
                `
            Please select from the following options:
            
            [1] Addition (+)
            [2] Subtraction (-)
            [3] Multiplication (*)
            [4] Division (/)
            [5] Exponents (^)
            
            Enter your choice: `,
                choice => {
                    if(!operations.validateNumbers(x,y)) {
                        console.log('Only numbers are allowed.  Please restart the program and try again.')
                    } else {
                        switch(choice) {
                            case '1': 
                                console.log(`The sum of ${x} + ${y} is ${operations.add(x,y)}`);
                                break;
                            case '2': 
                                console.log(`The difference of ${x} - ${y} is ${operations.subtract(x,y)}`);
                                break;                    
                            case '3': 
                                console.log(`The product of ${x} * ${y} is ${operations.multiply(x,y)}`);
                                break;
                            case '4': 
                                console.log(`The quotient of ${x} / ${y} is ${operations.divide(x,y)}`);
                                break;
                            case '5': 
                                console.log(`The value of ${x} to the power of ${y} is ${operations.power(x,y)}`);
                                break;
                            default: 
                                console.log('Invalid number.  Please restart the program and select a valid number.');
                                break;
                        }
                    }
                    rl.question(`\nDo you want to do another calculation?  \nPress Y for yes and N for no. `, YorN => {
                        if(YorN=='Y' || YorN=='y'){
                            doTheMath(rl);
                        } else if (YorN=='N' || YorN=='n'){
                            rl.close();
                        } else {
                            console.log('Invalid selection.  Please restart the program to try again.');
                            rl.close();
                        }
                    })
                }
            )
        })
    })

    
}

doTheMath(rl);
