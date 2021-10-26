import { renderApp, waitFor } from '@modern-js/runtime/testing';
import ContactContainer from './Contacts';

describe('test contracts model', () => {
  it('actions works well', async () => {
    const { getByText } = renderApp(<ContactContainer source="items" />);

    await waitFor(() => {
      expect(getByText('Pending...')).toBeInTheDocument();
    });
  });
});
