'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TerminalWindow() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    '$ whoami',
    'kimberly@portfolio:~$',
    '$ cat about.txt',
    'Full-Stack Developer',
    'AI/ML Enthusiast', 
    'Problem Solver',
    'Code Artisan',
    '',
    '$ ls skills/',
    '├── React.js',
    '├── Python',
    '├── Node.js',
    '├── PostgreSQL',
    '├── Machine Learning',
    '└── Cloud Computing',
    '',
    '$ git status',
    'On branch: main',
    'Your portfolio is up to date!',
    '',
    '$ ./hire_me.sh',
    '> Connecting to opportunities...',
    '> Ready for collaboration!'
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const line = terminalLines[currentLine];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayedText(prev => prev + line[charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            if (currentLine < terminalLines.length - 1) {
              setDisplayedText(prev => prev + '\n');
            }
          }, 200);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentLine]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
    >
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-300 text-sm font-mono ml-4">
          kimberly@terminal
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm text-green-400 min-h-[400px]">
        <pre className="whitespace-pre-wrap">
          {displayedText}
          {isTyping && <span className="animate-pulse">█</span>}
        </pre>
      </div>
    </motion.div>
  );
}
