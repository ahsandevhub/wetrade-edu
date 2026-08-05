// Shared icons + small primitives. Exported to window so other JSX files can use them.
// All icons are Lucide-style: 24x24 viewBox, 1.7 stroke.

const Icon = ({ children, size = 18, stroke = 1.7, style }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
       stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round" style={style}>{children}</svg>
);

const Icons = {
  Arrow: (p) => <Icon {...p}><path d="M5 12h14M13 5l7 7-7 7"/></Icon>,
  ArrowLeft: (p) => <Icon {...p}><path d="M19 12H5M12 19l-7-7 7-7"/></Icon>,
  Check: (p) => <Icon {...p}><path d="m4 12 6 6L20 6"/></Icon>,
  CheckCircle: (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></Icon>,
  Zap: (p) => <Icon {...p}><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>,
  Layers: (p) => <Icon {...p}><path d="m12 2 10 6-10 6L2 8z"/><path d="m2 14 10 6 10-6"/><path d="m2 11 10 6 10-6"/></Icon>,
  Globe: (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></Icon>,
  Sparkles: (p) => <Icon {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6 8.5 8.5M15.5 15.5l2.9 2.9M5.6 18.4 8.5 15.5M15.5 8.5l2.9-2.9"/></Icon>,
  Inbox: (p) => <Icon {...p}><path d="M21 8 18 4H6L3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path d="M3 8h6l1 3h4l1-3h6"/></Icon>,
  Shield: (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Icon>,
  Chart: (p) => <Icon {...p}><path d="M3 3v18h18"/><path d="m7 14 4-4 4 4 5-7"/></Icon>,
  Plug: (p) => <Icon {...p}><path d="M9 2v6M15 2v6M5 8h14v3a7 7 0 0 1-14 0z"/><path d="M12 18v4"/></Icon>,
  Menu: (p) => <Icon {...p}><path d="M3 6h18M3 12h18M3 18h18"/></Icon>,
  X: (p) => <Icon {...p}><path d="M19 6 6 19M6 6l13 13"/></Icon>,
  ChevronDown: (p) => <Icon {...p}><path d="m6 9 6 6 6-6"/></Icon>,
  Grid: (p) => <Icon {...p}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></Icon>,
  Bell: (p) => <Icon {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></Icon>,
  Search: (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></Icon>,
  Settings: (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></Icon>,
  Users: (p) => <Icon {...p}><path d="M16 19a4 4 0 0 0-8 0"/><circle cx="12" cy="9" r="3.2"/><path d="M21 19a3.5 3.5 0 0 0-4-3.4"/><path d="M3 19a3.5 3.5 0 0 1 4-3.4"/><circle cx="18" cy="9" r="2.4"/><circle cx="6" cy="9" r="2.4"/></Icon>,
  Plus: (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  Dots: (p) => <Icon {...p}><circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/></Icon>,
  Calendar: (p) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></Icon>,
  ArrowUpRight: (p) => <Icon {...p}><path d="M7 17 17 7M8 7h9v9"/></Icon>,
  Mail: (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Icon>,
  Lock: (p) => <Icon {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></Icon>,
  Eye: (p) => <Icon {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></Icon>,
  LogOut: (p) => <Icon {...p}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></Icon>,
};

const Logo = ({ size = 22, color = "#1A1A17", accent = "#2C5FFF", withWordmark = true }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', color }}>
    <svg viewBox="0 0 32 32" width={size} height={size}>
      <rect x="2" y="2" width="28" height="28" rx="7" fill="none" stroke={accent} strokeWidth="2.4"/>
      <circle cx="22" cy="11" r="4.5" fill={accent}/>
    </svg>
    {withWordmark && <span>Lumen</span>}
  </span>
);

const Button = ({ variant = 'primary', size = 'md', children, onClick, icon, iconAfter, style }) => {
  const base = {
    fontFamily: 'var(--font-sans)', fontWeight: 600, cursor: 'pointer',
    border: '1px solid transparent', display: 'inline-flex', alignItems: 'center', gap: 8,
    transition: 'all 180ms cubic-bezier(0.2,0,0,1)', whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 13, borderRadius: 6 },
    md: { padding: '10px 18px', fontSize: 14, borderRadius: 10 },
    lg: { padding: '14px 24px', fontSize: 15, borderRadius: 12 },
  };
  const variants = {
    primary:   { background: 'var(--accent)', color: '#fff', boxShadow: '0 1px 0 rgba(255,255,255,0.15) inset, 0 1px 2px rgba(11,11,10,0.08)' },
    secondary: { background: 'var(--bg-elevated)', color: 'var(--fg)', borderColor: 'var(--border)' },
    ghost:     { background: 'transparent', color: 'var(--fg)' },
    link:      { background: 'transparent', color: 'var(--accent)', padding: '10px 4px' },
    onAccent:  { background: '#fff', color: 'var(--accent-700)' },
  };
  return (
    <button onClick={onClick} style={{ ...base, ...sizes[size], ...variants[variant], ...style }}>
      {icon}
      {children}
      {iconAfter}
    </button>
  );
};

const Badge = ({ tone = 'accent', children, dot, style }) => {
  const tones = {
    accent:  { bg: 'var(--accent-50)',   fg: 'var(--accent-700)'  },
    neutral: { bg: 'var(--ink-100)',     fg: 'var(--ink-700)'     },
    success: { bg: 'var(--success-100)', fg: 'var(--success-500)' },
    warning: { bg: 'var(--warning-100)', fg: 'var(--warning-500)' },
    danger:  { bg: 'var(--danger-100)',  fg: 'var(--danger-500)'  },
    outline: { bg: 'transparent',        fg: 'var(--fg)', border: '1px solid var(--border)' },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 9999,
      fontSize: 12, fontWeight: 600, lineHeight: 1.4,
      background: t.bg, color: t.fg, border: t.border || '1px solid transparent',
      ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 9999, background: 'currentColor' }}/>}
      {children}
    </span>
  );
};

const Section = ({ children, style, narrow }) => (
  <section style={{
    padding: '96px 32px', maxWidth: narrow ? 880 : 1200,
    margin: '0 auto', width: '100%', boxSizing: 'border-box',
    ...style,
  }}>{children}</section>
);

const Overline = ({ children, color }) => (
  <div style={{
    fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
    fontWeight: 600, color: color || 'var(--accent)',
    fontFamily: 'var(--font-sans)',
  }}>{children}</div>
);

Object.assign(window, { Icon, Icons, Logo, Button, Badge, Section, Overline });
