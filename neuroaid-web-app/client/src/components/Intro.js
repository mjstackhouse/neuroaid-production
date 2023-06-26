import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Intro() {

  function scrollDown(elementId) {
    console.log('elementId: ', elementId);
    const element = document.getElementById(elementId);
    console.log('element: ', element);
    // scrollIntoView: https://stackoverflow.com/questions/4020199/go-to-anchor-without-changing-url
    element.scrollIntoView({
      block: 'start'
    });
  }

  return (
    <div className="flex basis-full bg-gradient-to-t from-blue via-white from-20% to-white bg-blue" id="intro-container">
      <div className="body-width flex flex-wrap place-items-center mx-auto">
        <div className="intro flex flex-wrap place-items-center justify-around">
          <div className="w-11/12 sm:w-9/12">
            <h1 className="font-mono text-black font-bold text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-4 sm:leading-[3rem] md:leading-[4.25rem]">Better manage your day-to-day with <span className="underline decoration-blue decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">Neuro-Aid</span>.</h1>
            <h2 className="text-black text-base mb-8 sm:text-lg sm:mb-8">A mobile app designed to help those with ADHD through tools that directly address their struggles.</h2>
            <a className="bg-black hover:bg-gray rounded-3xl text-white text-base sm:text-lg p-2 px-4 sm:m-2 shadow-md font-semibold" href="/">Download Now</a>
          </div>
        </div>
        <div className='basis-full sm:text-right'>
          <button className='bounce-animation' onClick={() => scrollDown('features-container')}>
            <span className="text-black text-base m-2 hover:text-gray sm:text-lg">Learn more</span>
            <FontAwesomeIcon className="text-black text-4xl align-middle hover:text-gray" icon={icon({name: 'circle-chevron-down', style: 'solid'})} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;