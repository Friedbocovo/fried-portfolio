import { useState, useEffect } from 'react';
import { Code2, Palette, Cpu, ChevronDown } from 'lucide-react';
import ThreeDBackground from './ThreeDBackground';
import Photo from "./photo-1.jpg"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [profileRotation, setProfileRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const x = (e.clientY - window.innerHeight / 2) / 30;
      const y = (e.clientX - window.innerWidth / 2) / 30;
      setProfileRotation({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <ThreeDBackground />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), transparent 50%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 flex flex-col items-center lg:items-end">
          <div className="flex justify-center items-center space-x-6 mb-8 animate-fade-in">
            <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group">
              <Code2 className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-110 group">
              <Palette className="w-8 h-8 text-blue-400 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group">
              <Cpu className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">BOCOVO Fried.</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Développeur Full Stack
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-4">
            Designer UX/UI
          </p>

          <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-3xl">
            Élève Ingénieur en Génie Informatique et Télécommunication à l'EPAC
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Découvrir mon parcours
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Me Contacter
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div
            className="relative w-72 h-72 sm:w-80 sm:h-80"
            style={{
              perspective: '1000px',
            }}
          >
            <div
              className="w-[500px] h-[500px] rounded-3xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/50 relative group"
              style={{
                transform: `rotateX(${profileRotation.x}deg) rotateY(${profileRotation.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.1s ease-out',
              }}
            >
              <img
                src={Photo}
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;
