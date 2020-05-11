import { Action } from "redux";

export interface GenericAction<T> extends Action {
  payload: T;
} 
