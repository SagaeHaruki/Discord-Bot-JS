const { Events } = require('discord.js');
const fs = require('fs');

module.exports = (client) => {
   client.eventHandler = async () => {
      const eventFolder = fs.readdirSync(`./source/events`);
      for (const folder of eventFolder) {
         const eventData = fs.readdirSync(`./source/events/${folder}`).filter(file => file.endsWith('.js'));

         switch(folder) {
            case "client":
               for (const file of eventData) {
                  const event = require(`../../events/${folder}/${file}`);
                  if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
                  else client.on(event.name, (...args) => event.execute(...args, client));
               }
               break;
            
            default:
               break;
         }
      }
   }
}