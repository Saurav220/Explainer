import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Package } from 'lucide-react';

export default function LinkerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isStatic, setIsStatic] = useState(true);

  const libraries = [
    { name: 'libc', color: '#00e5ff' },
    { name: 'libm', color: '#ff6d00' },
    { name: 'libpthread', color: '#b388ff' }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-[var(--color-dark-bg)] py-20 px-6">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-purple)] font-mono text-sm tracking-widest uppercase mb-2 block">Stage 3: Linking</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Linker's Job
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your linking strategy. See how it affects the final executable.
          </p>
        </motion.div>

        {/* Toggle switch */}
        <div className="flex items-center justify-center gap-6 mb-16 bg-[rgba(255,255,255,0.03)] p-4 rounded-full border border-[rgba(255,255,255,0.05)] w-fit mx-auto backdrop-blur-sm">
          <span className={`text-sm md:text-base font-semibold transition-colors ${isStatic ? 'text-[var(--color-cyan)] drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]' : 'text-gray-500'}`}>
            STATIC LINKING
          </span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsStatic(!isStatic)}
            className="relative w-16 h-8 rounded-full bg-[var(--color-gray-dark)] border border-gray-600 cursor-pointer shadow-inner"
          >
            <motion.div
              animate={{ x: isStatic ? 2 : 32 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-6 h-6 rounded-full"
              style={{
                background: isStatic ? 'var(--color-cyan)' : 'var(--color-orange)',
                boxShadow: isStatic ? '0 0 15px var(--color-cyan)' : '0 0 15px var(--color-orange)'
              }}
            />
          </motion.button>
          <span className={`text-sm md:text-base font-semibold transition-colors ${!isStatic ? 'text-[var(--color-orange)] drop-shadow-[0_0_8px_rgba(255,109,0,0.5)]' : 'text-gray-500'}`}>
            DYNAMIC LINKING
          </span>
        </div>

        {/* Visualization */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Background Ring */}
          <div className="absolute w-[400px] h-[400px] border border-[rgba(255,255,255,0.05)] rounded-full"></div>
          <div className="absolute w-[300px] h-[300px] border border-[rgba(255,255,255,0.05)] rounded-full border-dashed opacity-50"></div>

          {/* Central executable */}
          <motion.div
            animate={{
              scale: isStatic ? 1.3 : 1,
              boxShadow: isStatic 
                ? '0 0 60px rgba(0, 229, 255, 0.3), inset 0 0 20px rgba(0, 229, 255, 0.1)'
                : '0 0 30px rgba(255, 109, 0, 0.2), inset 0 0 10px rgba(255, 109, 0, 0.1)'
            }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative z-10 w-40 h-40 bg-[var(--color-gray-dark)] rounded-2xl flex flex-col items-center justify-center border-2 backdrop-blur-xl"
            style={{
              borderColor: isStatic ? 'var(--color-cyan)' : 'var(--color-orange)'
            }}
          >
            <Package
              size={48}
              strokeWidth={1.5}
              style={{ color: isStatic ? 'var(--color-cyan)' : 'var(--color-orange)' }}
            />
            <span
              className="mt-3 font-mono font-bold text-lg tracking-tight"
              style={{ color: isStatic ? 'var(--color-cyan)' : 'var(--color-orange)' }}
            >
              a.out
            </span>
            <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">
              {isStatic ? '12.5 MB' : '14 KB'}
            </span>
          </motion.div>

          {/* Libraries */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {libraries.map((lib, index) => {
              const angle = (index * 120) - 90; // Distribute evenly in a circle
              const radius = 220;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div key={index}>
                  {/* Library block */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? {
                      scale: 1,
                      x: isStatic ? 0 : x,
                      y: isStatic ? 0 : y,
                      opacity: isStatic ? 0 : 1 // Hide when static
                    } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      type: "spring"
                    }}
                    className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-[rgba(30,30,42,0.8)] backdrop-blur-md rounded-xl flex flex-col items-center justify-center border border-[rgba(255,255,255,0.1)] shadow-lg"
                    style={{
                      borderColor: lib.color,
                      boxShadow: `0 0 15px ${lib.color}20`
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center mb-1"
                      style={{
                        backgroundColor: `${lib.color}20`
                      }}
                    >
                      <Package size={16} style={{ color: lib.color }} />
                    </div>
                    <span className="font-mono text-[10px] font-bold" style={{ color: lib.color }}>
                      {lib.name}
                    </span>
                    <span className="text-[9px] text-gray-600">.so</span>
                  </motion.div>

                  {/* Connection line (only for dynamic) */}
                  {!isStatic && (
                    <motion.svg
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="absolute top-0 left-0 w-full h-full pointer-events-none"
                      style={{ zIndex: 5 }}
                    >
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke={lib.color}
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                      />
                      {/* Animated dots along the line */}
                      <motion.circle
                        r="3"
                        fill={lib.color}
                        animate={{
                          cx: [`50%`, `calc(50% + ${x}px)`],
                          cy: [`50%`, `calc(50% + ${y}px)`]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                          ease: 'linear'
                        }}
                      />
                    </motion.svg>
                  )}

                  {/* "Welding" effect for static (inside executable) */}
                  {isStatic && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [1, 2, 3],
                        opacity: [0.8, 0.4, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.4)_0%,transparent_70%)] z-0"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-panel rounded-xl p-8 max-w-3xl mx-auto border border-[rgba(255,255,255,0.05)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full transition-colors duration-300" style={{ backgroundColor: isStatic ? 'var(--color-cyan)' : 'var(--color-orange)' }}></div>
            
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3" style={{ color: isStatic ? 'var(--color-cyan)' : 'var(--color-orange)' }}>
              {isStatic ? (
                <>
                  <span className="text-2xl">📦</span> Static Linking Strategy
                </>
              ) : (
                <>
                  <span className="text-2xl">🔗</span> Dynamic Linking Strategy
                </>
              )}
            </h3>
            <p className="text-gray-300 leading-relaxed text-left">
              {isStatic
                ? 'All library code (libc, libm) is copied directly into your final executable at compile time. This makes the file larger (12.5 MB), but creates a "portable tank" that runs anywhere, even if the system lacks those libraries.'
                : 'Libraries remain as separate shared objects (.so / .dll). Your executable is tiny (14 KB) and just points to them. This saves memory and disk space, and allows the OS to patch libraries without you needing to recompile.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
