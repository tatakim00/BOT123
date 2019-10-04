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
        'https://66.media.tumblr.com/49db575ffcab064198fa0dd006ac7038/tumblr_ook968xrUc1w8pxjzo1_400.gifv',
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
'https://media.giphy.com/media/NRVCgNCn52SAg/giphy.gif',
'https://i.imgur.com/8gzGyA8.gif',
'https://78.media.tumblr.com/59d50dd40e77c1f6b56de7a6b0b4d706/tumblr_omvtee2v7J1smw5dno1_640.gif',
'https://i.pinimg.com/originals/0f/22/89/0f2289dbc014468d3c9538a22586c68d.gif',
'https://media1.tenor.com/images/27cca72328a67a9a4be7210faaf3c380/tenor.gif?itemid=14364933',
'https://media1.tenor.com/images/27cca72328a67a9a4be7210faaf3c380/tenor.gif?itemid=14364933',
'https://66.media.tumblr.com/da2641bdf6a65f15f9fd348695ce5985/tumblr_pc8fdmWPUK1xuvhj0o7_250.gifv',
'https://78.media.tumblr.com/e57006b59e602501dcc17db8eafd056a/tumblr_okpm9aNK4V1v8jcbro1_500.gif',
'https://78.media.tumblr.com/e57006b59e602501dcc17db8eafd056a/tumblr_okpm9aNK4V1v8jcbro1_500.gif',
'https://steamuserimages-a.akamaihd.net/ugc/857222376538740034/B20C9D65A55495FB832BCA077F1FF12D828C297B/',
'https://media.tenor.com/images/4fbd3ed28b84782922b6d92257b900bf/tenor.gif',
'https://media0.giphy.com/media/7emmvIS55aOT6/giphy.gif',
'https://66.media.tumblr.com/95213606b8ecc023e9823ee7e7a382f1/tumblr_opujjc3TQZ1vpo36po8_400.gifv',
]

const embed = new Discord.RichEmbed()
                    .setImage(Array[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "loli")){
        number = 20;
        var random = Math.floor(Math.random()*(number));
        const Array=['https://media3.giphy.com/media/gUvLYSSMguiSk/source.gif',
    'https://media.giphy.com/media/O38XJW2fOclCo/giphy.gif',
'https://steamuserimages-a.akamaihd.net/ugc/32981755975008833/5BFAC28E6DEF1447D55455ECB7E2B60B303614CE/',
'https://gifimage.net/wp-content/uploads/2017/09/anime-loli-gif-9.gif',
'https://data.whicdn.com/images/60403350/original.gif',
'https://media2.giphy.com/media/lop8rMAJv0VfG/source.gif',
'https://pa1.narvii.com/6108/f3518e0f4f59932a96458d3ae1fe7a38cddfcaed_hq.gif',
'https://thumbs.gfycat.com/ClassicExcellentDuck-size_restricted.gif',
'https://i.pinimg.com/originals/52/c4/d5/52c4d55c27725df1b0a35178ad7cbc08.gif',
'https://image.myanimelist.net/ui/G-Sm6d0qIwQxUGHIp-m2WGWUJGNTIW4Mae6mbs6M4hHetQ6LacRU6lYM4YoDmdWBybpMWCw0JuU2f4t5gB5Y2-3yQljU29RZATu9-mV2UjgFw-ULAMTsm1eueeD8i8I-',
'http://cdn.lowgif.com/full/84514ebca112b7aa-why-lolis-anime-related-disqus.gif',
'https://i.pinimg.com/originals/94/ff/51/94ff51793ab56ddcd846096044823924.gif',
'http://giphygifs.s3.amazonaws.com/media/jUg8D7Yy0Qi4w/giphy.gif',
'https://i.pinimg.com/originals/67/01/e2/6701e20a1cfe0233294d8a668206add7.gif',
'https://i.pinimg.com/originals/79/20/1d/79201dca73519acbc259591fabbc2dc3.gif',
'https://i.imgur.com/VUuoZfa.gif?noredirect',
'https://media1.tenor.com/images/6125c9e6fb1dbb4fd23cf6db578702da/tenor.gif?itemid=14065051',
'https://media1.tenor.com/images/3102194c3ee2124d988a167dc4e79a0d/tenor.gif?itemid=10993798',
'https://steamuserimages-a.akamaihd.net/ugc/854974895409495071/171225AFD44336CA1DE09A855750F677E4434E19/',
'https://data.whicdn.com/images/291726305/original.gif'
]

const embed = new Discord.RichEmbed()
                    .setImage(Array[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
});

bot.login(process.env.BOT_TOKEN);