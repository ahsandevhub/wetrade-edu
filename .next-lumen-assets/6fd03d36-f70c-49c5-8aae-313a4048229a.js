const PricingCard = ({ name, price, period, blurb, features, cta, featured, onCta }) => (
  <div style={{
    background: featured ? 'var(--bg-elevated)' : 'var(--bg-elevated)',
    border: `${featured ? 2 : 1}px solid ${featured ? 'var(--accent)' : 'var(--hairline)'}`,
    borderRadius: 18, padding: 32,
    position: 'relative',
    boxShadow: featured ? 'var(--shadow-md), 0 0 0 6px var(--accent-50)' : 'var(--shadow-xs)',
    display: 'flex', flexDirection: 'column', gap: 24,
  }}>
    {featured && (
      <div style={{ position: 'absolute', top: -12, left: 32 }}>
        <Badge tone="accent" style={{ background: 'var(--accent)', color: '#fff' }}>Most popular</Badge>
      </div>
    )}
    <div>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)', marginBottom: 4 }}>{name}</div>
      <p style={{ fontSize: 13, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.5 }}>{blurb}</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
      <span style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--fg)', lineHeight: 1 }}>{price}</span>
      <span style={{ fontSize: 14, color: 'var(--fg-muted)' }}>{period}</span>
    </div>
    <Button variant={featured ? 'primary' : 'secondary'} onClick={onCta} style={{ width: '100%', justifyContent: 'center' }}>{cta}</Button>
    <div style={{ height: 1, background: 'var(--hairline)' }}/>
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {features.map((f, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.5, color: 'var(--fg)' }}>
          <Icons.Check size={16} stroke={2.4} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }}/>
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = ({ onCta }) => {
  const [billing, setBilling] = React.useState('annual');
  const m = billing === 'annual';

  return (
    <Section style={{ padding: '64px 32px 96px' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Overline>Pricing</Overline>
        <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.025em', margin: '12px 0 16px', color: 'var(--fg)' }}>
          Simple plans, no surprises.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--fg-muted)', margin: '0 0 28px' }}>
          Start free. Upgrade when you outgrow it. Cancel any time.
        </p>

        {/* Billing toggle */}
        <div style={{
          display: 'inline-flex', padding: 4, background: 'var(--bg-elevated)',
          border: '1px solid var(--hairline)', borderRadius: 9999,
        }}>
          {[['monthly', 'Monthly'], ['annual', 'Annual — save 20%']].map(([id, lbl]) => (
            <button key={id} onClick={() => setBilling(id)} style={{
              padding: '6px 14px', borderRadius: 9999, border: 0,
              background: billing === id ? 'var(--accent)' : 'transparent',
              color: billing === id ? '#fff' : 'var(--fg-muted)',
              fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}>{lbl}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <PricingCard
          name="Starter" price="$0" period="forever, for small teams"
          blurb="Everything you need to ship your first 5 campaigns."
          cta="Start free" onCta={onCta}
          features={['Up to 3 seats', '2,500 monthly contacts', '1 audience source', 'Community support']}/>
        <PricingCard
          featured name="Team" price={m ? '$24' : '$29'} period="/ seat / month"
          blurb="For growing teams running multi-channel programs."
          cta="Start free trial" onCta={onCta}
          features={[
            'Unlimited seats',
            '100k monthly contacts',
            'All channels & audiences',
            'A/B testing & branching',
            'Email & Slack support',
          ]}/>
        <PricingCard
          name="Scale" price="Custom" period="annual"
          blurb="For teams with custom data, security, and compliance needs."
          cta="Contact sales"
          features={[
            'Volume contact pricing',
            'SSO + SCIM',
            'Per-region data residency',
            'Audit logs & dedicated CSM',
            'SOC 2 / HIPAA / GDPR DPA',
          ]}/>
      </div>
    </Section>
  );
};

window.Pricing = Pricing;
window.PricingCard = PricingCard;
