#! /usr/bin/env node
const { program } = require('commander')
const getBalance = require('./commands/getBalance')
const addBalance = require('./commands/addBalance')
const getChannelList = require('./commands/getChannelList')
const getAllChannelList = require('./commands/getAllChannelList')
const addChannel = require('./commands/addChannel')
const removeChannel = require('./commands/removeChannel')

program
      .version('0.0.1')
      .description('Welcome to the application.')

program
      .command('balance')
      .description('To get current Balance')
      .action(getBalance)

program
      .command('add-balance <balance>')
      .description('Add balance to your account')
      .action(addBalance)

program
      .command('tariff-package')
      .description('List of all the channels')
      .action(getChannelList)

program
      .command('get-tarrif-package-channel-list <category>')
      .description('List of all the channels')
      .action(getAllChannelList)

program
      .command('add-chennel <chennel>')
      .description('Add a new channel to your package')
      .action(addChannel)

program
      .command('remove-chennel <chennel>')
      .description('Remove channel from your package')
      .action(removeChannel)

program.parse(process.argv)