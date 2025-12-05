import { useState, useEffect } from 'react';

export function Loading() {
  const [index, setIndex] = useState(0);
  const texts = [
    'Analyzing scenic routes...',
    'Calculating optimal paths...',
    'Gathering local insights...',
    'Curating personalized recommendations...',
    'Finalizing your adventure plan...',
    'Preparing unforgettable experiences...',
    'Mapping hidden gems...',
    'Optimizing travel times...',
    'Checking weather conditions...',
    'Ensuring best accommodations...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative flex h-screen min-h-screen w-full flex-col bg-background-light dark:bg-background-dark dark group/design-root overflow-x-hidden'>
      {/* Main Content Area */}
      <main className='flex flex-1 flex-col items-center justify-center text-center p-4 pt-24'>
        {/* Central Animation Visual Placeholder */}
        <div className='relative mb-8 flex h-48 w-48 items-center justify-center'>
          {/* Outer Rings */}
          <div className='absolute h-full w-full rounded-full border border-primary/20 bg-gradient-to-tr from-primary/20 to-primary/10 animate-spin'></div>
          <div className='absolute h-3/4 w-3/4 rounded-full border border-primary/20 bg-gradient-to-tr from-primary/20 to-primary/10 animate-pulse'></div>
          {/* Inner Globe Icon with Gradient */}
          <div className='flex h-2/4 w-2/4 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 animate-pulse'>
            <span className='material-symbols-outlined text-5xl text-sky-200'>
              public
            </span>
          </div>
        </div>
        {/* Headline Text */}
        <h1 className='text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight px-4 pb-3 pt-6 font-display'>
          Finding your next adventure...
        </h1>
        {/* Body Text / Status Snippet */}
        <p className='text-gray-600 dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1 px-4 font-display'>
          {texts[index]}
        </p>
        {/* Spacer to push progress bar down */}
        <div className='flex-grow'></div>
      </main>
    </div>
  );
}
