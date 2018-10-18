function xzdc_purge(message,prefix,client){

if (message.content.startsWith(prefix + "xzdclr")) {
if (message.channel.type === "dm") return;

if((!message.author.id == "399094992338944012") || (!message.author.id == "313498874008305664") || (!message.author.id == "446033566649024512")) return message.reply("**cette commande est privée.**").catch(console.error);

const user = message.mentions.users.first();
 const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2]) 
if (!amount) return message.reply('**:x: Veuillez spécifier une limite de message**'); 
if (!amount && !user) 
return message.reply('**:x: Veuillez spécifier une limite de message**');
if (!user){
if(isNaN(message.content.split(' ')[1]) || parseInt(message.content.split(' ')[1]) < 2 || parseInt(message.content.split(' ')[1]) > 100){
message.channel.send('**:x: Veuillez spécifier une limite de message comprise entre 2 et 100**')
}
}
if(message.content.split(' ')[2]){
if(isNaN(message.content.split(' ')[2]) || parseInt(message.content.split(' ')[2]) < 2 || parseInt(message.content.split(' ')[2]) > 100){
message.channel.send('**:x: Veuillez spécifier une limite de message comprise entre 2 et 100**')
}
}
 message.channel.fetchMessages({ limit: amount, }).then((messages) => {
 if (user) {
const filterBy = user ? user.id : Client.user.id;
messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));

message.channel.send(":wastebasket: | `" + amount + "` messages supprimés").then(msg=>msg.delete(3000));
    
});
}}

module.exports = xzdc_purge