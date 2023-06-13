import { CommandInt } from '../interface';
// Commands
import { interactionPing } from './ping';
import { interactionHello } from './hello';

export const CommandList: CommandInt[] = [interactionHello, interactionPing];