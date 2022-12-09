import { render } from '@testing-library/react';
import { App } from 'src/App';
import { AppContext } from './AppContext';

describe.skip('AppContext', () => {
  it('appState is null by default', () => {
    // const { getByText } = render(
    //   <AppContext.Provider value={{ state: {} }}>
    //     <App />
    //   </AppContext.Provider>
    // );
    // expect(getByText('no tasks currently')).toBeInTheDocument();
  });
});
