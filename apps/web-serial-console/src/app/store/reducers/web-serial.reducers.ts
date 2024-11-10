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
  on(WebSerialActions.init, (state) => ({
    ...state,
    initialWebSerialState,
  })),
  on(WebSerialActions.isConnected, (state, { isConnected }) => ({
    ...state,
    isConnected,
  })),
  on(WebSerialActions.receivedData, (state, { receivedData }) => ({
    ...state,
    receivedData,
  })),
);
