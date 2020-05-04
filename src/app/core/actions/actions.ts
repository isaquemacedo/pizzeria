import { Action } from '@ngrx/store';

export enum ActionTypes {
  ListCategories = 'LCA',
  AddCategorie = 'ADDCA',
  ListFlavors = 'LFL',
  AddFlavor = 'ADDFL',
  RemoveFlavor = 'REMFL',
  ClearFavlors = 'CLEFF'
}

export const ListCategories = (object: any) => {
  return { type: ActionTypes.ListCategories, payload: object } as Action;
};

export const AddCategorie = (object: any) => {
  return { type: ActionTypes.AddCategorie, payload: object } as Action;
};

export const ListFlavors = (object: any) => {
  return { type: ActionTypes.ListFlavors, payload: object } as Action;
};

export const AddFlavor = (object: any) => {
  return { type: ActionTypes.AddFlavor, payload: object } as Action;
};

export const RemoveFlavor = (object: any) => {
  return { type: ActionTypes.RemoveFlavor, payload: object } as Action;
};

export const ClearFavlor = () => {
  return { type: ActionTypes.ClearFavlors, payload: null } as Action;
};
