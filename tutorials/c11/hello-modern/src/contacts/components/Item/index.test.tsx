import { render } from '@modern-js/runtime/testing';
import Item from '.';

const defaultProps = {
  info: {
    avatar: 'https://via.placeholder.com/350x350',
    name: 'foo',
    email: 'foo.bar@bytedance.com',
    archived: false,
  },
};

describe('Item', () => {
  it('should have contents', () => {
    const {
      info: { name },
    } = defaultProps;
    const { getByText } = render(<Item {...defaultProps} />);
    expect(getByText(name)).toBeInTheDocument();
  });
});
