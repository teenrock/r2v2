function modo_mp(message,prefix,client,fs,path){

let warns = JSON.parse(fs.readFileSync(path.resolve(__dirname, ("../../data/modobotmp.json"))));
if (message.content.startsWith(prefix + "mp")){
if (message.channel.type === "dm") return;
var mentionned = message.mentions.users.first();
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Modérateur` sur ce serveur**").catch(console.error);
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
            fs.writeFile(path.resolve(__dirname, ("../../data/modobotmp.json")), JSON.stringify(warns), (err) => {if (err) console.error(err);});
message.delete();
            message.channel.send('Message envoyé à '+mentionned.tag);
//message.mentions.users.first().send(`**Message**` + " de " +`**${message.author.username}:**\n` + args.slice(1).join(' ') + `\n`)//**${message.guild.name}**
message.mentions.users.first().send(`**${message.guild.name}**\n`+`**Message de ${message.author.username}: **` + args.slice(1).join(' '))
          } else {
            message.channel.send("Erreur mauvais usage: "+prefix+"mp <user> <message>");
          }
        } else {
          message.channel.send("Erreur mauvais usage: "+prefix+"mp <user> <message>");
        }
      } else {
        message.channel.send("Erreur mauvais usage: "+prefix+"mp <user> <message>");
      }
    } else {
      message.channel.send("**:x: Vous n'avez pas la permission `Modérateur` sur ce serveur**");
    }
  }
}

  if (message.content.startsWith(prefix+"viewmp")||message.content===prefix+"viewmp") {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Modérateur` sur ce serveur**").catch(console.error);
    const mentioned = message.mentions.users.first();
    const args = message.content.split(' ').slice(1);
    if (message.member.hasPermission('MANAGE_GUILD')){
      if (message.mentions.users.size !== 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
          try {
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
              message.channel.send("**"+mentioned.tag+"** n'a aucun message enregistré :eyes:");
              return;
            }
          } catch (err) {
            message.channel.send("**"+mentioned.tag+"** n'a aucun message enregistré :eyes:");
            return;
          }
          let arr = [];
          arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** messages :eyes:");
          for (var warn in warns[message.guild.id][mentioned.id]) {
            arr.push(`**${warn}** - **"`+warns[message.guild.id][mentioned.id][warn].message+
            "\"** message envoyé par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
          }
          message.channel.send(arr.join('\n'));
        } else {
          message.channel.send("Erreur mauvais usage: "+prefix+"viewmp <user> <message>");
          console.log(args);
        }
      } else {
        message.channel.send("Erreur mauvais usage: "+prefix+"viewmp <user> <message>");
      }
    } else {
      message.channel.send("**:x: Vous n'êtes pas autorisé à utiliser cette commande sur ce serveur**");
    }
  }


  if (message.content.startsWith(prefix+"clearmp")||message.content===prefix+"clearmp") {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `Modérateur` sur ce serveur**").catch(console.error);
   const mentioned = message.mentions.users.first();
    const args = message.content.split(' ').slice(1);
    const arg2 = Number(args[1]);
    if (message.member.hasPermission('MANAGE_GUILD')){
      if (message.mentions.users.size != 0) {
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
          if (!isNaN(arg2)) {
            if (warns[message.guild.id][mentioned.id] === undefined) {
              message.channel.send(mentioned.tag+" n'a aucun message");
              return;
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
              message.channel.send("**:x: Ce message n'existe pas**");
              return;
            }
            delete warns[message.guild.id][mentioned.id][arg2];
            var i = 1;
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
              var val=warns[message.guild.id][mentioned.id][key];
              delete warns[message.guild.id][mentioned.id][key];
              key = i;
              warns[message.guild.id][mentioned.id][key]=val;
              i++;
            });
            fs.writeFile(path.resolve(__dirname, ("../../data/modobotmp.json")), JSON.stringify(warns), (err) => {if (err) console.error(err);});
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
              delete warns[message.guild.id][mentioned.id];
            }
            message.channel.send(`Le message de **${mentioned.tag}**\': **${args[1]}** a été supprimé avec succès!`);
            return;
          } if (args[1] === "tout") {
            delete warns[message.guild.id][mentioned.id];
            fs.writeFile(path.resolve(__dirname, ("../../data/modobotmp.json")), JSON.stringify(warns), (err) => {if (err) console.error(err);});
            message.channel.send(`Les messages de **${mentioned.tag}** ont été supprimés avec succès!`);
            return;
          } else {
            message.channel.send("Erreur mauvais usage: "+prefix+"clearmp <utilisateur> <nombre|tout>");
          }
        } else {
          message.channel.send("Erreur mauvais usage: "+prefix+"clearmp <utilisateur> <nombre|tout>");
        }
      } else {
       message.channel.send("Erreur mauvais usage: "+prefix+"clearmp <utilisateur> <nombre|tout>");
      }
    } else {
      message.channel.send("**:x: Vous n'avez pas la permission `Modérateur` sur ce serveur**");
    }
  }}
    module.exports = modo_mp
