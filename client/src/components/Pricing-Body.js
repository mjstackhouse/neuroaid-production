import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';
import $ from 'jquery';

function PricingBody() {

  const [plan, updatePlan] = useState('basic-plan');

  function changePlan(e) {
    const selectedPlan = e.target.value;
    console.log('selectedPlan:', selectedPlan);
    updatePlan(selectedPlan);

    if (selectedPlan === 'basic-plan') {
      $('#basic-plan').removeClass('hidden');
      $('#premium-plan').addClass('hidden');
      $('#ultimate-plan').addClass('hidden');
    }
    else if (selectedPlan === 'premium-plan') {
      $('#basic-plan').addClass('hidden');
      $('#premium-plan').removeClass('hidden');
      $('#ultimate-plan').addClass('hidden');
    }
    else if (selectedPlan === 'ultimate-plan') {
      $('#basic-plan').addClass('hidden');
      $('#premium-plan').addClass('hidden');
      $('#ultimate-plan').removeClass('hidden');
    }
  }

  return (
    <div className='flex flex-wrap flex-col w-screen self-start place-items-center bg-blue bg-gradient-to-l from-blue via-[#BAE1FF] to-blue' id="pricing-body-container">
      <div className='flex mx-auto mb-8'>
        <div className="body-width basis-full">
          <div className="mt-8">
            <h1 className="font-mono basis-full text-black text-center p-4 mb-2 mt-2 sm:mb-4 sm:mt-4 rounded-t-3xl text-2xl sm:text-4xl font-bold">What does each plan offer<span className='text-black'>?</span></h1>
            <div className='mb-4 sm:hidden'>
              <label for="plans" className='text-base sm:text-lg font-semibold mr-2'>Select a plan:</label>
              <select name="plans" id="plans" className='bg-white px-1 py-2 text-base sm:text-lg rounded-3xl' onChange={changePlan}>
                <option value="basic-plan" className='text-base sm:text-lg'>Basic Plan</option>
                <option value="premium-plan" className='text-base sm:text-lg'>Premium Plan</option>
                <option value="ultimate-plan" className='text-base sm:text-lg'>Ultimate Plan</option>
              </select>
            </div>
            {/* New div */}
            <div className="flex flex-row text-center bg-white text-left h-screen rounded-3xl shadow-lg">
              <div className='basis-2/3 text-base sm:text-lg sm:basis-1/4 flex flex-col divide-black divide-solid'>
                <div className='basis-[9.09090909091%] flex'>
                  <h2 className="m-auto text-base sm:text-lg font-semibold">Features</h2>
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2] px-2'>
                  <p className='m-auto'>Customizable task lists</p>
                </div>
                <div className='basis-[9.09090909091%] flex px-2'>
                  <p className='m-auto'>Medication tracking</p>
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2] px-2'>
                  <p className='m-auto'>Mood journaling</p>
                </div>
                <div className='basis-[9.09090909091%] flex px-2'>
                  <p className='m-auto'>Resource library</p>
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2] px-2'>
                  <p className='m-auto'>Progress tracking</p>
                </div>
                <div className='basis-[9.09090909091%] flex px-2'>
                  <p className='m-auto'>Relaxation techniques</p>
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2] px-2'>
                  <p className='m-auto'>Data export</p>
                </div>
                <div className='basis-[9.09090909091%] flex px-2'>
                  <p className='m-auto'>Personalized coaching</p>
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2] px-2'>
                  <p className='m-auto'>Community forum</p>
                </div>
                <div className='basis-[9.09090909091%] flex px-2'>
                  <p className='m-auto'>Sleep tracking</p>
                </div>
              </div>
              {/* Basic: #F9EAC8 Premium: #F7DCC5 Ultimate: #FFDAD1 */}
              <div className='basis-1/3 sm:basis-1/4 flex flex-col rounded-r-3xl sm:rounded-r-none divide-x-2 divide-orange divide-solid' id="basic-plan">
                <div className='basis-[9.09090909091%] flex flex-wrap place-content-center bg-[#F9EAC8] rounded-tr-3xl sm:rounded-tr-none border-l-2 border-solid border-orange'>
                  <h2 className="basis-full text-base sm:text-lg font-semibold m-auto underline decoration-orange decoration-4 underline-offset-4 mb-0">Basic</h2>
                  <h3 className='basis-full text-base sm:text-lg text-gray font-normal block'>$0/Month</h3>
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] bg-[#F2F2F2]'></div>
                <div className='basis-[9.09090909091%]'></div>
                <div className='basis-[9.09090909091%] bg-[#F2F2F2]'></div>
                <div className='basis-[9.09090909091%]'></div>
                <div className='basis-[9.09090909091%] bg-[#F2F2F2]'></div>
                <div className='basis-[9.09090909091%]'></div>
              </div>
              <div className='basis-1/3 sm:basis-1/4 flex flex-col rounded-r-3xl sm:rounded-r-none hidden sm:flex divide-x-2 divide-[#F57600] divide-solid' id="premium-plan">
                <div className='basis-[9.09090909091%] flex flex-wrap place-content-center bg-[#F7DCC5] rounded-tr-3xl sm:rounded-tr-none border-l-2 border-solid border-[#F57600]'>
                  <h2 className="basis-full text-base sm:text-lg font-semibold m-auto underline decoration-[#F57600] decoration-4 underline-offset-4 mb-0">Premium</h2>
                  <h3 className='basis-full text-base sm:text-lg text-gray font-normal block'>$5/Month</h3>
                </div>                
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%]'></div>
                <div className='basis-[9.09090909091%] bg-[#F2F2F2]'></div>
                <div className='basis-[9.09090909091%]'></div>
              </div>
              <div className='basis-1/3 sm:basis-1/4 flex flex-col rounded-r-3xl hidden sm:flex divide-x-2 divide-[#FF6842] divide-solid' id="ultimate-plan">
                <div className='basis-[9.09090909091%] flex flex-wrap place-content-center rounded-tr-3xl bg-[#FFDAD1] border-l-2 border-solid border-[#FF6842]'>
                  <h2 className="basis-full text-base sm:text-lg font-semibold m-auto underline decoration-[#FF6842] decoration-4 underline-offset-4 mb-0">Ultimate</h2>
                  <h3 className='basis-full text-base sm:text-lg text-gray font-normal block'>$10/Month</h3>
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex bg-[#F2F2F2]'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
                <div className='basis-[9.09090909091%] flex'>
                  <FontAwesomeIcon className="text-black text-4xl m-auto" icon={icon({name: 'check', style: 'solid'})} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-width mx-auto">
        <div className='flex place-items-center p-4'>
          <h1 className="font-mono basis-full inline text-black text-center sm:text-left text-2xl sm:text-4xl font-bold">Why pricing tiers?</h1>
          {/* <span className='sm:text-right basis-3/6 reflect'>
            <FontAwesomeIcon className="text-black text-6xl sm:text-7xl rotate-90 arrow-x-animation" icon={icon({name: 'arrow-turn-up', style: 'solid'})} />
          </span> */}
        </div>
        <div className="text-black text-left bg-white rounded-3xl shadow-lg px-4 py-4 sm:px-8 sm:py-4 mb-4">
          <p className="text-base sm:text-lg leading-loose">
            <span className="font-semibold">At Neuro-Aid,</span> our goal is to make a tangible difference in the lives of individuals managing ADHD by providing them with a powerful mobile application. Recognizing the diverse financial circumstances of our users, we are committed to offering flexible pricing options that ensure accessibility for everyone. We firmly believe that managing ADHD should not be hindered by financial constraints, and our aim is to make Neuro-Aid a valuable tool that is within reach for individuals from all walks of life.
          </p>
          {/* <p className="text-base sm:text-lg pt-4 leading-loose">
          <span className="font-semibold">To achieve our goal of flexible pricing,</span> we have implemented a tiered pricing structure that allows users to choose a plan that aligns with their budget and needs. We offer different subscription levels, ranging from a free basic plan to premium plans with enhanced features and support. Our intention is to provide a robust set of tools and resources to all users, regardless of their chosen plan. By offering flexible pricing options, we strive to empower individuals with ADHD to access the support they need to thrive and manage their condition effectively, fostering inclusivity and ensuring that financial considerations do not hinder their journey towards success.
          </p> */}
        </div>
      </div>
      <img className='' src='https://photo-gear-ecommerce.s3.us-west-1.amazonaws.com/adobestock-diversity-3-cropped.png' alt='Colorful illustration of a diverse group of people' />
    </div>
  );
}

export default PricingBody;