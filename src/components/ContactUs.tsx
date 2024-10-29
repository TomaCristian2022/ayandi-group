import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="bg-secondary py-48 px-6">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-center text-gray-700 mb-12">Have questions or want to reach out to Ayandi Group? Fill out the form below, and we'll get back to you.</p>

        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
            <textarea id="message" rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>

          <button type="submit" className="w-full bg-magenta text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
