import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="bg-secondary relative">
      <div className="container mx-auto max-w-lg px-6 py-48">
        <h2 className="text-5xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-center text-lg text-gray-700 mb-12">Have questions or want to reach out to Ayandi Group? Fill out the form below, and we'll get back to you.</p>

        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-xl text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-xl text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-xl text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea id="message" rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>

          <button type="submit" className="w-full bg-magenta text-white text-xl py-2 rounded-lg font-semibold hover:opacity-80">Send Message</button>
        </form>
      </div>
           
      <div className="absolute  sm:-bottom-[100px] bottom-[-1px] w-full overflow-hidden leading-[0]">
            {/* <img className="h-[100px] w-[100%] object-cover" src="/assets/images/wave_black.svg" /> */}
          <svg className='' width="100vw" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000000" d="M0,160 C720,60 720,260 1440,160 L1440,320 L0,320 Z"></path>
          </svg>

      </div>
    </section>
  );
};

export default ContactUs;
