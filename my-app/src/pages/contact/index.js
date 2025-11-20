import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar";
import { Space_Grotesk } from 'next/font/google';

const Social = dynamic(() => import('@/components/social'), { ssr: false }); // async load

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function ContactForm() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-6 py-12">
        <h2
          className={`${spaceGrotesk.className} text-3xl font-bold text-gray-800 mb-6`}
        >
          Get In Touch 💌
        </h2>
        <form
          action="https://formsubmit.co/kimberlymchelaa@gmail.com"
          method="POST"
          className="bg-cyan-100 max-w-xl w-full p-8 rounded-xl shadow-md"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className={inputClass}
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className={inputClass}
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-gray-700">Message</label>
            <textarea
              name="message"
              placeholder="Say hello!"
              rows="5"
              required
              className={`${inputClass} resize-y`}
            />
          </div>
          <button type="submit" className={buttonClass}>
            Send Message
          </button>
        </form>
        <div className="mt-6">
          <Social />
        </div>
      </main>
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-pink-300 transition';

const buttonClass =
  'bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition';
