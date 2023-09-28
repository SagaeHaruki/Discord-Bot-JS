const {
   SlashCommandBuilder,
   EmbedBuilder,
   PermissionFlagsBits
} = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
      .setName("clear")
      .setDescription("Clear a messages in a channel")
      .addIntegerOption(option => option.setName("amount").setDescription("Set amount of messages to be cleared.").setRequired(true))
      .addUserOption(option => option.setName("target").setDescription("Select a member you want to clear messages.").setRequired(true))
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

   async execute(interaction, client) {
      const {
         channel,
         options
      } = interaction;

      const amount = options.getInteger("amount");
      const user = options.getUser("target");

      const messages = channel.messages.fetch({
         limit: amount + 1,
      })

      const embed1 = new EmbedBuilder()
         .setColor(0x5fb041)
         .setTimestamp()
      try {
         if (user) {
            let i = 0;
            const filtered = [];

            (await messages).filter((msg) => {
               if (msg.author.id === user.id && amount > i) {
                  filtered.push(msg);
                  i++;
               }
            });

            await channel.bulkDelete(filtered).then(messages => {
               embed1.setDescription(`Deleted ${messages.size} messages from the User: ${user}`)
               interaction.reply({
                  embeds: [embed1]
               });
            })
         }
      }
      catch
      {
         await interaction.reply("Canno delete messages more than 14 days!");      
      }
   }
}