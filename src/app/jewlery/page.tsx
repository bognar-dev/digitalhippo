import React from 'react';
import Image from 'next/image';
import projection8 from '@/../public/shoots/projections/projection8.png'
const MyComponent = () => {
  return (
    <>
      <header className='fixed left-1/2 -translate-x-1/2 -z-10 uppercase m-0 text-center flex justify-center items-end'>
        <h1 className="text-black text-9xl font-medium leading-3 m-0 translate-y-20">
          Platform
        </h1>
      </header>
      <main className='main-clip-path'>
        <div>
          <header className='sticky top-[calc(20vh + 90px)] uppercase m-0 text-center flex justify-center items-end z-10' aria-hidden="true">
            <h1 className="text-red-500 text-9xl font-medium leading-3 m-0 translate-y-20 ">
              Platform
            </h1>
          </header>
          <section>
            <Image
              src={projection8}
              alt="Jhey walks across a stage at All Day Hey! 2022"
              className="w-full  object-cover filter grayscale contrast-75"
            />
          </section>
        </div>
        <section className="bg-white min-h-screen">
          <div className="content">
            <p className="text-2xl">Use the web platform.<br />It's pretty cool.</p>
          </div>
        </section>
      </main>
      <footer className="text-center py-8">
        <div className="content">@jh3yy &copy; 2024</div>
      </footer>
    </>
  );
};

export default MyComponent;
