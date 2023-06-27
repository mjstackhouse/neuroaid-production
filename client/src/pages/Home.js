import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Features from '../components/Features-Description';
import PricingTiers from '../components/Pricing-Tiers';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import MailingList from '../components/MailingList';

function Home() {
  return (
    <div className='flex flex-wrap'>
      <Navbar />
      <Intro />
      <Features />
      <PricingTiers />
      <CallToAction />
      <MailingList />
      <Footer />
    </div>
  );
}

export default Home;