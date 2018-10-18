function adminCmds(message,prefix,client) {

if (message.content.startsWith("!nick")) {
    let member = message.mentions.members.first();
    let command = message.content.split(" ")
    let args = command.slice(1);
    if (!member) return message.channel.send(`:no_entry_sign: ${message.author}, vous n'avez pas mentionné l'utilisateur à renommer ou celui ci est invalide.`)
    if (!args[1]) return message.channel.send(`:no_entry_sign: ${message.author}, commande incorrecte, la forme correcte est:\n**!nick @pseudo NewNickName**`);
  
    message.guild.member(member).setNickname(`${(message.content.split(" ").slice(1).join(" ")).split(" ").slice(1).join(" ")}`)
  }

}
    
module.exports = adminCmds