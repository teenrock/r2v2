function memberServQuit(member) {

  const Discord = require("./node_modules/discord.js");
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setThumbnail("http://teenanon.free.fr/teenrock/discordbot/pictures_res/default_avatar.png")
  .setTimestamp()
  .addField('Information Server',
            `**${member.user.username}** a quitté le serveur.`)
  .addField("Son ID est:", `\\${member}\n `)
  console.log(" ###########################\n ### INFORMATION SERVEUR ###\n ###########################\n");
  console.log(` ${member.user.username} vient de quitter le serveur.\n Son ID est ${member}\n`);
  //traff4DChan.send(embed);
  joinQuitChan.send(embed);;

}

module.exports = memberServQuit