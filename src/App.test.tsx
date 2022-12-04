import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('render without crashing', () => {
    const { container, getByText } = render(<App />);
    expect(container).toBeInTheDocument();
    expect(getByText('Todo')).toBeInTheDocument();
    expect(getByText('In-Progress')).toBeInTheDocument();
    expect(getByText('In-QA')).toBeInTheDocument();
    expect(getByText('Done')).toBeInTheDocument();
  });
});
