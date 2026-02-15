import { motion, useInView } from 'framer-motion';
import { FileCode, Settings, Scroll, Binary } from 'lucide-react';
import { useRef } from 'react';

export default function CompilerPipeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stages = [
    {
      icon: FileCode,
      title: 'Source Code',
      description: 'C, Fortran, Assembly',
      color: 'cyan',
      delay: 0
    },
    {
      icon: Settings,
      title: 'Pre-processor',
      description: 'Macros & Includes',
      color: 'orange',
      delay: 0.3
    },
    {
      icon: Scroll,
      title: 'Assembly',
      description: 'Human-readable ASM',
      color: 'purple',
      delay: 0.6
    },
    {
      icon: Binary,
      title: 'Object File',
      description: 'Machine code (.o)',
      color: 'cyan',
      delay: 0.9
    }
  ];

  const colorMap: Record<string, string> = {
    cyan: 'var(--color-cyan)',
    orange: 'var(--color-orange)',
    purple: 'var(--color-purple)'
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-[var(--color-dark-bg)] py-20 px-6">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--color-cyan)] font-mono text-sm tracking-widest uppercase mb-2 block">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Compiler Pipeline
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From human-readable code to machine-executable instructions. Witness the transformation step by step.
          </p>
        </motion.div>

        {/* Conveyor belt */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-cyan)] via-[var(--color-orange)] to-[var(--color-purple)] opacity-20 -translate-y-1/2 hidden md:block rounded-full"></div>
          
          {/* Animated pulse on the line */}
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-white blur-sm -translate-y-1/2 hidden md:block z-0"
            style={{ width: '100px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)' }}
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Stages */}
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: stage.delay }}
                className="relative group"
              >
                {/* Stage card */}
                <div
                  className="glass-panel p-6 text-center hover:scale-105 transition-all duration-300 h-full flex flex-col items-center rounded-xl border border-[rgba(255,255,255,0.05)] relative overflow-hidden"
                  style={{ 
                    boxShadow: `0 0 0 1px ${colorMap[stage.color]}20` 
                  }}
                >
                  {/* Hover Glow Background */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at center, ${colorMap[stage.color]}, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <motion.div
                    animate={isInView ? {
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{
                      duration: 2,
                      delay: stage.delay + 0.5,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative z-10"
                    style={{
                      backgroundColor: `${colorMap[stage.color]}15`,
                      border: `1px solid ${colorMap[stage.color]}40`,
                      boxShadow: `0 0 15px ${colorMap[stage.color]}20`
                    }}
                  >
                    <stage.icon
                      size={36}
                      style={{ color: colorMap[stage.color] }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3 font-mono relative z-10"
                    style={{ color: colorMap[stage.color] }}
                  >
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-8 relative z-10 leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Step number */}
                  <div className="mt-auto relative z-10">
                    <span 
                      className="text-[10px] font-mono px-2 py-1 rounded border opacity-70"
                      style={{ 
                        color: colorMap[stage.color],
                        borderColor: `${colorMap[stage.color]}40`
                      }}
                    >
                      STEP 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Arrow between stages */}
                {index < stages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 0.5, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: stage.delay + 0.2 }}
                    className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 text-2xl z-20 justify-center w-8"
                    style={{ color: colorMap[stage.color] }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-4 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm">
              <span className="text-[var(--color-cyan)] font-bold">Note:</span> Every source file goes through this pipeline independently. The compiler transforms high-level code into machine-readable object files, ready for the linker to combine.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
