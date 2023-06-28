import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import $ from 'jquery';

function Navbar() {

  function openNav() {
    $('#mobile-nav').css('display', 'flex');
    setTimeout(() => {
      $('#mobile-nav').css('left', '0');
    }, 50);
  }

  function closeNav() {
    $('#mobile-nav').css('left', '100vw');
    setTimeout(() => {
      $('#mobile-nav').css('display', 'none');
    }, 300);
  }

  return (
    <div className='flex basis-full z-20 shadow-lg relative max-h-[120px]'>
      <div className='m-auto body-width items-center flex p-5'>
        <span id="brand-logo" className='flex basis-6/12 justify-content-start'>
          <a href="/">
            <FontAwesomeIcon className="text-black text-4xl sm:text-5xl" icon={icon({name: 'brain', style: 'solid'})} />
            <h1 id="logo-text" className="font-sans font-bold text-base sm:text-2xl">neuro-aid</h1>
          </a>
        </span>
        <nav className="flex items-center justify-end h-16 basis-6/12">
          <button id="hamburger" onClick={openNav}><FontAwesomeIcon className="text-black block sm:hidden text-5xl" icon={icon({name: 'bars', style: 'solid'})} /></button>
          <div id="mobile-nav" className='flex-wrap z-10 bg-white touch-none h-screen overflow-y-hidden fixed top-0 right-0 left-[100vw] bottom-0 hidden sm:hidden transition-all duration-300 ease-linear'>
            <div className='flex flex-wrap h-[100svh]'>
              <div className='text-right basis-full mr-5 mt-5'>
                <button onClick={closeNav}><FontAwesomeIcon className="text-black text-5xl" icon={icon({name: 'circle-xmark', style: 'solid'})} /></button>
              </div>
              <div className='basis-full'><a className='text-2xl font-semibold bg-gradient' href="/">Home</a></div>
              <div className='basis-full divide-y divide-solid divide-black'><a className="text-2xl font-semibold bg-gradient" href="/features">Features</a></div>
              <div className='basis-full divide-y divide-solid divide-black'><a className="text-2xl font-semibold bg-gradient" href="/pricing">Pricing</a></div>
              <div className='basis-full divide-y divide-solid divide-black'><a className="text-2xl font-semibold bg-gradient" href="/about">About</a></div>
              <div className='basis-full divide-y divide-solid divide-black'><a className="text-2xl font-semibold bg-gradient" href="/blog">Blog</a></div>
            </div>
          </div>
          <a className="font-semibold text-black sm:p-2 sm:px-2.5 sm:m-2 hidden sm:block bg-gradient" href="/">Home</a>
          <a className="font-semibold text-black sm:p-2 sm:px-2.5 sm:m-2 hidden sm:block bg-gradient" href="/features">Features</a>
          <a className="font-semibold text-black sm:p-2 sm:px-2.5 sm:m-2 hidden sm:block bg-gradient" href="/pricing">Pricing</a>
          <a className="font-semibold text-black sm:p-2 sm:px-2.5 sm:m-2 hidden sm:block bg-gradient" href="/about">About</a>
          <a className="font-semibold text-black sm:p-2 sm:px-2.5 sm:m-2 hidden sm:block bg-gradient" href="/blog">Blog</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;