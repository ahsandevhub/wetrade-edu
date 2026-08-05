const CTA = ({ onCta }) => (
  <Section style={{ padding: '32px 32px 96px' }}>
    <div style={{
      background: 'var(--ink-800)', borderRadius: 24, padding: '72px 56px',
      color: '#F4F4EF', position: 'relative', overflow: 'hidden',
    }}>
      {/* decorative grid */}
      <svg viewBox="0 0 800 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.2, pointerEvents: 'none' }}>
        <defs>
          <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#5A75FF"/>
          </pattern>
        </defs>
        <rect width="800" height="400" fill="url(#dots)"/>
      </svg>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <Overline color="#8499FF">Ready to ship?</Overline>
          <h2 style={{
            fontSize: 48, lineHeight: 1.05, letterSpacing: '-0.03em',
            fontWeight: 700, margin: '14px 0 16px', color: '#F4F4EF',
          }}>
            Try Lumen free for 14 days.
          </h2>
          <p style={{ fontSize: 17, color: '#A6A6A0', margin: 0, maxWidth: 480 }}>
            Spin up a workspace, connect your data, and ship your first campaign before lunch.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <Button variant="onAccent" size="lg" onClick={onCta}
                  iconAfter={<Icons.Arrow size={14}/>}
                  style={{ background: '#fff', color: 'var(--accent-700)' }}>
            Start free trial
          </Button>
          <Button variant="ghost" size="lg" style={{ color: '#F4F4EF' }}>Book a demo →</Button>
        </div>
      </div>
    </div>
  </Section>
);

window.CTA = CTA;
