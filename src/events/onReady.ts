import { REST } from '@discordjs/rest';
import { Client } from '@discordjs/core';
import { APIApplicationCommandOption, Routes } from 'discord-api-types/v10';

import { CommandList } from '../interactions';
import { logHandler, errorHandler } from '../utils';

// eslint-disable-next-line no-unused-vars
export const onReady = async (client: Client): Promise<void> => {
	try {
		const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

		const commandData: {
            name: string;
            description?: string;
            type?: number;
            options?: APIApplicationCommandOption[];
        }[] = [];

		CommandList.forEach((command) =>
			commandData.push(
                command.data.toJSON() as {
                    name: string;
                    description?: string;
                    type?: number;
                    options?: APIApplicationCommandOption[];
                },
			),
		);
		await rest.put(
			Routes.applicationGuildCommands(
				process.env.APP_ID,
				process.env.GUILD_ID,
			),
			{ body: commandData },
		)
			.then(() => logHandler.log('info', 'Successfully registered application commands.'))
			.catch(err => errorHandler('onReady Put Error', err));
		logHandler.log('info', 'Bot has connected to Discord!');
	}
	catch (err) {
		errorHandler('onReady event', err);
	}
};
