function privmsg(message,prefix,client){
  
var fs = require('fs');
let privmsg = JSON.parse(fs.readFileSync("./data/privmsg.json", "utf8"));
if (message.content.startsWith(prefix + "privmsg")){
if (message.channel.type === "dm") return;
var mentionned = message.mentions.users.first();
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);
if(message.mentions.users.size === 0) {
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
}else{
    const args = message.content.split(' ').slice(1);
    const mentioned = message.mentions.users.first();
    if (message.member.hasPermission('MANAGE_GUILD')){
      if (message.mentions.users.size != 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
          if (args.slice(1).length != 0) {
            const date = new Date().toUTCString();
            if (privmsg[message.guild.id] === undefined)
              privmsg[message.guild.id] = {};
            if (privmsg[message.guild.id][mentioned.id] === undefined)
              privmsg[message.guild.id][mentioned.id] = {};
            const msgnumber = Object.keys(privmsg[message.guild.id][mentioned.id]).length;
            if (privmsg[message.guild.id][mentioned.id][msgnumber] === undefined){
              privmsg[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
            } else {
              privmsg[message.guild.id][mentioned.id][msgnumber+1] = {"raison": args.slice(1).join(' '),
                time: date,
                user: message.author.id};
            }
            fs.writeFile("./data/privmsg.json", JSON.stringify(privmsg), (err) => {if (err) console.error(err);});
message.delete();
            message.channel.send(':warning: | **'+mentionned.tag+' à été averti**');
message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
          } else {
            message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
          }
        } else {
          message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
        }
      } else {
        message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
      }
    } else {
      message.channel.send("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**");
    }
  }
}}

module.exports = privmsg
