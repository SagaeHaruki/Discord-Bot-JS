const {
	SlashCommandBuilder,
	EmbedBuilder,
	PermissionFlagsBits
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("unban")
		.setDescription("Unban a Member")
		.addStringOption(option => option.setName("userid").setDescription("Unban a member").setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	async execute(interaction, client) {
		const {
			channel,
			options
		} = interaction;
		const user = options.getString("userid");

		try {
			await interaction.guild.members.unban(user);

			const embed = new EmbedBuilder()
				.setDescription(`The user **${user}** has been Unbanned `)
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