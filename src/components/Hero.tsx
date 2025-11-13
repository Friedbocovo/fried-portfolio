import { useState, useEffect } from 'react';
import { Code2, Palette, Cpu, ChevronDown } from 'lucide-react';
// import ThreeDBackground from './ThreeDBackground'; // On retire le composant 3D
// Assurez-vous d'avoir une image locale pour la photo de profil, ou utilisez une URL si vous préférez.
import Profile from "./profile.jpg"

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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16  lg:pt-20 pb-[100px]"
    >

      {/* Icônes */}
      <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8 animate-fade-in-up delay-100 w-full mt-[30px] md:mt-auto">
        <div className="p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group animate-scale-in delay-100">
          <Code2 className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400 group-hover:rotate-12 transition-transform" />
        </div>
        <div className="p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-110 group animate-scale-in delay-200">
          <Palette className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 group-hover:rotate-12 transition-transform" />
        </div>
        <div className="p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group animate-scale-in delay-300">
          <Cpu className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400 group-hover:rotate-12 transition-transform" />
        </div>
      </div>

      <div className='flex'>
        {/* MODIFICATION MAJEURE ICI : Remplacement de ThreeDBackground par une vidéo
      */}
        <video
          autoPlay
          loop
          muted
          playsInline // Important pour la lecture automatique sur mobile
          className="absolute inset-0 object-cover w-full h-full opacity-20" // Ajustez l'opacité au besoin

        >
          <source src="/coding_background.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>

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

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 w-full max-w-7xl">

          {/* BLOC DU TEXTE PRINCIPAL */}
          <div className="flex flex-col  lg:items-start w-full lg:w-1/2 order-2 lg:order-1 lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up delay-300">
              <span className="block text-white mb-2">BOCOVO Fried</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Développeur Full Stack
              </span>
            </h1>

            <p className="text-lg text-left sm:text-xl lg:text-2xl text-slate-300 mb-3 sm:mb-4 animate-fade-in-up delay-400">
              Designer UX/UI
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-12 max-w-2xl animate-fade-in-up delay-500">
              Élève Ingénieur en Génie Informatique et Télécommunication à l'EPAC
            </p>

            <div className="flex flex-col sm:flex-row md:gap-3 gap-5 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto animate-fade-in-up delay-600">
              <button
                onClick={scrollToAbout}
                className="px-8  py-4  bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Découvrir mon parcours
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Me Contacter
              </button>
            </div>
          </div>

          {/* BLOC PHOTO*/}
          <div className=" flex p-0 flex-col items-center justify-center lg:w-1/2 lg:order-2">

            {/* Photo */}
            <div className="flex items-center justify-center w-full mb-6 sm:mb-8 mr-5 ml-0">
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 animate-float"
                style={{
                  perspective: '1000px',
                }}
              >
                <div
                  className="md:w-[350px] md:h-[300px] h-full w-full  rounded-3xl overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/50 relative group animate-pulse-glow"
                  style={{
                    transform: `rotateX(${profileRotation.x}deg) rotateY(${profileRotation.y}deg)`,
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.1s ease-out',
                  }}
                >

                  <img
                    src={Profile}
                    alt="Profile"
                    className="md:w-full md:h-full  object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" md:w-auto md:left-1/2 flex w-screen justify-center items-center absolute bottom-8  transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>

    </section>
  );
};

export default Hero;