import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MailingList from "../components/MailingList";
import DownloadNow from "../components/DownloadNow";
import GoBackToTop from "../components/Go-Back-To-Top";

function BlogList() {

  const [posts, updatePosts] = useState(null);

  const getPosts = async () => {
    console.log('process.env.REACT_APP_API: ', process.env.REACT_APP_API);
    const response = await axios.get(`${process.env.REACT_APP_API}/blog`);
    updatePosts(await response.data);
    console.log('data: ', await response.data);
  }

  // Empty dependencies: https://stackoverflow.com/questions/53070970/infinite-loop-in-useeffect
  useEffect(() => {
    getPosts();
  }, []);
  
  const loading = "Loading...";

  // Link rendering: https://www.codemzy.com/blog/react-render-array-of-objects
  return (
    <div>
      <Navbar />
      <div className="bg-blue bg-gradient-to-l from-blue via-[#BAE1FF] to-blue">
        <div id="blog-posts" className="grid body-width mx-auto">
          <h1 className='font-mono basis-full text-black font-bold mt-8 mb-4 text-2xl sm:text-4xl'>Blog</h1>
          { posts !== null ? posts.map((element) => { return <Link to={`${element.params}`} 
          className='basis-full bg-white rounded-3xl hover:text-orange shadow-lg border-black border-solid mx-auto mb-12 p-4 sm:p-8'>
          <img src={element.photo} alt={element.alt} className='basis-full'/><h2 className='font-mono text-2xl sm:text-3xl font-bold text-left mt-2 sm:mt-4'>{element.title}</h2>
          <h3 className="sm:text-xl text-left text-gray mt-2">{element.date}</h3></Link>; }) : loading }
        </div>
      </div>
      <DownloadNow />
      <GoBackToTop />
      <MailingList />
      <Footer />
    </div>
  )
}

export default BlogList;