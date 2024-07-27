import { createSelector } from '@ngrx/store';
import { WebSerialState } from '../reducers';

export const selectWebSerialFeature = (state: WebSerialState) => state;

export const selectIsConnect = createSelector(
  selectWebSerialFeature,
  (state: WebSerialState) => state.isConnect
);
