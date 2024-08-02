import { createAction, props } from '@ngrx/store';
import { SerialPort } from 'web-serial-polyfill';

export const initPort = createAction('[Web Searial] initialize');
export const connectPort = createAction(
  '[Web Searial] Connect',
  props<{ isConnect: boolean; port: SerialPort }>()
);
export const disConnectPort = createAction('[Web Searial] disConnectPort');
