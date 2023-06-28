import Navbar from '../components/Navbar';
import PricingBody from '../components/Pricing-Body';
import MailingList from '../components/MailingList';
import DownloadNow from '../components/DownloadNow';
import GoBackToTop from '../components/Go-Back-To-Top';
import Footer from '../components/Footer';

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