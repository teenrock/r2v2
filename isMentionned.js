function isMentionned(message, fs, path, decache) {

  const msgcont = message.content;
  const msgchan = message.channel;
  var member = message.mentions.members.first();
  var MentionMSG = ` **${new Date()}**\n\n **Msg :** ${message}\n\n **${message.author.username}** sur <#${msgchan.id}>`;

    if (member) {

      //if ((member.user == xzdc)||(member.user == xzdcdev)/*||(member.user == teen)*/) {xzdc.send(MentionMSG), console.log(MentionMSG)}
      // if (member.user == bodhi) {bodhi.send(MentionMSG) && bodhiTel.send(MentionMSG)}
      //if (((message.author == xzdc)||(message.author == xzdcdev)||(message.author == teen))&&(member.user == ashley)) {ashley.send(MentionMSG), console.log(MentionMSG)}

      if (member.id == ashley.id) {
      	var ashAwMentStatFile = path.resolve(__dirname, ("./users_config/ash_spec/ashley_AwMentionStatus.js"));
        console.log(ashAwMentStatFile)
      	if (fs.existsSync(ashAwMentStatFile)) {
            decache(ashAwMentStatFile)
            ashley_AwMentionStatus = require(ashAwMentStatFile)
            console.log(` File System EXIST\n Status is : ${ashley_AwMentionStatus}`)
            if (ashley_AwMentionStatus == 'ON') {
              ashley.send(MentionMSG)
            } else {
              console.log(" La transmission de messages sur mention de Ashley est désactivé. Les messages ne lui sont pas transmits par le bot actuellement.")
            }

      	} else console.log(" ashAwMentStatFile does not exist.")

      } // end of ashley member restriction

    } // en of message.mentions.members.first function

}

module.exports = isMentionned