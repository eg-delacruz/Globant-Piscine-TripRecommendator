import { Loading } from './loading.tsx';
import { useState } from 'react';
import { Explore } from './explore.tsx';
import { DisplayRecommendation } from './DisplayRecommendation.tsx';
import type { Recommendation } from '@/types/index.ts';

export const Index = () => {
  const [state, setState] = useState<{
    loading: boolean;
    recommendation: Recommendation | null;
    error?: string;
  }>({
    loading: false,
    recommendation: null,
    error: undefined,
  });

  const setLoading = (loading: boolean) => {
    setState((prevState) => ({ ...prevState, loading }));
  };

  const setRecommendation = (recommendation: Recommendation | null) => {
    setState((prevState) => ({ ...prevState, recommendation }));
  };

  const setError = (error: string | undefined) => {
    setState((prevState) => ({ ...prevState, error }));
  };

  if (state.error) {
    return <div className='p-4'>{state.error}</div>;
  }

  if (state.loading) return <Loading />;

  return state.recommendation ? (
    <DisplayRecommendation
      recommendation={state.recommendation}
      setRecommendation={setRecommendation}
    />
  ) : (
    <Explore
      setLoading={setLoading}
      setRecommendation={setRecommendation}
      setError={setError}
    />
  );
};
