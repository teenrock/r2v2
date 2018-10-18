function logout(message,prefix,client){

if (message.content === (prefix + "logout")) {

  const authorName = message.author.username;
  const stopMsg = `**${authorName}** a demandé l'arrêt de ${client.user}`;
  const stopMsgBot = `${client.user} s'arrête`;
  const time = 700;
  message.delete().then(del=>{
  	message.channel.send(stopMsg).then(msg=>{

      setTimeout(function() {
      	const stopMsgBot2 = `${stopMsg}\n${stopMsgBot}`;
      	msg.edit(stopMsgBot2).then(edit=>{
		  setTimeout(function() {
		    msg.edit(`**${new Date()}**\n\n${client.user} est passé **OFF** à la demande de **${authorName}**`).then(edit=>{
		      console.log('Bot is OFF');
              client.destroy();
              process.exit()
		    });
		  },1 * 3500);
	    })

    setTimeout(function() {
		  msg.edit(`${stopMsgBot2} **.**`)
		  setTimeout(function() {
		    msg.edit(`${stopMsgBot2} **. .**`)
		    setTimeout(function() {
		      msg.edit(`${stopMsgBot2} **. . .**`)
      		}, 1*time);
      	  }, 1*time);
      	}, 1*time);
      	
      },1 * 1000);
    })
  })

}
}

module.exports = logout