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
    tags: ['React Native', 'PostgreSQL', 'TypeScript', 'JavaScript', 'REST APIs', 'Python', 'Flask']
  },
  {
    title: 'alt+ctrl+view',
    desc: 'a chrome extension that uses generative AI to auto-generate alt text for improved web accessibility.',
    tags: ['JavaScript', 'Google Gemini API', 'Chrome Extension']
  },
  {
    title: 'webvitals',
    desc: 'a real-time analytics tool tracking user sessions, replays, and interactions to improve web performance.',
    tags: ['JavaScript', 'React', 'Prisma ORM', 'REST APIs', 'PostgreSQL', 'TailwindCSS']
  },
  {
    title: 'be clean',
    desc: 'a recovery support app with daily challenges, progress badges, and community engagement features.',
    tags: ['React', 'HTML', 'CSS', 'Node.js']
  },
  {
    title: 'baymax',
    desc: 'AI-powered virtual doctor using medical databases and fine-tuned models to provide accurate health guidance.',
    tags: ['Cohere API', 'Fine Tuning', 'Python', 'Data Cleaning']
  },
  {
    title: 'confident candidate',
    desc: 'an AI interview coach offering tailored questions and speech-based feedback for job prep.',
    tags: ['OpenAI API', 'SpeechRecognition API', 'Flask', 'Python']
  },
  {
    title: 'leaseease',
    desc: 'a chatbot-powered platform connecting tenants and landlords with smart housing recommendations.',
    tags: ['Python', 'OPENAI API', 'UI/UX Prototyping']
  },
  {
    title: 'meetuoftmate',
    desc: 'a networking platform aggregating UofT events and enabling study group matchmaking.',
    tags: ['React', 'JavaScript', 'Tailwind CSS']
  },
  {
    title: 'dyslexiaelevate',
    desc: 'a dyslexia-friendly platform with clickable text, custom fonts, and reading/spelling exercises.',
    tags: ['HTML', 'CSS', 'JavaScript']
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
            <div
              key={index}
              className={`w-[280px] p-6 rounded-2xl shadow-md flex flex-col justify-between ${pastelBackgrounds[index % pastelBackgrounds.length]}`}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-800 mb-4">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white border border-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
