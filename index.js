//////////////////////////////////////////////////////////////////////////////////////////
// R2V2
/////////////////////////////////////////////////////////////////////////////////////////
const Discord = require("discord.js");
const Music = require('discord.js-musicbot-addon-niels');
const bot = new Discord.Client({autoReconnect: true, max_message_cache: 0, disableEveryone: true});
var EventEmitter = require('events').EventEmitter.defaultMaxListeners = 0;
const config = require("./config.json");
var request = require('request');
const express = require("express");
const fs = require('fs-extra');
const decache = require('decache');
const path = require("path");
var prefix = config.prefix;
client = bot;
var app = express();
var isReady = true;

//////////////////////////////////////////////////////////////////////////////////////////
// OnReady Channel Message Bot Info & Channel Info every X times
bot.on("ready", (message) => {
  const onStart = require("./onStart.js")
  onStart(message)
});

//////////////////////////////////////////////////////////////////////////////////////////
// #accueil & #serveur-actu channels event on user join
bot.on('guildMemberAdd', (member) => {
  const newMember = require("./newMember.js");
  newMember(member)

  if (!member.user.bot) {

    if (member.user.id == '1') return; 
    var extension = '.js';
    var folderEmplacement_1 = path.resolve(__dirname, ("./users_config/afk_status/"));
    var folderEmplacement_2 = path.resolve(__dirname, ("./users_config/afk_users_msgs/"));
    var userConfFile = folderEmplacement_1 + '/userID_' + member.id + '_conf' + extension;
    var afkUserMsg = folderEmplacement_2 + '/userID_' + member.id + '_afkMsg' + extension;

    fs.createFile(userConfFile).catch(err=> console.log(err)).then(writeFileSync => {
      let afk_stat_export = 'const afkUserStat = \'null\'\n\nmodule.exports = afkUserStat';
      fs.writeFileSync(userConfFile, afk_stat_export)
    })

    fs.createFile(afkUserMsg).catch(err=> console.log(err)).then(writeFileSync => {
      let afk_msg_export = 'const afkUserMsg = \`null\`\n\nmodule.exports = afkUserMsg';
      fs.writeFileSync(afkUserMsg, afk_msg_export)
    })

  }

});

//////////////////////////////////////////////////////////////////////////////////////////
// #accueil & #serveur-actu channels event on user quit
bot.on('guildMemberRemove', (member) => {
  const memberServQuit = require("./memberServQuit.js");
  memberServQuit(member)
});

//////////////////////////////////////////////////////////////////////////////////////////
// USERS PRESENCE STATUS UPDATE CHANNEL REPPORT
bot.on('presenceUpdate', (oldMember, newMember) => {
  const usersPresUpdate = require("./usersPresUpdate.js");
  usersPresUpdate(oldMember, newMember)
});

//////////////////////////////////////////////////////////////////////////////////////////
// VOCALS CHANNELS USERS JOIN/QUIT REPPORT
bot.on('voiceStateUpdate', (oldMember, newMember) => {
  const JoinQuitVoc = require("./JoinQuitVoc.js");
  JoinQuitVoc(oldMember, newMember)
});

