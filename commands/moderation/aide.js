function aide(message,prefix,client){
if (message.content.startsWith(prefix + "modo")) {
message.channel.send("**Mes commandes** :robot: \n``mp`` | ``botmp`` | ``purge`` | ``embed`` | ``mute``\n``unmute`` | ``kick`` | ``ban`` | ``warn`` | ``seewarns``\n``clearwarns`` | ``addrole`` | ``rmrole``");
    }
}
    module.exports = aide
