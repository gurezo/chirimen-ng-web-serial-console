import { Terminal } from '@xterm/xterm';

export interface XTermState {
  terminal: Terminal | null;
  wirteData: string;
  readData: string;
  currentDirectory: string;
}
