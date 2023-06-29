import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from 'axios';
import { useState, useEffect } from 'react';
import DownloadNow from "../components/DownloadNow";
import GoBackToTop from "../components/Go-Back-To-Top";
import MailingList from "../components/MailingList";
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function BlogPost() {
  
  const loading = "";
  const [post, updatePost] = useState(null);

  // useParams(): https://ui.dev/react-router-url-parameters
  const params = useParams();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/blog/${params.title}`)
        .then(response => {
          console.log('response: ', response);
          updatePost(response.data);
        })
        .catch(err => {
          console.error('axios error:', err);
        });
  }, [params.title]);

  function copyLink() {
    console.log('params: ', params.title);
    const link = `${process.env.REACT_APP_API}/blog/${params.title}`;
    (async () => {
      // navigator.clipboard.writeText: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
      await navigator.clipboard.writeText(link);
      giveCopyFeedback();
    })();
  }

  function giveCopyFeedback() {
    const element = document.getElementById('link-copied');
    element.innerHTML = '<p class="text-black font-semibold text-base sm:text-lg place-items-center m-auto align-middle">Link copied!</p>';
    setTimeout(() => {
      element.innerHTML = '';
    }, '3000');
  }

  return (
    <div className="flex flex-wrap">
      <Navbar />
      <div className="bg-[#F2F2F2] basis-full">
        <article className="grid mx-auto mb-8 sm:mb-12 body-width">
          <h1 className='font-mono basis-full text-black font-bold my-4 sm:mt-8 sm:mb-4 text-2xl sm:text-4xl border-b-4 sm:border-b-8 border-blue border-solid pb-2'>{post !== null ? post.title : <FontAwesomeIcon className="text-black text-4xl align-middle spinning mx-auto my-16" role='alert' aria-busy='true' icon={icon({name: 'circle-notch', style: 'solid'})} />}</h1>
          <div className="text-center mb-4">
            <span className="inline text-gray">By {post !== null ? post.author : loading} |</span>
            <span className="inline text-gray"> {post !== null ? post.date : loading}</span>
          </div>
          <img className="mb-8 mx-auto" src={post !== null ? post.photo : loading} alt={post !== null ? post.alt : loading}></img>
          <div className="bg-white rounded-3xl shadow-lg px-4 py-3 sm:px-8 sm:py-6 mb-4">
            {/* dangerouslySetInnerHTML: https://stackoverflow.com/questions/68133492/keep-text-formatting-in-mongodb */}
            <p className="text-base sm:text-lg text-left leading-loose border-b-2 border-orange border-solid pb-4" dangerouslySetInnerHTML={post !== null ? {__html: post.intro} : {__html: loading}}></p>
            <br />
            {/* Whitespace pre-wrap: https://stackoverflow.com/questions/63148489/how-to-get-the-full-text-format-from-mongodb-database-that-inserted-with-input-f */}
            <p className="text-base sm:text-lg text-left leading-loose whitespace-pre-wrap border-b-2 border-orange border-solid pb-4" dangerouslySetInnerHTML={post !== null ? {__html: post.body} : {__html: loading}}></p>
            <br />
            <p className="text-base sm:text-lg text-left leading-loose" dangerouslySetInnerHTML={post !== null ? {__html: post.conclusion} : {__html: loading}}></p>
          </div>
          <div className="flex place-content-center sm:place-content-start px-4 sm:px-8">
            <div className="flex items-center">
              <p className="inline mr-2">Share</p>
              <a className="mr-1" rel="noreferrer" title="Share to Twitter" target="_blank" href={'https://twitter.com/intent/tweet?text=' + `${post !== null ? post.title : loading}` + ': ' + `https://neuroaid.onrender.com/blog/${params.title}`}>
                <FontAwesomeIcon className="text-black text-left text-2xl sm:text-3xl hover:text-gray" icon={faTwitter} />
              </a>
              <button onClick={copyLink}>
                <FontAwesomeIcon title="Copy blog post's link" className="text-black text-2xl sm:text-3xl hover:text-gray" icon={icon({name: 'link', style: 'solid'})} />
              </button>
            </div>
            <span id='link-copied' className="my-auto ml-2"></span>
          </div>
        </article>
      </div>
      <div className="basis-full">
        <DownloadNow />
      </div>
      <GoBackToTop />
      <MailingList />
      <Footer />
    </div>
  )
}

export default BlogPost;