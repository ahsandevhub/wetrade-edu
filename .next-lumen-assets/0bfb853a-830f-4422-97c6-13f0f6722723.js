const Stat = ({ value, label, suffix }) => (
  <div>
    <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--fg)', lineHeight: 1 }}>
      {value}<span style={{ color: 'var(--accent)' }}>{suffix}</span>
    </div>
    <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 8 }}>{label}</div>
  </div>
);

const About = () => (
  <div>
    {/* Hero */}
    <Section style={{ padding: '88px 32px 48px' }} narrow>
      <Overline>About</Overline>
      <h1 style={{
        fontSize: 64, lineHeight: 1.05, letterSpacing: '-0.03em',
        fontWeight: 700, margin: '16px 0 24px', color: 'var(--fg)',
      }}>
        Tools for teams who treat<br/>marketing like product.
      </h1>
      <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--fg-muted)', maxWidth: 720, margin: 0 }}>
        Lumen started in 2023 when a handful of product and growth folks got
        tired of the seam between "what we build" and "how we tell people about it."
        We've been quietly stitching that seam closed ever since.
      </p>
    </Section>

    {/* Stats */}
    <Section style={{ padding: '32px 32px 80px' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        padding: '40px 0', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)',
      }}>
        <Stat value="4,000" suffix="+" label="Teams using Lumen"/>
        <Stat value="38" suffix="%" label="Avg. lift in open rate"/>
        <Stat value="2.4" suffix="B" label="Events processed monthly"/>
        <Stat value="42" label="People on the team"/>
      </div>
    </Section>

    {/* Image + Values */}
    <Section style={{ padding: '0 32px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div style={{
          background: 'var(--accent-50)', borderRadius: 20,
          aspectRatio: '4 / 3', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 32,
        }}>
          <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20280%22%20width%3D%22400%22%20height%3D%22280%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%0A%20%20%3C%2Fdefs%3E%0A%20%20%0A%20%20%3Ccircle%20class%3D%22stroke-soft%22%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%22110%22%3E%3C%2Fcircle%3E%0A%20%20%3Ccircle%20class%3D%22stroke-soft%22%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2280%22%3E%3C%2Fcircle%3E%0A%20%20%3Ccircle%20class%3D%22stroke%20fill-soft%22%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2250%22%3E%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%22200%22%20cy%3D%22140%22%20r%3D%2214%22%20fill%3D%22%232C5FFF%22%3E%3C%2Fcircle%3E%0A%20%20%0A%20%20%3Cline%20class%3D%22stroke%22%20x1%3D%22200%22%20y1%3D%2210%22%20x2%3D%22200%22%20y2%3D%2240%22%3E%3C%2Fline%3E%0A%20%20%3Cline%20class%3D%22stroke%22%20x1%3D%22200%22%20y1%3D%22240%22%20x2%3D%22200%22%20y2%3D%22270%22%3E%3C%2Fline%3E%0A%20%20%3Cline%20class%3D%22stroke%22%20x1%3D%2240%22%20y1%3D%22140%22%20x2%3D%2270%22%20y2%3D%22140%22%3E%3C%2Fline%3E%0A%20%20%3Cline%20class%3D%22stroke%22%20x1%3D%22330%22%20y1%3D%22140%22%20x2%3D%22360%22%20y2%3D%22140%22%3E%3C%2Fline%3E%0A%20%20%3Cline%20class%3D%22stroke%22%20x1%3D%2292%22%20y1%3D%2232%22%20x2%3D%22113%22%20y2%3D%2253%22%3E%3C%2Fline%3E%0A%20%20%3Cline%20class%3D%22stroke%22%20x1%3D%22287%22%20y1%3D%22227%22%20x2%3D%22308%22%20y2%3D%22248%22%3E%3C%2Fline%3E%0A%20%20%3Cline%20class%3D%22stroke%22%20x1%3D%22308%22%20y1%3D%2232%22%20x2%3D%22287%22%20y2%3D%2253%22%3E%3C%2Fline%3E%0A%20%20%3Cline%20class%3D%22stroke%22%20x1%3D%22113%22%20y1%3D%22227%22%20x2%3D%2292%22%20y2%3D%22248%22%3E%3C%2Fline%3E%0A%3C%2Fsvg%3E" alt="" style={{ width: '70%', height: '70%' }}/>
        </div>
        <div>
          <Overline>Our principles</Overline>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.025em', margin: '12px 0 28px', color: 'var(--fg)' }}>
            Boring software, exciting outcomes.
          </h2>
          {[
            ['Default to clarity.', 'Plain words, honest pricing, no dark patterns. If you have to read the help docs to find what you owe us, we built it wrong.'],
            ['Ship the boring path.', "We don't make you implement an SDK to do basic things. The shortest path between intent and outcome wins."],
            ['Respect the operator.', "Every screen in Lumen has to earn its place. We delete more than we build."],
          ].map(([t, b], i) => (
            <div key={i} style={{ marginBottom: 18 }}>
              <h4 style={{ fontSize: 16, fontWeight: 600, color: 'var(--fg)', margin: '0 0 4px' }}>{t}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg-muted)', margin: 0 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </div>
);

window.About = About;
