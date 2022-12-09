import React, { createContext, useContext } from 'react';

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

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
  state: AppState | Record<string, never>;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <AppContext.Provider value={{ state: appData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};
