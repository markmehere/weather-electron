import { ThunkAction } from "redux-thunk";
import { AppStore } from "../redux/reducers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericThunk = ThunkAction<any, AppStore, undefined, any>;
