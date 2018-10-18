function botDMsReturn(message, client) {

  const Discord = require("./node_modules/discord.js");
  const bot = client;

  if (message.author.bot) return;

  const botDMs = `**${message.author.username}** sur **<@${bot.user.id}>** : ${message}`;
  const botDMlog = ` MSG sur ${bot.user.username}\n ${message.author.username} : ${message}\n`;
  
  //traff4DChan.send(botDMs)
  botPrivMsgs.send(botDMs)
  console.log(botDMlog)

}

module.exports = botDMsReturn