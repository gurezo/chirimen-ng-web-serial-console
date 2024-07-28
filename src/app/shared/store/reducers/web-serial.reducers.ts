import { createReducer, on } from '@ngrx/store';
import * as WebSerialActions from '../actions/web-serial.actions';
import { WebSerialState } from '../models';

export const initialState: WebSerialState = {
  isConnect: false,
  ports: [],
  port: undefined,
};

export const webSerialFeatureKey = 'webSerial';

export const webSerialReducer = createReducer(
  initialState,
  on(WebSerialActions.initPort, (state) => ({
    ...state,
  })),
  on(WebSerialActions.connectPort, (state, { isConnect, port }) => ({
    ...state,
    isConnect,
    port,
  })),
  on(WebSerialActions.disConnectPort, (state) => ({
    ...state,
    initialState,
  }))
);
