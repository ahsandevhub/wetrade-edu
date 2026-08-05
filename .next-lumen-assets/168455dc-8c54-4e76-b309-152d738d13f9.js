const Testimonial = () => (
  <Section style={{ padding: '80px 32px' }} narrow>
    <div style={{
      background: 'var(--bg-elevated)', border: '1px solid var(--hairline)',
      borderRadius: 20, padding: '56px 64px', textAlign: 'center',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <Overline>Customer story</Overline>
      <blockquote style={{
        fontSize: 28, lineHeight: 1.35, letterSpacing: '-0.015em',
        fontWeight: 500, color: 'var(--fg)', margin: '20px 0 32px',
        textWrap: 'pretty',
      }}>
        "We replaced four tools with Lumen in a quarter. The team got faster
        because the seams between planning and shipping just disappeared."
      </blockquote>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 9999,
          background: 'var(--accent-100)', color: 'var(--accent-700)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em',
        }}>MR</div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>Maya Reyes</div>
          <div style={{ fontSize: 13, color: 'var(--fg-muted)' }}>VP Growth, Northwind</div>
        </div>
      </div>
    </div>
  </Section>
);

window.Testimonial = Testimonial;
