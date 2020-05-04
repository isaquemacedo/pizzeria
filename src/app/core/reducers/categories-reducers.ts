import { Categories } from '../models/categories.model';
import { ActionModel } from '../models/action-model.model';
import { ActionTypes } from '../actions/actions';


export const categories = new Categories();
export const categoriesKey = 'categories';

export function categoriesReducer(state = categories, action: ActionModel ) {
  switch (action.type) {
    case ActionTypes.ListCategories:
      return Object.assign(categories, action.payload);
  }
}
