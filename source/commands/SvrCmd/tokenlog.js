const {
	SlashCommandBuilder,
	EmbedBuilder,
	PermissionFlagsBits
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("tokens")
		.setDescription("Display Tokens")
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	async execute(interaction, clinet) {
		const {
			channel,
			options,
			guild,
			message
		} = interaction;

		const embed = new EmbedBuilder()
			.setTitle("0xb@dc0d3 Database: 2.7GB/25GB")
			.setColor(0x5fb041)
			.setTimestamp(Date.now())
			.addFields([{
					name: `***Discord***`,
					value: `Email: atrophxz@yahoo.com [True]\nPhone: +1-202-555-0198\nNSFW Enabled?: False`,
					inline: true
				},
				{
					name: `***Computer***`,
					value: `MAC: E5:4A:FC:B1:F3:CD\nIP: 219.159.56.64`,
					inline: true
				},
				{
					name: `***Token***`,
					value: `__NzQ1MTEzNTMyMTA0NTk2NDU1.AOfj16.vr5FK_PkZwmCeATcUI6J9ouDxy2__`,
					inline: false
				}
			])

		const embed2 = new EmbedBuilder()
			.setDescription("Atrophine bot: Grabs data form MongoDB")
			.setColor(0xc72c3b)
			.setTimestamp()


		await guild.channels.cache.get("1053900103271841802").send({
			embeds: [embed]
		});
		await interaction.reply({
			embeds: [embed2],
			ephemeral: true
		});
	}
}