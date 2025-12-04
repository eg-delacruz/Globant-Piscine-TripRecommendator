import { useTitle } from '@/hooks/useTitle.tsx';
import { Link } from 'react-router';

function Home() {
  useTitle('Welcome to AI Travel');

  return (
    <div className='relative flex h-screen min-h-[600px] w-full flex-col bg-background-dark dark font-display group/design-root overflow-hidden'>
      {/* HeaderImage */}
      <div className='absolute inset-0 z-0'>
        <div
          className='h-full w-full bg-cover bg-center'
          data-alt='A breathtaking view of a serene mountain landscape at sunset, with warm colors reflecting on a calm lake.'
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(16, 28, 34, 0.7) 0%, rgba(16, 28, 34, 0.2) 40%, rgba(16, 28, 34, 0) 100%), url("https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
      </div>

      <div className='relative z-10 flex h-full flex-col p-4 pb-6'>
        {/* Logo at the top */}
        <header className='pt-8 text-center'>
          <p className='text-white text-xl font-bold tracking-wider md:text-5xl'>
            AI Travel
          </p>
        </header>
        {/* Content in the middle */}
        <main className='flex-grow flex flex-col justify-center items-center -mt-16'>
          {/* HeadlineText */}
          <h1 className='text-white tracking-light text-4xl font-bold leading-tight text-center max-w-sm md:text-5xl md:max-w-lg'>
            Your Next Adventure, Reimagined.
          </h1>
          {/* BodyText */}
          <p className='text-white/80 text-base font-normal leading-normal pt-4 px-4 text-center max-w-xs md:text-lg md:max-w-md'>
            Let our AI craft personalized travel recommendations just for you.
          </p>
        </main>
        {/* Button at the bottom */}
        <footer className='w-full'>
          {/* SingleButton */}
          <div className='flex pb-4 justify-center'>
            {/* <button className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 flex-1 bg-primary text-white text-lg font-bold leading-normal tracking-wide'>
              <span className='truncate'>Get Started</span>
            </button> */}
            <Link
              to='/explore'
              className='flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 flex-1 bg-primary text-white text-lg font-bold leading-normal tracking-wide'
            >
              <span className='truncate'>Get Started</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
