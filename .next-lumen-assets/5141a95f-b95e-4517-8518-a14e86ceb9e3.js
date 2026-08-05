const FeatureCard = ({ icon: I, title, body, accent }) => (
  <div style={{
    background: 'var(--bg-elevated)',
    border: '1px solid var(--hairline)',
    borderRadius: 16, padding: 28,
    transition: 'all 180ms cubic-bezier(0.2,0,0,1)',
    height: '100%', boxSizing: 'border-box',
  }}>
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: accent ? 'var(--accent)' : 'var(--accent-50)',
      color: accent ? '#fff' : 'var(--accent)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: 20,
    }}>
      <I size={20}/>
    </div>
    <h3 style={{
      fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em',
      margin: '0 0 8px', color: 'var(--fg)',
    }}>{title}</h3>
    <p style={{
      fontSize: 14, lineHeight: 1.6, color: 'var(--fg-muted)', margin: 0,
    }}>{body}</p>
  </div>
);

const FeatureGrid = () => (
  <Section style={{ padding: '64px 32px' }}>
    <div style={{ textAlign: 'center', marginBottom: 56, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
      <Overline>What's inside</Overline>
      <h2 style={{
        fontSize: 44, lineHeight: 1.08, letterSpacing: '-0.025em',
        fontWeight: 700, margin: '12px 0 16px', color: 'var(--fg)',
      }}>One workspace for every<br/>step of the loop.</h2>
      <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0 }}>
        Compose, ship, and measure campaigns in the same place you plan them.
        Lumen replaces the half-dozen tools you bolted together.
      </p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      <FeatureCard icon={Icons.Inbox} title="Composer"
        body="Draft, edit, and schedule across channels with a single canvas. Bring your own assets, or generate fresh copy from a brief."/>
      <FeatureCard icon={Icons.Layers} title="Audiences" accent
        body="Build segments from product events without a SQL editor. Lumen keeps audiences in sync as people behave."/>
      <FeatureCard icon={Icons.Chart} title="Insights"
        body="Cohorts, funnels, and lift studies — built in. Stop bouncing between Looker and your CRM."/>
      <FeatureCard icon={Icons.Zap} title="Automations"
        body="Trigger flows on any product event. Branch, delay, A/B test — without the whiteboard diagrams."/>
      <FeatureCard icon={Icons.Plug} title="Integrations"
        body="40+ connectors across CDPs, warehouses, ESPs, and ad networks. Two-way sync, no glue code."/>
      <FeatureCard icon={Icons.Shield} title="Compliance"
        body="SOC 2 Type II, GDPR, and HIPAA-ready. Granular roles, audit logs, and per-region data residency."/>
    </div>
  </Section>
);

window.FeatureGrid = FeatureGrid;
