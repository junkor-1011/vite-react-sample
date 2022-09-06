import { render } from '@testing-library/react';
import { createSerializer } from '@emotion/jest';
import App from '../App';

expect.addSnapshotSerializer(createSerializer());

describe('snapshot test', () => {
  it('App Component', () => {
    const { container } = render(<App />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  });
});
