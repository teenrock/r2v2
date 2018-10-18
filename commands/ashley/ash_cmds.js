function ash_cmds(message, prefix, fs, path, decache) {
  let command = message.content.split(' ')[0].slice(prefix.length);
  var isMentionned = message.mentions.members.first();
  var arg = message.content.split(" ");

  if (message.content.startsWith("!aw")) {
  	var ashAwMentStatFile = path.resolve(__dirname, ("../../users_config/ash_spec/ashley_AwMentionStatus.js"));
    message.delete(100), console.log('case 1\n')

  	if (arg[1] == undefined) {
  		console.log('case 2\n')
      choice = 'OFF'
  	  if (fs.existsSync(ashAwMentStatFile)) {
  	  	console.log('case 3\n')
  	  	message.author.send("Les arguments de la commande **!aw** ne peuvent être que **on** / **off**");
  	  } else if (!fs.existsSync(ashAwMentStatFile)) {
  	  	console.log('case 4\n')
  	  	choice = 'OFF'
  	  }

  	}

  	if (arg[1] === 'on') {
  	  console.log('case 5\n')
      console.log(` Ashley AW_MODE: ${arg[1]}`)
  	  choice = 'ON'
  	  message.author.send(`**${new Date()}**\n\nLe retour des message sur mentionnement de votre pseudo est à présent:\n\n**[ACTIVÉ]**`);
  	}

    if (arg[1] === 'off') {
      console.log('case 6\n')
      console.log(` Ashley AW_MODE: ${arg[1]}`)
      choice = 'OFF'
      message.author.send(`**${new Date()}**\n\nLe retour des message sur mentionnement de votre pseudo est à présent:\n\n**[DESACTIVÉ]**`);
	}

    ashAw_menStat_export = `const ashley_AwMentionStatus = '${choice}'\n\nmodule.exports = ashley_AwMentionStatus`;

   	if(!fs.existsSync(ashAwMentStatFile)) {
   	  console.log('case 7\n')
  	  fs.createFileSync(ashAwMentStatFile)
  	  setTimeout(function() {fs.writeFileSync(ashAwMentStatFile, ashAw_menStat_export)}, 1 * 500)
  	} else {
  	  console.log('case 8\n')
  	  fs.writeFileSync(ashAwMentStatFile, ashAw_menStat_export)
  	}

}

}

module.exports = ash_cmds