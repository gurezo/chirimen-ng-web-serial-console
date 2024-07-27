import { createReducer, on } from '@ngrx/store';
import * as WebSerialActions from '../actions/web-serial.actions';

export interface WebSerialState {
  isConnect: boolean;
}

export const initialState: WebSerialState = {
  isConnect: false,
};

export const webSerialFeatureKey = 'webSerial';

export const webSerialReducer = createReducer(
  initialState,
  on(WebSerialActions.initPort, (state) => ({
    ...state,
  })),
  on(WebSerialActions.connectPort, (state, { isConnect }) => ({
    ...state,
    isConnect,
  }))
);
