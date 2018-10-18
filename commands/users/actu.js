function actu(message,prefix,client){

  const accueil = bot.channels.get('361678261358690305'); // #accueil
  const general = bot.channels.get('461865179156578304'); // #general
  const reglement = require("../../text/reglement.js");
  const guildNames = client.guilds.map(g => g.name).join("\n");

  if (message.content.startsWith('!act')||message.content.startsWith('!actu'))  {
  	//message.delete(1000)
  	var memberArg = message.content.split(" ")

  	if (message.channel == accueil || message.channel == general || message.channel == staff_cmd) {

  		if (memberArg[1] != null) {

  		  message.channel.send(` ﾠ\n                             **BIENVENUE PARMI NOUS\n                                             ${memberArg[1]}**\n
${reglement}\n
------------------------------------------------------------------------------`);

  		} else {
  		  message.channel.send(reglement)

  		}

  	} else {
  		message.reply(`cette commande est restreinte aux salons <#${accueil.id}> et <#${general.id}>`).then(msg=> {msg.delete(5000)}).catch(err => {console.log(err)});

  	}
    
  }

}
module.exports = actu