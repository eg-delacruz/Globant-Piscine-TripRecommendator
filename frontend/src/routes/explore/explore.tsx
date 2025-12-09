import { useState, useEffect } from 'react';
import { images } from './images.ts';
import type { Recommendation } from '@/types/index.ts';
import { Link } from 'react-router';

// Custom hooks
import { useInputValue } from '@/hooks/useInputValue.tsx';

//Config
import { API_URL } from '@/config/api.ts';

type ExploreProps = {
  setLoading: (loading: boolean) => void;
  setRecommendation: (recommendation: Recommendation | null) => void;
  setError: (error: string | undefined) => void;
};

export function Explore({
  setLoading,
  setRecommendation,
  setError,
}: ExploreProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Input hook
  const INPUT = useInputValue('');

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Api call simulation function
  const handleSubmit = async () => {
    setError(undefined);

    if (!INPUT.value.trim()) return;

    setLoading(true);

    try {
      const URL = `${API_URL}/api/open_ai?userInput=${encodeURIComponent(
        INPUT.value
      )}`;

      const res = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('No recommendation found for the given input.');
      }

      const data = await res.json();

      setRecommendation({
        userInput: INPUT.value,
        text: `You searched for ${data.greeting}`,
      });
      setLoading(false);
      INPUT.setValue('');
    } catch (error) {
      setLoading(false);
      setError(
        error instanceof Error ? error.message : 'An unexpected error occurred.'
      );
    }
  };

  const handleTextAreaKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className='relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden m-auto md:w-8/12'>
      {/* Top bar */}
      <div className='flex justify-between gap-2 p-4 bg-background-light dark:bg-background-dark '>
        <p className='text-slate-800 dark:text-white tracking-light text-[28px] font-bold leading-tight'>
          Explore
        </p>
        <Link
          to='/'
          className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 cursor-pointer'
        >
          <span className='material-symbols-outlined text-slate-600 dark:text-gray-300'>
            home
          </span>
        </Link>
      </div>

      {/* Header image */}
      <div className='@container px-4'>
        <div
          className={`w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-48 transition-opacity duration-500 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          data-alt={images[currentImageIndex].alt}
          style={{
            backgroundImage: `url("${images[currentImageIndex].url}")`,
          }}
        ></div>
      </div>

      <h1 className='text-slate-900 dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6'>
        Where to next?
      </h1>

      {/* Input field */}
      <div className='flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3'>
        <label className='flex flex-col min-w-40 flex-1'>
          <textarea
            value={INPUT.value}
            onChange={INPUT.onChange}
            onKeyDown={handleTextAreaKeyDown}
            className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 focus:border-primary min-h-36 placeholder:text-slate-500 dark:placeholder:text-slate-400 p-4 text-base font-normal leading-normal'
            placeholder="Tell me about your dream trip... like 'a relaxing beach getaway in Asia' or 'a 3-day weekend with good food in Europe'"
          ></textarea>
        </label>
      </div>

      {/* Search button */}
      <div className='sticky bottom-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pt-2 border-t border-slate-200 dark:border-slate-800 mt-auto'>
        <button
          type='submit'
          className='flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary h-14 px-4 text-center'
          onClick={handleSubmit}
        >
          <span
            className='material-symbols-outlined text-white'
            style={{ fontSize: '24px' }}
          >
            auto_awesome
          </span>
          <span className='text-white text-base font-bold leading-normal'>
            Find My Adventure
          </span>
        </button>
      </div>
    </div>
  );
}
