import { useState } from 'react';
// SquareDiscord est retiré car l'exportation pose problème. Nous utilisons un SVG inline.
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'; 

// Composant SVG inline pour le logo Discord (simple et clair)
const DiscordIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 45 45" 
    className={className} 
    fill="currentColor" 
    aria-hidden="true"
  >
    <path d="M37.8,4.7c-3.25-1.74-6.84-2.73-10.7-3.23c-0.12,0.02-0.24,0.06-0.36,0.11c-0.08,0.04-0.16,0.08-0.25,0.1c-0.34,0.13-0.66,0.3-0.95,0.5c-0.09,0.06-0.19,0.1-0.28,0.16c-0.5,0.31-0.97,0.67-1.39,1.1c-0.05,0.05-0.1,0.1-0.15,0.16c-0.48,0.52-0.9,1.1-1.25,1.72c-0.06,0.11-0.12,0.22-0.18,0.32c-0.08,0.14-0.15,0.28-0.21,0.43c-0.03,0.08-0.07,0.16-0.1,0.24c-0.03,0.09-0.06,0.18-0.09,0.26c-0.02,0.08-0.04,0.16-0.06,0.24c-0.01,0.08-0.02,0.15-0.02,0.23c-0.01,0.12-0.01,0.24-0.01,0.36c0,0.48,0.01,0.96,0.04,1.44c-0.04-0.02-0.07-0.05-0.1-0.08c-0.14-0.12-0.29-0.23-0.43-0.34c-2.48-1.93-5.32-3.1-8.32-3.52c-0.24-0.03-0.48-0.05-0.72-0.07c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-0.24,0.02-0.48,0.04-0.72,0.07c-3,0.42-5.84,1.59-8.32,3.52c-0.14,0.11-0.29,0.22-0.43,0.34c0.03-0.48,0.04-0.96,0.04-1.44c0-0.12,0-0.24-0.01-0.36c-0.01-0.08-0.01-0.15-0.02-0.23c-0.02-0.08-0.04-0.16-0.06-0.24c-0.03-0.09-0.06-0.18-0.09-0.26c-0.03-0.08-0.07-0.16-0.1-0.24c-0.06-0.15-0.13-0.29-0.21-0.43c-0.06-0.11-0.12-0.22-0.18-0.32c-0.35-0.62-0.77-1.2-1.25-1.72c-0.05-0.05-0.1-0.1-0.15-0.16c-0.42-0.43-0.89-0.79-1.39-1.1c-0.09-0.06-0.19-0.1-0.28-0.16c-0.29-0.2-0.61-0.37-0.95-0.5c-0.08-0.04-0.16-0.08-0.25-0.1c-0.12-0.02-0.24-0.06-0.36-0.11c-3.86,0.5-7.45,1.5-10.7,3.23c-3.79,2.02-6.53,5.16-8.08,8.87c-0.06,0.15-0.11,0.3-0.16,0.45c-0.05,0.15-0.08,0.3-0.12,0.45c-0.03,0.15-0.05,0.3-0.07,0.46c-0.02,0.16-0.03,0.32-0.04,0.48c-0.01,0.16-0.01,0.32-0.01,0.48c0,0.16,0,0.32,0,0.48c0,0.16,0,0.32,0,0.48c0,0.16,0,0.32,0,0.48c0,0.16,0,0.32,0.01,0.48c0.01,0.16,0.02,0.32,0.04,0.48c0.01,0.16,0.03,0.32,0.05,0.48c0.02,0.16,0.04,0.31,0.08,0.46c0.03,0.15,0.08,0.3,0.13,0.45c0.05,0.15,0.11,0.3,0.18,0.45c1.78,4.72,5.26,8.51,9.65,10.78c0.23,0.11,0.47,0.22,0.7,0.31c0.37,0.15,0.75,0.27,1.13,0.37c0.02,0.01,0.04,0.02,0.06,0.03c0.16,0.04,0.33,0.08,0.49,0.1c0.05,0.01,0.11,0.02,0.16,0.02c0.2,0.03,0.39,0.04,0.59,0.04c0.16,0,0.32,0,0.48,0c0.16,0,0.32,0,0.48,0c0.2,0,0.39-0.01,0.59-0.04c0.05-0.01,0.11-0.02,0.16-0.02c0.16-0.03,0.33-0.07,0.49-0.1c0.02,0,0.04-0.01,0.06-0.02c0.38-0.1,0.76-0.22,1.13-0.37c0.23-0.1,0.47-0.2,0.7-0.31c4.39-2.27,7.87-6.06,9.65-10.78c0.07-0.15,0.13-0.3,0.18-0.45c0.05-0.15,0.1-0.3,0.13-0.45c0.03-0.15,0.06-0.31,0.08-0.46c0.02-0.16,0.03-0.32,0.04-0.48c0.01-0.16,0.01-0.32,0.01-0.48c0-0.16,0-0.32,0-0.48c0-0.16,0-0.32,0-0.48c0-0.16,0-0.32,0-0.48c0-0.16,0-0.32-0.01-0.48c-0.01-0.16-0.02-0.32-0.04-0.48c-0.02-0.16-0.04-0.31-0.07-0.46c-0.03-0.15-0.08-0.3-0.12-0.45c-0.05-0.15-0.11-0.3-0.16-0.45C44.3,9.88,41.56,6.74,37.8,4.7z M28.77,28.87c-1.87,0-3.39-1.63-3.39-3.64s1.52-3.64,3.39-3.64c1.87,0,3.39,1.63,3.39,3.64S30.64,28.87,28.77,28.87z M16.23,28.87c-1.87,0-3.39-1.63-3.39-3.64s1.52-3.64,3.39-3.64c1.87,0,3.39,1.63,3.39,3.64S18.1,28.87,16.23,28.87z"/>
  </svg>
);


