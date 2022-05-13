const conf = new (require('conf'))()
const chalk = require('chalk')

function add (balance) {
    let newBalance = conf.get('balance')

    if(isNaN(balance)) {
        console.log(
            chalk.green.bold('Please add number value!')
        )
    } else {
        newBalance = Number(newBalance) + Number(balance);

        conf.set('balance', newBalance)
    
        console.log(
            chalk.green.bold(`Balance ${balance} added successfully. `)
        )
    }

}

module.exports = add