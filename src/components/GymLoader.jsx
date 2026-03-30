export default function GymLoader({ size = 90 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <style>{`
        @keyframes carry-plate-2 {
          0%, 18% { transform: translateX(55px); opacity: 0; }
          30% { transform: translateX(20px); opacity: 1; }
          42%, 100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes carry-plate-3 {
          0%, 53% { transform: translateX(55px); opacity: 0; }
          65% { transform: translateX(20px); opacity: 1; }
          77%, 100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-reset {
          0%, 88% { opacity: 1; }
          95% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes hand-top-carry {
          0%, 8% { transform: translate(55px, -6px); }
          18% { transform: translate(30px, -10px); }
          30% { transform: translate(8px, -6px); }
          38% { transform: translate(8px, -14px); }
          42% { transform: translate(30px, -16px); }
          50%, 53% { transform: translate(55px, -6px); }
          55% { transform: translate(30px, -10px); }
          65% { transform: translate(8px, -6px); }
          73% { transform: translate(8px, -14px); }
          77% { transform: translate(30px, -16px); }
          85%, 100% { transform: translate(55px, -6px); }
        }
        @keyframes hand-bot-carry {
          0%, 8% { transform: translate(55px, 6px); }
          18% { transform: translate(30px, 10px); }
          30% { transform: translate(8px, 6px); }
          38% { transform: translate(8px, 14px); }
          42% { transform: translate(30px, 16px); }
          50%, 53% { transform: translate(55px, 6px); }
          55% { transform: translate(30px, 10px); }
          65% { transform: translate(8px, 6px); }
          73% { transform: translate(8px, 14px); }
          77% { transform: translate(30px, 16px); }
          85%, 100% { transform: translate(55px, 6px); }
        }
        .ldr-p2 {
          animation: carry-plate-2 4s ease-in-out infinite, fade-reset 4s ease infinite;
        }
        .ldr-p3 {
          animation: carry-plate-3 4s ease-in-out infinite, fade-reset 4s ease infinite;
        }
        .ldr-ht {
          animation: hand-top-carry 4s ease-in-out infinite;
        }
        .ldr-hb {
          animation: hand-bot-carry 4s ease-in-out infinite;
        }
      `}</style>
      <svg viewBox="-5 5 170 90" width={size * 1.8} height={size} overflow="visible" aria-hidden="true">

        {/* === Barbell === */}
        <rect x="0" y="47" width="95" height="6" rx="3" fill="#666" />
        <rect x="-2" y="41" width="10" height="18" rx="4" fill="#888" />
        <rect x="8" y="43" width="5" height="14" rx="2" fill="#555" />
        <rect x="13" y="44" width="4" height="12" rx="1.5" fill="#999" />
        <rect x="17" y="48" width="78" height="2" rx="1" fill="#888" opacity="0.5" />

        {/* === Plate 1 — static === */}
        <g>
          <rect x="19" y="24" width="10" height="52" rx="4" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="0.8" />
          <rect x="21.5" y="28" width="5" height="44" rx="2" fill="#2a2a2a" />
          <rect x="23" y="46" width="2" height="8" rx="1" fill="#3a3a3a" opacity="0.6" />
        </g>

        {/* === Plate 2 === */}
        <g className="ldr-p2">
          <rect x="31" y="20" width="10" height="60" rx="4" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="0.8" />
          <rect x="33.5" y="24" width="5" height="52" rx="2" fill="#2a2a2a" />
          <rect x="35" y="46" width="2" height="8" rx="1" fill="#3a3a3a" opacity="0.6" />
        </g>

        {/* === Plate 3 === */}
        <g className="ldr-p3">
          <rect x="43" y="16" width="10" height="68" rx="4" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="0.8" />
          <rect x="45.5" y="20" width="5" height="60" rx="2" fill="#2a2a2a" />
          <rect x="47" y="46" width="2" height="8" rx="1" fill="#3a3a3a" opacity="0.6" />
        </g>

        {/* === Top arm — muscular === */}
        <g className="ldr-ht">
          {/* Upper arm / bicep - thick and bulging */}
          <path d="M140 24 C136 16, 124 10, 110 14 L88 22 C84 24, 84 30, 88 31 L110 32 C124 32, 136 30, 140 24Z"
            fill="#FFBD4F" />
          {/* Bicep peak */}
          <ellipse cx="116" cy="20" rx="10" ry="6" fill="#E8A230" opacity="0.5" />
          {/* Bicep highlight */}
          <ellipse cx="118" cy="18" rx="6" ry="3" fill="#FFD080" opacity="0.3" />
          {/* Tricep shadow */}
          <ellipse cx="114" cy="28" rx="8" ry="3" fill="#C4850A" opacity="0.3" />
          {/* Deltoid cap */}
          <ellipse cx="138" cy="24" rx="6" ry="8" fill="#FFBD4F" />
          <ellipse cx="139" cy="22" rx="4" ry="5" fill="#E8A230" opacity="0.3" />

          {/* Forearm - thick with muscle definition */}
          <path d="M88 22 C82 20, 74 22, 66 28 L58 33 C56 35, 56 38, 58 38 L68 36 C76 33, 84 30, 88 31Z"
            fill="#FFBD4F" />
          {/* Brachioradialis muscle */}
          <ellipse cx="78" cy="26" rx="7" ry="4" fill="#E8A230" opacity="0.35" />
          {/* Forearm vein */}
          <path d="M92 24 C86 23, 78 25, 70 30" fill="none" stroke="#E8A230" strokeWidth="0.6" opacity="0.4" />
          {/* Extensor bulk */}
          <ellipse cx="72" cy="30" rx="5" ry="3" fill="#E8A230" opacity="0.25" />

          {/* Wrist */}
          <rect x="56" y="32" width="7" height="8" rx="3" fill="#E8A230" />
          {/* Hand wrapping plate */}
          <path d="M54 34 C52 33, 50 35, 50 37 L50 41 C50 43, 52 44, 54 43 L58 41 C60 40, 60 36, 58 35Z"
            fill="#FFBD4F" />
          {/* Fingers */}
          <rect x="50" y="37" width="3" height="7" rx="1.5" fill="#E8A230" />
          <rect x="53" y="36.5" width="3" height="7.5" rx="1.5" fill="#E8A230" />
          {/* Thumb */}
          <ellipse cx="58" cy="37" rx="2.5" ry="2" fill="#FFBD4F" />
        </g>

        {/* === Bottom arm — muscular (mirrored) === */}
        <g className="ldr-hb">
          {/* Upper arm / bicep */}
          <path d="M140 76 C136 84, 124 90, 110 86 L88 78 C84 76, 84 70, 88 69 L110 68 C124 68, 136 70, 140 76Z"
            fill="#FFBD4F" />
          {/* Bicep peak */}
          <ellipse cx="116" cy="80" rx="10" ry="6" fill="#E8A230" opacity="0.5" />
          {/* Bicep highlight */}
          <ellipse cx="118" cy="82" rx="6" ry="3" fill="#FFD080" opacity="0.3" />
          {/* Tricep shadow */}
          <ellipse cx="114" cy="72" rx="8" ry="3" fill="#C4850A" opacity="0.3" />
          {/* Deltoid cap */}
          <ellipse cx="138" cy="76" rx="6" ry="8" fill="#FFBD4F" />
          <ellipse cx="139" cy="78" rx="4" ry="5" fill="#E8A230" opacity="0.3" />

          {/* Forearm */}
          <path d="M88 78 C82 80, 74 78, 66 72 L58 67 C56 65, 56 62, 58 62 L68 64 C76 67, 84 70, 88 69Z"
            fill="#FFBD4F" />
          {/* Brachioradialis */}
          <ellipse cx="78" cy="74" rx="7" ry="4" fill="#E8A230" opacity="0.35" />
          {/* Forearm vein */}
          <path d="M92 76 C86 77, 78 75, 70 70" fill="none" stroke="#E8A230" strokeWidth="0.6" opacity="0.4" />
          {/* Extensor bulk */}
          <ellipse cx="72" cy="70" rx="5" ry="3" fill="#E8A230" opacity="0.25" />

          {/* Wrist */}
          <rect x="56" y="60" width="7" height="8" rx="3" fill="#E8A230" />
          {/* Hand wrapping plate */}
          <path d="M54 66 C52 67, 50 65, 50 63 L50 59 C50 57, 52 56, 54 57 L58 59 C60 60, 60 64, 58 65Z"
            fill="#FFBD4F" />
          {/* Fingers */}
          <rect x="50" y="56" width="3" height="7" rx="1.5" fill="#E8A230" />
          <rect x="53" y="56.5" width="3" height="7.5" rx="1.5" fill="#E8A230" />
          {/* Thumb */}
          <ellipse cx="58" cy="63" rx="2.5" ry="2" fill="#FFBD4F" />
        </g>
      </svg>
      <div style={{ fontSize: 15, color: '#bbb' }}>Cargando...</div>
    </div>
  )
}

/* ===================================================================
 * ANIMACIONES ANTERIORES — comentadas para uso futuro
 * ver git history para el código completo de v1 (bicep curl) y v2 (discos verdes)
 * =================================================================== */
