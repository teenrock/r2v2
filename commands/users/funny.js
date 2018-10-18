function funny(message, prefix, client){
  //let prefix = config.prefix;
  let arg = message.content.split(" ");
  let member = message.mentions.members.first();
  let answer = "vous n'avez mentionné aucun utilisateur ou celui ci n'est pas présent sur ce serveur.\nLa commande est: **!commande @pseudo**";
  var username = arg[1]
  var commande = arg[1]

    if (message.content.startsWith(prefix + "bière")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
          message.channel.send(`_propose à ` + username + ` de partager une bonne bière bien fraîche autour du salon _` + `#${message.channel.name}`)
          .then(edit=>{
            message.channel.send(` ﾠ`, {files:["./pictures/bière_homer.jpg"]})
          })})
      } else {
      	message.delete(500).then(del=> {
          message.reply(answer)
        })
      }}

    if (message.content.startsWith(prefix + "privbière")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
        message.channel.send(username + " est privé de bière !")
        .then(edit=>{
          message.channel.send(` ﾠ`, {files:["./pictures/no_drink.gif"]})
        })})
      } else {
        message.reply(answer)
      }}

    if (message.content.startsWith(prefix + "café")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
        message.channel.send(`_propose à ` + username + ` de discuter sur le salon ` + `#${message.channel.name} ` + `avec un bon café bien chaud_`)
        .then(edit=>{
          message.channel.send(` ﾠ`, {files:["./pictures/café.gif"]})
        })})
      } else {
        message.reply(answer)
      }}

      if (message.content.startsWith(prefix + "thé")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
        message.channel.send(`_propose à ` + username + ` de prendre un bon thé bien chaud_`)
        .then(edit=>{
          message.channel.send(` ﾠ`, {files:["./pictures/thé.gif"]})
        })})
      } else {
        message.reply(answer)
      }}

      if (message.content.startsWith(prefix + "chocolat")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
        message.channel.send(`_propose à ` + username + ` de se réchauffer avec un bon chocolat bien chaud_`)
        .then(edit=>{
          message.channel.send(` ﾠ`, {files:["./pictures/chocolat.gif"]})
        })})
      } else {
        message.reply(answer)
      }}

      if (message.content.startsWith(prefix + "bisou")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
          message.channel.send(`**${message.author.username}** _fait un groOoOoOoOoOs bisou à_ **${username}**`)
          message.channel.send(` ﾠ`, {files:["./pictures/couple_kiss.jpg"]})
        })
      } else {
        message.reply(answer)
      }}

      if (message.content.startsWith(prefix + "calin")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
          message.channel.send(`**${message.author.username}** _fait un gros câlin à_ **${username}**`)
          message.channel.send(` ﾠ`, {files:["./pictures/calin.png"]})
        })
      } else {
        message.reply(answer)
      }}

      if (message.content.startsWith(prefix + "rose")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
          message.channel.send(`**${message.author.username}** _offre une superbe rose rouge à_ **${username}**`)
          message.channel.send(` ﾠ`, {files:["./pictures/rose.png"]})
        })
      } else {
        message.reply(answer)
      }}

      if (message.content.startsWith(prefix + "love")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
          message.channel.send(`**${message.author.username}** _regarde amoureusement_ **${username}** `)
          message.channel.send(` ﾠ`, {files:["./pictures/love.png"]})
		})      
      } else {
        message.reply(answer)
      }}

      if (message.content.startsWith(prefix + "retard")) {
      if (username === undefined) return message.reply(answer)
      if (username == member) {
      	message.delete(500).then(del=> {
      	  var retardMsg = `**${message.author.username}** _tapote sa montre du bout du doigt en regardant fixement_ **${username}**`;
      	  var t1 = 1000
      	  message.channel.send(` ﾠ`, {files:["./pictures/retard.gif"]}).then(send=>{
          message.channel.send(retardMsg).then(msg=> {
          	setTimeout(function(){
  	  		msg.edit(retardMsg + ' **.**')
  	  	}, 1 * t1)
  	  	setTimeout(function(){
  	  		msg.edit(retardMsg + ' **. .**')
  	  	}, 1 * (2*t1))
  	  	setTimeout(function(){
  	  		msg.edit(retardMsg + ' **. . .**')
  	  	}, 1 * (3*t1))
  	  	setTimeout(function(){
  	  		msg.edit(`Et alors **${username}** ? `)
  	  	}, 1 * (5*t1))
          }) 	
      	})})
      } else {
        message.reply(answer)
      }}

      if (message.content === (prefix + "plove")) {
      	message.delete(500).then(del=> {
        message.channel.send(`**${message.author.username}** _sent sa crête se dresser sur sa tête_`)
        message.channel.send(` ﾠ`, {files:["./pictures/plove.png"]})
      })
    }

    if (message.content === (prefix + "cool")) {
      message.delete(500).then(del=> {
        message.channel.send(` ﾠ`, {files:["./pictures/cool.png"]})
      })
    }

}

module.exports = funny