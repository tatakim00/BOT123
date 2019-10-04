const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX ='kk!';

var fs = require('fs');
var commandlist = fs.readFileSync('Kanna Kamui Help.txt', 'utf8');
var meme = fs.readFileSynch('meme.txt', 'utf8');
function emoji (id) { return clientInformation.emojis.get(id).toString (); }

bot.on('ready',() => { console.log("I'm ready to send nudes!"); } )

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "♡┆benvenuti")
    if(!channel)return
    channel.send(`Benvenuto ${member}<:kannakamui:608404704845889556>, siamo felici di accoglierti in ,**:cherry_blossom:𝕃𝕠𝕝𝕚𝕤𝕎𝕠𝕣𝕝𝕕:cherry_blossom:**.<a:zt:608309871896690689>
Non abusare delle bambine e buona permanenza! <:zhoulamerda:608396991436685344>`);
const embed = new Discord.RichEmbed()
                    .setImage("https://i.kym-cdn.com/photos/images/original/001/241/247/c04.gif")
                    channel.send({embed})
});


bot.on('message', message =>{
    if (message.content.startsWith(PREFIX + "help") || message.content.startsWith(PREFIX + "commands")) 
    {
        const embed = new Discord.RichEmbed()
        .setColor('#6D466B')
        .setTitle('**Comandi**')
        .setDescription(commandlist)
        .setFooter("Powered by pinco.il.mago")
        message.channel.send(embed)   
};
});

bot.on('message', message =>{
    if(message.content.startsWith(PREFIX + "aot meme")){
        number = 20;
        var random = Math.floor (Math.random() * (number));
        
        /*= new String (random);*/
        
        const embed = new Discord.RichEmbed()
                    .setImage(meme[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "fuoco")){
        number = 7;
        var random = Math.floor(Math.random()*(number));
        const ArrayGif=['https://media1.giphy.com/media/yRnA9pPlLZOY8/source.gif',
        'https://mondogif.altervista.org/wp-content/uploads/2017/10/%E2%80%9CQuesta-%C3%A8-benzina-io-mi-d%C3%B2-fuoco%E2%80%9D-in-GIF-animata-2.gif']
    }
});

bot.login(process.env.BOT_TOKEN);