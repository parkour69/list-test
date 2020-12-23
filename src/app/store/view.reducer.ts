import { createReducer, on } from '@ngrx/store';
import * as ViewAction from './view.action';

export const viewFeatureKey = 'view';

export interface ViewState {
  viewStyle: string;
}

export const initialState: ViewState = {
  viewStyle: 'list'
};

export const reducer = createReducer(
  initialState,
  on(ViewAction.changeToGridView, state => ({ viewStyle: 'grid' })),
  on(ViewAction.changeToListView, state => ({ viewStyle: 'list' }))
);
