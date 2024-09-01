import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const XTermActions = createActionGroup({
  source: '[XTerm]',
  events: {
    init: emptyProps(),
    currentDirectory: props<{ currentDirectory: string }>(),
    read: props<{ readData: string }>(),
    write: props<{ wirteData: string }>(),
  },
});
