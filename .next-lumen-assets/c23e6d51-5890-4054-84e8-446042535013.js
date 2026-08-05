const Hero = ({ onCta }) => (
  <Section style={{ padding: '88px 32px 64px', textAlign: 'left' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
      <div>
        <Badge tone="accent" style={{ marginBottom: 24 }}>
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>New</span>
          <span style={{ color: 'var(--fg-muted)', fontWeight: 500 }}>·</span>
          Lumen 2.4 — Audiences with AI
          <Icons.Arrow size={12}/>
        </Badge>

        <h1 style={{
          fontSize: 64, lineHeight: 1.04, letterSpacing: '-0.03em',
          fontWeight: 700, margin: '0 0 20px', color: 'var(--fg)',
          textWrap: 'pretty',
        }}>
          Marketing that<br/>moves at the speed<br/>of your product.
        </h1>

        <p style={{
          fontSize: 19, lineHeight: 1.55, color: 'var(--fg-muted)',
          maxWidth: 520, margin: '0 0 32px',
        }}>
          Lumen brings campaigns, audiences, and analytics into a single workspace —
          so your team ships growth without stitching tools together.
        </p>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button variant="primary" size="lg" onClick={onCta}
                  iconAfter={<Icons.Arrow size={14}/>}>Start free trial</Button>
          <Button variant="secondary" size="lg">Book a 20-min demo</Button>
        </div>

        <div style={{ display: 'flex', gap: 18, marginTop: 24, alignItems: 'center', color: 'var(--fg-subtle)', fontSize: 13 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icons.Check size={14} stroke={2.4} style={{ color: 'var(--accent)' }}/>No credit card</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icons.Check size={14} stroke={2.4} style={{ color: 'var(--accent)' }}/>14-day trial</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icons.Check size={14} stroke={2.4} style={{ color: 'var(--accent)' }}/>Cancel anytime</span>
        </div>
      </div>

      {/* Illustration card */}
      <div style={{
        position: 'relative', background: 'var(--bg-elevated)',
        border: '1px solid var(--hairline)', borderRadius: 20,
        padding: 28, boxShadow: 'var(--shadow-lg)',
        aspectRatio: '4 / 3.2',
      }}>
        <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20280%22%20width%3D%22400%22%20height%3D%22280%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%0A%20%20%3C%2Fdefs%3E%0A%20%20%0A%20%20%3Cg%20class%3D%22stroke-soft%22%3E%0A%20%20%20%20%3Cline%20x1%3D%220%22%20y1%3D%2270%22%20x2%3D%22400%22%20y2%3D%2270%22%3E%3C%2Fline%3E%0A%20%20%20%20%3Cline%20x1%3D%220%22%20y1%3D%22140%22%20x2%3D%22400%22%20y2%3D%22140%22%3E%3C%2Fline%3E%0A%20%20%20%20%3Cline%20x1%3D%220%22%20y1%3D%22210%22%20x2%3D%22400%22%20y2%3D%22210%22%3E%3C%2Fline%3E%0A%20%20%3C%2Fg%3E%0A%20%20%0A%20%20%3Cpath%20class%3D%22stroke%22%20d%3D%22M%2050%20210%20C%20110%20210%2C%20110%20140%2C%20170%20140%22%3E%3C%2Fpath%3E%0A%20%20%3Cpath%20class%3D%22stroke%22%20d%3D%22M%20170%20140%20C%20230%20140%2C%20230%2070%2C%20%20290%2070%22%3E%3C%2Fpath%3E%0A%20%20%3Cpath%20class%3D%22stroke%22%20d%3D%22M%20170%20140%20C%20230%20140%2C%20230%20210%2C%20290%20210%22%3E%3C%2Fpath%3E%0A%20%20%3Cpath%20class%3D%22stroke%22%20d%3D%22M%20290%2070%20C%20340%2070%2C%20340%20140%2C%20370%20140%22%3E%3C%2Fpath%3E%0A%20%20%3Cpath%20class%3D%22stroke%22%20d%3D%22M%20290%20210%20C%20340%20210%2C%20340%20140%2C%20370%20140%22%3E%3C%2Fpath%3E%0A%20%20%0A%20%20%3Ccircle%20class%3D%22dot-hollow%22%20cx%3D%2250%22%20cy%3D%22210%22%20r%3D%229%22%3E%3C%2Fcircle%3E%0A%20%20%3Ccircle%20class%3D%22dot%22%20cx%3D%22170%22%20cy%3D%22140%22%20r%3D%229%22%3E%3C%2Fcircle%3E%0A%20%20%3Ccircle%20class%3D%22dot-hollow%22%20cx%3D%22290%22%20cy%3D%2270%22%20r%3D%229%22%3E%3C%2Fcircle%3E%0A%20%20%3Ccircle%20class%3D%22dot-hollow%22%20cx%3D%22290%22%20cy%3D%22210%22%20r%3D%229%22%3E%3C%2Fcircle%3E%0A%20%20%3Ccircle%20class%3D%22dot%22%20cx%3D%22370%22%20cy%3D%22140%22%20r%3D%2211%22%3E%3C%2Fcircle%3E%0A%20%20%0A%20%20%3Cg%20class%3D%22stroke-soft%22%3E%0A%20%20%20%20%3Cline%20x1%3D%2230%22%20y1%3D%22232%22%20x2%3D%2270%22%20y2%3D%22232%22%3E%3C%2Fline%3E%0A%20%20%20%20%3Cline%20x1%3D%22276%22%20y1%3D%2250%22%20x2%3D%22304%22%20y2%3D%2250%22%3E%3C%2Fline%3E%0A%20%20%20%20%3Cline%20x1%3D%22276%22%20y1%3D%22232%22%20x2%3D%22304%22%20y2%3D%22232%22%3E%3C%2Fline%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E" alt=""
             style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
        {/* Floating tag */}
        <div style={{
          position: 'absolute', top: 20, right: 20,
          background: 'var(--bg-elevated)', border: '1px solid var(--hairline)',
          borderRadius: 9999, padding: '6px 12px',
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 12, fontWeight: 600, color: 'var(--fg)',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 9999, background: 'var(--success-500)' }}/>
          Live · 2,148 events / sec
        </div>
        {/* Floating metric */}
        <div style={{
          position: 'absolute', bottom: 20, left: 20,
          background: 'var(--bg-elevated)', border: '1px solid var(--hairline)',
          borderRadius: 12, padding: '12px 14px',
          boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ fontSize: 11, color: 'var(--fg-muted)', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}>Open rate</div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--fg)', lineHeight: 1.1 }}>38.4%</div>
          <div style={{ fontSize: 11, color: 'var(--success-500)', fontWeight: 600, marginTop: 2 }}>↑ 4.2 pts MoM</div>
        </div>
      </div>
    </div>
  </Section>
);

window.Hero = Hero;
