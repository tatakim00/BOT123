const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX ='K!';

var fs = require('fs');
var commandlist = fs.readFileSync('Kanna Kamui Help.txt', 'utf8');
var array=[];
array = require("./meme.json");
/*var meme = fs.readFileSync('meme.txt', 'utf8');*/
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
    if(message.content.startsWith(PREFIX + "aotmeme")){
        number = 19;
        var random = Math.floor (Math.random() * (number));
        const embed = new Discord.RichEmbed()
                    .setImage(array.aotmeme[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "fuoco")){
        number = 9;
        var random = Math.floor(Math.random()*(number));
                const embed = new Discord.RichEmbed()
                    .setImage(array.fuoco[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "kannakamui")){
        number = 21;
        var random = Math.floor(Math.random()*(number));
const embed = new Discord.RichEmbed()
                    .setImage(array.kannakamui[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "loli")){
        number = 32;
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
'https://data.whicdn.com/images/291726305/original.gif',
'https://thumbs.gfycat.com/HandsomeTallBorzoi-small.gif',
'https://media2.giphy.com/media/DaN3cl3l27MQw/giphy.gif',
'https://pa1.narvii.com/6094/435415ef882c4c8ca164af3d2b539e29944033ab_hq.gif',
'http://38.media.tumblr.com/ebb82f31ab54eb18e8678ae49cd0953e/tumblr_mj5pquKkSD1rgtl3ho1_500.gif',
'https://66.media.tumblr.com/tumblr_loio9oPBJ51qeb4jb.gif',
'https://pa1.narvii.com/6976/5bdb3e7ce8a48e77fc41b145ee468369445440abr1-440-330_hq.gif',
'https://pa1.narvii.com/6972/9858334bdd74415d5facf1ca2314bad29430cde5r1-500-360_hq.gif',
'https://pa1.narvii.com/6345/e9c29d9f4a31ba3235dc963b80a508e5f0a0bedf_hq.gif',
'https://data.whicdn.com/images/118844614/original.gif',
'https://thumbs.gfycat.com/AntiqueAjarCod-max-1mb.gif',
'https://i.pinimg.com/originals/73/c2/1b/73c21b14ce805359284463323934d611.gif',
'https://pa1.narvii.com/6504/cf5243c22df700e5b3abe1ed557c7d464767d9ad_hq.gif']

const embed = new Discord.RichEmbed()
                    .setImage(Array[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "bestemmie")){
        number = 14;
        var random = Math.floor (Math.random() * (number));
        const Array = ['https://media.tenor.com/images/d0137141bd1fbd6302afdf1c3f28e2ca/tenor.gif',
    'https://media1.tenor.com/images/d54a7b23ffe6dcb5aafd7c3674609ceb/tenor.gif',
'https://66.media.tumblr.com/cdd2bac16baf74e352a064c7500f9034/tumblr_pkmf9goxbl1tw0kwco3_500.gif',
'https://i.imgur.com/Shr4Bay.png',
'https://pics.me.me/quando-dalfondo-della-classe-parte-unagaradi-bestemmie-oformio-enessunoti-hainvitato-14945421.png',
'https://media0.giphy.com/media/ZwNfqKtZZoCE8/source.gif',
'https://dok7xy59qfw9h.cloudfront.net/506/137/717/100003009-1r2s7kh-h7ih6111nlho0p0/original/file.jpg',
'https://media.makeameme.org/created/bestemmie-bestemmie-in.jpg',
'https://scontent-lhr3-1.cdninstagram.com/v/t51.2885-15/e35/55952396_473050363235158_6935712941371556543_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&oh=32604f90035631a60e0b322a9ede8f88&oe=5E158BF9&ig_cache_key=MjAyNDI0OTI5MDIzMjA3NTkyNA%3D%3D.2',
'https://www.memecreator.org/static/images/memes/4612976.jpg',
'http://www.isarcastici4.it/immagini/umorismo/motu_masters_of_the_universe_memes/motu_meme_ita_bestemmia_orko_dio_creazione_michelangelo.jpg',
'https://dok7xy59qfw9h.cloudfront.net/881/026/954/710003014-1qp0t58-60e037coqrdk22f/original/file.jpg',
'https://i.ytimg.com/vi/1Q5F_S6xiAU/maxresdefault.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQClbsOzW16xPmtHyxJdg243ua9aZg9XCxigbICF7mhvmEowrmQ']

const embed = new Discord.RichEmbed()
                    .setImage(Array[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
     if(message.content.startsWith(PREFIX + "jojo")){
        number = 13;
        var random = Math.floor (Math.random() * (number));
        const Array = ['https://pbs.twimg.com/profile_images/536527339513856000/9K056IwV.jpeg',
    'https://media.tenor.com/images/df42eab81048012d949c4cf9a0648d0f/tenor.gif',
    'https://i.kym-cdn.com/photos/images/newsfeed/000/765/764/e5b.gif',
    'https://i.imgur.com/bn1ufCM.gif',
    'https://thumbs.gfycat.com/SeparateImpressiveAngelfish-size_restricted.gif',
    'https://ci.memecdn.com/7733298.gif',
    'https://media0.giphy.com/media/4wxde1p1yMg6c/giphy.gif',
    'https://ci.memecdn.com/7904314.gif',
    'https://images7.memedroid.com/images/UPLOADED848/5cae2185d0146.jpeg',
    'http://m.quickmeme.com/img/29/2921808074c1cb392ff951c9bcd27180f463c3494ddee8ab8f856b8ee8befc22.jpg',
    'https://memestatic.fjcdn.com/gifs/Jojo_a736c3_6351678.gif',
    'https://media2.giphy.com/media/JPgbfbcXxDr6E/giphy.gif',
    'https://gifimage.net/wp-content/uploads/2018/04/oh-my-god-jojo-gif-7.gif']

    const embed = new Discord.RichEmbed()
                    .setImage(Array[random])
                    .setFooter('Powered by pinco.il.mago')
                    .setTimestamp()
                    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "ahegao")){
        number = 24;
        var random = Math.floor (Math.random() * (number));
        const Array = ['https://i.pinimg.com/originals/59/23/92/59239242539059e06d28fa192b6538c3.gif',
    'https://images.sex.com/images/pinporn/2014/12/28/300/9762745.gif',
'https://data.whicdn.com/images/313116899/original.gif',
'https://i.pinimg.com/originals/f4/be/f0/f4bef084ec13910226c0ca91ba07ca17.gif',
'https://media1.tenor.com/images/ca67a563278acd790b512411ca672561/tenor.gif?itemid=14993233',
'https://media.giphy.com/media/yb9M8WaGrh12o/giphy.gif',
'http://ahegao.online/wp-content/uploads/2019/01/Boku-no-Yayoi-san-Episode-1-4.gif',
'https://i.pinimg.com/originals/91/37/21/913721dcd4e9863f203aa3ebfce48e9d.gif',
'https://img-hw.xvideos.com/videos/profiles/galleries/a1/60/66/strawberryjizz/gal1597707/pic_8_big.gif',
'https://pm1.narvii.com/6047/20e207c0a70124439586116e0faee66e12c074f0_hq.jpg',
'https://em.wattpad.com/e4a1c2699d1f8f863fdbce473822dbf8ec10cd4e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4c7a5f696f684d333978722d65413d3d2d3737353832333636392e3135626461653661333431396239613232383937333630353730302e676966?s=fit&w=720&h=720',
'https://i.gifer.com/8VVh.gif',
'http://i.imgur.com/t8HDKnJ.gif',
'https://data.whicdn.com/images/223369774/original.gif',
'https://ci.memecdn.com/6464742.gif',
'https://forum.level1techs.com/uploads/default/original/3X/8/9/89883dbca0b33c44a2001090d641689023660490.gif',
'https://us.rule34.xxx//images/2149/10e938f8aff8760f6caf90baf9f0ab5f2736d612.gif',
'https://data.whicdn.com/images/327142436/original.gif',
'https://media0.giphy.com/media/aRETBmVAMKEp2/source.gif',
'https://thumbs.gfycat.com/SomeKeenAsp-size_restricted.gif',
'https://i.redd.it/vaisq8t5rdw01.gif',
'https://steamuserimages-a.akamaihd.net/ugc/960842269462234672/25E7324248A0FE8DE24A73478E103337933A847F/',
'https://static1.fjcdn.com/thumbnails/comments/Mobilebull+used+roll+picturemobilebull+rolled+image+this+is+how+_abeaeca19c40a1375685f99e4471dcd8.gif',
'https://i.kym-cdn.com/photos/images/newsfeed/001/030/882/53b.gif']

const embed = new Discord.RichEmbed()
.setImage(Array[random])
.setFooter('Powered by pinco.il.mago')
.setTimestamp()
message.channel.send(embed)
}
if(message.content.startsWith(PREFIX + "ravioli")){
    number = 7;
    var random = Math.floor (Math.random() * (number));
    const Array = ['https://i.ytimg.com/vi/F9wpezqKFnA/maxresdefault.jpg',
'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aea27125-0c3d-4edc-a237-26e2ca8355b3/db7daeh-aef33a61-134d-40ea-b318-f1faa2b650f1.jpg/v1/fill/w_645,h_500,q_75,strp/kanna_kamui_meme_2__by_wcher999_db7daeh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvYWVhMjcxMjUtMGMzZC00ZWRjLWEyMzctMjZlMmNhODM1NWIzXC9kYjdkYWVoLWFlZjMzYTYxLTEzNGQtNDBlYS1iMzE4LWYxZmFhMmI2NTBmMS5qcGciLCJ3aWR0aCI6Ijw9NjQ1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ufGMoJ6EkOeE8xPMS18PXT4sLmySyNGgCLtGGmIBNGE',
'https://coubsecure-s.akamaihd.net/get/b177/p/coub/simple/cw_timeline_pic/2119e163952/1ead6e0cfa2e1f817d85a/big_1502032345_image.jpg',
'http://pm1.narvii.com/6768/97d0b6c9fb8ea6cfc47d54e27effb165ba938784v2_00.jpg',
'https://i.imgflip.com/3bje3n.jpg',
'https://pics.me.me/ravioli-ravioli-death-to-capitalism-lolis-32758821.png',
'https://i.kym-cdn.com/photos/images/original/000/613/346/63b.png']

    const embed = new Discord.RichEmbed()
    .setImage(Array[random])
    .setFooter('Powered by pinco.il.mago')
    .setTimestamp()
    message.channel.send(embed)
    }
    if(message.content.startsWith(PREFIX + "punch")){
        number = 13;
        var random = Math.floor (Math.random() * (number));
        const Array = ['https://thumbs.gfycat.com/BeautifulGregariousHare-size_restricted.gif',
    'https://media0.giphy.com/media/FyikNKBtz1lg4/giphy.gif',
'https://i.gifer.com/61i9.gif',
'https://thumbs.gfycat.com/SecondFeminineDuckbillcat-size_restricted.gif',
'https://cdn.weeb.sh/images/HJfGPTWbf.gif',
'https://media.giphy.com/media/yo3TC0yeHd53G/giphy.gif',
'https://thumbs.gfycat.com/ImperfectFrightenedFoal-size_restricted.gif',
'https://media.giphy.com/media/nOdUe5Fw7YK40/giphy.gif',
'https://i.imgur.com/kO1XFXM.gif',
'https://4.bp.blogspot.com/-Bvm7ecJd04I/WX6-5cGJhfI/AAAAAAAAB0Q/GsSNtuo2g7UxHK92h1wsjfIBBcZ4FpOpgCLcBGAs/s1600/tumblr_inline_o9kmdwsfUL1s2ua4d_500.gif',
'https://gifimage.net/wp-content/uploads/2017/09/anime-punch-gif-9.gif',
'https://thumbs.gfycat.com/KindDangerousAustralianfurseal-size_restricted.gif',
'https://media3.giphy.com/media/ABJSd2YGc5nlS/giphy.gif']

        const embed = new Discord.RichEmbed()
        .setImage(Array[random])
        .setFooter('Powered by pinco.il.mago')
        .setTimestamp()
        message.channel.send(embed)
        }
        if(message.content.startsWith(PREFIX + "slap")){
            number = 20;
            var random = Math.floor (Math.random() * (number));
            const Array = ['https://media1.giphy.com/media/LB1kIoSRFTC2Q/source.gif',
        'https://media3.giphy.com/media/9U5J7JpaYBr68/source.gif',
    'https://i.imgur.com/o2SJYUS.gif',
'https://media2.giphy.com/media/Zau0yrl17uzdK/source.gif',
'https://thumbs.gfycat.com/PersonalUnlinedAsiaticwildass-size_restricted.gif',
'https://media.giphy.com/media/fNdolDfnVPKNi/giphy.gif',
'https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif',
'https://media.giphy.com/media/trREN3ECv29y/giphy.gif',
'https://i.pinimg.com/originals/bf/ef/b4/bfefb401ed8f1f7a3fee62d76a2856a4.gif',
'http://electrohaxz.tk/media/img/anime-images/Nekos/gif/slap/slap_006.gif',
'https://static.fjcdn.com/gifs/+slap+2+more+here+wwwyoutubecomusersquabanimeand+here+wwwfacebookcompagessquab220040661488110refhl_08fdab_5160649.gif',
'https://media.indiedb.com/images/groups/1/25/24269/ezgif-3-42e7af267b.gif',
'https://i.pinimg.com/originals/b9/74/54/b97454d61d518852bef17e40703bb3fe.gif',
'https://i.redd.it/2cl0i46pk5k31.gif',
'https://data.whicdn.com/images/119597356/original.gif',
'https://i.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif',
'http://i.imgur.com/Y9nUZxc.gif',
'https://i.imgur.com/RW9789N.gif',
'https://data.whicdn.com/images/67416846/original.gif',
'http://pa1.narvii.com/6014/7e726b7889f0770f462b1e2edc98fbe86eb876c0_00.gif']

        const embed = new Discord.RichEmbed()
        .setImage(Array[random])
        .setFooter('Powered by pinco.il.mago')
        .setTimestamp()
        message.channel.send(embed)
        }
});

bot.login(process.env.BOT_TOKEN);