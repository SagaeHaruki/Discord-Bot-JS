const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Check ping'),
   async execute(interaction, client) {
      const message = await interaction.deferReply({
         fetchReply: true
      });

         let maxVal = 0xFFFFFF; // 16777215
         let randomNumber = Math.random() * maxVal; 
         randomNumber = Math.floor(randomNumber);
         randomNumber = randomNumber.toString(16);
         let randColor = randomNumber.padStart(6, 0);   

      const embed2 = new EmbedBuilder()
            .setDescription(`**API Latency:** ${client.ws.ping}\n**Client Ping:** ${message.createdTimestamp - interaction.createdTimestamp}`)
            .setColor(`#${randColor.toUpperCase()}`)
            .setTimestamp()

         interaction.editReply( { embeds: [embed2], ephemeral: true});
   }
}