import { findItemIndexById } from '../utils/arrayUtils';
import { Action } from './actions';

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

export const appReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      draft.lists.push({
        id: crypto.randomUUID(),
        tasks: [],
        text: action.payload,
      });
      break;
    }
    case 'ADD_TASK': {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);

      draft.lists[targetListIndex].tasks.push({
        id: crypto.randomUUID(),
        text,
      });
      break;
    }
    default:
      break;
  }
};
