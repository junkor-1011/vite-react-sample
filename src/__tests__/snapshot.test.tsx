import { screen, render } from '@testing-library/react';
import { createSerializer } from '@emotion/jest';
import App from '../App';

/** 2022-09-18T08:52:10Z */
const dummyUnixtime = 1663491130; // [sec]
/** 2022-09-18T08:52:10.000Z */
const dummyTime = dummyUnixtime * 1000;

expect.addSnapshotSerializer(createSerializer());

describe('snapshot test', () => {
  beforeEach(() => {
    vitest.useFakeTimers();
    vitest.setSystemTime(dummyTime);
  });
  afterEach(() => {
    vitest.clearAllMocks();
    vitest.clearAllTimers();
    vitest.useRealTimers();
  });
  it('App Component', () => {
    render(<App />);
    expect(screen.getByTestId('App')).toMatchSnapshot();
  });
});
