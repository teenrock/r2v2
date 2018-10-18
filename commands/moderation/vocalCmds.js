function vocalCmds(message, prefix, client) {
/*
  var xzdc_id = '399094992338944012';
  var teen_id = '313498874008305664';
  var knuck_id = '411932312587075614';
  var myIDs = ((message.author.id === xzdc_id) || (message.author.id === teen_id) || (message.author.id === knuck_id));
  */
  var audiochan = message.member.voiceChannel;
  let command = message.content.split(" ")
  let args = command.slice(1);

  //if (!myIDs) return;

  if (message.content === (prefix + 'exit')) {
    if (audiochan) {
      audiochan.leave();
    } return
  } else if (message.content.startsWith(prefix+'conflit')) {
    if (audiochan) {
      if (audiochan === conf_VC) {
        audiochan.join();
      } else message.reply('ce bot peut se connecter uniquement au salon **Conflits-vocal**')
    } else if (!audiochan) {
    	message.reply(`vous n'êtes pas connecté au salon **Conflits-vocal**`)
    }

  }

}

module.exports = vocalCmds