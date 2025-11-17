'use client';
import Navbar from "@/components/navbar";
import { Space_Grotesk } from 'next/font/google';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-8 py-20 gap-16">
        <div className="flex-shrink-0">
          <Image
            src="/mypic.jpeg"
            alt="Kimberly"
            width={320}
            height={320}
            className="rounded-full border-4 border-pink-300 object-cover"
          />
        </div>
        <div className="max-w-xl text-center md:text-left">
          <h2 className={`${spaceGrotesk.className} text-5xl font-bold text-gray-800 mb-6`}>
            Hey, I'm{' '}
            <span className="text-pink-400">
              <Typewriter
                words={['Kimberly', 'a software engineer']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={90}
                delaySpeed={1200}
              />
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I'm a full-stack developer with a passion for crafting impactful and meaningful digital experiences. Check out my projects!
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/projects">
              <button className="px-6 py-3 rounded-full bg-pink-300 text-gray-800 font-semibold hover:bg-pink-400 transition">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 rounded-full bg-cyan-200 text-gray-800 font-semibold hover:bg-cyan-300 transition">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
