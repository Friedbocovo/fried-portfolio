import { ExternalLink, Github, Code, Globe, Smartphone, Database } from 'lucide-react';
// Assurez-vous que ces images existent dans le même répertoire ou ajustez les chemins !
import imgAppFlooter from "./img-app-flooter.png"
import imgAppFybyShop from "./img-app-flooter.png"; 
import imgAppAidoedo from "./aidoedo.png"; 
import imgAppExoplanet from "./exoplanet.png"; 
import imgAppSuperMarket from "./geo.png"; 
import imgAppQRcode from "./appqrcode.png"; 

const Projects = () => {
  const projects = [
    {
      title: 'App Flooter dimages',
      description: 'Application web permettant de flouter des images avec les intensiter de floutage choisie par lutilisateur.',
      tech: ['React', 'TypeScript', 'TailwindCss','Vite'],
      icon: Code,
      gradient: 'from-cyan-400 to-blue-500',
      image: imgAppFlooter,
      liveUrl: 'https://flouter-app.vercel.app/', 
      githubUrl: 'https://github.com/votre-utilisateur/app-flooter' // AJOUT OPTIONNEL pour GitHub
    },
    {
      title: 'App FybyShop',
      description: 'E-commerce des Appareils électroniques et gestion complète des commandes.',
      tech: ['React', 'TypeScript', 'TailwindCss','Vite','Node'],
      icon: Code,
      gradient: 'from-blue-400 to-cyan-500',
      image: imgAppFybyShop,
      // AJOUT : Lien du projet en ligne (remplacez par votre URL)
      liveUrl: 'https://fyby.vercel.app/',
      githubUrl: 'https://github.com/Friedbocovo/fybyShop'
    },
    {
      title: 'App Aidoedo',
      description: '',
      tech: ['Next', 'TypeScript', 'TailwindCss','Vite','Node'],
      icon: Code,
      gradient: 'from-cyan-500 to-blue-400',
      image: imgAppAidoedo,
      // AJOUT : Lien du projet en ligne (remplacez par votre URL)
      liveUrl: 'https://aidoedo.staging.bocovo.me/',
      githubUrl: '#'
    },
    {
      title: 'App Exoplanet',
      description: 'Exploration des exoplanètes avec visualisations interactives en utilisant les  données de la NASA',
      tech: ['React', 'TypeScript', 'TailwindCss','Vite'],
      icon: Code,
      gradient: 'from-blue-500 to-cyan-400',
      image: imgAppExoplanet,
      // AJOUT : Lien du projet en ligne (remplacez par votre URL)
      liveUrl: 'https://exoplanet-ai-584i.vercel.app/',
      githubUrl: 'https://github.com/Sky7-dev-05/exoplanet-ai' // Laisser vide si pas de lien
    },
    {
      title: 'App Localisation de Super Market',
      description: 'Application de localisation de supermarchés à proximité avec filtres.',
      tech: ['HTML', 'CSS'],
      icon: Globe,
      gradient: 'from-cyan-400 to-blue-500',
      image: imgAppSuperMarket,
      liveUrl: 'https://app-supermacher-around-me.vercel.app/',
      githubUrl: 'https://github.com/Friedbocovo/App_Supermacher_around_me'
    },
    {
      title: 'App QRcode',
      description: 'Générateur de QR codes personnalisés avec options de design et intégration facile.',
      tech: ['React', 'TypeScript', 'TailwindCss','Vite'],
      icon: Code,
      gradient: 'from-blue-400 to-cyan-500',
      image: imgAppQRcode,
      liveUrl: 'https://app-qr-code-generator.vercel.app/',
      githubUrl: 'https://github.com/Friedbocovo/App_QRCode_Generator'
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-slate-900" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Projets Réalisés
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Une sélection de mes projets les plus récents, démontrant mes compétences
            en développement full stack, design et innovation technologique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            // Définir une condition pour le bouton GitHub
            const showGithubButton = project.githubUrl && project.githubUrl.length > 0;

            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    {/* MODIFICATION 1 : Le bouton "Voir" devient un lien <a> */}
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Voir</span>
                    </a>
                    
                    {/* MODIFICATION 2 : Bouton GitHub lié si l'URL existe */}
                    {showGithubButton && (
                      <a
                        href={project.githubUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300 flex items-center justify-center" // Ajout de flex pour centrer l'icône
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {/* Afficher un bouton "Désactivé" si pas de lien GitHub (Optionnel) */}
                    {!showGithubButton && (
                       <button
                         disabled
                         className="px-4 py-2 bg-slate-700/30 text-slate-500 rounded-lg cursor-not-allowed flex items-center justify-center"
                       >
                         <Github className="w-4 h-4" />
                       </button>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;