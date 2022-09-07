import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  test('should use counter', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe('function');
  });
  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);

    act(() => {
      for (let i = 0; i < 4; i++) {
        result.current.increment();
      }
    });
    expect(result.current.count).toBe(5);
  });
  test('initial value', () => {
    const { result } = renderHook(() => useCounter(1000));
    expect(result.current.count).toBe(1000);

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1001);
  });
  test('reset', () => {
    const { result, rerender } = renderHook(({ initial }) => useCounter(initial), {
      initialProps: { initial: 0 },
    });

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);

    rerender({ initial: 10 });

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(10);
  });
});
