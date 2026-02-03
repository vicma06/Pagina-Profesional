import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-slate-200 selection:bg-primary/30 font-sans relative overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
