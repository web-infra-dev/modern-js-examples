import { renderApp } from '@modern-js/runtime/testing';
import Index from '../pages';

describe('home page', () => {
  it('should have contents', () => {
    const { getByText } = renderApp(<Index />);
    expect(getByText('Powered by Modern.js')).toBeInTheDocument();
  });
});
