const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) =>{

    if(message.content == 'Welcome'){
        message.reply('Benvenuti!');
    }
});

bot.login('NjI4MjI1MzE5Mjc4NDc3MzEy.XZYOeg.mlpAbBANKhJCgwKGuzO6PyNn-qo');