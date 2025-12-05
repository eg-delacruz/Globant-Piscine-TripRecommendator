import { useState } from 'react';
import { Loading } from './loading';

function Explore() {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  return (
    <div className='relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden m-auto md:w-8/12'>
      {/* Top bar */}
      <div className='flex flex-col gap-2 p-4 bg-background-light dark:bg-background-dark '>
        <p className='text-slate-800 dark:text-white tracking-light text-[28px] font-bold leading-tight'>
          Explore
        </p>
      </div>

      {/* Header image */}
      <div className='@container px-4'>
        <div
          className='w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-48'
          data-alt='Aerial view of a stunning tropical coastline with turquoise water and white sand beaches'
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYZHAOOs-9ZVMyux1N104O3VjvBU1XXRvuixS1IozObUKRiDWmKetA5EQBBa2Kzqm84W3xNqTQqA7AFy1TQA_DtRCXkKm32MF7Z3Zr-GoaX63IlCsZpuu1dlfpoqOVjtz-NlcadTISJOUlUjekBrNN0XM_uxo-iQ4x0ILHSD28Yd74f-qW-EYk5DS4am1Jo7Vf91btFeS7gQMogQF6EgQNAqyE3_VX4k4KXfWmjNj0wz-x2cEEuUtB14O2lwQxOtgfM-shfL_jDyoL")`,
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
            className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 focus:border-primary min-h-36 placeholder:text-slate-500 dark:placeholder:text-slate-400 p-4 text-base font-normal leading-normal'
            placeholder="Tell me about your dream trip... like 'a relaxing beach getaway in Asia' or 'a 3-day weekend with good food in Europe'"
          ></textarea>
        </label>
      </div>

      {/* Search button */}
      <div className='sticky bottom-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pt-2 border-t border-slate-200 dark:border-slate-800 mt-auto'>
        <button
          className='flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary h-14 px-4 text-center'
          onClick={() => setLoading(true)}
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

export default Explore;
