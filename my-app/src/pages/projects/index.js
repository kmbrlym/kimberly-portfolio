import React from 'react';
import Navbar from "@/components/navbar";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const projects = [
  {
    title: 'ploggo',
    desc: 'a gamified fitness and sustainability app using ML and GPS to classify litter, log cleanups, and reward users.',
    tags: ['React Native', 'PostgreSQL', 'TypeScript', 'JavaScript', 'REST APIs', 'Python', 'Flask', 'TailwindCSS'],
    link: 'https://github.com/kmbrlym/PlogGo'
  },
  {
    title: 'alt+ctrl+view',
    desc: 'a chrome extension that uses generative AI to auto-generate alt text for improved web accessibility.',
    tags: ['JavaScript', 'Google Gemini API', 'Chrome Extension'],
    link: 'https://github.com/kmbrlym/alt-ctrl-view'
  },
  {
    title: 'webvitals',
    desc: 'a real-time analytics tool tracking user sessions, replays, and interactions to improve web performance.',
    tags: ['JavaScript', 'React', 'Prisma ORM', 'REST APIs', 'PostgreSQL', 'TailwindCSS'],
    link: 'https://github.com/kmbrlym/webvitals'
  },
  {
    title: 'be clean',
    desc: 'a recovery support app with daily challenges, progress badges, and community engagement features.',
    tags: ['React', 'HTML', 'CSS', 'Node.js'],
    link: 'https://github.com/kmbrlym/garudahacks'
  },
  {
    title: 'baymax',
    desc: 'AI-powered virtual doctor using medical databases and fine-tuned models to provide accurate health guidance.',
    tags: ['Cohere API', 'Fine Tuning', 'Python', 'Data Cleaning'],
    link: 'https://github.com/kmbrlym/baymax'
  },
  {
    title: 'confident candidate',
    desc: 'an AI interview coach offering tailored questions and speech-based feedback for job prep.',
    tags: ['OpenAI API', 'SpeechRecognition API', 'Flask', 'Python'],
    link: 'https://github.com/kmbrlym/deerhacks3'
  },
  {
    title: 'leaseease',
    desc: 'a chatbot-powered platform connecting tenants and landlords with smart housing recommendations.',
    tags: ['Python', 'OpenAI API', 'UI/UX Prototyping'],
    link: 'https://github.com/kmbrlym/seneca-hackathon-2024'
  },
  {
    title: 'meetuoftmate',
    desc: 'a networking platform aggregating UofT events and enabling study group matchmaking.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    link: 'https://github.com/kmbrlym/awshacks'
  },
  {
    title: 'dyslexiaelevate',
    desc: 'a dyslexia-friendly platform with clickable text, custom fonts, and reading/spelling exercises.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Pytesseract'],
    link: 'https://github.com/kmbrlym/dyslexiaelevate'
  }
];

const pastelBackgrounds = [
  'bg-pink-200', 'bg-cyan-200', 'bg-yellow-200', 'bg-teal-200', 'bg-pink-100',
  'bg-purple-200', 'bg-orange-100', 'bg-green-100', 'bg-red-100', 'bg-indigo-200'
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center px-4 py-12">
        <h2 className={`${spaceGrotesk.className} text-4xl font-bold text-gray-800 mb-10`}>
          Projects
        </h2>
        <div className="flex flex-wrap gap-6 justify-center max-w-7xl">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[280px] p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-300 flex flex-col justify-between ${pastelBackgrounds[index % pastelBackgrounds.length]} cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <svg 
                    className="w-5 h-5 text-blue-500 transition-colors duration-200 opacity-60 group-hover:opacity-100 group-hover:text-blue-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-sm text-gray-800 mb-4">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white border-2 border-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-all duration-200 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
