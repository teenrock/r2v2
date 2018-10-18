function addrole(message,prefix,client){

if (message.content.startsWith(prefix + "addrole")) {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**");
if(message.mentions.users.size === 0) {
  return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
}
let addmember = message.guild.member(message.mentions.users.first());
if(!addmember) return message.channel.send("**:x: Je ne suis pas sur que cet utilisateur existe...**");
let args = message.content.split(" ").slice(1);
                      var amount = message.content.slice(message.content.indexOf(message.content.split(" ")[2]))
let userRoleID = message.guild.roles.find("name", `${amount}`);
if(!message.guild.roles.exists("name", `${amount}`)) {
        message.channel.send(":x: Le role **"+amount+"** n'a pas été trouvé");
      }else{

            addmember.addRole(userRoleID).catch(error => console.log(error));
  message.channel.send(`**${addmember}** à désormais le role **${amount} :smile:**`)
}
}}
    module.exports = addrole