import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <Link href="/">
          <a style={linkStyle}>OtterlyFocused</a>
        </Link>
      </div>
      <div>
        <Link href="/apps/signup/page">
          <a style={linkStyle}>Sign Up</a>
        </Link>
      </div>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#282c34',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const logoStyle = {
  fontSize: '1.5rem',
};
