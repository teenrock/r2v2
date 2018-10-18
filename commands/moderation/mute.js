function mute(message,prefix,client){
    
     if (message.content.startsWith(prefix + "mute")) {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);
if(message.mentions.users.size === 0) {
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
}
let muteMember = message.guild.member(message.mentions.users.first());
if(!muteMember) {
  return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
}
if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) {
  return message.reply("*:x: Je n'ai pas la permission pour mute...**").catch(console.error);
}
message.channel.overwritePermissions(muteMember, { SEND_MESSAGES: false }).then(member => {
    message.channel.send(`**${muteMember.user.username}** est désormais mute dans **#${message.channel.name}** :mute:`)
})
}}
    module.exports = mute
