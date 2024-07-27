import { createSelector } from '@ngrx/store';
import { WebSerialState } from '../reducers';

export const selectFeature = (state: WebSerialState) => state;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: WebSerialState) => state.isConnect
);
