const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX ='kk!';

function emoji (id){
    return clientInformation.emojis.get(id).toString ();

}
bot.on('ready',() => {
    console.log("I'm ready to send nudes!");
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "♡┆benvenuti")
    if(!channel)return
    channel.send(`Benvenuto ${member}<:kannakamui:608404704845889556>, siamo felici di accoglierti in ,**:cherry_blossom:𝕃𝕠𝕝𝕚𝕤𝕎𝕠𝕣𝕝𝕕:cherry_blossom:**.<a:zt:608309871896690689>
Non abusare delle bambine e buona permanenza! <:zhoulamerda:608396991436685344>
https://i.kym-cdn.com/photos/images/original/001/241/247/c04.gif`);
})

bot.on('message',message=>
{
if(message.content == 'aot meme')
const embed ={
    "image": {
        "url" : "https://i.kym-cdn.com/photos/images/original/001/241/247/c04.gif"
    }
};
message.reply(embed);
})

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'play':
        break ;
    }
})
bot.login(process.env.BOT_TOKEN);