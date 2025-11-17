'use client';
import { motion } from 'framer-motion';

export default function SkillBar({ skill, level, color = 'bg-blue-500' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-semibold">{skill}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className={`h-full ${color} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}