/////////////////////////////////////////////////////////////////////////////////////////
// CODE
bot.on('message', (message) => {
  const msgcont = message.content;
  const msgchan = message.channel;
  args = msgcont.split(',').join(' ').split('  ').join(', ');
  arg = msgcont.split(" ");
  let channel = bot.channels.get(`${msgchan.id}`);

  //Users BanList
  /*
  const banID_1 = '';
  const banID_2 = '';
  */

  // MESSAGE TO BOT (MP)
  if (msgchan.name === undefined)  {
    const botDMsReturn = require("./botDMsReturn.js")
    botDMsReturn(message, client)

  // SERVER MSGS CHANNELS REPPORT
  } else if (msgchan.name !== undefined) {

    if (!message.author.bot) {
    const allServMsgsRepport = require("./allServMsgsRepport.js");
    const isMentionned = require("./isMentionned.js");
    const afkUsersMode = require("./afkUsersMode.js");

    allServMsgsRepport(message)
    isMentionned(message, fs, path, decache)
    afkUsersMode(message, prefix, fs, path, decache)

// xzdc restricted commands
  if ((message.author==teen)||(message.author==xzdc)||(message.author==xzdcdev)) {
    
    const xzdc_cmds = require("./commands/xzdc/xzdc_cmds.js");
    const xzdc_botmp = require("./commands/xzdc/xzdc_botmp.js");
    const xzdc_purge = require("./commands/xzdc/xzdc_purge.js");
    const eval = require("./commands/xzdc/eval.js");
    const logout = require("./commands/xzdc/logout.js");
    const adminCmds = require("./commands/moderation/adminCmds.js");
    const vocalCmds = require("./commands/moderation/vocalCmds.js")
    const test = require("./commands/xzdc/test.js")

    let command = message.content.split(' ')[0].slice(config.prefix.length);
    
    xzdc_cmds(message, prefix, bot)
    xzdc_botmp(message, prefix, client, fs, path)
    xzdc_purge(message, prefix, client)
    eval(message, prefix, client)
    logout(message, prefix, client)
    adminCmds(message, prefix, client)
    vocalCmds(message, prefix, client)
    test(message, prefix, client)
    
  }

// bodhi restricted commands
  if (message.author === manu) {
    const bodhi_cmds = require("./commands/bodhi/bodhi_cmds.js")
    let command = message.content.split(' ')[0].slice(config.prefix.length);
    bodhi_cmds(message, prefix, client)
  }
// ashley restricted commands
 if (message.author === ashley) {
   const ash_help = require("./commands/ashley/ash_help.js");
   const ash_cmds = require("./commands/ashley/ash_cmds.js");
   ash_cmds(message, prefix, fs, path, decache)
   ash_help(message, prefix, bot)
 }

// Admins / Moderators commands

  if ((message.author==xzdc)||(message.author==manu)||(message.author==ashley)||(message.author==bot.user)) {

    const aide = require("./commands/moderation/aide.js");
    const modo_mp = require("./commands/moderation/modo_mp.js");
    const botmp = require("./commands/moderation/botmp.js");
    const warn = require("./commands/moderation/warns.js");
    const addrole = require("./commands/moderation/addrole.js");
    const rmrole = require("./commands/moderation/rmrole.js");
    const ban = require("./commands/moderation/ban.js");
    const kick = require("./commands/moderation/kick.js");
    const mute = require("./commands/moderation/mute.js");
    const purge = require("./commands/moderation/purge.js");
    const unmute = require("./commands/moderation/unmute.js");
    const newchan = require("./commands/moderation/newchan.js");
    const embed = require("./commands/moderation/embed.js");
    const vocalCmds = require("./commands/moderation/vocalCmds.js");
    const adminCmds = require("./commands/moderation/adminCmds.js");

    let command = message.content.split(' ')[0].slice(prefix.length);

    aide(message, prefix, client)
    modo_mp(message, prefix, client, fs, path)
    botmp(message, prefix, client, fs, path)
    warn(message, prefix, client, fs, path)
    addrole(message, prefix, client)
    rmrole(message, prefix, client)
    ban(message, prefix, client)
    kick(message, prefix, client)
    mute(message, prefix, client)
    purge(message, prefix, client)
    unmute(message, prefix, client)
    newchan(message, prefix, client)
    embed(message, Discord, prefix, client)
    vocalCmds(message, prefix, client)
    adminCmds(message, prefix, client)

  }

  // Users Commands
  const userHelp = require('./commands/users/userHelp.js')
  const actu = require("./commands/users/actu.js");
  const staff = require("./commands/users/staff.js");
  const funny = require("./commands/users/funny.js");
  const say = require("./commands/users/say.js");

  let command = message.content.split(' ')[0].slice(config.prefix.length);

  userHelp(message, prefix, client)
  actu(message, prefix, client)
  staff(message, prefix, client)
  funny(message, prefix, client)
  say(message, prefix, client)

} 

}

});

/////////////////////////////////////////////////////////////////////////////////////////

app.listen(36400);
bot.login(config.token);