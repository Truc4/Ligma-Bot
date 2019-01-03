const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Connected');
});
client.on("message", (message) => {
	if (message.author.bot) return;
  msg = message.content.toLowerCase();
  if (msg.includes("ligma")) {
	  rand = Math.floor(Math.random() * 5);
	  if (rand == 0){
			message.channel.send({files: ["https://cdn.discordapp.com/attachments/503523094531407876/530262683954708483/2q9swm.jpg"]});
	  }
	  else if (rand == 1){
		  message.channel.send({files: ["https://cdn.discordapp.com/attachments/503523094531407876/530262017173618688/2q9ssq.jpg"]});
	  }
	  else if (rand == 2){
		  message.channel.send({files: ["https://cdn.discordapp.com/attachments/503523094531407876/530261787505852417/2q9srg.jpg"]});
	  }
	  else if (rand == 3){
		  message.channel.send({files: ["https://cdn.discordapp.com/attachments/503523094531407876/530261589731967007/2q9sqb.jpg"]});
	  }
	  else if (rand == 4){
		  message.channel.send({files: ["https://cdn.discordapp.com/attachments/503523094531407876/530261287712587776/2q9sol.jpg"]});
	  }
	  
  }
});

client.login("process.env.BOT_TOKEN");
