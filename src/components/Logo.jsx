export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Arasamaram Aalamaram Enterprises — A Symbol of Trust, Strength & Growth"
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="#c9a03f" strokeWidth="1" opacity="0.5" />
      <circle cx="50" cy="50" r="45" fill="#0e1b30" stroke="#c9a03f" strokeWidth="2.2" />

      <circle cx="50" cy="8.5" r="1.6" fill="#c9a03f" />
      <line x1="50" y1="10.5" x2="50" y2="15" stroke="#c9a03f" strokeWidth="1.3" />

      <path
        d="M50 14 L64 42 L36 42 Z"
        fill="none"
        stroke="#c9a03f"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      <line x1="34" y1="44" x2="66" y2="44" stroke="#c9a03f" strokeWidth="2.6" strokeLinecap="round" />

      <circle cx="50" cy="29" r="8.5" fill="#0e1b30" stroke="#c9a03f" strokeWidth="1.5" />
      <text
        x="50"
        y="32.5"
        textAnchor="middle"
        fontSize="9"
        fill="#c9a03f"
        fontFamily="'Noto Sans Tamil', sans-serif"
      >
        அ
      </text>

      <text
        x="50"
        y="59"
        textAnchor="middle"
        fontSize="6.2"
        fontWeight="600"
        letterSpacing="0.2"
        fill="#c9a03f"
        fontFamily="'Poppins', sans-serif"
      >
        ARASAMARAM AALAMARAM
      </text>
      <text
        x="50"
        y="66"
        textAnchor="middle"
        fontSize="6.2"
        fontWeight="600"
        letterSpacing="0.5"
        fill="#c9a03f"
        fontFamily="'Poppins', sans-serif"
      >
        ENTERPRISES
      </text>

      <text
        x="50"
        y="75"
        textAnchor="middle"
        fontSize="4.6"
        fill="#e3c877"
        fontFamily="'Poppins', sans-serif"
      >
        A SYMBOL OF TRUST,
      </text>
      <text
        x="50"
        y="81"
        textAnchor="middle"
        fontSize="4.6"
        fill="#e3c877"
        fontFamily="'Poppins', sans-serif"
      >
        STRENGTH &amp; GROWTH
      </text>
    </svg>
  )
}
