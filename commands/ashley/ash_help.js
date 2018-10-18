function ash_help(message, prefix, bot) {

  if (message.content == (prefix + 'aide ashley')) {
    message.channel.send("**Vos commandes** :robot: \n| **kick:** ``!k`` | **Ban:** ``!b`` | **Mute:** ``!m`` | **Unmute:** ``!u`` |");
  }

}

module.exports = ash_help