export function Error() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center p-4'>
      <h1 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
        Oops! Something went wrong.
      </h1>
      <p className='text-gray-700 dark:text-gray-300'>
        An unexpected error has occurred. Please try again later.
      </p>
    </div>
  );
}
