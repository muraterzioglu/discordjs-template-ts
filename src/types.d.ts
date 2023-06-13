import { Collection } from '@discordjs/collection';

declare module '@discordjs/core' {
    export interface Client {
        commands: Collection<unknown, any>
    }
}