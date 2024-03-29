import inquirer from "inquirer"

interface UserInput{
    transactionType: string;
    userID:string,
    userPin:number,
    accountType:string,
    amount:number;
}


const userInput:UserInput = await inquirer.prompt([
    {
        type:"input",
        name:"userID",
        message:"Enter user ID"
    },
    {
        type:"number",
        name:"userPin",
        message:"Enter your Pin"
    },
    {
        type:"list",
        name:"transactionType",
        choices:["Fast cash","Cash withdraw","Balance Inquiry"],
        message:"select your transaction"
    },
    {
        type:"amount",
        name:"amount",
        message:"Enter amount you want to withdraw",
        when(userInput){
            return userInput.transactionType === "Cash withdraw"
        }
    },
    {
        type:"list",
        name:"amount",
        choices:[1000,2000,5000,10000,20000,25000],
        message:"select amount you want to withdraw",
        when(userInput){
            return userInput.transactionType ==="Fast cash"
        } 
    },
]);

//making variable of user input data

const userID= userInput.userID;
const userPin= userInput.userPin;
const enteredAmount= userInput.amount;

if((userID && userPin)&& userInput.transactionType === "Balance Inquiry"){
    const userBalance = Math.floor(Math.random()*100000);
    console.log(`your current balance is Rs ${userBalance}\n`);
}else if(userID&& userPin){
    const userBalance2 =Math.floor(Math.random()*100000);
    if(userBalance2 > enteredAmount){
        console.log(`your account has been debited with Rs ${enteredAmount} and your remaining balance is ${userBalance2 - enteredAmount}`);
        
    }else {
        console.log(`\n unsufficent Balance`);
        
    }
}



