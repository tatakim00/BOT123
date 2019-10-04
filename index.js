const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX ='kk!';

var fs = require('fs');
var commandlist = fs.readFileSync('Kanna Kamui Help.txt', 'utf8');

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
        
        var ArrayGif =(
        'https://i.imgur.com/H6kfgP7.gif',
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
        'http://37.media.tumblr.com/c48924c62d16c191260166a30ae394e7/tumblr_n48hezByEP1sg146vo1_250.gif',
        'https://i.kym-cdn.com/photos/images/newsfeed/000/586/078/d61.gif');/*= new String (random);*/
        
        const embed = new Discord.RichEmbed()
                    .setImage(ArrayGif[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)

            /*switch(random){
                case 1: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://i.imgur.com/H6kfgP7.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                };
                case 2: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://media3.giphy.com/media/GyChnsTnX8bDi/giphy.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                };
                case 3: {const embed = new Discord.RichEmbed()
                    .setImage("https://cdn.myanimelist.net/s/common/uploaded_files/1452670440-e83dfccf7c336129d27c54ccd4d83242.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                };
                case 4: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://i.kym-cdn.com/photos/images/original/001/241/247/c04.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                };
                case 5: {
                    const embed = new Discord.RichEmbed()
                    .setImage("http://25.media.tumblr.com/7a30e9bf8a4eba2cf1f466de90f82471/tumblr_ms3dt2Hz5A1rzjb4go1_500.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 6: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://media0.giphy.com/media/xNqHay7nIhWoM/giphy.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 7: {
                    const embed = new Discord.RichEmbed()
                    .setImage("http://25.media.tumblr.com/7a30e9bf8a4eba2cf1f466de90f82471/tumblr_ms3dt2Hz5A1rzjb4go1_500.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 8: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://i.imgflip.com/2rg19t.jpg")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 9: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEKeP6hnhmI5AJucOjB-cJ_3hIfqHAlOI0x149nvc2kI-7E08")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break; 
                }
                case 10: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaWeI8pJrOFcO-EHygFDmnJkYBKcB0QZi6WgikJp2ziG_7KUu5Q")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 11: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OLnljxg7uezdx3t1UDSgezvtINwBl5_WtVs0F1q1ioKK_JAQ5A")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 12: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://i.kym-cdn.com/photos/images/newsfeed/000/641/238/b99.jpg")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 13: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://i.kym-cdn.com/photos/images/original/000/586/391/df3.jpg")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 14: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_I5It5BQK4PNfcGqxjVvoLhxWihi1itME-I8nOzrUvEH8LLNC")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 15: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/131/532/71d.png")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;  
                }
                case 16: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://i.imgur.com/fqXUlkc.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 17: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://data.whicdn.com/images/212845263/original.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break; 
                }
                case 18: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAryzNCyNrYv4UFPpcpg_pFQp9HLARnzKZenYI6CZ9IggvN4wu")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break; 
                }
                case 19: {
                    const embed = new Discord.RichEmbed()
                    .setImage("http://37.media.tumblr.com/c48924c62d16c191260166a30ae394e7/tumblr_n48hezByEP1sg146vo1_250.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break;
                }
                case 20: {
                    const embed = new Discord.RichEmbed()
                    .setImage("https://i.kym-cdn.com/photos/images/newsfeed/000/586/078/d61.gif")
                    .setFooter("Powered by pinco.il.mago")
                    .setTimestamp()
                    message.channel.send({embed})
                    break; 
                }
            }*/
    }
});


bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'play':
        break ;
    }
})
bot.login(process.env.BOT_TOKEN);