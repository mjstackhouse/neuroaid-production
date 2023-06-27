import Navbar from "../components/Navbar";
import AboutBody from "../components/About-Body";
import DownloadNow from "../components/DownloadNow";
import MailingList from "../components/MailingList";
import GoBackToTop from "../components/Go-Back-To-Top";
import Footer from '../components/Footer';

function About() {
  return (
    <div className='flex flex-wrap sm:h-screen'>
      <Navbar />
      <div className="flex flex-wrap place-items-center">
        <AboutBody />
        <div className='basis-full'>
          <DownloadNow />
        </div>
        <GoBackToTop />
        <MailingList />
        <Footer />
      </div>
    </div>
  )
}

export default About;