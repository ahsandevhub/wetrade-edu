const LogoCloud = () => {
  const wordmarks = ['NORTHWIND', 'Helix', 'Atlas Labs', 'Cobalt', 'Vela', 'Mercato'];
  return (
    <Section style={{ padding: '32px 32px 64px' }}>
      <div style={{
        textAlign: 'center', fontSize: 12, letterSpacing: '0.12em',
        textTransform: 'uppercase', fontWeight: 600, color: 'var(--fg-subtle)',
        marginBottom: 32,
      }}>
        Trusted by 4,000+ teams shipping product
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
        gap: 24, alignItems: 'center', justifyItems: 'center',
        opacity: 0.65,
      }}>
        {wordmarks.map((w, i) => (
          <div key={i} style={{
            fontFamily: i % 2 ? 'var(--font-mono)' : 'var(--font-sans)',
            fontWeight: i % 3 === 0 ? 800 : 600,
            fontSize: 18, letterSpacing: i % 2 ? '0.02em' : '-0.01em',
            color: 'var(--fg-muted)',
            textTransform: i % 3 === 0 ? 'uppercase' : 'none',
          }}>{w}</div>
        ))}
      </div>
    </Section>
  );
};

window.LogoCloud = LogoCloud;
