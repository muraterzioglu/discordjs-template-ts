import { GatewayInteractionCreateDispatchData, InteractionType, WithIntrinsicProps } from '@discordjs/core';
import { errorHandler } from '../utils';
import { CommandList } from '../interactions';
import { ButtonList } from '../buttons';

export const onInteraction = async (
	interaction: WithIntrinsicProps<GatewayInteractionCreateDispatchData>,
): Promise<void> => {
	try {
		switch (interaction.data.type) {
		case InteractionType.ApplicationCommand:
			for (const Command of CommandList) {
				if (interaction.data.data.name === Command.data.name) {
					await Command.run(interaction);
					break;
				}
			}
			break;

		case InteractionType.MessageComponent:
			for (const Button of ButtonList) {
				if (interaction.data.data.custom_id === Button.data.data.custom_id) {
					await Button.run(interaction);
					break;
				}
			}
			break;
		}
	}
	catch (err) {
		errorHandler('onInteraction event', err);
	}
};