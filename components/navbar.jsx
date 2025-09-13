'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'flex-end', 
      padding: '1rem 2rem', 
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <Link href="/app/signup" style={{ 
        fontWeight: '600', 
        color: '#FF6F91', 
        textDecoration: 'none',
        fontFamily: "'Baloo 2', cursive",
        fontSize: '1.1rem',
      }}>
        Sign Up
      </Link>
    </nav>
  );
}