function allServMsgsRepport(message) {

  const msgcont = message.content;
  const msgchan = message.channel;
  var member = message.mentions.members.first();
  let replacedMention = [`${member}`];
  var MentionMSG = ` **#############################################################################################**
 ${new Date()}\n\n **${message.author.username}** vous a mentionné sur <#${msgchan.id}>\n
 ${message}\n\n **#############################################################################################**\n`;
  let args = message.content;
  var newArgs = args;

        if (message.attachments) {
        message.attachments.forEach(a => {
          if (args) {
          	newArgs = ` ${message}\n ${a.url}`;
          } else if (!args) {
            newArgs = ` ${a.url}`;
          }
        })
      }

  if (newArgs.includes(member)) {
  	newArgsB = newArgs.replace(`${member}`, `${member.user.username}`);
    MSGChan = `**\`${new Date()}\`** sur **<#${msgchan.id}>\n ${message.author.username}**: **${newArgsB}**\n**\`UserID\`** : ${message.author.id}\n**\`ChannelID\`**: ${msgchan.id}`;
    MSGChanLog = ` ${new Date()} sur #${msgchan.name}\n ${message.author.username} : ${newArgsB}\n UserID : ${message.author.id}\n ChannelID : ${msgchan.id}\n`;
    msgsChanLog.send(MSGChan)
    console.log(MSGChanLog)
  } else {
    MSGChan = `**\`${new Date()}\`** sur **<#${msgchan.id}>\n ${message.author.username}**: **${args}**\n**\`UserID\`** : ${message.author.id}\n**\`ChannelID\`**: ${msgchan.id}`;
    MSGChanLog = ` ${new Date()} sur #${msgchan.name}\n ${message.author.username} : ${newArgs}\n UserID : ${message.author.id}\n ChannelID : ${msgchan.id}\n`;
    msgsChanLog.send(MSGChan)
    console.log(MSGChanLog)
    }

}

module.exports = allServMsgsRepport