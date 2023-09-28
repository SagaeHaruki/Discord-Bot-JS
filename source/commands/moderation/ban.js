const {
   SlashCommandBuilder,
   EmbedBuilder,
   PermissionFlagsBits
} = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
      .setName("ban")
      .setDescription("Ban a Member")
      .addUserOption(option => option.setName("target").setDescription("The member you want to ban").setRequired(true))
      .addStringOption(option => option.setName("reason").setDescription("The reason for banning this member"))
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

   async execute(interaction, client) {
      const {
         channel,
         options
      } = interaction;
      const user = options.getUser("target");
      const reason = options.getString("reason") || "No reason provided";
      const member = await interaction.guild.members.fetch(user.id);

      const redembed = new EmbedBuilder()
         .setDescription(`You cannot use this command to **${user.username}** which have a higher role.`)
         .setColor(0xc72c3b);

      if (member.roles.highest.position >= interaction.member.roles.highest.position)
         return interaction.reply({
            embeds: [redembed],
            ephemeral: true
         });

      try {
         await member.ban({
            reason
         });

         const embed = new EmbedBuilder()
            .setDescription(`The user **${user}** has been banned for **${reason}**`)
            .setColor(0x5fb041)
            .setTimestamp()

         await interaction.reply({
            embeds: [embed],
         });

      } catch (err) {
         console.log(err)

         const embed2 = new EmbedBuilder()
            .setDescription(`Please Enter a **valid** user ID`)
            .setColor(0xc72c3b)
            .setTimestamp()

         interaction.reply({
            embeds: [embed2],
            ephemeral: true
         });
      }
   }
}