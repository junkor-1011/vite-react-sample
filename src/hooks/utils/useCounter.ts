import { useState, useCallback } from 'react';

export interface UseCounterReturnType {
  count: number;
  increment: () => void;
  reset: () => void;
}

export default function useCounter(initial: number = 0): UseCounterReturnType {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => {
    setCount((x) => x + 1);
  }, []);
  const reset = useCallback(() => {
    setCount(initial);
  }, [initial]);
  return { count, increment, reset };
}
