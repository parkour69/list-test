import { createAction } from '@ngrx/store';

export const changeToGridView = createAction(
  'Change to grid'
);
export const changeToListView = createAction(
  'Change to list'
);
