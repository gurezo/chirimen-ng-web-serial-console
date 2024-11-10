import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const WebSerialActions = createActionGroup({
  source: '[Web Searial]',
  events: {
    init: emptyProps(),
    onConnect: emptyProps(),
    onConnectSuccess: props<{ isConnected: boolean }>(),
    onConnectFail: props<{ isConnected: boolean }>(),
    onDisConnect: props<{ isConnected: boolean }>(),
    receivedData: props<{ receivedData: string[] }>(),
  },
});
