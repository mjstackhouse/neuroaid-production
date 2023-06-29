import { useState } from "react";
import axios from 'axios';

function MailingList() {

  const [email, setEmail] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`${process.env.REACT_APP_API}/mailinglist`, { email: email })
          .then(response => {
            response.data.response === "You're already subscribed!" ? alreadySubscribed('mailing-list-container') : emailSubscribe('mailing-list-container');
          })
          .catch(error => {
            console.log(error);
          })
  }

  function emailSubscribe(id) {
    const element = document.getElementById(id);
    element.innerHTML = '<p class="text-black font-semibold text-lg sm:text-xl place-items-center m-auto">Thanks for subscribing!</p>';
  }

  function alreadySubscribed(id) {
    const element = document.getElementById(id);
    element.innerHTML = '<p class="text-black font-semibold text-lg sm:text-xl place-items-center m-auto">You\'re already subscribed!</p>';
  }

  return (
    <div className="flex basis-full h-36 self-end bg-white min-h-[120px] mb-4" id="mailing-list-container">
      <form className="flex flex-wrap mx-auto place-items-center justify-center py-6 px-4" onSubmit={handleSubmit}>
          <label for="email-input" className="basis-full font-semibold text-gray text-base mb-2 sm:text-lg">Join our mailing list for news and updates about Neuro-Aid</label>
          <input id="email-input" className="h-[2rem] w-[175px] sm:w-[300px] ml-2 rounded-lg border-2 border-solid border-gray hover:border-orange" type="email" maxLength='254' onChange={(e) => setEmail(e.target.value)} required></input>
          <button type="submit" className="bg-black hover:bg-gray font-semibold text-white text-base sm:text-lg rounded-3xl py-2 px-4 ml-2 shadow-md" id='subscribe-button'>Subscribe</button>
      </form>
    </div>
  );
}

export default MailingList;