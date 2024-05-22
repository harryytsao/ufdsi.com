'use client';
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((open) => !open);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/DSI-logo.svg" alt="logo" width={80} height={80} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
      {open && (
        <div className="absolute top-20 left-0 w-full bg-gray-800 p-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-gray-50 hover:text-gray-300"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar