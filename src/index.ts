// noinspection SpellCheckingInspection
import { REST } from '@discordjs/rest';
import { WebSocketManager } from '@discordjs/ws';
import {
	Client,
	GatewayIntentBits,
} from '@discordjs/core';
import { GatewayDispatchEvents } from 'discord-api-types/v10';
import { onReady } from './events/onReady';
import { onInteraction } from './events/onInteraction';

// Create REST and WebSocket managers directly
export const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
const gateway = new WebSocketManager({
	token: process.env.TOKEN,
	intents:
        GatewayIntentBits.Guilds |
        GatewayIntentBits.GuildMembers |
        GatewayIntentBits.GuildModeration |
        GatewayIntentBits.GuildEmojisAndStickers |
        GatewayIntentBits.GuildWebhooks |
        GatewayIntentBits.GuildMessages |
        GatewayIntentBits.GuildMessageReactions |
        GatewayIntentBits.DirectMessages |
        GatewayIntentBits.DirectMessageReactions |
        GatewayIntentBits.MessageContent |
        GatewayIntentBits.GuildModeration,
	rest,
});

// Create a client to emit relevant events.
const client = new Client({ rest, gateway });

// Listen for interactions
// Each event contains an `api` prop along with the event data that allows you to interface with the Discord REST API
client.on(GatewayDispatchEvents.InteractionCreate, async (interaction) => await onInteraction(interaction));

// Listen for the ready event and start the WebSocket connection.
client.once(GatewayDispatchEvents.Ready, async () => await onReady(client));
gateway.connect().then();