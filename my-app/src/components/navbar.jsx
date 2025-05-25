import React from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname;

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white border-t-[1.5rem] border-[#FBB6CE] flex justify-between items-center px-8 py-5 font-sans shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-gray-800 tracking-tight">Kimberly Michela</div>
      <ul className="flex gap-6">
        {links.map(({ name, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                path === href
                  ? 'text-blue-600 bg-blue-100'
                  : 'text-gray-800 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
