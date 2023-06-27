function AboutBody() {
  return (
    <div className='flex basis-full bg-[#F2F2F2] w-screen'>
      <div className="body-width mx-auto">
        <div className="mt-8 mb-8 sm:mb-16">
          <h1 className="font-mono basis-full text-left text-black p-4 sm:mb-4 text-2xl sm:text-4xl font-bold" id="try-text">How did <span className="underline decoration-blue decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">Neuro-Aid</span> come to be?</h1>
          <div className="text-left leading-loose">
            <div>
              <div className="bg-white shadow-lg rounded-3xl px-4 py-4 sm:px-8 sm:py-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">Our journey began with a deep-rooted passion to transform the lives of individuals managing ADHD.</h2>
                <p className="text-base sm:text-lg leading-loose mb-2">
                Inspired by personal experiences and witnessing the daily challenges faced by those with ADHD, we recognized the need for a comprehensive and user-friendly solution that could empower individuals to take control of their condition.
                </p>
                <p className="text-base sm:text-lg leading-loose">
                Our goal was to develop a mobile application that would serve as a trusted companion, providing support, tools, and resources to help individuals manage their ADHD effectively and improve their overall well-being.
                </p>
              </div>
              <img src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-wellbeing-edited.png' alt='An illustration of four people around a large, pink head with the brain exposed, with two of those people watering flowers coming out of the head' />
            </div>
            <div className="flex flex-wrap sm:h-screen place-items-center">
              <div className="bg-white shadow-lg rounded-3xl px-4 py-4 sm:px-8 sm:py-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">Driven by a genuine desire to make a positive impact, we embarked on a mission to create Neuro-Aid with meticulous attention to detail and a dedication to excellence.</h2>
                <p className="text-base sm:text-lg leading-loose">
                We collaborated with leading experts in the field of ADHD, including psychologists and neuroscientists, to ensure that our application was grounded in evidence-based strategies and tailored specifically to the needs of individuals with ADHD.
                </p>
              </div>
              <img className="pt-4 mb-2 sm:mb-0" id="research-img" src="https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-science-research-2-edited.png" alt='Two scientists working on a large, mechanical head with gears inside of it' />
              <div className="bg-white shadow-lg rounded-3xl px-4 py-4 sm:px-8 sm:py-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">
                  We conducted extensive research and gathered insights from the ADHD community to shape the features and functionalities of Neuro-Aid, ensuring that it addresses the unique challenges faced by individuals with ADHD in their daily lives.
                </h2>
                <p className="text-base sm:text-lg leading-loose">
                  Our unwavering commitment to quality, usability, and effectiveness fueled our efforts to develop a mobile application that provides individuals with the tools they need to manage their ADHD, unlock their full potential, and lead fulfilling lives.
                </p>
              </div>
            </div>
            {/* <p className="text-base sm:text-lg leading-loose pt-4 mb-4">
            <span className="font-semibold">Driven by a genuine desire to make a positive impact,</span> we embarked on a mission to create Neuro-Aid with meticulous attention to detail and a dedication to excellence. We collaborated with leading experts in the field of ADHD, including psychologists and neuroscientists, to ensure that our application was grounded in evidence-based strategies and tailored specifically to the needs of individuals with ADHD. We conducted extensive research and gathered insights from the ADHD community to shape the features and functionalities of Neuro-Aid, ensuring that it addresses the unique challenges faced by individuals with ADHD in their daily lives. Our unwavering commitment to quality, usability, and effectiveness fueled our efforts to develop a mobile application that provides individuals with the tools they need to manage their ADHD, unlock their full potential, and lead fulfilling lives.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;