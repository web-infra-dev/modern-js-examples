import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from '@modern-js/runtime/router';
import Page from '../routes/page';

test('Page', () => {
  render(
    <Router>
      <Page />
    </Router>,
  );
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
});
