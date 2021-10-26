import { renderApp } from '@modern-js/runtime/testing';
import App from '../App';

describe('main entry', () => {
  it('should have contents', () => {
    const { getByText } = renderApp(<App />);
    expect(getByText('This is a landing page.')).toBeInTheDocument();
  });
});
