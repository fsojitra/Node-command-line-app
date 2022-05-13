const conf = new (require('conf'))()
const chalk = require('chalk')

function add(chennel) {
    let allChennelList = conf.get('all-channel-list')
    let balance = conf.get('balance')
    let yourChannelList = conf.get('channel-list')

    let chennelList = []
    allChennelList.forEach((data, index) => {
        chennelList = chennelList.concat(data.channels)
    })

    let i = chennelList.map(i => i.name).indexOf(chennel);

    console.log(i, chennelList[i]);

    if (balance >= chennelList[i].price && yourChannelList.map(i => i.name).indexOf(chennel) === -1) {

        balance = balance - chennelList[i].price;
        yourChannelList.push(chennelList[i]);

        conf.set('balance', balance)
        conf.set('channel-list', yourChannelList)

        console.log(
            chalk.greenBright(`Channel ${chennelList[i].name} is added to your packege and your balance is now ${balance}`)
        )
    } else if (balance < chennelList[i].price) {
        console.log(
            chalk.greenBright(`Insufficient balance you have in you account to add the channel in your package!`)
        )
    } else if (yourChannelList.map(i => i.name).indexOf(chennel) > -1) {
        console.log(
            chalk.greenBright(`You already have this channel in you package!`)
        )
    }

}

module.exports = add