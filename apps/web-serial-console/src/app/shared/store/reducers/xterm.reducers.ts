import { createReducer, on } from '@ngrx/store';
import * as XTermActions from '../actions/xterm.actions';
import { XTermState } from '../models';

export const initialXTermState: XTermState = {
  /**
   * TODO: new Terminal() を定義すると下記ワーニング発生する
   * ▲ [WARNING] bundle initial exceeded maximum budget. Budget 1.05 MB was not met by 39.78 kB with a total of 1.09 MB.
   * ▲ [WARNING] Module '@xterm/xterm' used by 'src/app/shared/store/reducers/xterm.reducers.ts' is not ESM
   * 暫定で、null で初期化しておく
   */
  terminal: null,
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
