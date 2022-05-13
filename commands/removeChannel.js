const conf = new (require('conf'))()
const chalk = require('chalk')

function remove(chennel) {
    let yourChannelList = conf.get('channel-list')

    let i = yourChannelList.map(i => i.name).indexOf(chennel)

    if (i === -1) {
        console.log(
            chalk.greenBright(`You don't have this ${yourChannelList[i].name} in your terrif plan!`)
        )
    } else {
        yourChannelList.splice(i, 1)
        conf.set('channel-list', yourChannelList)
        console.log(
            chalk.greenBright(`Chennel ${yourChannelList[i].name} is removed from your terrif plan!`)
        )
    }

}

module.exports = remove