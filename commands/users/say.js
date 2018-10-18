function say(message,prefix,client){

  	if (message.content.startsWith('!say ')) {
   		var sayMSG = ':no_entry_sign: Ne nous prend pas pour des ânes je te prie !';
    	if (arg[1] !== '!say') {
      	let args = message.content.split(' ');
      	let answer = args.slice(1).join(' ');
      	message.delete();
      	if (arg == null) {
      	  message.channel.send(`${message.author.username} vous n'avez saisi aucun argument.`)
      	} else message.channel.send(answer);
    } else {
      message.delete();
      message.author.send(sayMSG);
      message.channel.send(sayMSG).then(message=>message.delete(3000));
    }
  }

}
    
module.exports = say