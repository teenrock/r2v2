function xzdcNewChan(message,prefix,client) {

  if (message.content.startsWith('!newchan')) {
      let args = message.content.split(' ').slice(1).join(' ');
      message.delete(3000);
      message.guild.createChannel(`${args}`, "text").then(createChannel=> console.log(` Un nouveau salon a été créé sur ${message.guild.name}\n`));
    }

}

module.exports = xzdcNewChan