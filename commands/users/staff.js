function staff(message,prefix,client){

  role_1 = 'Stagiaire 4D'  
  role_2 = 'Animators'
  role_3 = 'Helpers 4D (+ HUB4D )'
  role_4 = 'Moderators'
  role_5 = 'Manager +18'
  role_6 = 'Devs 4D'
  role_7 = 'Services Généraux'
  role_8 = 'Services Plaintes'
  role_9 = 'REFERENT'
  role_10 = 'Fondation'

  usersRole_1 = 'Yuki'
  usersRole_2 = 'Panda - Phoenix - gigi - lolman clément - Alone - K - Chimera - Harley - Reyss (Manager Vocal)'
  usersRole_3 = usersRole_2
  usersRole_4 = '4D'
  usersRole_5 = 'Dom'
  usersRole_6 = 'Redfish, xzdc'
  usersRole_7 = 'Savy'
  usersRole_8 = 'Miles'
  usersRole_9_A = 'Jeni'
  usersRole_9_B = 'NONOXX'
  usersRole_10 = 'Ashley'

if ((message.content == '!staf')||(message.content == '!staff')) {
  if (message.channel == accueil || message.channel == general || message.channel == staff_cmd) {
      
message.channel.send(` ﾠ\n                                                  **/!\\ ROLES & DESCRIPTION du STAFF /!\\**\n
**${role_1} :  ${usersRole_1}**\n\`\`\`- Rôle Principale: Ils sont intégrés au sein du staff en tant que statuts en formation, sous une attente d'une à deux semaines max. Jeni (responsable des animateurs/helpers) valide ou non leur intégration définitive.
- Les attentes : S'occuper des sans papiers ( accueillir les nouveaux ), dynamiser le serveur, faire des masses  invit.
- Droits : mute/demute sur les salons vocaux, ajouts des rôles.\`\`\`
**${role_2} / ${role_3} :  ${usersRole_2}**
\`\`\`- Rôle Principale: Animateurs confirmés
- Les attentes : s'occuper des sans papiers ( accueillir les nouveaux ), dynamiser le serveur, faire des masses  invit.
- Droits : mute/demute sur les salons vocaux, ajouts des rôles,  expulser un membre.\`\`\`
**${role_4}} :  ${usersRole_4}**
\`\`\`- Rôle Principale: Ils encadrent les animateurs et les foreigners de manière technique et relationnelle.
- Les attentes dynamiser le serveur, faire des masses  invit.  ils jouent le rôle de médiateur entre membres, foreigners et animateurs
- Droits : mute/demute sur les salons vocaux, ajouts des rôles (+18 nsfw),  expulser un membre.\`\`\`
**${role_5} :  ${usersRole_5}**
\`\`\`- Rôle Principale: Dom gère la zone +18. Miles gère la hierarchie en dessous.
- Les attentes: ils sont aussi proches des nouveaux membres que du Fondateur et du BackUp-Fonda. 
- Droits : mute/demute sur les salons vocaux, ajouts des rôles (+18 nsfw), expulser un membre.\`\`\`
**${role_6} :  ${usersRole_6}**`);
    message.channel.send(`\`\`\`- Rôle Principale: Gère les websites, la radio, et la télécommunication de 4D.
- Droits : mute/demute sur les salons vocaux, ajouts des rôles,  expulser un membre.\`\`\`
**${role_7} :  ${usersRole_7}**
\`\`\`- Rôle Principale: Elle gère tout ce qui est lié à ce qui peut etre amménagé dans le serveur 4D (optimisation et  confort des salons ecrits/vocaux ou autres).
- Droits : mute/demute sur les salons vocaux, ajouts des rôles,  expulser un membre.\`\`\`
**${role_8} :  ${usersRole_8}**`);

    }

  }

}

module.exports = staff