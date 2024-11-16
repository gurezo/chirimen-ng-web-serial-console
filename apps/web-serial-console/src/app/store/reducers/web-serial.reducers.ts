import { createReducer, on } from '@ngrx/store';
import { WebSerialActions } from '../actions/web-serial.actions';
import { WebSerialState } from '../models';

export const initialWebSerialState: WebSerialState = {
  isConnected: false,
  receivedData: [],
};

export const webSerialFeatureKey = 'webSerial';

export const webSerialReducer = createReducer(
  initialWebSerialState,
  on(WebSerialActions.init, () => ({
    ...initialWebSerialState,
  })),
  on(WebSerialActions.onConnect, (state) => ({
    ...state,
  })),
  on(WebSerialActions.onConnectSuccess, (state, { isConnected }) => ({
    ...state,
    isConnected,
  })),
  on(WebSerialActions.onConnectFail, (state, { isConnected }) => ({
    ...state,
    isConnected,
  })),
  on(WebSerialActions.onDisConnect, () => ({
    ...initialWebSerialState,
  })),
  on(WebSerialActions.receivedData, (state, { receivedData }) => ({
    ...state,
    receivedData,
  })),
);
