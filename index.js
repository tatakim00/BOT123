const Discord = require('discord.js');
const client = new Discord.Client();

function emoji (id){
    return clientInformation.emojis.get(id).toString ();

}
client.on('ready',() => {
    console.log("I'm ready to ban!");
})

client.on('message', message => {
    if(message.content === 'hello') message.reply('Hello Tatanudes <:zhoulamerda:608396991436685344>');
})
client.login(process.env.BOT_TOKEN);