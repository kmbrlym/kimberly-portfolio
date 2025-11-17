'use client';
import { motion } from 'framer-motion';

export default function CodeSnippet({ code, language = 'javascript', title }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden"
    >
      {title && (
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-300 text-sm font-mono ml-4">{title}</span>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <pre className="p-4 text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          <code>{code}</code>
        </pre>
      </div>
    </motion.div>
  );
}
