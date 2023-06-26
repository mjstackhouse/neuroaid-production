import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';
import $ from 'jquery';


function GoBackToTop() {

  const [btnVisibility, setBtnVisibility] = useState('none');

  function scrollUp() {
    window.scrollTo({
      top: 0
    });
  }

  // Inspiration: https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
  function showTopBtn() {
    if (window.scrollY > 400 && btnVisibility === 'none') {
      console.log('reveal');
      setBtnVisibility('block');
      $('#go-back-to-top').removeClass('hidden');
    }
    else if (window.scrollY < 400 && btnVisibility === 'block') {
      console.log('hide');
      setBtnVisibility('none');
      $('#go-back-to-top').addClass('hidden');
    }
  }

  window.addEventListener('scroll', showTopBtn);

  return (
    <div className='basis-full fixed bottom-16 right-8 z-30 hidden' id="go-back-to-top">
      <button className='basis-full' onClick={scrollUp} aria-label='Go back to top'>
          <FontAwesomeIcon className="text-black text-4xl align-middle hover:text-orange" icon={icon({name: 'circle-chevron-up', style: 'solid'})} />
      </button>
    </div>
  )
}

export default GoBackToTop;