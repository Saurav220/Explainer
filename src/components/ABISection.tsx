import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export default function ABISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isCompatible, setIsCompatible] = useState(true);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-[var(--color-dark-bg)] py-20 px-6">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-orange)] font-mono text-sm tracking-widest uppercase mb-2 block">Stage 4: Interoperability</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The ABI Contract
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 max-w-2xl mx-auto"
          >
            How different languages speak the same binary language.
          </motion.p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-6 mb-16 bg-[rgba(255,255,255,0.03)] p-4 rounded-full border border-[rgba(255,255,255,0.05)] w-fit mx-auto backdrop-blur-sm">
          <span className={`text-sm md:text-base font-semibold transition-colors ${!isCompatible ? 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'text-gray-500'}`}>
            MISMATCH
          </span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCompatible(!isCompatible)}
            className="relative w-16 h-8 rounded-full bg-[var(--color-gray-dark)] border border-gray-600 cursor-pointer shadow-inner"
            style={{
              borderColor: isCompatible ? '#4ade80' : '#ef4444'
            }}
          >
            <motion.div
              animate={{ x: isCompatible ? 32 : 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-6 h-6 rounded-full"
              style={{
                background: isCompatible ? '#4ade80' : '#ef4444',
                boxShadow: isCompatible ? '0 0 15px #4ade80' : '0 0 15px #ef4444'
              }}
            />
          </motion.button>
          <span className={`text-sm md:text-base font-semibold transition-colors ${isCompatible ? 'text-green-500 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'text-gray-500'}`}>
            COMPATIBLE
          </span>
        </div>

        {/* Gears visualization */}
        <div className="relative h-80 flex items-center justify-center mb-12">
          <svg width="600" height="320" viewBox="0 0 600 320" className="w-full max-w-2xl overflow-visible">
            <defs>
              <filter id="gearGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting Belt/Chain (implies interaction) */}
            <path 
              d="M 180 160 L 420 160" 
              stroke={isCompatible ? "url(#gearGradient)" : "#333"}
              strokeWidth="4"
              strokeDasharray="10,5"
              opacity="0.3"
            >
               <animate attributeName="stroke-dashoffset" from="0" to="15" dur="1s" repeatCount="indefinite" />
            </path>

             <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-cyan)" />
                <stop offset="100%" stopColor="var(--color-purple)" />
              </linearGradient>

            {/* Left gear - Language A */}
            <g transform="translate(180, 160)">
              <motion.g
                animate={isCompatible ? {
                  rotate: 360
                } : {
                  rotate: [0, 5, -5, 5, 0]
                }}
                transition={isCompatible ? {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                } : {
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut"
                }}
              >
                {/* Gear teeth */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * Math.PI / 180;
                  const x = Math.cos(angle) * 70;
                  const y = Math.sin(angle) * 70;
                  return (
                    <rect
                      key={i}
                      x={x - 6}
                      y={y - 10}
                      width="12"
                      height="20"
                      transform={`rotate(${i * 30} ${x} ${y})`}
                      fill={isCompatible ? 'var(--color-cyan)' : '#ef4444'}
                      opacity="0.8"
                    />
                  );
                })}
                {/* Gear body */}
                <circle
                  r="64"
                  fill="transparent"
                  stroke={isCompatible ? 'var(--color-cyan)' : '#ef4444'}
                  strokeWidth="4"
                  filter="url(#gearGlow)"
                />
                 <circle
                  r="50"
                  fill={isCompatible ? 'var(--color-cyan)' : '#ef4444'}
                  fillOpacity="0.1"
                />
                 {/* Spokes */}
                 {[...Array(4)].map((_, i) => (
                    <rect 
                        key={i}
                        x="-4" y="-60" width="8" height="120"
                        fill={isCompatible ? 'var(--color-cyan)' : '#ef4444'}
                        opacity="0.3"
                        transform={`rotate(${i * 45})`}
                    />
                 ))}
              </motion.g>
              {/* Label */}
              <text
                y="5"
                textAnchor="middle"
                fill={isCompatible ? 'var(--color-cyan)' : '#ef4444'}
                fontSize="14"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="700"
                style={{ textShadow: isCompatible ? "0 0 10px var(--color-cyan)" : "none" }}
              >
                C Lang
              </text>
            </g>

            {/* Right gear - Language B */}
            <g transform="translate(420, 160)">
              <motion.g
                animate={isCompatible ? {
                  rotate: -360
                } : {
                  rotate: [0, -5, 5, -5, 0]
                }}
                transition={isCompatible ? {
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                } : {
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                   ease: "easeInOut"
                }}
              >
                {/* Gear teeth */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * Math.PI / 180;
                  const x = Math.cos(angle) * 70;
                  const y = Math.sin(angle) * 70;
                  return (
                    <rect
                      key={i}
                      x={x - 6}
                      y={y - 10}
                      width="12"
                      height="20"
                      transform={`rotate(${i * 30} ${x} ${y})`}
                      fill={isCompatible ? 'var(--color-purple)' : '#ef4444'}
                      opacity="0.8"
                    />
                  );
                })}
                {/* Gear body */}
                <circle
                  r="64"
                  fill="transparent"
                  stroke={isCompatible ? 'var(--color-purple)' : '#ef4444'}
                  strokeWidth="4"
                  filter="url(#gearGlow)"
                />
                 <circle
                  r="50"
                  fill={isCompatible ? 'var(--color-purple)' : '#ef4444'}
                  fillOpacity="0.1"
                />
                {/* Spokes */}
                 {[...Array(4)].map((_, i) => (
                    <rect 
                        key={i}
                        x="-4" y="-60" width="8" height="120"
                        fill={isCompatible ? 'var(--color-purple)' : '#ef4444'}
                        opacity="0.3"
                        transform={`rotate(${i * 45})`}
                    />
                 ))}
              </motion.g>
              {/* Label */}
              <text
                y="5"
                textAnchor="middle"
                fill={isCompatible ? 'var(--color-purple)' : '#ef4444'}
                fontSize="14"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="700"
                style={{ textShadow: isCompatible ? "0 0 10px var(--color-purple)" : "none" }}
              >
                Fortran
              </text>
            </g>

            {/* Sparks for mismatch */}
            {!isCompatible && (
               <g transform="translate(300, 160)">
                  {[...Array(8)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1="0" y1="0" x2="20" y2="0"
                        stroke="#ef4444" strokeWidth="2"
                        transform={`rotate(${i * 45})`}
                        initial={{ opacity: 0, x2: 10 }}
                        animate={{ opacity: [0, 1, 0], x2: [10, 40] }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: Math.random() * 0.2 }}
                    />
                  ))}
                  <motion.circle 
                    r="20" fill="#ef4444" opacity="0.5"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
               </g>
            )}
          </svg>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div
            className="glass-panel rounded-xl p-8 max-w-3xl mx-auto border border-[rgba(255,255,255,0.05)] text-left relative overflow-hidden"
            style={{ 
                borderColor: isCompatible ? 'rgba(74, 222, 128, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                background: isCompatible ? 'rgba(74, 222, 128, 0.05)' : 'rgba(239, 68, 68, 0.05)'
            }}
          >
            <h3
              className="text-xl font-bold mb-4 flex items-center gap-3"
              style={{ color: isCompatible ? '#4ade80' : '#ef4444' }}
            >
              {isCompatible ? (
                <>
                  <CheckCircle size={24} />
                  ABI Compatible
                </>
              ) : (
                <>
                  <AlertTriangle size={24} />
                  ABI Mismatch
                </>
              )}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {isCompatible
                ? 'When all languages follow the same ABI (Application Binary Interface), they agree on how to pass arguments (e.g., in registers RDI, RSI), how to return values (RAX), and how to align data structures. This allows C code to call Fortran functions as if they were written in C.'
                : 'Without a shared ABI, it\'s chaos. C expects arguments in registers, but the other language might put them on the stack. Return addresses get overwritten, data is misread, and the program crashes instantly (Segmentation Fault).'}
            </p>
            
            {isCompatible && (
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[rgba(255,255,255,0.1)]">
                <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                  <span className="text-green-500">✓</span> Calling Convention (System V AMD64)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                  <span className="text-green-500">✓</span> Data Type Sizes (int=32b)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                  <span className="text-green-500">✓</span> Stack Alignment (16-byte)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                  <span className="text-green-500">✓</span> Name Mangling Rules
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
