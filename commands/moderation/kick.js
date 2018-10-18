function kick(message,prefix,client){
    
     if((message.content.startsWith(prefix +'kick'))||(message.content.startsWith(prefix +'k'))){
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);
if(message.mentions.users.size === 0) {
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
}
let kickMember = message.guild.member(message.mentions.users.first());
if(!kickMember) {
  return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
}
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
  return message.reply("**:x: Je n'ai pas la permission pour kick...**").catch(console.error);
}

kickMember.send(`**Tu sors...**`); 
kickMember.kick().then(member => {
    message.channel.send(`**${member.user.tag}** est kick :boot:`)
        });
      }
    }
    module.exports = kick