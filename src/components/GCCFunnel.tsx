import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function GCCFunnel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const inputBlocks = [
    { lang: 'C', color: '#00e5ff', x: 100, delay: 0 },
    { lang: 'Fortran', color: '#ff6d00', x: 250, delay: 0.2 },
    { lang: 'Assembly', color: '#b388ff', x: 400, delay: 0.4 }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-[var(--color-dark-bg)] py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          GCC: The Universal Compiler
        </motion.h2>

        <div className="relative h-[600px] flex items-center justify-center">
          <svg width="500" height="600" viewBox="0 0 500 600" className="w-full max-w-md">
            {/* Funnel shape */}
            <defs>
              <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--color-cyan)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="var(--color-orange)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="var(--color-purple)" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Funnel outline */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 100 100 L 400 100 L 350 300 L 300 500 L 200 500 L 150 300 Z"
              fill="url(#funnelGradient)"
              stroke="url(#funnelGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              style={{ stroke: 'var(--color-cyan)' }}
            />

            {/* Input blocks at top */}
            {inputBlocks.map((block, index) => (
              <motion.g key={index}>
                <motion.rect
                  initial={{ y: -50, opacity: 0 }}
                  animate={isInView ? {
                    y: [0, 180, 180],
                    opacity: [1, 1, 0]
                  } : {}}
                  transition={{
                    duration: 2,
                    delay: block.delay,
                    times: [0, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  x={block.x}
                  y="20"
                  width="60"
                  height="60"
                  fill={block.color}
                  fillOpacity="0.1"
                  stroke={block.color}
                  strokeWidth="2"
                  rx="8"
                  filter="url(#glow)"
                />
                <motion.text
                  initial={{ y: -50, opacity: 0 }}
                  animate={isInView ? {
                    y: [0, 180, 180],
                    opacity: [1, 1, 0]
                  } : {}}
                  transition={{
                    duration: 2,
                    delay: block.delay,
                    times: [0, 0.7, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  x={block.x + 30}
                  y="55"
                  textAnchor="middle"
                  fill={block.color}
                  fontSize="12"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="600"
                  style={{ textShadow: `0 0 10px ${block.color}` }}
                >
                  {block.lang}
                </motion.text>
              </motion.g>
            ))}

            {/* GCC Core label in middle */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <rect
                x="180"
                y="270"
                width="140"
                height="60"
                fill="rgba(30, 30, 42, 0.8)"
                stroke="var(--color-orange)"
                strokeWidth="2"
                rx="12"
                filter="url(#glow)"
              />
              <text
                x="250"
                y="305"
                textAnchor="middle"
                fill="var(--color-orange)"
                fontSize="18"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="700"
                style={{ textShadow: "0 0 15px var(--color-orange)" }}
              >
                GCC CORE
              </text>
            </motion.g>

            {/* Output blocks at bottom */}
            {[0, 1, 2].map((index) => (
              <motion.g key={index}>
                <motion.rect
                  initial={{ y: 500, opacity: 0 }}
                  animate={isInView ? {
                    y: [500, 520],
                    opacity: [0, 1]
                  } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1.2 + index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  x={170 + index * 55}
                  y="520"
                  width="50"
                  height="50"
                  fill="#333"
                  fillOpacity="0.5"
                  stroke="#666"
                  strokeWidth="2"
                  rx="8"
                />
                <motion.text
                  initial={{ y: 500, opacity: 0 }}
                  animate={isInView ? {
                    y: [500, 520],
                    opacity: [0, 1]
                  } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1.2 + index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  x={195 + index * 55}
                  y="550"
                  textAnchor="middle"
                  fill="#ccc"
                  fontSize="12"
                  fontFamily="JetBrains Mono, monospace"
                >
                  .o
                </motion.text>
              </motion.g>
            ))}
          </svg>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            GCC (GNU Compiler Collection) accepts multiple languages as input. Each goes through language-specific front-ends, then a common middle-end optimizer, and finally produces uniform object files.
          </p>
          <div className="flex justify-center gap-8 mt-6 flex-wrap">
            <div className="text-sm">
              <span className="font-mono text-[var(--color-cyan)]">C</span>
              <span className="text-gray-500"> → .o</span>
            </div>
            <div className="text-sm">
              <span className="font-mono text-[var(--color-orange)]">Fortran</span>
              <span className="text-gray-500"> → .o</span>
            </div>
            <div className="text-sm">
              <span className="font-mono text-[var(--color-purple)]">Assembly</span>
              <span className="text-gray-500"> → .o</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
