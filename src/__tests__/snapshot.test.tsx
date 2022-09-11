import { screen, render } from '@testing-library/react';
import { createSerializer } from '@emotion/jest';
import App from '../App';

expect.addSnapshotSerializer(createSerializer());

describe('snapshot test', () => {
  it('App Component', () => {
    render(<App />);
    expect(screen.getByTestId('App')).toMatchSnapshot();
  });
});
