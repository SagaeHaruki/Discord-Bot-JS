const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('links')
      .setDescription('Developer\'s Social'),
   async execute(interaction, client) {
         await interaction.reply({
         components: [
            new ActionRowBuilder().setComponents(

               new ButtonBuilder()
               .setCustomId('gitBut')
               .setLabel('Github')
               .setStyle(ButtonStyle.Primary),
            
               new ButtonBuilder()
               .setCustomId('spotify')
               .setLabel('Spotify')
               .setStyle(ButtonStyle.Success),

               new ButtonBuilder()
               .setCustomId('twitch')
               .setLabel('Twitch')
               .setStyle(ButtonStyle.Primary),

               new ButtonBuilder()
               .setCustomId('reddit')
               .setLabel('Reddit')
               .setStyle(ButtonStyle.Danger)
            ),
         ],
      });
   }
}