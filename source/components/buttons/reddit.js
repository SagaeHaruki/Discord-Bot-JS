module.exports = {
   data: {
      name: `reddit`
   },
   async execute(interaction, client) {
      await interaction.reply({
         content: `https://www.reddit.com/user/Okeehnaruu`
      });
   }
}