const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;

client.on('ready',() => {
    console.log("I'm ready to ban!");
})

client.on('message', message => {
    if(message.content === 'hello') message.reply('Hello Tatanudes');
})
client.login(token).catch(err => console.log(err));