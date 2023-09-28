const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
      .setName('info')
      .setDescription('Bot Info'),
   async execute(interaction, client) {
      const embed = new EmbedBuilder()
         .setTitle('Atrophlne\'s Github')
         .setURL(`https://github.com/Atrophlne`)
         .setDescription('Bot Description')
         .setColor(0x18e1ee)
         .setTimestamp(Date.now())
         .addFields([
            {
               name: `Discord js Version: `,
               value: `V 14.6.0`,
               inline: true
            }, 
            {
               name: `Developer: `,
               value: `Atrophlne#1626`,
               inline: true
            },
            {
               name: `Bot Language: `,
               value: `English`,
               inline: true
            },
            {
               name: `Bot Location: `,
               value: `Philippines`,
               inline: true
            },
            {
               name: `Language: `,
               value: `JavaScript`,
               inline: true
            }, 
            {
               name: `Date Creation: `,
               value: `Oct 22, 2022 `,
               inline: true
            }
         ]);

         await interaction.reply({
            embeds: [embed]
         })
   }
}