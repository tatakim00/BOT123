const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjI4MjI1MzE5Mjc4NDc3MzEy.XZYOeg.mlpAbBANKhJCgwKGuzO6PyNn-qo';

bot.on('ready',() => {
    console.log("I'm ready to ban!");
})

bot.on('message', message => {
    if(message.content === 'hello') message.reply('Hello Tatanudes');
})
bot.login(token);