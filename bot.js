const Discord = require("discord.js");
const client = new Discord.Client();

var saveChannel;
var data = "";

client.on('ready', () => {
    console.log('Connected');

    saveChannel = client.channels.get("467168276930101249");

    saveChannel.messages.fetch({ limit: 1 }).then(messages => {
            let lastMessage = messages.first();

            // if (!lastMessage.author.bot) {
            //   // The author of the last message wasn't a bot
            // }
            console.log(lastMessage);
            data = JSON.parse(lastMessage);
        })
        .catch(console.error);
    saveData();
});

function saveData() {
    data = "Test";
    saveChannel.send(JSON.stringify(data));
}

client.on("message", (message) => {
    if (message.author.bot) return;
    msg = message.content.toLowerCase();
    if (msg.includes("ligma")) {
        rand = Math.floor(Math.random() * 10);
        if (rand == 0) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/503523094531407876/530262683954708483/2q9swm.jpg"] });
        } else if (rand == 1) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/503523094531407876/530262017173618688/2q9ssq.jpg"] });
        } else if (rand == 2) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/503523094531407876/530261787505852417/2q9srg.jpg"] });
        } else if (rand == 3) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/503523094531407876/530261589731967007/2q9sqb.jpg"] });
        } else if (rand == 4) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/503523094531407876/530261287712587776/2q9sol.jpg"] });
        } else if (rand == 5) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/508497266797969418/783779423644024913/image0.jpg"] });
        } else if (rand == 6) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/508497266797969418/783779427258990643/image0.jpg"] });
        } else if (rand == 7) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/508497266797969418/783779435245207592/image0.jpg"] });
        } else if (rand == 8) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/508497266797969418/783779440056467486/image0.jpg"] });
        } else if (rand == 9) {
            message.channel.send({ files: ["https://cdn.discordapp.com/attachments/508497266797969418/783779845494407218/image0.jpg"] });
        }
    }
});

client.login(process.env.BOT_TOKEN);