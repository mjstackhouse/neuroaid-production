import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
  return (
    <div className="body-width bg-white mx-auto pb-8 sm:py-8">
      <div className='flex flex-wrap flex-col-reverse sm:flex-row mb-8'>
        <div className='basis-full sm:basis-1/4 flex place-content-center sm:place-content-start text-gray sm:mb-0'>
          {/* <span className='text-2xl sm:text-3xl mx-4'>|</span> */}
          <div className='flex flex-wrap place-items-center sm:place-content-start'>
            <p className="hidden sm:block sm:basis-full text-center sm:text-left font-serif text-gray font-bold text-base sm:text-2xl">neuro-aid</p>
            <FontAwesomeIcon className="hover:text-black text-center text-3xl mr-1 sm:mr-2" icon={faTwitter} />
            <FontAwesomeIcon className="hover:text-black text-center text-3xl mr-1 sm:mr-2" icon={faFacebook} />
            <FontAwesomeIcon className="hover:text-black text-center text-3xl" icon={faYoutube} />
          </div>
        </div>
        <div className="basis-full sm:basis-3/4 flex flex-wrap justify-between place-items-center mb-4 sm:mb-0">
          <div className=''>
            <a className="text-base text-gray sm:p-2 sm:px-2.5 hover:text-black" href="/">Home</a>
          </div>
          <div className=''>
            <a className="text-base text-gray sm:p-2 sm:px-2.5 hover:text-black" href="/features">Features</a>
          </div>
          <div className=''>
            <a className="text-base text-gray sm:p-2 sm:px-2.5 hover:text-black" href="/pricing">Pricing</a>
          </div>
          <div className=''>
            <a className="text-base text-gray sm:p-2 sm:px-2.5 hover:text-black" href="/about">About</a>
          </div>
          <div className=''>
            <a className="text-base text-gray sm:p-2 sm:px-2.5 hover:text-black" href="/blog">Blog</a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap place-content-center text-gray">
        <p className="w-screen sm:w-fit sm:inline">Copyright © 2023 Neuro-Aid</p>
        <span className='mx-2 hidden sm:inline sm:mx-4'>|</span>
        <p className="sm:inline hover:text-black">Privacy Policy</p>
        <span className='mx-2 sm:mx-4'>|</span>
        <p className="sm:inline hover:text-black">Terms of Use</p>
      </div>
    </div>
  )
}

export default Footer;