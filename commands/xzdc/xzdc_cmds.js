function xzdc_cmds(message, prefix, bot) {

  // Drinks Cmds
  if (message.content == "!choco ash") {
    message.delete()
    .then(del=>{
      message.channel.send(`**${message.author.username}** _propose à ${ashley} de partager un petit chocolat chaud en sa compagnie_`)
      message.channel.send(` ﾠ`, {files:["./pictures/shared_chocolate.gif"]})
    })
  }
  if (message.content == "!calin ash") {
    message.delete()
    .then(del=>{
      message.channel.send(`**${message.author.username}** _prend ${ashley} dans ses bras et lui fait un énooooOOOOOOOOORME câlin !_`)
      .then(msg=> message.channel.send(` ﾠ`, {files:["./pictures/calinAsh.gif"]}))
    })
  }
  if (message.content == "!bibinou") {
    message.delete()
    .then(del=>{
      message.channel.send(`**${message.author.username}** _prend ${ashley} dans ses bras pour lui offrir un petit bibinou d'amour !_`)
      .then(msg=> message.channel.send(` ﾠ`, {files:["./pictures/bibinou.jpeg"]}))
    })
  }
  
}

module.exports = xzdc_cmds