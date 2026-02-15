import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-dark-bg)] relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-dark-bg)_80%)] z-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--color-gray-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-gray-light) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-mono text-[var(--color-cyan)] border border-[var(--color-cyan)] rounded-full bg-[rgba(0,240,255,0.1)] backdrop-blur-sm">
            SYSTEMS PROGRAMMING EXPLAINED
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">
            From Code to <br />
            <span className="bg-gradient-to-r from-[var(--color-cyan)] via-[var(--color-purple)] to-[var(--color-orange)] bg-clip-text text-transparent inline-block pb-2">
              Executable
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            An interactive journey through compilation, linking, and the hidden magic that unifies C, Fortran, and Assembly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: IPC - Separate Processes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-purple)] rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>
            <div className="relative glass-panel rounded-xl p-8 border border-[rgba(255,255,255,0.05)] h-full">
              <h3 className="text-2xl font-semibold mb-8 text-center text-[var(--color-cyan)] flex items-center justify-center gap-3">
                <span className="text-red-500 text-lg">✕</span> The Old Way (IPC)
              </h3>
              
              <div className="relative h-48 flex items-center justify-between px-4">
                {/* Process A */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 15px rgba(0, 240, 255, 0.2)',
                      '0 0 25px rgba(0, 240, 255, 0.5)',
                      '0 0 15px rgba(0, 240, 255, 0.2)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-28 h-28 bg-[var(--color-gray-dark)] border border-[var(--color-cyan)] rounded-xl flex flex-col items-center justify-center shadow-lg z-10"
                >
                  <span className="font-mono text-xs text-[var(--color-cyan)] mb-1">PID 101</span>
                  <span className="font-bold text-white">Process A</span>
                </motion.div>

                {/* Connecting line with animated data packets */}
                <div className="flex-1 mx-4 relative h-1 bg-[var(--color-gray-light)] rounded-full overflow-hidden">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-full bg-[var(--color-cyan)] rounded-full blur-[2px]"
                      animate={{
                        left: ['-20%', '120%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.6,
                        ease: "linear"
                      }}
                    />
                  ))}
                </div>

                {/* Process B */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 15px rgba(0, 240, 255, 0.2)',
                      '0 0 25px rgba(0, 240, 255, 0.5)',
                      '0 0 15px rgba(0, 240, 255, 0.2)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="w-28 h-28 bg-[var(--color-gray-dark)] border border-[var(--color-cyan)] rounded-xl flex flex-col items-center justify-center shadow-lg z-10"
                >
                  <span className="font-mono text-xs text-[var(--color-cyan)] mb-1">PID 102</span>
                  <span className="font-bold text-white">Process B</span>
                </motion.div>
              </div>
              <p className="text-gray-500 text-center mt-4 text-sm font-mono">
                Context switching overhead detected
              </p>
            </div>
          </motion.div>

          {/* Right: Integrated - Single Executable */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
             <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-orange)] rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>
             <div className="relative glass-panel rounded-xl p-8 border border-[rgba(255,255,255,0.05)] h-full">
              <h3 className="text-2xl font-semibold mb-8 text-center text-[var(--color-purple)] flex items-center justify-center gap-3">
                <span className="text-green-500 text-lg">✓</span> The Integrated Way
              </h3>
              
              <div className="relative h-48 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Outer glow container */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(217, 70, 239, 0.2)',
                        '0 0 40px rgba(217, 70, 239, 0.4)',
                        '0 0 20px rgba(217, 70, 239, 0.2)',
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-4 border border-[var(--color-purple)] rounded-2xl bg-[rgba(217,70,239,0.03)]"
                  />

                  {/* Language blocks merging */}
                  <motion.div
                    className="absolute z-20 bg-[var(--color-gray-dark)] border border-[var(--color-cyan)] rounded-lg w-20 h-20 flex items-center justify-center shadow-lg"
                    initial={{ x: -80, y: -40, opacity: 0 }}
                    animate={{ x: -10, y: -10, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8, type: "spring" }}
                  >
                    <span className="font-mono font-bold text-[var(--color-cyan)]">C</span>
                  </motion.div>

                  <motion.div
                    className="absolute z-10 bg-[var(--color-gray-dark)] border border-[var(--color-orange)] rounded-lg w-20 h-20 flex items-center justify-center shadow-lg"
                    initial={{ x: 80, y: -40, opacity: 0 }}
                    animate={{ x: 20, y: -10, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.0, type: "spring" }}
                  >
                    <span className="font-mono font-bold text-[var(--color-orange)]">F90</span>
                  </motion.div>

                  <motion.div
                    className="absolute z-30 bg-[var(--color-gray-dark)] border border-[var(--color-purple)] rounded-lg w-20 h-20 flex items-center justify-center shadow-lg"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 20, x: 5, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2, type: "spring" }}
                  >
                    <span className="font-mono font-bold text-[var(--color-purple)]">ASM</span>
                  </motion.div>

                </div>
              </div>
              <p className="text-gray-500 text-center mt-4 text-sm font-mono">
                Single address space. Zero overhead.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-2 cursor-pointer hover:text-[var(--color-cyan)] transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-mono">Start Compilation</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </motion.div>
      </div>
    </section>  );
}
