import type { Recommendation } from '@/types/index.ts';

type RecommendationsProps = {
  recommendation: Recommendation;
  setRecommendation: (recommendation: Recommendation | null) => void;
};

export function DisplayRecommendation({
  recommendation,
  setRecommendation,
}: RecommendationsProps) {
  console.log(recommendation);
  return (
    <div className='relative flex h-screen w-full flex-col overflow-hidden md:w-8/12 m-auto'>
      <div className='flex flex-col h-full p-4 pt-12'>
        <div className='flex-shrink-0 space-y-4'>
          <div className='rounded-xl bg-gray-200 dark:bg-gray-700 p-4'>
            <p className='text-gray-900 dark:text-white'>
              {recommendation.userInput}
            </p>
          </div>
          <div className='flex items-start gap-3'>
            <div className='flex-shrink-0'>
              <div className='w-8 h-8 rounded-full bg-primary flex items-center justify-center'>
                <span className='material-symbols-outlined text-white !text-xl'>
                  auto_awesome
                </span>
              </div>
            </div>
            <div className='rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 p-4'>
              <p className='text-gray-900 dark:text-white'>
                {recommendation.text}
              </p>
            </div>
          </div>
        </div>

        {/* Dummy for the map */}
        <div className='flex-grow my-4 rounded-xl overflow-hidden relative shadow-lg'>
          <div
            className='absolute inset-0 h-full w-full bg-cover bg-center'
            data-alt='A stylized, desaturated world map with subtle terrain details.'
            data-location='World'
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADVx86uuWI0Li0njnwuOTTRSzZb3kSjeeqdOmC9klOKeZFkuTUasVPpMaXpTq2fVVOoFUSGBUvz1rR2YHXMyJTMDH5uuQ9sJURIZVBYtaTfPlc3wRziqf1gbz67I59upAnE_FHKBAxZZLjDP5-7xZ4l4YfZDejcJafL-w1nESzbPlhFb4YkONYgyyGQSiowNqfaSMil9zJ6mOV7e97rEFzQENxESaCJ9TirQu1p2Fqo-kb2ALjkdBb0p2Jmiebge46fzMwHPbyWq8Y')",
            }}
          ></div>
          <div className='absolute bottom-4 right-4 z-10 flex flex-col items-end gap-3'>
            <div className='flex flex-col gap-0.5'>
              <button className='flex size-12 items-center justify-center rounded-t-lg bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-lg text-gray-800 dark:text-gray-200'>
                <span className='material-symbols-outlined'>add</span>
              </button>
              <button className='flex size-12 items-center justify-center rounded-b-lg bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-lg text-gray-800 dark:text-gray-200'>
                <span className='material-symbols-outlined'>remove</span>
              </button>
            </div>
            <button className='flex size-12 items-center justify-center rounded-lg bg-primary/80 backdrop-blur-sm shadow-lg'>
              <span className='material-symbols-outlined text-white'>
                my_location
              </span>
            </button>
          </div>
        </div>

        <div className='flex-shrink-0 pb-4'>
          <button
            className='flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary text-white text-base font-bold leading-normal font-display shadow-lg'
            onClick={() => setRecommendation(null)}
          >
            <span className='material-symbols-outlined'>search</span>
            <span className='truncate'>Search new destinations</span>
          </button>
        </div>
      </div>
    </div>
  );
}
