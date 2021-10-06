const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})

////Saeda
client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '1wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**بچۆ ڤۆیس ئینجا فەرمانکە**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/3FfXdpg6qG`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("857662608408182794").send(
`> ریکلام: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })

/////////////Saeda
client.on("message", msg => {
  if (msg.content === "Slaw reklam ") {
    msg.reply("**Bo Mne Bnera Dll**");
  }
}); 

//////////////Saeda
client.on("message", msg => {
  if (msg.content === "Slawrk") {
    msg.reply("**Bo Mne Bnera Dll**");
  }
}); 
///////////////Saeda
client.on("message", msg => {
  if (msg.content === "Reklam") {
    msg.reply("**Bo Mne Bnera Dll**");
  }
}); 
///////////////Saeda
client.on("message", msg => {
  if (msg.content === "reklam haea") {
    msg.reply("**Bo Mne Bnera Dll**");
  }
}); 
///////////////سەیدە
client.on("message", msg => {
  if (msg.content === "سلاو ریکلام") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////سەیدە
client.on("message", msg => {
  if (msg.content === "سلاو ریکلام هەیە") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////سەیدە
client.on("message", msg => {
  if (msg.content === "ریکلام") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////سەیدە
client.on("message", msg => {
  if (msg.content === "ریکلام هەیە") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////سەیدە
client.on("message", msg => {
  if (msg.content === "ریکلام دەکەن") {
    msg.reply("**بۆ منی بنێرە دڵ**");
  }
}); 
///////////////سەیدە
client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ڕیکلامەکە بنێرە بۆمن دایدەنێم`) 
});

////Saeda up


client.login("NzgzMjczMTgwNzg5NDczMjgy.X8YV_g.tORbFnnIZBa2QGaL3zCMmu_CzoY"); ///تۆکین دانێ 
