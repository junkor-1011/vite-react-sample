import { useState, useCallback } from 'react';

export interface UseCounterReturnType {
  count: number;
  increment: () => void;
}

export default function useCounter(): UseCounterReturnType {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
}
