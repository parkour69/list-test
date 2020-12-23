import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './view.reducer';

const viewSelector = createFeatureSelector<fromStore.ViewState>(fromStore.viewFeatureKey);
const selectViewStyle = (state: fromStore.ViewState) => state.viewStyle;

export const viewStyle = createSelector(viewSelector, selectViewStyle);
