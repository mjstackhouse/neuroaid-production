function PricingTiers() {
  return (
    <div className="flex basis-full h-screen sm:h-[40vh] bg-[#F2F2F2]" id="pricing-container">
      <div className="flex flex-wrap flex-col-reverse sm:flex-row mx-auto my-auto body-width">
        <div className="basis-full text-center sm:text-right block sm:hidden xs:mt-8">
            <a className="bg-black hover:bg-gray rounded-3xl font-semibold text-white text-base md:text-lg p-2 px-4 sm:m-2 shadow-md" href="/pricing">Learn more about pricing</a>
        </div>
        <div className="sm:basis-1/3 mb-4">
          <img className='w-[75%] sm:w-[100%] mx-auto' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-savingmoney.png' alt='People celebrating while saving money in a piggy bank' />
        </div>
        <div className="sm:basis-2/3 flex flex-wrap place-content-center">
          <h1 className="font-mono basis-full text-black text-center sm:text-right mb-4 font-bold text-3xl md:text-4xl">With flexible pricing</h1>
          <div className="mx-auto">
            <p className="shadow-lg rounded-3xl bg-white px-4 py-4 sm:py-4 mb-4 sm:mb-8 text-base sm:text-lg text-center sm:text-right">We opted for flexible pricing across 3 plans to cater to individuals with varying needs and budgets, ensuring accessibility to effective ADHD management solutions.</p>
          </div>
          <div className="basis-full text-center sm:text-right hidden sm:block mt-4">
            <a className="bg-black hover:bg-gray rounded-3xl font-semibold text-white text-base sm:text-lg p-2 px-4 sm:m-2 shadow-md" href="/pricing">Learn more about pricing</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTiers;