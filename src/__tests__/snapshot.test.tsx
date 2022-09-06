import { render } from '@testing-library/react';
import App from '../App';

describe('snapshot test', () => {
  it('App Component', () => {
    const { container } = render(<App />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
