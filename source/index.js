require("dotenv").config();

// Const Only
const { Token1 } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const { Guilds, GuildMessages } = GatewayIntentBits;
const client = new Client ({ intents: [Guilds, GuildMessages] });
client.commands = new Collection();
client.buttons = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./source/functions`);
for (const folder of functionFolders) 
{
   const functionData = fs.readdirSync(`./source/functions/${folder}`).filter(file => file.endsWith('.js'));
   for (const file of functionData) require(`./functions/${folder}/${file}`)(client);
}

client.eventHandler();
client.commandHandler();
client.componentHandler();

client.login(Token1);

