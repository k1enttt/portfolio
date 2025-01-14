'use client'
import { useState } from 'react';
import Hero from '@/components/hero';
import AboutMe from '@/components/about-me';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      <header className="sticky top-0 bg-white w-full p-3">
        <div className='content-container flex justify-between items-center'>
          <div className="text-h3 font-bold">KIEN</div>
          <div className="flex items-center">
            <div id="phone" className="mr-4">0815 257 116</div>
            <button className="" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
          {/* Add your navigation menu here, conditionally rendered based on isOpen */}
          {isOpen && (
            <nav className='fixed inset-0 bg-black/90 flex justify-center items-center'> 
              <div className="relavtive w-fit h-screen text-white font-bold rounded-lg text-center flex flex-col justify-center w-">
                <button
                  className="absolute top-4 right-4"
                  onClick={toggleMenu}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <ul id='nav-list' className='flex flex-col space-y-8 text-2xl'>
                  <li>
                    <a href="#" onClick={toggleMenu}>Home</a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>About me</a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>Resume</a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>Portfolio</a>
                  </li>
                  <li>
                    <a href="#" onClick={toggleMenu}>Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </div>
          
        
      </header>
      <Hero />
      <AboutMe />
    </div>
  );
}
