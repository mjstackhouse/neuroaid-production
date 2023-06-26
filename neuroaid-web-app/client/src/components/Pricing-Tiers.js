function PricingTiers() {
  return (
    <div className="flex basis-full h-screen sm:h-[50vh] bg-[#F2F2F2]" id="pricing-container">
      <div className="flex flex-wrap flex-col-reverse sm:flex-row mx-auto my-auto body-width">
        <div className="basis-full text-center sm:text-right block sm:hidden">
            <a className="bg-black hover:bg-gray rounded-3xl font-semibold text-white text-base md:text-lg p-2 px-4 sm:m-2 shadow-md" href="/pricing">Learn more about pricing</a>
        </div>
        <div className="sm:basis-1/3 mb-4 sm:mb-0">
          <img className='w-[75%] sm:w-[100%] mx-auto' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-savingmoney.png' alt='People celebrating while saving money in a piggy bank' />
        </div>
        <div className="sm:basis-2/3 flex flex-wrap place-content-center">
          <h1 className="font-mono basis-full text-black text-center sm:text-right mb-4 font-bold text-3xl md:text-4xl">With flexible pricing</h1>
          <div className="mx-auto">
            <p className="shadow-lg rounded-3xl bg-white px-4 py-4 sm:py-4 mb-4 sm:mb-8 text-base sm:text-lg text-center sm:text-right">We opted for flexible pricing across 3 plans to cater to individuals with varying needs and budgets, ensuring accessibility to effective ADHD management solutions.</p>
          </div>
          <div className="basis-full text-center sm:text-right hidden sm:block">
            <a className="bg-black hover:bg-gray rounded-3xl font-semibold text-white text-base sm:text-lg p-2 px-4 sm:m-2 shadow-md" href="/pricing">Learn more about pricing</a>
          </div>
        </div>
        <div className="grid md:grid-cols-3 shadow-lg rounded-3xl mb-8 md:divide-x hidden">
          <div className="md:row-span-4 bg-white rounded-t-3xl md:rounded-tl-3xl md:rounded-bl-3xl">
            <div className="bg-orange rounded-t-3xl p-1 md:p-2 md:rounded-tl-3xl md:rounded-tr-none divide-x md:divide-x-0">
              <h2 className="text-black text-xl inline md:block md:text-3xl font-semibold pr-2 md:p-0" id="basic-plan">Basic Plan</h2>
              <span className="text-lg pl-2 md:p-0">$0/month</span>
            </div>
            <ul className="flex flex-wrap flex-row p-2 h-2/3">
              <li className="basis-full text-black text-base md:text-lg text-left">Task lists and reminders</li>
              <li className="basis-full text-black text-base md:text-lg text-left">Medication tracking</li>
              <li className="basis-full text-black text-base md:text-lg text-left">Mood journaling</li>
            </ul>
          </div>
          <div className="md:row-span-4 bg-white">
            <div className="bg-[#F57600] p-1 md:p-2 divide-x md:divide-x-0">
              <h2 className="text-black text-xl md:text-3xl inline md:block font-semibold pr-2 md:p-0">Premium Plan</h2>
              <span className="text-lg pl-2 md:p-0">$5/month</span>
            </div>
            <ul className="flex flex-wrap flex-row p-2 h-2/3">
              <li className="basis-full text-black text-base md:text-lg text-left">Free-tier features plus...</li>
              <li className="basis-full text-black text-base md:text-lg text-left">Customizable reminders and notifications</li>
              <li className="basis-full text-black text-base md:text-lg text-left">Comprehensive progress tracking</li>
            </ul>
          </div>
          <div className="md:row-span-4 pricing-section-border bg-white rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl">
            <div className="bg-[#FF6842] p-1 md:rounded-tr-3xl md:p-2 divide-x md:divide-x-0">
              <h2 className="text-black text-xl md:text-3xl inline md:block font-semibold pr-2 md:p-0">Ultimate Plan</h2>
              <span className="text-lg pl-2 md:p-0">$10/month</span>
            </div>
            <ul className="flex flex-wrap p-2">
              <li className="basis-full text-black text-base md:text-lg text-left">Previous two tiers' features plus...</li>
              <li className="basis-full text-black text-base md:text-lg text-left">Personalized coaching module</li>
              <li className="basis-full text-black text-base md:text-lg text-left pb-1">Community forum to connected with like-minded people</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default PricingTiers;