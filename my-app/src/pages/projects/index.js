import React from 'react';
import Navbar from "@/components/navbar";
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import altctrlviewImg from '@/images/altctrlview.png';
import auxiliumImg from '@/images/auxilium.jpg';
import baymaxImg from '@/images/baymax.jpg';
import becleanImg from '@/images/beclean.png';
import confidentcandidateImg from '@/images/confidentcandidate.jpg';
import devliftImg from '@/images/devlift.jpg';
import dyzlexiaelevateImg from '@/images/dyzlexiaelevate.jpg';
import meetuoftmateImg from '@/images/meetuoftmate.jpg';
import nomichanImg from '@/images/nomichan.jpg';
import ploggoImg from '@/images/ploggo.png';
import webvitalsImg from '@/images/webvitals.png';
import leaseeaseImg from '@/images/leaseease.png';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const projects = [
  {
    title: 'baymax',
    desc: 'AI-powered virtual doctor using medical databases and fine-tuned models to provide accurate health guidance.',
    tags: ['Cohere API', 'Fine Tuning', 'Python', 'Data Cleaning'],
    link: 'https://github.com/kmbrlym/baymax',
    image: baymaxImg,
    youtubeLink: 'https://youtu.be/Ykxw5S63H7Q?si=7qcpieeYHuE-EvRF'
  },
  {
    title: 'webvitals',
    desc: 'a real-time analytics tool tracking user sessions, replays, and interactions to improve web performance.',
    tags: ['JavaScript', 'React', 'Prisma ORM', 'REST APIs', 'PostgreSQL', 'TailwindCSS'],
    link: 'https://github.com/kmbrlym/webvitals',
    image: webvitalsImg
  },
  {
    title: 'nomichan',
    desc: 'an AI-powered journaling companion that engages in meaningful conversations, offers insights, and helps users reflect on their thoughts through interactive dialogue and personalized expression.',
    tags: ['Python', 'Flask', 'GPT', 'Fisher AI', 'JavaScript', 'HTML', 'CSS', 'PSPDFKit', 'Docker', 'Node.js'],
    link: 'https://github.com/kmbrlym/journalingbuddy',
    image: nomichanImg
  },
  {
    title: 'ploggo',
    desc: 'a gamified fitness and sustainability app using ML and GPS to classify litter, log cleanups, and reward users.',
    tags: ['React Native', 'PostgreSQL', 'TypeScript', 'JavaScript', 'REST APIs', 'Python', 'Flask', 'TailwindCSS'],
    link: 'https://github.com/kmbrlym/PlogGo',
    image: ploggoImg,
    youtubeLink: 'https://youtu.be/tRiI0dYkT1Q?si=Nw-dnhk_5ZBIbyMg'
  },
  {
    title: 'devlift',
    desc: 'a coding companion VS Code extension that restores developer ownership through emotion-aware feedback, code explanation prompts, and progress tracking.',
    tags: ['TypeScript', 'JavaScript', 'Node.js', 'VS Code Extension', 'Roboflow', 'Axios', 'HTML5', 'CSS'],
    link: 'https://github.com/kmbrlym/devlift',
    image: devliftImg,
    youtubeLink: 'https://youtu.be/blSS4drk7XI?si=MH0WhdtVhU5VLdJA'
  },
  {
    title: 'alt+ctrl+view',
    desc: 'a chrome extension that uses generative AI to auto-generate alt text for improved web accessibility.',
    tags: ['JavaScript', 'Google Gemini API', 'Chrome Extension'],
    link: 'https://github.com/kmbrlym/alt-ctrl-view',
    image: altctrlviewImg,
  },
  {
    title: 'be clean',
    desc: 'a recovery support app with daily challenges, progress badges, and community engagement features.',
    tags: ['React', 'HTML', 'CSS', 'Node.js'],
    link: 'https://github.com/kmbrlym/garudahacks',
    image: becleanImg,
    youtubeLink: 'https://youtu.be/exx_DPj6-hQ?si=P8S--stpKQYXxZ9O'
  },
  {
    title: 'confident candidate',
    desc: 'an AI interview coach offering tailored questions and speech-based feedback for job prep.',
    tags: ['OpenAI API', 'SpeechRecognition API', 'Flask', 'Python'],
    link: 'https://github.com/kmbrlym/deerhacks3',
    image: confidentcandidateImg
  },
  {
    title: 'leaseease',
    desc: 'a chatbot-powered platform connecting tenants and landlords with smart housing recommendations.',
    tags: ['Python', 'OpenAI API', 'UI/UX Prototyping'],
    link: 'https://github.com/kmbrlym/seneca-hackathon-2024',
    image: leaseeaseImg
  },
  {
    title: 'meetuoftmate',
    desc: 'a networking platform aggregating UofT events and enabling study group matchmaking.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    link: 'https://github.com/kmbrlym/awshacks',
    image: meetuoftmateImg
  },
  {
    title: 'dyslexiaelevate',
    desc: 'a dyslexia-friendly platform with clickable text, custom fonts, and reading/spelling exercises.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Pytesseract'],
    link: 'https://github.com/kmbrlym/dyslexia-elevate',
    image: dyzlexiaelevateImg,
    youtubeLink: 'https://youtu.be/JTgvMhj0RQU?si=ucemFvSb_JgDGTIx'
  },
  {
    title: 'auxilium',
    desc: 'an auto-grading platform that uses AI to assess student papers and provide comprehensive feedback, freeing teachers to focus on guiding students while maximizing efficiency.',
    tags: ['Python', 'Flask', 'Google Gemini API', 'TinyMCE', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/kmbrlym/gdscguelph',
    image: auxiliumImg
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
              className={`w-[280px] p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-blue-300 flex flex-col justify-between ${pastelBackgrounds[index % pastelBackgrounds.length]} cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
            >
              <div>
                {/* Project Image */}
                <div className="mb-4 rounded-lg overflow-hidden bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={248}
                    height={140}
                    className="w-full h-[140px] object-cover"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-800 mb-4">{project.desc}</p>
              </div>
              
              {/* Links Section */}
              <div className={`flex items-center ${project.youtubeLink ? 'justify-between' : 'justify-start'} mb-3`}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-sm font-semibold">GitHub</span>
                </a>
                {project.youtubeLink && (
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-sm font-semibold">Watch</span>
                  </a>
                )}
              </div>
              
              {/* Tags */}
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
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
