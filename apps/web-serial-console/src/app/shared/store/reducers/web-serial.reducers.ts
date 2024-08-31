import { createReducer, on } from '@ngrx/store';
import { WebSerialActions } from '../actions/web-serial.actions';
import { WebSerialState } from '../models';

export const initialWebSerialState: WebSerialState = {
  isConnect: false,
  ports: [],
  port: undefined,
};

export const webSerialFeatureKey = 'webSerial';

export const webSerialReducer = createReducer(
  initialWebSerialState,
  on(WebSerialActions.init, (state) => ({
    ...state,
  })),
  on(WebSerialActions.connect, (state, { isConnect, port }) => ({
    ...state,
    isConnect,
    port,
  })),
  on(WebSerialActions.disConnect, (state) => ({
    ...state,
    initialWebSerialState,
  })),
);
