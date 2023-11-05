import { ClassRegistry } from './class-registry';
import * as commands from '../dto/commands';
import * as events from '../dto/events';

export const messageRegistry = new ClassRegistry();

// commands : operations to change state
messageRegistry.registerClasses([
  commands.EmailSendCommand,
  commands.ItemDestroyCommand,
]);

// events : notification of change of state
messageRegistry.registerClasses([events.CharacterLevelUpEvent]);
