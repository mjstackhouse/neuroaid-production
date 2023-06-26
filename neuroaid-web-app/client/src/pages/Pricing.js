import Navbar from '../components/Navbar';
import PricingBody from '../components/Pricing-Body';
import MailingList from '../components/MailingList';
import DownloadNow from '../components/DownloadNow';
import GoBackToTop from '../components/Go-Back-To-Top';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Pricing() {
  return (
    <div className='flex flex-wrap'>
      <Navbar />
      <div className="flex flex-wrap mx-auto">
        <PricingBody />
        <div className='basis-full flex flex-wrap p-4 bg-black'>
          <div className='flex flex-wrap body-width mx-auto place-items-center'>
            <span className='mx-auto'>
              <DownloadNow />
            </span>
            {/* <span className='text-right pr-8 basis-4/12 sm:basis-1/12 reflect'>
              <FontAwesomeIcon className="text-blue text-6xl sm:text-7xl rotate-90 arrow-x-animation" icon={icon({name: 'arrow-turn-up', style: 'solid'})} />
            </span> */}
          </div>
          <GoBackToTop />
        </div>
        <MailingList />
        <Footer />
      </div>
    </div>
  );
}

export default Pricing;