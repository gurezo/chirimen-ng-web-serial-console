import { createAction, props } from '@ngrx/store';

export const initPort = createAction('[Web Searial] initialize');
export const connectPort = createAction(
  '[Web Searial] Connect',
  props<{ isConnect: boolean }>()
);
