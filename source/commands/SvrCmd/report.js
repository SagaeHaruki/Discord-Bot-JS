const {
   SlashCommandBuilder,
   EmbedBuilder,
   GatewayIntentBits
} = require( 'discord.js' );

module.exports = {
   data: new SlashCommandBuilder()
      .setName( "report" )
      .setDescription( "Report an issue" )
      .addStringOption( option => option.setName( "type" )
         .setDescription( "What kind of issue (Server / Bot)" ).setRequired( true ) )
      .addStringOption( option => option.setName( "issue" )
         .setDescription( "What is the issue?" ).setRequired( true ) ),

   async execute( interaction, client ) {
      const {
         channel,
         options,
         guild,
         message
      } = interaction;

      const rType = options.getString( "type" );
      const rIssue = options.getString( "issue" );
      const uName = client.user.tag;

      const embed = new EmbedBuilder()
         .setTitle( "Report from" )
         .setDescription( `${uName}` )
         .setColor( 0xc72c3b )
         .setTimestamp()
         .addFields( [ {
               name: `**Report type**`,
               value: rType,
               inline: false
            },
            {
               name: `The issue`,
               value: rIssue,
               inline: false
            }
         ] )

      const embed2 = new EmbedBuilder()
         .setDescription( `**Report has been Submitted**` )
         .setColor( 0xc72c3b )
         .setTimestamp()

      await interaction.reply( {
         embeds: [ embed2 ],
         ephemeral: true
      } );

      await guild.channels.cache.get( "1054745698828034058" ).send( {
         embeds: [ embed ]
      } );
   }
}