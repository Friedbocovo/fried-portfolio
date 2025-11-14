import { Code, Palette, Smartphone, Layers,Globe } from 'lucide-react';
const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Développement Full Stack',
      description: 'Expert en React, Node.js, TypeScript et frameworks modernes',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Palette,
      title: 'Design UX/UI',
      description: 'Création d\'interfaces intuitives et expériences utilisateur exceptionnelles',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Applications adaptatives pour tous les appareils et plateformes',
      color: 'from-cyan-400 to-blue-400',
    },
    {
      icon: Globe,
      title: 'Wordpress',
      description: 'Creation de tout site web',
      color: 'from-cyan-400 to-blue-300',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              À Propos de Moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8" />
            <p className="text-xl text-slate-300 max-w-6xl mx-auto leading-relaxed">
              Je m'appelle <strong>Bocovo Fried</strong>, un développeur front-end passionné par la création d’expériences web modernes, fluides et esthétiques. Actuellement étudiant en formation GIT à LEPAC et poursuivant une formation d’ingénierie en informatique et télécommunications, je consacre mon temps à approfondir mes compétences en développement web et à transformer mes idées en projets concrets.

              Curieux et motivé, j’aime relever de nouveaux défis techniques tout en cherchant à améliorer mes connaissances jour après jour. Je conçois des interfaces intuitives et performantes à l’aide de React.js, TypeScript, Tailwind CSS, HTML, CSS, et JavaScript, en mettant toujours l’accent sur la simplicité, la performance et l’expérience utilisateur.
              Mon objectif est de continuer à progresser dans le domaine du développement web, d’évoluer dans ma formation d’ingénierie en informatique et télécommunications, et de collaborer sur des projets innovants qui apportent une réelle valeur ajoutée aux utilisateurs.
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {skill.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Formation</h3>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Ingénieur en Génie Informatique et Télécommunication
              </h4>
              <p className="text-cyan-400 font-medium mb-2">EPAC - École Polytechnique d'Abomey-Calavi</p>
              <p className="text-slate-300">
                Formation approfondie en développement logiciel, architecture système,
                réseaux et télécommunications, avec une approche pratique et orientée projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
