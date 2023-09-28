const {
   SlashCommandBuilder,
   EmbedBuilder,
   PermissionFlagsBits,
   messageLink
} = require( 'discord.js' );

module.exports = {
   data: new SlashCommandBuilder()
      .setName( "rules" )
      .setDescription( "Display the Rules" )
      .setDefaultMemberPermissions( PermissionFlagsBits.Administrator ),

   async execute( interaction, client ) {
      const {
         channel,
         options
      } = interaction;

      const embed = new EmbedBuilder()
         .setTitle( " ⚠️    Server Rules    ⚠️ " )
         .setColor( 0x5fb041 )
         .setTimestamp( Date.now() )
         .addFields( [ {
               name: `➤ Rule #1`,
               value: `🛠 __**Listen to the Administrators, Moderators and other Staffs.**__ 🛠\nIf the Staffs have already told to cease the certain action or activity, then you must.`,
               inline: false
            },
            {
               name: `➤ Rule #2`,
               value: `✅ __**Be respectful to other members.**__ ✅\nOf course, you're allowed to enjoy yourself and fuck around with others, but if someone seems to be offended, please refrain from continuing.`,
               inline: false
            },
            {
               name: `➤ Rule #3`,
               value: `⛔️ __**There must be no bullying or doxing.**__ ⛔️\nBad conduct affects how the Server is seen and treated by the larger community and will reflect as a poor community.`,
               inline: false
            },
            {
               name: `➤ Rule #4`,
               value: `📈 __**No political or religious discussion.**__ 📈\nThere is no place for this sort of topic here.`,
               inline: false
            },
            {
               name: `➤ Rule #5`,
               value: `🔞 __**No NSFW related contents.**__ 🔞\nPlease refrain from sending NSFW contens on all Channels.`,
               inline: false
            },
            {
               name: `➤ Rule #6`,
               value: `🔕 __**No Spamming or Mass Mentions.**__ 🔕\nPlease refrain from spamming such emotes or @ mentions, all Violators will be muted/kicked/banned as a punishment.`,
               inline: false
            },
            {
               name: `➤ Rule #7`,
               value: `🔐 __**Respect the privacy of the other members.**__ 🔐\nPlease refrain from sending personal information of other people that can identify someone, this apply whether they are member of the server or not; All Violators will be put into death sentence, aka ban.`,
               inline: false
            },
            {
               name: `➤ Rule #8`,
               value: `⚙️ __**Staff can apply discretion when needed.**__ ⚙️\nWhile moderators will endeavor to follow these rules as closely as they can, no set of rules can cover every circumstance. If required, they will have to take action so the server can remain a welcoming community.`,
               inline: false
            },
            {
               name: `➤ Rule #9`,
               value: `🔧 __**Do not Backseat the Staffs or ask reasons.**__ 🔧\nIf you have a problem with any moderation action, please use the !report command to seek assistance of the Staffs.`,
               inline: false
            },
            {
               name: `➤ Rule #10`,
               value: `🎎 __**No Impersonating Staffs.**__ 🎎\nDon't try to impersonate staffs or other members.`,
               inline: false
            },
            {
               name: `➤ Others`,
               value: `📌 __**Discord Terms and Regulations.**__ 📌\nDiscord Terms: https://discordapp.com/terms\nDiscord Guidelines: https://discordapp.com/guidelines`,
               inline: false
            },
         ] )
        
         
      await interaction.reply("Rules has been posted", 
      {
         ephemeral: true
      });   
      channel.send( {
         embeds: [ embed ]
      } );
   }
}