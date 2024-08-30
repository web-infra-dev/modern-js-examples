import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from '@modern-js/runtime/router';
import Page from '../routes/page';

describe('Page', () => {
  it('renders a heading', () => {
    render(
      <Router>
        <Page />
      </Router>,
    );

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
