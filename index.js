const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

bot.on('ready',() => {
    console.log("I'm ready to ban!");
})

bot.on('message', message => {
    if(message.content === 'hello') message.reply('Hello Tatanudes');
})
bot.login(token).catch(err => console.log(err));