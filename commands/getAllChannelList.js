const conf = new (require('conf'))()
const chalk = require('chalk')

function list (category) {
    let list = conf.get('all-channel-list')

    if (!list) {
        //all chennel list based on category
        list = [
            {
                lebel: 'entertainment',
                channels : [
                    { name: 'entertainmentChanel1', price: 10 },
                    { name: 'entertainmentChanel1', price: 10 },
                    { name: 'entertainmentChanel3', price: 10 }
                ]
            },
            {
                lebel: 'education',
                channels : [
                    { name: 'educationChanel1', price: 20 },
                    { name: 'educationChanel2', price: 20 },
                    { name: 'educationcChanel3', price: 20 }
                ]
            },
            {
                lebel: 'regional',
                channels : [
                    { name: 'regionalChanel1', price: 5 },
                    { name: 'regionalChanel2', price: 5 },
                    { name: 'regionalChanel3', price: 5 }
                ]
            },
            {
                lebel: 'sports',
                channels : [
                    { name: 'sportsChanel1', price: 25 },
                    { name: 'rsportsChanel2', price: 25 },
                    { name: 'sportsChanel3', price: 25 }
                ]
            }
        ]
        conf.set('all-channel-list', list)
    }

    if (list) {
        let i = list.map(i => i.lebel).indexOf(category);

        console.log(
            chalk.greenBright(`List of channel of`, category)
        )

        list[i].channels.forEach((data, index) => {
            console.log(
                chalk.greenBright(`${index}. Name : ${data.name} & Price : ${data.price}`)
            )
        })

    } else {
        console.log(
            chalk.red.bold('You don\'t have any channel adde in your package.')
        )
    }
}

module.exports = list