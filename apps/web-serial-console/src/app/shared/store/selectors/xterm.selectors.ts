import { createSelector } from '@ngrx/store';
import { XTermState } from '../models';

export const selectXTermFeature = (state: XTermState) => state;

export const selectWriteData = createSelector(
  selectXTermFeature,
  (state: XTermState) => state.wirteData
);

export const selectReadData = createSelector(
  selectXTermFeature,
  (state: XTermState) => state.readData
);

export const selectCurrentDirectory = createSelector(
  selectXTermFeature,
  (state: XTermState) => state.currentDirectory
);
