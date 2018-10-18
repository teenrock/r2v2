function onStart(message) {

  const Discord = require("./node_modules/discord.js");
  bot = client;

    // Users / Bots IDs
  xzdc_id = '399094992338944012';
  xzdcdev_id = '446033566649024512';
  teen_id = '313498874008305664';
  manu_id = '381895039653117965'; 
  ashley_id = xzdc_id||xzdcdev_id||teen_id;
  DLB_id = '421379745561968640';
  r2v2_id = `${bot.user.id}`;

  // User
  xzdc = bot.users.get(`${xzdc_id}`);
  xzdcdev = bot.users.get(`${xzdcdev_id}`);
  teen = bot.users.get(`${teen_id}`);
  manu = bot.users.get(`${manu_id}`);
  ashley = bot.users.get(`${ashley_id}`);
  DLB = bot.users.get(`${DLB_id}`);
  r2v2 = bot.users.get(`${r2v2_id}`);

  // Channels
  users_cmd = bot.channels.get('494543618296643591');
  staff_cmd = bot.channels.get('490060949294940160');
  accueil = bot.channels.get('413073520998744075'); // #accueil
  general = bot.channels.get('463084369247076362'); // #general
  msgsChanLog = bot.channels.get('494538870512287754'); // #tous-les-messages
  vocChanLog = bot.channels.get('494538983339065356'); // #connexion-vocales
  userPresChanLog = bot.channels.get('494539076712529940'); // #statuts-utilisateurs
  botPrivMsgs = bot.channels.get('494539109830885386'); // #bots-priv-msgs
  joinQuitChan = bot.channels.get('494593592569102346'); // #entrées-sorties-utilsateurs
  mus_chan = bot.channels.get('494543047820967965');
  offchan = bot.channels.get('395737795647373312');

  // Others
  var memberCount = bot.users.size;
  var serverCount = bot.guilds.size;
  const guildNames = client.guilds.map(g => g.name).join("\n");
  var startMsg = `\n ${bot.user.username}@Bot [Started] ${new Date()}
 --------------------------------------\n Utilisateurs: ${memberCount}\n Serveur(s): ${serverCount}\n ${guildNames}\n --------------------------------------\n`;
  const reglement = require("./text/reglement.js");
/*
  // On Ready Actions
  conflit_VC.join().then(conn => {
    if (conflit_VC) {
      conflit_VC.members.forEach(member => {
        if (member === bot) {
          member.setMute(true).catch(err => console.log(err));
          member.setDeaf(true).catch(err => console.log(err));
        }
      })
    }
  })
  */
  bot.user.setUsername(`${bot.user.username}`);
  bot.user.setActivity(`!aide`, {type: "WATCHING"});
  bot.user.setStatus("dnd"); // online / dnd / idle / invisible
  //traff4DChan.send(`**${startMsg}**`);
  console.log(startMsg);

  var BotNameLog = setInterval (function () {
    console.log(`${bot.user.username}@Bot\n`)
  }, 600 * 1000);
/*
  var rulesLoop = setInterval(function() {
    accueil.send(reglement);
  }, 720 * 60000);
*/
}

module.exports = onStart