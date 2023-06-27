import GoBackToTop from './Go-Back-To-Top';

function CallToAction() {
  return (
    <div className="flex flex-wrap basis-full h-screen bg-black" id="calltoaction-container">
      <div className="flex flex-wrap place-items-center body-width mx-auto my-auto" id="calltoaction-div">
        <div className="flex flex-wrap place-items-center justify-around">
          <div className='sm:w-[750px]'>
            <h1 className="font-mono text-white font-bold mb-2 sm:mb-0 text-3xl sm:text-4xl md:text-6xl text-gradient" id="calltoaction-h1">Let us help you focus on what matters.</h1>
          </div>
          <img className='w-[100%] sm:w-[90%] mb-4 sm:mb-8' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-focused-landscape-2.png' alt='Woman being productive on her laptop' />
          <div className="basis-full mx-auto">
            <h2 className="basis-full text-white text-base sm:text-lg mb-2 font-semibold" id="try-text">Try out Neuro-Aid today for free</h2>
            <button className="bg-blue hover:bg-gray rounded-3xl text-black text-base sm:text-lg py-2 px-4 shadow-md font-semibold">Download Now</button>
          </div>
        </div>
      </div>
      <GoBackToTop />
    </div>
  );
}

export default CallToAction;