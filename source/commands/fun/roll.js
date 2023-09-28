const {
	SlashCommandBuilder,
	EmbedBuilder
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("roll")
		.setDescription("Roll a random Number")
		.addIntegerOption(option => option.setName("amount").setDescription("The amount of number to be rolled").setRequired(true)),
	async execute(interaction, client) {
		const {
			channel,
			options
		} = interaction;

		const amount = options.getInteger("amount");

		const rand = Math.floor(Math.random() * amount) + 1;

		const embed = new EmbedBuilder()
			.setDescription(`**${interaction.user.tag}** got **${rand}** from rolling at the amount of ${amount} `)
			.setColor(0x5fb041)
			.setTimestamp()
		await interaction.reply({
			embeds: [embed],
		});
	}
}