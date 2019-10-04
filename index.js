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
        const Array = ['https://i.imgur.com/H6kfgP7.gif',
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
                    .setImage(Array[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "fuoco")){
        number = 7;
        var random = Math.floor(Math.random()*(number));
        const Array=['https://media1.giphy.com/media/yRnA9pPlLZOY8/source.gif',
        'https://mondogif.altervista.org/wp-content/uploads/2017/10/%E2%80%9CQuesta-%C3%A8-benzina-io-mi-d%C3%B2-fuoco%E2%80%9D-in-GIF-animata-2.gif',
    'https://www.gifmania.it/Gif-Animate-Manga-Anime/Immagini-Animate-Pokemon/Gif-Animati-Pokemon-Di-Fuoco/Magmar/Magmar-81925.gif',
'https://instagram.ffra1-1.fna.fbcdn.net/v/t51.2885-15/e35/54512199_2526952367376308_3091587691246637381_n.jpg?_nc_ht=instagram.ffra1-1.fna.fbcdn.net&se=8&oh=a4e0538d7c6e307e4c5f09561a021bc9&oe=5E0F7900&ig_cache_key=MjAxNDcwMzU1MTQ4NTY0NzE4MA%3D%3D.2',
'https://cdn-img-n.facciabuco.com/14/q40w68dpkv-quando-ti-stai-facendo-un-toast-ma-mandi-a-fuoco-la-cattedrale_a.jpg',
'https://scontent-frx5-1.cdninstagram.com/vp/b618f2b26ffd0e2d7e7fbf2967dcfbfb/5DA6A59E/t51.2885-15/e35/64794869_312903036133016_3031424548634999424_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&se=8&ig_cache_key=MjA4MzQ1OTg5MDk5NTA2OTk4Mw%3D%3D.2',
'https://media.comicbook.com/2018/12/black-clover-asta-1150891-1280x0.jpeg']

                const embed = new Discord.RichEmbed()
                    .setImage(Array[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "tata")){
        const embed = new Discord.RichEmbed()
            .setImage('https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/c4.0.1432.1432a/s320x320/70424516_390508398296924_6050714930377840220_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=108&oh=c733683c46c572c5dccfd04195d33760&oe=5E0FF38D&ig_cache_key=MjEyOTc3NjIwMDgwNDY5OTg0OQ%3D%3D.2.c')
            .setFooter('Powered by pinco.il.mago')
            .setTimestamp()
            message.channel.send(embed)

    }
    if(message.content.startsWith(PREFIX + "kanna kamui")){
        number = 16;
        var random = Math.floor(Math.random()*(number));
        const Array=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6H3LdGwK2xWzbw8nnQfUXgrsQPYzU1omv6RltOaHVDnbVprRBQ',
    'https://media0.giphy.com/media/WcEvIajIk332g/giphy.gif',
'http://pa1.narvii.com/6518/be1713884a76ccad3fba3b6ab2f1d7e825be1e09_hq.gif',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LJHtNbZB_QxEZxqy5kErQiZFfJkaOw0BtYyNBtc7cU1pYxt9',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7IZ9RcmFN2lA0VxkNF_qfMq9DVXHS9DGyq6VpoalCXcJw3AvWw',
'https://78.media.tumblr.com/59d50dd40e77c1f6b56de7a6b0b4d706/tumblr_omvtee2v7J1smw5dno1_640.gif',
'https://i.pinimg.com/originals/0f/22/89/0f2289dbc014468d3c9538a22586c68d.gif',
'https://media1.tenor.com/images/27cca72328a67a9a4be7210faaf3c380/tenor.gif?itemid=14364933',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIP5DkLQ25sVt4ED0yxsTDW5iO3sOq3g9zGqNspLoj0jAepMT6',
'https://66.media.tumblr.com/da2641bdf6a65f15f9fd348695ce5985/tumblr_pc8fdmWPUK1xuvhj0o7_250.gifv',
'https://78.media.tumblr.com/e57006b59e602501dcc17db8eafd056a/tumblr_okpm9aNK4V1v8jcbro1_500.gif',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4ArxTjbY-fP9o8vR86GLZm16_jBFpcArt-97eGkF9O-owfxXEw',
'https://steamuserimages-a.akamaihd.net/ugc/857222376538740034/B20C9D65A55495FB832BCA077F1FF12D828C297B/',
'https://media.tenor.com/images/4fbd3ed28b84782922b6d92257b900bf/tenor.gif',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyH8bGtqA5UFH6gyp4rdl1LSffKH3r51APsaqEOt73zIagBBOhQ',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpgFEZGFRvdLw5iKPB5qysHOVI7Z0CKGlfm7crYl_4ajPQOfZJeg',
]

const embed = new Discord.RichEmbed()
                    .setImage(Array[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});

bot.login(process.env.BOT_TOKEN);