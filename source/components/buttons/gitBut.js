module.exports = {
   data: {
      name: `gitBut`
   },
   async execute(interaction, client) {
      await interaction.reply({
         content: `https://github.com/Atrophlne`
      });
   }
}