const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX ='kk!';

var fs = require('fs');
var commandlist = fs.readFileSync('Kanna Kamui Help.txt', 'utf8');
var meme = fs.readFileSync('meme.txt', 'utf8');
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
        var Array = ['https://i.imgur.com/H6kfgP7.gif',
        'https://media3.giphy.com/media/GyChnsTnX8bDi/giphy.gif',
        'https://cdn.myanimelist.net/s/common/uploaded_files/1452670440-e83dfccf7c336129d27c54ccd4d83242.gif',
        'https://i.kym-cdn.com/photos/images/original/001/241/247/c04.gif',
        'http://25.media.tumblr.com/7a30e9bf8a4eba2cf1f466de90f82471/tumblr_ms3dt2Hz5A1rzjb4go1_500.gif',
        'https://media0.giphy.com/media/xNqHay7nIhWoM/giphy.gif',
        'http://25.media.tumblr.com/7a30e9bf8a4eba2cf1f466de90f82471/tumblr_ms3dt2Hz5A1rzjb4go1_500.gif',
        'https://i.imgflip.com/2rg19t.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEKeP6hnhmI5AJucOjB-cJ_3hIfqHAlOI0x149nvc2kI-7E08',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaWeI8pJrOFcO-EHygFDmnJkYBKcB0QZi6WgikJp2ziG_7KUu5Q',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OLnljxg7uezdx3t1UDSgezvtINwBl5_WtVs0F1q1ioKK_JAQ5A',
        'https://i.kym-cdn.com/photos/images/newsfeed/000/641/238/b99.jpg',
        'https://i.kym-cdn.com/photos/images/original/000/586/391/df3.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_I5It5BQK4PNfcGqxjVvoLhxWihi1itME-I8nOzrUvEH8LLNC',
        'https://i.kym-cdn.com/photos/images/newsfeed/001/131/532/71d.png',
        'https://i.imgur.com/fqXUlkc.gif',
        'https://data.whicdn.com/images/212845263/original.gif',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAryzNCyNrYv4UFPpcpg_pFQp9HLARnzKZenYI6CZ9IggvN4wu',
        'http://37.media.tumblr.com/c48924c62d16c191260166a30ae394e7/tumblr_n48hezByEP1sg146vo1_250.gif ',
        'https://i.kym-cdn.com/photos/images/newsfeed/000/586/078/d61.gif']
    
        
        const embed = new Discord.RichEmbed()
                    .setImage(array[random])
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