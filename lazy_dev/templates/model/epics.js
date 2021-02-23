import { of } from "rxjs";
import { combineEpics } from "redux-observable";
import { start[%Model%] } from "./actions";

const startEpic = () => of(start[%Model%]());

export const [%model%]Epic = combineEpics(startEpic);