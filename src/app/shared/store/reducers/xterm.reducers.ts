import { createReducer, on } from '@ngrx/store';
import { Terminal } from '@xterm/xterm';
import * as XTermActions from '../actions/xterm.actions';
import { XTermState } from '../models';

export const initialXTermState: XTermState = {
  terminal: new Terminal(),
  wirteData: '',
  readData: '',
  currentDirectory: '',
};

export const xtermFeatureKey = 'xterm';

export const xtermReducer = createReducer(
  initialXTermState,
  on(XTermActions.init, (state) => ({
    ...state,
  })),
  on(XTermActions.write, (state, { wirteData }) => ({
    ...state,
    wirteData,
  })),
  on(XTermActions.read, (state, { readData }) => ({
    ...state,
    readData,
  })),
  on(XTermActions.currentDirectory, (state, { currentDirectory }) => ({
    ...state,
    currentDirectory,
  }))
);
