const { readdirSync } = require('fs');

module.exports = (client) => {
   client.componentHandler = async () => {
      const componentFolder = readdirSync(`./source/components`);
      for (const folder of componentFolder) {
         const componentData = readdirSync(`./source/components/${folder}`).filter(file => file.endsWith('.js'));

         const { buttons } = client;

         switch (folder) {
            case "buttons":
               for(const file of componentData) {
                  const button = require(`../../components/${folder}/${file}`);
                  buttons.set(button.data.name, button);
               }
               break;

            default:
               break;
         }
      }
   }
}