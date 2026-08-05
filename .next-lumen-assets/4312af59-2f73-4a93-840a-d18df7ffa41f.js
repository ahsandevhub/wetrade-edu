const Header = ({ current, onNav, dark }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const fg = dark ? '#F4F4EF' : '#1A1A17';
  const fgMuted = dark ? '#A6A6A0' : '#6E6E66';
  const border = dark ? '#25252C' : 'var(--hairline)';
  const bg = dark ? 'rgba(11,11,14,0.7)' : 'rgba(250,250,247,0.75)';
  const accent = dark ? '#5A75FF' : '#2C5FFF';
  const items = [
    { id: 'product',   label: 'Product' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'pricing',   label: 'Pricing' },
    { id: 'customers', label: 'Customers' },
    { id: 'about',     label: 'About' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: bg, backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      borderBottom: `1px solid ${border}`,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          <a onClick={() => onNav('landing')} style={{ cursor: 'pointer', display: 'inline-flex' }}>
            <Logo color={fg} accent={accent}/>
          </a>
          <nav style={{ display: 'flex', gap: 24 }} className="header-nav">
            {items.map(it => (
              <a key={it.id}
                 onClick={() => onNav(it.id)}
                 style={{
                   fontSize: 14, fontWeight: 500, cursor: 'pointer',
                   color: current === it.id ? fg : fgMuted,
                   transition: 'color 120ms',
                 }}>{it.label}</a>
            ))}
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Button variant="ghost" size="sm" style={{ color: fg }} onClick={() => onNav('signin')}>Sign in</Button>
          <Button variant="primary" size="sm" onClick={() => onNav('signup')}
                  style={{ background: accent }}>Start free trial</Button>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
