import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from "./actionTypes";

export const bugAdded = description => {
  return {
    type: BUG_ADDED,
    payload: {
      description: description
    }
  };
};

export const bugRemoved = id => {
  return {
    type: BUG_REMOVED,
    payload: {
      id: 1
    }
  };
};
export const bugResolved = id => {
  return {
    type: BUG_RESOLVED,
    payload: {
      id
    }
  };
};
