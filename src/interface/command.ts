import { SlashCommandBuilder } from '@discordjs/builders';
import {
	GatewayInteractionCreateDispatchData,
	WithIntrinsicProps,
} from '@discordjs/core';

export interface CommandInt {
    data: SlashCommandBuilder | any;
	// eslint-disable-next-line no-unused-vars
    run: (interaction: WithIntrinsicProps<GatewayInteractionCreateDispatchData> | any) => Promise<void>;
}