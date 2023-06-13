import {
	GatewayInteractionCreateDispatchData,
	InteractionType,
	WithIntrinsicProps,
} from '@discordjs/core';
import { errorHandler } from '../utils';
import { CommandList } from '../interactions';

export const onInteraction = async (
	interaction: WithIntrinsicProps<GatewayInteractionCreateDispatchData>,
): Promise<void> => {
	try {
		if (interaction.data.type === InteractionType.ApplicationCommand) {
			for (const Command of CommandList) {
				if (interaction.data.data.name === Command.data.name) {
					await Command.run(interaction);
					break;
				}
			}
		}
	}
	catch (err) {
		errorHandler('onInteraction event', err);
	}
};