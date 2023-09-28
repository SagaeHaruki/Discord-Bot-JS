const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
      .setName("games")
      .setDescription("See what games a member is playing")
      .addStringOption(option => option.setName("member").setDescription("The member you want to see what game is playing").setRequired(true)),

      async execute(interaction, client) {
         const { channel, options } = interaction;
         const member = options.getString("member");
         const owner = "atrophlne#1626";

         // Atrophlne
         if(member == ("atrophlne").toUpperCase() || member == ("atrophlne").toLowerCase()) {
            const embed = new EmbedBuilder()
            .setTitle(`You've selected **${member}**`)
            .setDescription(`Games being Played by: **${member}**`)
            .setColor(0x5fb041)
            .setTimestamp()
            .setFooter({ text:`Message ${owner} to bind your account` })
            .addFields([
               {
                  name: `Osu! Game`,
                  value: `ID: Hidden`,
                  inline: true
               }, 
               {
                  name: `Valorant`,
                  value: `ID: Hidden`,
                  inline: true
               }, 
               {
                  name: `CrossFire`,
                  value: `ID: LethalZedstr`,
                  inline: true
               }
            ]);

            await interaction.reply({ embeds: [embed], });

            // Eugene
         } else if(member == ("ujin").toUpperCase() || member == ("ujin")) {
            const embed = new EmbedBuilder()
            .setTitle(`You've selected **${member}**`)
            .setDescription(`Games being Played by: **${member}**`)
            .setColor(0x5fb041)
            .setTimestamp()
            .setFooter({ text:`Message ${owner} to bind your account` })
            .addFields([
               {
                  name: `Osu! Game`,
                  value: `ID: Not Played`,
                  inline: true
               }, 
               {
                  name: `Valorant`,
                  value: `ID: mlgrcs #6969`,
                  inline: true
               }, 
               {
                  name: `CrossFire`,
                  value: `ID: Hidden`,
                  inline: true
               }
            ]);

            await interaction.reply({ embeds: [embed], });

            // Error
         } else {

            const error = new EmbedBuilder()

            .setDescription(`Cannot find the member ${member}`)
            .setColor(0xc72c3b)
            .setTimestamp()
            .setFooter({ text:`Please retry again` })

            await interaction.reply({ embeds: [error], });
         }
      }
}