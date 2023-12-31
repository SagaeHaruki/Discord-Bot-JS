const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => 
{
   client.commandHandler = async() => 
   {
      const commandFolder = fs.readdirSync(`./source/commands`);
      for (const folder of commandFolder) 
      {
         const commandData = fs.readdirSync(`./source/commands/${folder}`).filter(file => file.endsWith('.js'));


         const { commands, commandArray } = client;
         for(const file of commandData) 
         {
            const command = require(`../../commands/${folder}/${file}`);
            commands.set(command.data.name, command);
            commandArray.push(command.data.toJSON());
         }
      }

      const clientId = "1033001102687346718";
      let guildId = "";
      const rest = new REST({ version: "9" }).setToken(process.env.Token1);

      try 
      {
         console.log("Refresh (/) commands..")

         const route = guildId ? Routes.applicationGuildCommands(clientId, guildId) : Routes.applicationCommands(clientId);

         await rest.put(route, { body: client.commandArray,});
         console.log("Successfully Refreshed (/) commands..")
      } 
      catch (error) 
      {
         console.error(error);
      }
   }
}