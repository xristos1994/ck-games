import { start[%Model%] } from "./actions";

const reducer = (state = { [%model%]Started: false }, action) => {
  switch (action.type) {
    case start[%Model%].type:
      return { ...state, [%model%]Started: true };
    default:
      return state;
  }
};

export const [%model%]Reducer = {
  [%model%]: reducer,
};