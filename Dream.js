const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("509413148114157569")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login('NDYyMjU0MzI4NjkxMDMyMDY1.DsSw9Q.pMXx3-LwmvPXEUTTVJgWdVpMs2M');