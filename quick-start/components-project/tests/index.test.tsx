import { render, screen } from '@modern-js/runtime/testing';

import Component from '@/index';

describe('Default cases', () => {
  test('Rendered', () => {
    render(<Component />);
    expect(screen.getByText('Hello Modern.js')).toBeInTheDocument();
  });
});
