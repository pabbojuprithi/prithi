import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white uppercase tracking-wider mb-2">Focus Areas</p>
          <p>Web Development & AI Applications</p>
          <p>Data Analytics & Automation</p>
          <p>Interactive Dashboards & Reporting</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p className="font-bold text-white uppercase tracking-wider mb-2">Contact</p>
          <a href="mailto:pabbojuprithi@gmail.com" className="hover:text-white transition-colors underline underline-offset-4 decoration-1 decoration-white/20 lowercase">pabbojuprithi@gmail.com</a>
          <a href="tel:+917013330270" className="hover:text-white transition-colors underline underline-offset-4 decoration-1 decoration-white/20">+91-7013330270</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="font-bold text-white uppercase tracking-wider mb-2">Location</p>
          <p>Hyderabad, Telangana, India</p>
          <p>Open to Remote & Hybrid</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          PRITHI
        </h2>
      </div>

      {/* Declaration Row */}
      <div className="w-full border-t border-white/10 pt-8 pb-4 mb-4 font-sans text-[11px] md:text-xs text-white/50 text-center leading-relaxed">
        <p className="max-w-2xl mx-auto italic">
          "I hereby declare that the above-mentioned information is true to the best of my knowledge and I bear the responsibility for the given information."
        </p>
        <p className="mt-2 font-bold text-white uppercase tracking-widest text-[9px]">
          — Pabboju Prithi | Place: Hyderabad
        </p>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Pabboju Prithi | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:pabbojuprithi@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">pabbojuprithi@gmail.com</a>
          <a href="tel:+917013330270" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">+91-7013330270</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
