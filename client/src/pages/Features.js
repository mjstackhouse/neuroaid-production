import Navbar from '../components/Navbar';
import MailingList from '../components/MailingList';
import DownloadNow from '../components/DownloadNow';
import FeaturesBody from '../components/Features-Body';
import GoBackToTop from '../components/Go-Back-To-Top';
import Footer from '../components/Footer';

function Features() {
  return (
    <div className='flex flex-wrap'>
      <Navbar />
      <div className="flex flex-wrap mx-auto">
        <FeaturesBody />
        <div className='basis-full'>
          <DownloadNow />
        </div>
        <GoBackToTop />
        <MailingList />
        <Footer />
      </div>
    </div>
  );
}

export default Features;