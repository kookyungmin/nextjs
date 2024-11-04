'use client'

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export function NavLinks() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
      <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
        About
      </Link>
      <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
    </nav>
  )
}