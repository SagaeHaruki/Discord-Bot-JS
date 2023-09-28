module.exports = {
   data: {
      name: `spotify`
   },
   async execute(interaction, client) {
      await interaction.reply({
         content: `https://open.spotify.com/user/31pb5cnsc4ris33r7gfs5fxrcdu4`
      });
   }
}