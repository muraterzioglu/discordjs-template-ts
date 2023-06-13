import { CommandInt } from '../interface';
import { SlashCommandBuilder, EmbedBuilder } from '@discordjs/builders';
import { IWithOptions } from '../interface/interactions';

export const interactionPing: CommandInt = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Here\'s your pong!')
		.addStringOption(option => option.setName('input').setDescription('The input to echo back')),
	run: async ({ data, api }) => {
		const payload: IWithOptions = data.data;
		const optionalTestField = Array.isArray(payload.options) ? payload.options[0].value ? payload.options[0].value : 'Optional field is empty!' : 'Optional field is empty!';

		const { data: helpEmbed } = new EmbedBuilder()
			.setTitle('Hello There!')
			.setDescription(
				'This discord bot is using next version of discord.js and will be a template some day!',
			)
			.setFields([{ name: 'Test Field', value: optionalTestField }])
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