const conf = new (require('conf'))()
const chalk = require('chalk')

function get () {
    let balance = conf.get('balance')

    if (!balance) {
        //initial balance 0
        balance = 0
    }

    //set balance in conf
    conf.set('balance', balance)

    console.log(
        chalk.green.bold(`Your Balance current is ${balance}`)
    )
}

module.exports = get