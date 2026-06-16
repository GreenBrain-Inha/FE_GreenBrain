'use client'

const MAX_TOKENS = 10000

export default function TokenRing({ value }: { value: number }) {
  const r = 52
  const circ = 2 * Math.PI * r
  const pct = Math.max(0, Math.min(1, value / MAX_TOKENS))
  const dash = circ * pct
  const color = value > 6600 ? '#22c55e' : value > 3300 ? '#f59e0b' : '#ef4444'

  return (
    <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
      <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
      <circle
        cx="70" cy="70" r={r} fill="none"
        stroke={color} strokeWidth="8"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 0.2s ease, stroke 0.4s ease' }}
      />
      <g style={{ transform: 'rotate(90deg)', transformOrigin: '70px 70px' }}>
        <text x="70" y="60" textAnchor="middle" fill={color}
          style={{ fontSize: '20px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", transition: 'fill 0.4s' }}>
          {value.toLocaleString()}
        </text>
        <text x="70" y="78" textAnchor="middle" fill="rgba(255,255,255,0.3)"
          style={{ fontSize: '10px', fontFamily: "'Inter', sans-serif" }}>
          / {MAX_TOKENS.toLocaleString()}
        </text>
      </g>
    </svg>
  )
}
