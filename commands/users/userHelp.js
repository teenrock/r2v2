function userHelp(message, prefix, client) {

  const Discord = require("../../node_modules/discord.js");
  const embed = new Discord.RichEmbed()
  .setTitle("Aide Commandes Utilisateurs\n ﾠ")
  .setDescription("Toutes les commandes commande s'effectuent avec le prefix **!** sous la forme **!commande** ou **!commande @Utilisateur**\n ﾠ")
  .setColor(0x555A8B)
  .setThumbnail("http://teenanon.free.fr/teenrock/discordbot/pictures_res/info-logo.png")
  .addField("**Les différentes commandes disponibles sont:**", ` ﾠ`)
  .addField("bière", "Propose une bière au membre mentionné après la commande.")
  .addField("privbière", "Informe que le membre mentionné après la commande est privé de bière.")
  .addField("café", "Propose un café au membre mentionné après la commande.")
  .addField("thé", "Propose un thé au membre sélectionné après la commande.")
  .addField("chocolat", "Propose un chocolat au membre mentionné après la commande.")
  .addField("bisou", "Fait un gros bisou au membre mentionné après la commande.")
  .addField("calin", "Fait un gros calin au membre mentionné après la commande.")
  .addField("rose", "Offre une rose au membre mentionné après la commande.")
  .addField("love", "Regarde amoureusement le membre mentionné après la commande.")
  .addField("plove", "Similaire à la commande **love** (commande simple sans mention de pseudo).")
  .addField("cool", "Envoi une image d'un smiley faisant un signe cool de la main.")
  .addField("retard", "Informe avec une image de smiley que le membre mentionné après la commande est en retard. (message dynamique)")

  if (message.content == '!aide') {
  	message.channel.send(embed)
  }

}

module.exports = userHelp