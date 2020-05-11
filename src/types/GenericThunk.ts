import { ThunkAction } from "redux-thunk";
import { AppStore } from "../redux/reducers";

export type GenericThunk = ThunkAction<any, AppStore, undefined, any>;