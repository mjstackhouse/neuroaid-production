function Features() {
  return (
    <div className="flex basis-full h-screen sm:h-[50vh] bg-blue" id='features-container'>
      <div className="m-auto body-width flex flex-wrap">
        <div className='flex flex-wrap basis-full'>
          <h1 className='font-mono basis-full text-black text-center lg:text-left font-bold mb-6 text-3xl md:text-4xl'>What Neuro-Aid provides for you</h1>
          <div className='bg-white shadow-lg rounded-3xl mb-8 px-4 py-4 sm:py-6'>
            <div className='pb-2 flex place-items-center border-b-4 border-solid border-orange'>
              <span className='basis-2/12 lg:basis-1/12'>
                <img className='h-[3rem] sm:h-[5rem] writing-animation mx-auto sm:mt-0 rotate-[20deg]' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-pencil-rotated.png' alt='A 2-D graphic of a pencil' />
              </span>
              <h2 className='basis-10/12 lg:basis-11/12 text-black text-base sm:text-lg text-left pl-4'>Mood journaling for tracking emotional well-being and identifying patterns related to ADHD symptoms.</h2>
            </div>
            <div className='pb-2 mt-2 flex place-items-center border-b-4 border-solid border-orange'>
              <span className='basis-2/12 lg:basis-1/12'>
                <img className='h-[3rem] sm:h-[5rem] arrow-up-animation mx-auto sm:mt-0' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-uparrow.png' alt='A green arrow pointing up to the right' />
              </span>
              <h2 className='basis-10/12 lg:basis-11/12 text-black text-base sm:text-lg text-left pl-4'>Progress tracking capabilities for monitoring performance and identifying areas of improvement.</h2>
            </div>
            <div className='basis-full mt-2 mb-4 sm:mb-0 flex place-items-center'>
              <span className='basis-2/12 lg:basis-1/12'>
                <img className='h-[3rem] sm:h-[5rem] bell-animation mx-auto sm:mt-0' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-bell-cropped.png' alt='A 3-D alert bell inside of a text message icon' />
              </span>
              <h2 className='basis-10/12 lg:basis-11/12 text-black text-base sm:text-lg text-left pl-4'>Customizable task lists and reminders to improve organization and productivity.</h2>
            </div>
            <div className='basis-full sm:mb-4 flex place-items-center'>
              <div className='basis-2/12 lg:basis-1/12'></div>
              <h2 className='basis-10/12 lg:basis-11/12 text-left text-black text-base sm:text-lg font-semibold pl-4'>and much more!</h2>
            </div>
          </div>
          <div className='basis-full text-center lg:text-left'>
            <a className="bg-black hover:bg-gray font-semibold rounded-3xl text-white text-base sm:text-lg p-2 px-4 sm:m-2 shadow-md" href="/features">Learn more about features</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;