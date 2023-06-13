import { ButtonBuilder } from '@discordjs/builders';
import {
	GatewayInteractionCreateDispatchData,
	WithIntrinsicProps,
} from '@discordjs/core';

export interface ButtonInt {
    data: ButtonBuilder | any;
    // eslint-disable-next-line no-unused-vars
    run: (interaction: WithIntrinsicProps<GatewayInteractionCreateDispatchData> | any) => Promise<void>;
}