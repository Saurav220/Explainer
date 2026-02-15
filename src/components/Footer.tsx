import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-bg)] border-t border-[rgba(255,255,255,0.05)] py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-[var(--color-cyan)] to-transparent opacity-50 blur-sm"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Visualizing the Hidden Work of the <span className="text-[var(--color-cyan)]">Compiler</span> & <span className="text-[var(--color-purple)]">Linker</span>
          </h3>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            This interactive experience demonstrates how GCC, the linker, and the ABI work together to transform multiple programming languages into a single, efficient executable.
          </p>
          
          {/* Technologies used */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-mono">Built with modern tech</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <span className="px-4 py-2 bg-[rgba(255,255,255,0.03)] rounded-full text-gray-300 border border-[rgba(255,255,255,0.05)] text-sm font-mono hover:border-[var(--color-cyan)] transition-colors">
                React 19
              </span>
              <span className="px-4 py-2 bg-[rgba(255,255,255,0.03)] rounded-full text-gray-300 border border-[rgba(255,255,255,0.05)] text-sm font-mono hover:border-[var(--color-orange)] transition-colors">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-[rgba(255,255,255,0.03)] rounded-full text-gray-300 border border-[rgba(255,255,255,0.05)] text-sm font-mono hover:border-[var(--color-purple)] transition-colors">
                Framer Motion
              </span>
              <span className="px-4 py-2 bg-[rgba(255,255,255,0.03)] rounded-full text-gray-300 border border-[rgba(255,255,255,0.05)] text-sm font-mono hover:border-[var(--color-cyan)] transition-colors">
                Tailwind CSS v4
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[var(--color-cyan)] transition-colors transform hover:scale-110 duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[var(--color-purple)] transition-colors transform hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm flex flex-col items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Interactive Explainer.</p>
            <p className="text-xs">Educational purposes only.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
