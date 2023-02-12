import React, { createContext, useContext, Dispatch } from 'react';
import { Action } from './actions';
import { AppState, List, Task, appReducer } from './AppReducer';
import { useImmerReducer } from 'use-immer';

const appData: AppState = {
  lists: [
    {
      id: '0',
      tasks: [
        {
          id: 'c0',
          text: 'Generate app scaffold',
        },
      ],
      text: 'To Do',
    },
    {
      id: '1',
      tasks: [
        {
          id: 'c1',
          text: 'Learn typescript',
        },
      ],
      text: 'In Progress',
    },
    {
      id: '2',
      tasks: [{ id: 'c2', text: 'Begin to use static typing' }],
      text: 'Done',
    },
  ],
};

type AppContextProps = {
  dispatch: Dispatch<Action>;
  lists: List[];
  getTasksByListId(id: string): Task[];
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useImmerReducer(appReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return (
    <AppContext.Provider value={{ dispatch, getTasksByListId, lists }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};
