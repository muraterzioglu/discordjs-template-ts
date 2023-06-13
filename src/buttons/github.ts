import { ButtonInt } from '../interface';
import { ButtonBuilder, EmbedBuilder } from '@discordjs/builders';
import { ButtonStyle } from 'discord-api-types/v10';

export const buttonGithub: ButtonInt = {
	data: new ButtonBuilder()
		.setLabel('GitHub')
		.setStyle(ButtonStyle.Primary)
		.setCustomId('btn-github'),
	run: async ({ data, api }) => {
		const { data: githubEmbed } = new EmbedBuilder()
			.setTitle('Hello There!')
			.setDescription('Here is my GitHub Address!')
			.setFields([ { name: 'Test Field', value: 'Haiii [My GitHub](https://github.com/muraterzioglu)' } ]);

		await api.interactions.reply(data.id,
			data.token,
			{
				embeds: [githubEmbed],
			},
		);
		return;
	},
};