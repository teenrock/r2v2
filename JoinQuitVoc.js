function JoinQuitVoc(oldMember, newMember) {

  const Discord = require("./node_modules/discord.js");
  bot = client;
  let message = require("./node_modules/discord.js");
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  var serverName = `>>> ${newMember.guild.name||oldMember.guild.name} <<<`;
  let member = newMember||oldMember;

  // Roles
  var gestConf = member.guild.roles.find("id", "456182114178695168"); // RoleName : Gestionnaire de conflits

  if ((newMember == undefined)||(oldMember == undefined)) return;


  // UserJoin VoiceChannel
  if (oldUserChannel == undefined || oldUserChannel == null) {
    newUserVocMsg = `**${newMember.user.username}** s'est connecté au salon vocal **${newUserChannel.name}**`;
    var vocChanMSG1 = `**\`${new Date()}\`** | ` + newUserVocMsg;
    //traff4DChan.send(vocChanMSG1);
    vocChanLog.send(vocChanMSG1);
  }

  // UserLeave VoiceChannel
  if ((newUserChannel == undefined) || (newUserChannel == null)) {
    var oldUserVocMsg = `**${oldMember.user.username}** a quitté le salon vocal **${oldUserChannel.name}**`;
    var vocChanMSG2 = `**\`${new Date()}\`** | ` + oldUserVocMsg;
    //traff4DChan.send(vocChanMSG2);
    vocChanLog.send(vocChanMSG2);
  }

/*
  // UserJoin Conflits VoiceChannel
  if (newUserChannel == conflit_VC && ((oldUserChannel == undefined) || (oldUserChannel == null))) {
    var gestConfRoleHas = (member.roles.has(gestConf.id));

    if (!gestConfRoleHas) {
     newMember.setMute(true).then(setMute=> {
      conflit_chan.send(`**${newMember.user.username}** a rejoint le vocal`);
      console.log(`${newMember.user.username} a rejoint le vocal\n`);

      if (oldMember != bot) {
        conflit_chan.send(`${newMember}, vous êtes à présent **muet** sur **tout le serveur**.\n Pour **retrouver la parole** un bref passage sur le salon **SAS** suffira !`);
        
      }       
    })

   } else if (gestConfRoleHas) {
    conflit_chan.send(`**${gestConf.name}** : **${newMember.user.username}** a rejoint le vocal`);
    console.log(`${gestConf.name} ${newMember.user.username} a rejoint le vocal\n`);

   }
  }

  // UserLeave Conflits VoiceChannel
  if ((oldUserChannel == conflit_VC) && ((newUserChannel == undefined) || (newUserChannel == null))) {

  // New voiceChannelUser is not the BotUser
  if (oldMember != bot) {

    conflit_chan.send(`**${oldMember.user.username}** a quitté le salon **Conflits-vocal**\n\n:warning:\n ${oldMember}, n'oubliez pas que vous êtes encore **muet** sur le serveur.
Pensez à vous connecter furtivement sur **le salon vocal SAS** afin de **retrouver l'accès** aux différents salons vocaux du serveur !\n\n:warning:   :wink:`);
  }
    
    if (oldMember == bot) {

      oldMember.send(`:warning:\n\nN'oubliez pas que vous êtes encore muet sur le serveur, pensez à vous connecter furtivement sur le vocal Accueil afin de retrouver le droit de parole sur les autres salons vocaux !\n\n   :wink:`)
      console.log(`${newMember.user.username} a quitté le vocal Conflits\n`);
    }

  } else if (oldMember == bot) {

    conflit_chan.send(`${newMember.user.username} a quitté le vocal **Conflits**`);
    console.log(`${newMember.user.username} a quitté le vocal Conflits\n`);

  } else if (oldMember == bot) return console.log(`L'utilsateur qui vient de quitter le salon est un bot.`);
*/

  }


module.exports = JoinQuitVoc