export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Arasamaram Aalamaram Enterprises logo"
    >
      <rect x="1" y="1" width="98" height="98" rx="10" fill="#0a0f0d" stroke="#10b981" strokeWidth="1.5" />
      <circle cx="50" cy="18" r="2.6" fill="#10b981" />
      <line x1="50" y1="22" x2="50" y2="30" stroke="#10b981" strokeWidth="1.4" />
      <path
        d="M50 28 L74 70 L26 70 Z"
        fill="none"
        stroke="#10b981"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M50 42 L64 66 L36 66 Z"
        fill="none"
        stroke="#6ee7b7"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <line x1="26" y1="70" x2="74" y2="70" stroke="#10b981" strokeWidth="2.2" />
      <ellipse cx="50" cy="80" rx="22" ry="6" fill="none" stroke="#10b981" strokeWidth="1.6" />
      <text
        x="50"
        y="63"
        textAnchor="middle"
        fontSize="20"
        fill="#10b981"
        fontFamily="'Noto Sans Tamil', sans-serif"
      >
        அ
      </text>
    </svg>
  )
}
