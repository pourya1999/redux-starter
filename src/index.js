import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(bugAdded("bug 1"));
store.dispatch(bugAdded("bug 2"));
store.dispatch(bugAdded("bug 3"));
store.dispatch(bugAdded("bug 4"));
store.dispatch(bugResolved(1));

// store.dispatch(bugRemoved(1));

console.log(store.getState());
