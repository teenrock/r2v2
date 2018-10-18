function era_cmds(message,prefix,client) {

  if (message.content.startsWith('!gifle ')) {
  	let member = message.mentions.members.first();
  	if (arg[1] == member) {
  	  t1 = 1500;
  	  t2 = 1200
  	  t3 = 900
  	  t4 = 500
  	  t5 = 2000
  	  message.channel.send(`**${message.author.username}** prend son élan`).then(msg=>{
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **-**`)
  	  	}, 1 * t1)
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **- -**`)
  	  	}, 1 * (2*t1))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **- - -**`)
  	  	}, 1 * (3*t1))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **- - - -**`)
  	  	}, 1 * ((3*t1) + t2))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **- - - - -**`)
  	  	}, 1 * ((3*t1) + (2*t2)))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **- - - - - -**`)
  	  	}, 1 * ((3*t1) + (2*t2) + t3))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **- - - - - - -**`)
  	  	}, 1 * ((3*t1) + (2*t2) + (2*t3)))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **- - - - - - - -**`)
  	  	}, 1 * ((3*t1) + (2*t2) + (3*t3)))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **- - - - - - - - -**`)
  	  	}, 1 * ((3*t1) + (2*t2) + (3*t3) + t4))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** prend son élan **- - - - - - - - - - -**`)
  	  	}, 1 * ((3*t1) + (2*t2) + (3*t3) + (2*t4)))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** balance violemment sa main à la figure de **${member.user.username}** !`)
  	  		
  	  	}, 1 * ((3*t1) + (2*t2) + (3*t3) + (2*t4) + t5))
  	  	setTimeout(function(){
  	  		msg.edit(`**${message.author.username}** balance violemment sa main à la figure de **${member.user.username}** !\n
**${member.user.username}** se vautre lamentablement au sol`)
  	  		.then(edit=>{
  	  		message.channel.send(` ﾠ`, {files:["./pictures/slap.gif"]})  				
  	  			})
  	  	}, 1 * ((3*t1) + (2*t2) + (3*t3) + (2*t4) + (2*t5)))
  	  })
} else if ((arg[1] != null)&&(arg[2] != null)) {
  message.reply(`utilisez la commande sous la forme: !gifle ${message.author}`)
}

}

}

module.exports = era_cmds