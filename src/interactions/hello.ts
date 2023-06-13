import { CommandInt } from '../interface';
import { SlashCommandBuilder, EmbedBuilder } from '@discordjs/builders';

export const interactionHello: CommandInt = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Provides information on using this bot!'),
	run: async ({ data, api }) => {
		const { data: helpEmbed } = new EmbedBuilder()
			.setTitle('Hello There!')
			.setDescription(
				'This discord bot is using next version of discord.js and will be a template some day!',
			)
			.setFields([{ name: 'Test Field', value: 'Test field value will be here!' }])
			.setFooter({ text: `Version ${process.env.npm_package_version}` });

		await api.interactions.reply(data.id,
			data.token,
			{
				embeds: [helpEmbed],
			},
		);
		return;
	},
};