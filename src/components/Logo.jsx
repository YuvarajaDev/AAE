export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Arasamaram Aalamaram Enterprises logo"
    >
      <rect x="1" y="1" width="98" height="98" rx="16" fill="#f8ecdc" stroke="#3f5a3f" strokeWidth="1.5" />
      <circle cx="50" cy="18" r="2.6" fill="#d97b4f" />
      <line x1="50" y1="22" x2="50" y2="30" stroke="#3f5a3f" strokeWidth="1.4" />
      <path
        d="M50 28 L74 70 L26 70 Z"
        fill="none"
        stroke="#3f5a3f"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M50 42 L64 66 L36 66 Z"
        fill="none"
        stroke="#d97b4f"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <line x1="26" y1="70" x2="74" y2="70" stroke="#3f5a3f" strokeWidth="2.2" />
      <ellipse cx="50" cy="80" rx="22" ry="6" fill="none" stroke="#3f5a3f" strokeWidth="1.6" />
      <text
        x="50"
        y="63"
        textAnchor="middle"
        fontSize="20"
        fill="#3f5a3f"
        fontFamily="'Noto Sans Tamil', sans-serif"
      >
        அ
      </text>
    </svg>
  )
}
