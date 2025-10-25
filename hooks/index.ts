import { useState, useEffect } from 'react';

// Example custom hook
export function useExample() {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    // Add your logic here
  }, []);

  return { value, setValue };
}