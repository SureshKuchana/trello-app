import { render } from '@testing-library/react';
import { App } from './App';

describe.skip('App Component', () => {
  it('render without crashing', () => {
    const { container, getByText } = render(<App />);
    expect(container).toBeInTheDocument();
    expect(getByText('Todo')).toBeInTheDocument();
    expect(getByText('In-Progress')).toBeInTheDocument();
    expect(getByText('Done')).toBeInTheDocument();
  });
});
