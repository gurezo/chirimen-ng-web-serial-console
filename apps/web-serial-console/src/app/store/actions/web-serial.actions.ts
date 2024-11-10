import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const WebSerialActions = createActionGroup({
  source: '[Web Searial]',
  events: {
    init: emptyProps(),
    isConnected: props<{ isConnected: boolean }>(),
    receivedData: props<{ receivedData: string[] }>(),
  },
});