// Renamed Contact to App as required for single-file React Immersives
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State for visual feedback during click/redirection
  const [isRedirecting, setIsRedirecting] = useState(false);

  const recipientEmail = 'friedbocovo03@gmail.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRedirecting(true);

    // 1. Construct the email body text
    const emailBody = `
Bonjour,

J'aimerais vous contacter au sujet de: ${formData.subject}.

${formData.message}

Cordialement,

---
Nom: ${formData.name}
Email: ${formData.email}
    `.trim();

    // 2. Encode subject and body for the mailto URL
    const encodedSubject = encodeURIComponent(`[Contact Portfolio] ${formData.subject}`);
    const encodedBody = encodeURIComponent(emailBody);

    // 3. Create the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    // 4. Open the user's email client
    window.location.href = mailtoLink;

    // Reset the redirecting state after a short delay (optional, as the user is leaving the page)
    setTimeout(() => {
        setIsRedirecting(false);
    }, 1000);
    
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: recipientEmail,
      link: `mailto:${recipientEmail}`,
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+229 52353484',
      link: 'tel:+22952353484',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Tankpè, Bénin',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, link: 'https://www.linkedin.com/in/fried-bocovo-97a051291/', color: 'hover:text-blue-400' },
    { icon: Github, link: 'https://github.com/Friedbocovo', color: 'hover:text-white' },
    { icon: DiscordIcon, link: 'https://discord.com/channels/@me9', color: 'hover:text-purple-400' }, // Utilisation du composant SVG DiscordIcon
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Suppression de font-['Inter'] pour rétablir le style de police par défaut */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contactez-Moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Un projet en tête ? Que ce soit pour me **commander un site web, une application mobile**, ou toute autre opportunité de collaboration, n'hésitez pas à me contacter. Je suis toujours ouvert aux défis passionnants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Panel (Left) */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-slate-400 text-sm mb-1">{info.title}</h4>
                        <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Réseaux Sociaux</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700 shadow-md`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">Disponibilité</h3>
              <p className="text-slate-300 leading-relaxed">
                Actuellement disponible pour des projets , stages et opportunités
                de collaboration. Temps de réponse moyen : 24-48h.
              </p>
            </div>
          </div>

          {/* Contact Form Panel (Right) */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez un Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all outline-none"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all outline-none"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all outline-none"
                  placeholder="Sujet de votre message"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all outline-none resize-none"
                  placeholder="Votre message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isRedirecting}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isRedirecting ? (
                  <span>Ouverture de l'application mail...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer le Message</span>
                  </>
                )}
              </button>

              {/* Information Message */}
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-blue-400 text-center text-sm">
                En cliquant, votre application de messagerie s'ouvrira pour finaliser l'envoi.
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400">
            © 2025 BOCOVO Fried. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;