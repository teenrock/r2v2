function xzdc_botmp(message,prefix,client,fs,path){

let warns = JSON.parse(fs.readFileSync(path.resolve(__dirname, ("../../data/xzdcbotmp.json"))));

if (message.content.startsWith(prefix + "xzdcmp")) {

if (message.channel.type === "dm") return;

var mentionned = message.mentions.users.first();

if(message.mentions.users.size === 0) {
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
} else {

    const args = message.content.split(' ').slice(1);
    const mentioned = message.mentions.users.first();

      if (message.mentions.users.size != 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
          if (args.slice(1).length != 0) {
            const date = new Date().toUTCString();
            if (warns[message.guild.id] === undefined)
              warns[message.guild.id] = {};
            if (warns[message.guild.id][mentioned.id] === undefined)
              warns[message.guild.id][mentioned.id] = {};
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
              warns[message.guild.id][mentioned.id]["1"] = {"message": args.slice(1).join(' '), time: date, user: message.author.id};
            } else {
              warns[message.guild.id][mentioned.id][warnumber+1] = {"message": args.slice(1).join(' '),
                time: date,
                user: message.author.id};
            }
            fs.writeFile(path.resolve(__dirname, ("../../data/xzdcbotmp.json")), JSON.stringify(warns), (err) => {if (err) console.error(err);});
            message.delete();
            message.author.send('Message envoyé à '+mentionned.tag+`: ${args.slice(1).join(' ')}`);
            //message.mentions.users.first().send(`**Message**` + " de " +`**${message.author.username}:**\n` + args.slice(1).join(' ') + `\n`)//**${message.guild.name}**
            message.mentions.users.first().send(args.slice(1).join(' '))
          } else {
            message.channel.send("Erreur mauvais usage: "+prefix+"botmp <user> <message>");
          }
        } else {
          message.channel.send("Erreur mauvais usage: "+prefix+"botmp <user> <message>");
        }
      } else {
        message.channel.send("Erreur mauvais usage: "+prefix+"botmp <user> <message>");
      }
  }
  
}

}
    module.exports = xzdc_botmp
