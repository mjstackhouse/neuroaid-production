function FeaturesBody() {
  return (
    <div className='flex flex-wrap w-screen bg-[#F2F2F2]' id="features-body-container">
      <div className="body-width mx-auto mb-16">
        <div className="mt-8">
          <div className=''>
            <h1 className="font-mono basis-full text-black text-center sm:text-left pt-2 pb-2 sm:pt-4 m-0 text-2xl sm:text-4xl font-bold z-10">What tools does Neuro-Aid provide?</h1>
          </div>
          <div className="flex flex-wrap flex-col leading-loose">
            <p className="text-center text-base sm:text-lg sm:text-left mb-8">
            Neuro-Aid, our innovative mobile application, is specifically designed to assist individuals in managing their ADHD. Packed with a wide array of features, it offers a comprehensive toolkit to support users in their ADHD management journey.
            </p>
            <div id='features-list-container' className='bg-white shadow-lg rounded-3xl'>
              <div className='flex flex-wrap flex-col h-screen sm:h-[50vh] divide-y-2 divide-orange'>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list">
                  <div className='sm:flex sm:flex-row sm:place-items-center mx-auto'>
                    <div className="basis-2/3 text-center sm:text-left block sm:inline">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Stay organized</h3>
                      <p className='text-base sm:text-lg' id="feature-1">The app offers customizable task lists and reminders, boosting organization and productivity.</p>
                    </div>
                    <div className="basis-1/3 place-items-center reflect">
                      <img className='h-[8rem] sm:h-[11rem] bell-animation mx-auto' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-bell-cropped.png' alt='A 3-D alert bell inside of a text message icon'/>
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list">
                  <div className='sm:flex sm:flex-row-reverse sm:place-items-center basis-full'>
                    <div className="basis-2/3 text-center sm:text-right block sm:inline">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Medication tracking</h3>
                      <p className='text-base sm:text-lg' id="feature-1">Users effectively track medication, staying on top of treatment plans.</p>
                    </div>
                    <div className="basis-1/3 place-items-center">
                      <img className='h-[8rem] sm:h-[11rem] mx-auto' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-meds.png' alt='Medications, medications bottles, and medical syringe'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap flex-col h-screen sm:h-[50vh] divide-y-2 divide-orange'>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list border-t-2 border-orange">
                  <div className='basis-full sm:flex sm:flex-row sm:place-items-center mx-auto'>
                    <div className="basis-2/3 text-center sm:text-left block sm:inline">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Track your emotions</h3>
                      <p className='text-base sm:text-lg' id="feature-1">Mood journaling enables emotional well-being monitoring and identifying ADHD symptom patterns.</p>
                    </div>
                    <div className="basis-1/3 place-items-center">
                      <img className='h-[8rem] sm:h-[11rem] writing-animation mx-auto mt-2 sm:mt-0 rotate-[20deg]' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-pencil-rotated.png' alt='A 2-D graphic of a pencil' />
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list">
                  <div className='sm:flex sm:flex-row-reverse sm:place-items-center mx-auto'>
                    <div className="basis-2/3 text-center sm:text-right block sm:inline">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Access resources</h3>
                      <p className='text-base sm:text-lg' id="feature-1">The resource library provides educational materials, coping strategies, and practical ADHD tips.</p>
                    </div>
                    <div className="basis-1/3 place-items-center">
                      <img className='h-[8rem] sm:h-[11rem] mx-auto' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-books-cropped.png' alt='Three books sitting upright, partially aligned, and each a different color: purple, blue, and orange' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap flex-col h-screen sm:h-[50vh] divide-y-2 divide-orange'>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list border-t-2 border-orange">
                  <div className='sm:flex sm:flex-row sm:place-items-center mx-auto'>
                    <div className="basis-2/3 text-center sm:text-left block sm:inline mb-4 sm:mb-0">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Track your progress</h3>
                      <p className='text-base sm:text-lg' id="feature-1">Progress tracking helps users monitor performance and identify areas for improvement.</p>
                    </div>
                    <div className="basis-1/3 place-items-center reflect">
                      <img className='h-[8rem] sm:h-[11rem] arrow-up-animation mx-auto mt-2 sm:mt-0' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-uparrow.png' alt='A green arrow pointing up to the right' />
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list">
                  <div className='sm:flex sm:flex-row-reverse sm:place-items-center mx-auto'>
                    <div className="basis-2/3 text-center sm:text-right block sm:inline mb-4 sm:mb-0">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Reduce your stress</h3>
                      <p className='text-base sm:text-lg' id="feature-1">Integrated relaxation techniques and mindfulness exercises enhance focus and reduce stress.</p>
                    </div>
                    <div className="basis-1/3 place-items-center reflect">
                      <img className='h-[8rem] sm:h-[11rem] mx-auto mt-2 sm:mt-0' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-relax-2.png' alt='A person sitting and meditating with their eyes closed' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap flex-col h-screen sm:h-[50vh] divide-y-2 divide-orange'>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list border-t-2 border-orange">
                  <div className='sm:flex sm:flex-row sm:place-items-center mx-auto'>
                    <div className="basis-2/3 text-center sm:text-left block sm:inline mb-4 sm:mb-0">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Find your community</h3>
                      <p className='text-base sm:text-lg' id="feature-1">The community forum connects like-minded individuals, fostering support and shared experiences.</p>
                    </div>
                    <div className="basis-1/3 place-items-center">
                      <img className='h-[8rem] sm:h-[11rem] mx-auto mt-1 sm:mt-0' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-community-edited.png' alt='Four people speaking together, with two sitting down in chairs and two standing on the left and right' />
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list">
                  <div className='basis-full sm:flex sm:flex-row-reverse sm:place-items-center'>
                    <div className="basis-2/3 text-center sm:text-right block sm:inline mb-4 sm:mb-0">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Receive guidance</h3>
                      <p className='text-base sm:text-lg' id="feature-1">Personalized coaching offers tailored guidance for individual needs and challenges.</p>
                    </div>
                    <div className="basis-1/3 place-items-center reflect">
                      <img className='h-[8rem] sm:h-[11rem] mx-auto mt-2 sm:mt-0' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-coaching.png' alt='A mental health professional sitting in a chair with a clipboard looking towards the left' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap flex-col h-screen sm:h-[50vh] divide-y-2 divide-orange'>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list border-t-2 border-orange">
                  <div className='sm:flex sm:flex-row sm:place-items-center'>
                    <div className="basis-2/3 text-center sm:text-left block sm:inline mb-4 sm:mb-0">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Share your data</h3>
                      <p className='text-base sm:text-lg' id="feature-1">The app allows data export for sharing with healthcare providers or personal analysis.</p>
                    </div>
                    <div className="basis-1/3 place-items-center">
                      <img className='h-[8rem] sm:h-[11rem] mx-auto mt-1 sm:mt-0' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-database.png' alt='A graphic of a database of varying blues with a green checkmark at its bottom right edge' />
                    </div>
                  </div>
                </div>
                <div className="basis-1/2 flex flex-wrap place-items-center text-xl px-2 sm:px-6 py-auto text-center features-list">
                  <div className='sm:flex sm:flex-row-reverse sm:place-items-center mx-auto'>
                    <div className="basis-2/3 text-center sm:text-right block sm:inline mb-4 sm:mb-0">
                      <h3 className="font-mono text-2xl sm:text-4xl font-bold">Track your sleep</h3>
                      <p className='text-base sm:text-lg' id="feature-1">Sleep tracking is vital for healthy sleep patterns, managing ADHD symptoms, and well-being.</p>
                    </div>
                    <div className="basis-1/3 place-items-center">
                      <img className='h-[8rem] sm:h-[11rem] mx-auto mt-2 sm:mt-0' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-sleeping-edited.jpg' alt='A person sleeping with their cat in their lap' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <p className='text-center text-md sm:text-lg sm:text-left border-t-2 sm:border-t-8 border-solid border-black pt-4'>
              <span className="font-semibold">Neuro-Aid offers a comprehensive set of features</span> that address the multifaceted challenges associated with ADHD, enabling users to navigate their daily lives with increased efficiency, self-awareness, and emotional well-being.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesBody;