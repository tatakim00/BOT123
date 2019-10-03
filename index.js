const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX ='!';

function emoji (id){
    return clientInformation.emojis.get(id).toString ();

}
client.on('ready',() => {
    console.log("I'm ready to send nudes!");
})

client.on('guildMemberAdd', message => {
    const channel = member.guild.channels.find(channel => channel.name === "♡┆benvenuti")
    if(!channel)return
    channel.send(`Benvenuto ${member}, siamo felici di accoglierti in ,:cherry_blossom:𝕃𝕠𝕝𝕚𝕤𝕎𝕠𝕣𝕝𝕕:cherry_blossom. Non abusare delle bambine e buona permanenza! <:zhoulamerda:608396991436685344>`);
})
client.login(process.env.BOT_TOKEN);