function newMember(member) {

  const Discord = require("./node_modules/discord.js");

  const newUser = member.user;
  const newuserRoleID_1 = '414977767034060811';
  const roleName1 = member.guild.roles.find('id', newuserRoleID_1);
  const newMemberRmsg = `**${newUser.username}**, le rôle **${roleName1.name}** vous a été attribué`;
  var accueil_msg = ` ﾠ\n**#####################################################
###    Bienvenu(e) sur le serveur ${member.guild.name} !    ###
#####################################################**\n`;
  accueil_msg2 = `:elephant:  **Nouveau membre: \`${member.user.username}\`**  :elephant:\n\n`;

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setThumbnail("http://teenanon.free.fr/teenrock/discordbot/pictures_res/default_avatar.png")
    .setTimestamp()
    .addField('Information Serveur',
              `**${member.user.username}** vient d'entrer sur le serveur !`)
    .addField("Son ID est:", `**\\${member}**\n `)
  console.log(` #####################################################
  ### INFORMATION SERVEUR ###
  #####################################################\n
 ${member.user.username} vient d'entrer sur le serveur !\n Son ID est ${member}\n
 Le rôle ${roleName1.name} a été attribué à **${newUser.username}**\n`);
  
  newUser.send(`${accueil_msg}`);
  member.addRole(roleName1);
  joinQuitChan.send(embed);
  setTimeout(function() {
    accueil.send(`${accueil_msg}\n${accueil_msg2}`)
    .then(msg=> {
      setTimeout(function() {
        accueil.send(`${newMemberRmsg}`).then(msg=> {
          setTimeout(function() {
            msg.edit(`${newMemberRmsg}\n\n**Bon séjour parmi nous ${newUser} !**`)
          }, 2 * 1000);
        })
      }, 2 * 1000);
    })
  }, 2 * 1000);

}

module.exports = newMember
