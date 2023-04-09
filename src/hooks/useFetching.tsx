import { useState } from 'react';

export const useFetching = (callback: () => Promise<void>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error: unknown) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as [() => Promise<void>, boolean, string];
};
