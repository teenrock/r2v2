function embed(message,Discord,prefix,client){
if (message.content.startsWith(prefix + 'embed')) {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("**:x: Vous n'avez pas la permission `manage-guild` dans ce serveur**").catch(console.error);
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send("Vous voulez rien me faire répéter ?");
    message.delete()
    var embed = new Discord.RichEmbed();
    embed.setColor(0xFF358B)
      .setDescription(args)
    message.channel.sendEmbed(
      embed, {
        disableEveryone: true
      }
    );
  }}
    module.exports = embed