const { ActivityType } = require('discord.js');

module.exports = 
{
   name: "ready",
   once: true,
   async execute(client) 
   {
      client.user.setActivity("Visual Studio Code", { type: ActivityType.Playing });
      client.user.setStatus("dnd");
      console.log('Atrophlne is now Online!!');
   }
}