const conf = new (require('conf'))()
const chalk = require('chalk')

function list () {
    let list = conf.get('channel-list')

    if (!list) {
        list = [{name:'basicChanel1', price: 0}, {name:'basicChanel2', price: 0}, {name:'basicChanel3', price: 0}]
        conf.set('channel-list', list)
    }

    if (list && list.length) {
        console.log(
            chalk.blue.bold('Channel List of your package.')
        )
        list.forEach((data, index) => {
            console.log(
                chalk.greenBright(`${index}. ${data.name}`)
            )
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any channel adde in your package.')
        )
    }
}

module.exports = list