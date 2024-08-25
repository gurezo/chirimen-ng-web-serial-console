import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const WebSerialActions = createActionGroup({
  source: '[Web Searial]',
  events: {
    initPort: emptyProps(),
    connectPort: props<{ isConnect: boolean; port: SerialPort }>(),
    disConnectPort: emptyProps(),
  },
});
