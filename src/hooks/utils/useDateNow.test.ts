import { renderHook, act } from '@testing-library/react';
import useDateNow from './useDateNow';

/** 2022-09-18T08:52:10Z */
const dummyUnixtime = 1663491130; // [sec]
/** 2022-09-18T08:52:10.000Z */
const dummyTime = dummyUnixtime * 1000;

describe('useDateNow', () => {
  beforeEach(() => {
    // const mockDate = new Date(2022, 5, 15, 12, 34, 56);
    const mockDate = new Date(dummyTime);
    vitest.useFakeTimers();
    vitest.setSystemTime(mockDate);
  });
  afterEach(() => {
    vitest.clearAllMocks();
    vitest.clearAllTimers();
    vitest.useRealTimers();
  });
  it('initial time', () => {
    const { result } = renderHook(() => useDateNow());
    expect(result.current.getTime()).toBe(dummyTime);
  });
  it('clock', () => {
    const { result } = renderHook(() => useDateNow());

    act(() => {
      vitest.advanceTimersByTime(500);
    });
    expect(result.current.getTime()).toBe(dummyTime);

    act(() => {
      vitest.advanceTimersByTime(500);
    });
    expect(result.current.getTime()).toBe(dummyTime + 1000);

    act(() => {
      vitest.advanceTimersByTime(9000);
    });
    expect(result.current.getTime()).toBe(dummyTime + 10000);

    act(() => {
      vitest.advanceTimersByTime(500);
    });
    expect(result.current.getTime()).toBe(dummyTime + 10000);
  });
});
