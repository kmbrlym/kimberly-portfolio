import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

export default function Social() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
      <SocialIcon
        href="https://www.linkedin.com/in/kimberly-michela-367955264/"
        icon={<FaLinkedinIn />}
        background="#B2F5EA"
      />
      <SocialIcon
        href="https://github.com/kmbrlym"
        icon={<FaGithub />}
        background="#C4F1F9"
      />
      <SocialIcon
        href="https://www.instagram.com/kimberlymichela"
        icon={<FaInstagram />}
        background="#FBB6CE"
      />
      <SocialIcon
        href="https://devpost.com/kimberlymchelaa"
        icon={<SiDevpost />}
        background="#FAF089"
      />
    </div>
  );
}

function SocialIcon({ href, icon, background }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '64px',
        height: '64px',
        backgroundColor: background,
        color: '#2D3748',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        fontSize: '1.75rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s ease',
      }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {icon}
    </a>
  );
}

