import { Terminal } from '@xterm/xterm';

export interface XTermState {
  terminal: Terminal;
  wirteData: string;
  readData: string;
  currentDirectory: string;
}
