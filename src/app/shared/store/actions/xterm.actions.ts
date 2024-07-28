import { createAction, props } from '@ngrx/store';

export const init = createAction('[XTerm] initialize');
export const write = createAction(
  '[XTerm] Write',
  props<{ wirteData: string }>()
);
export const read = createAction('[XTerm] Read', props<{ readData: string }>());
export const currentDirectory = createAction(
  '[XTerm] Current Directory',
  props<{ currentDirectory: string }>()
);
