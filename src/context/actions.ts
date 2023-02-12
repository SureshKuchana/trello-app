export type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: {
        text: string;
        listId: string;
      };
    };

export const addTask = (text: string, listId: string): Action => ({
  payload: {
    listId,
    text,
  },
  type: 'ADD_TASK',
});

export const addList = (text: string): Action => ({
  payload: text,
  type: 'ADD_LIST',
});
