const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjI4Mjc0MjIzOTc4MTE5MTY4.XZYg-Q.-p0lBYC16Ffo1bdsNfeA2L7qijY';

bot.on('ready',() => {
    console.log("I'm ready to ban!");
})

bot.on('message', message => {
    if(message.content === 'hello') message.reply('Hello Tatanudes');
})
bot.login(token);