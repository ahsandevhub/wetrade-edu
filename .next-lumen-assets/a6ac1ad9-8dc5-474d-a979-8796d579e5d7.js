/* ============================================================
   Lumen App — Dashboard (Overview)
   Sidebar + topbar shell, stat cards, performance chart,
   channel breakdown, campaigns table.
   ============================================================ */

/* ---------- Sidebar ---------- */
const SideItem = ({ icon: I, label, active, badge, onClick }) => (
  <a onClick={onClick} style={{
    display: 'flex', alignItems: 'center', gap: 11,
    padding: '8px 10px', borderRadius: 'var(--r-sm)',
    fontSize: 14, fontWeight: active ? 600 : 500, cursor: 'pointer',
    color: active ? 'var(--fg)' : 'var(--fg-muted)',
    background: active ? 'var(--bg-hover)' : 'transparent',
    transition: 'all 120ms cubic-bezier(0.2,0,0,1)',
    position: 'relative',
  }}>
    {active && <span style={{ position: 'absolute', left: -8, top: 8, bottom: 8, width: 3, borderRadius: 9999, background: 'var(--accent)' }}/>}
    <I size={18} style={{ color: active ? 'var(--accent)' : 'var(--fg-subtle)', flex: '0 0 auto' }}/>
    <span style={{ flex: 1 }}>{label}</span>
    {badge && <Badge tone="neutral" style={{ padding: '1px 7px', fontSize: 11 }}>{badge}</Badge>}
  </a>
);

const Sidebar = ({ nav, setNav, onSignOut }) => {
  const items = [
    ['overview', Icons.Grid, 'Overview'],
    ['campaigns', Icons.Inbox, 'Campaigns', '6'],
    ['audiences', Icons.Layers, 'Audiences'],
    ['insights', Icons.Chart, 'Insights'],
    ['automations', Icons.Zap, 'Automations'],
    ['integrations', Icons.Plug, 'Integrations'],
  ];
  return (
    <aside style={{
      width: 240, flex: '0 0 240px', height: '100vh', position: 'sticky', top: 0,
      borderRight: '1px solid var(--hairline)', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column', padding: '18px 16px',
      boxSizing: 'border-box',
    }}>
      <div style={{ padding: '4px 6px 18px' }}><Logo/></div>

      {/* Workspace switcher */}
      <button style={{
        display: 'flex', alignItems: 'center', gap: 10, width: '100%',
        padding: '8px 10px', borderRadius: 'var(--r-md)', cursor: 'pointer',
        border: '1px solid var(--border)', background: 'var(--bg-elevated)',
        marginBottom: 18, font: 'inherit', textAlign: 'left',
      }}>
        <span style={{ width: 26, height: 26, borderRadius: 7, background: 'var(--accent)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flex: '0 0 auto' }}>N</span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--fg)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Northwind</span>
          <span style={{ display: 'block', fontSize: 11, color: 'var(--fg-subtle)' }}>Team plan</span>
        </span>
        <Icons.ChevronDown size={15} style={{ color: 'var(--fg-subtle)' }}/>
      </button>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(([id, I, label, badge]) => (
          <SideItem key={id} icon={I} label={label} badge={badge}
                    active={nav === id} onClick={() => setNav(id)}/>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <SideItem icon={Icons.Settings} label="Settings" active={nav === 'settings'} onClick={() => setNav('settings')}/>
        <div style={{ height: 1, background: 'var(--hairline)', margin: '8px 0' }}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 10px' }}>
          <span style={{ width: 30, height: 30, borderRadius: 9999, background: 'var(--accent-100)', color: 'var(--accent-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, flex: '0 0 auto' }}>AM</span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>Alex Morgan</span>
            <span style={{ display: 'block', fontSize: 11, color: 'var(--fg-subtle)' }}>alex@northwind.co</span>
          </span>
          <span onClick={onSignOut} title="Sign out" style={{ cursor: 'pointer', color: 'var(--fg-subtle)', display: 'inline-flex' }}>
            <Icons.LogOut size={16}/>
          </span>
        </div>
      </div>
    </aside>
  );
};

/* ---------- Topbar ---------- */
const Topbar = ({ title }) => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '16px 28px', borderBottom: '1px solid var(--hairline)',
    position: 'sticky', top: 0, zIndex: 20,
    background: 'color-mix(in srgb, var(--bg) 80%, transparent)',
    backdropFilter: 'saturate(180%) blur(16px)', WebkitBackdropFilter: 'saturate(180%) blur(16px)',
  }}>
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--fg)', margin: 0 }}>{title}</h1>
      <div style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 2 }}>Welcome back, Alex — here's how this month is shaping up.</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
        border: '1px solid var(--border)', borderRadius: 'var(--r-md)', background: 'var(--bg-elevated)',
        width: 200,
      }}>
        <Icons.Search size={15} style={{ color: 'var(--fg-subtle)' }}/>
        <span style={{ fontSize: 13, color: 'var(--fg-subtle)' }}>Search…</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)', border: '1px solid var(--border)', borderRadius: 4, padding: '0 5px' }}>⌘K</span>
      </div>
      <button style={{ width: 38, height: 38, borderRadius: 'var(--r-md)', border: '1px solid var(--border)', background: 'var(--bg-elevated)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-muted)', position: 'relative' }}>
        <Icons.Bell size={17}/>
        <span style={{ position: 'absolute', top: 9, right: 10, width: 7, height: 7, borderRadius: 9999, background: 'var(--accent)', border: '1.5px solid var(--bg-elevated)' }}/>
      </button>
      <Button variant="primary" size="md" icon={<Icons.Plus size={15}/>}>New campaign</Button>
    </div>
  </div>
);

/* ---------- Stat card ---------- */
const StatCard = ({ label, value, delta, up, spark }) => (
  <div style={{
    background: 'var(--bg-elevated)', border: '1px solid var(--hairline)',
    borderRadius: 'var(--r-lg)', padding: 18, boxShadow: 'var(--shadow-xs)',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', fontWeight: 500 }}>{label}</div>
      <Icons.Dots size={16} style={{ color: 'var(--fg-subtle)', cursor: 'pointer' }}/>
    </div>
    <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--fg)', lineHeight: 1.1, marginTop: 10 }}>{value}</div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: up ? 'var(--success-500)' : 'var(--danger-500)' }}>
        {up ? '↑' : '↓'} {delta}
      </span>
      {spark}
    </div>
  </div>
);

const Spark = ({ points, color = 'var(--accent)' }) => {
  const w = 72, h = 24;
  const max = Math.max(...points), min = Math.min(...points);
  const norm = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / (max - min || 1)) * h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  return (
    <svg width={w} height={h} style={{ overflow: 'visible' }}>
      <polyline points={norm} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

/* ---------- Performance chart ---------- */
const PerfChart = () => {
  const data = [42, 48, 45, 58, 62, 70, 66, 78, 84, 80, 92, 96];
  const data2 = [30, 34, 32, 40, 44, 48, 46, 54, 58, 56, 64, 70];
  const labels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const W = 640, H = 220, pad = 8;
  const max = 100;
  const toPts = (d) => d.map((v, i) => {
    const x = pad + (i / (d.length - 1)) * (W - pad * 2);
    const y = H - pad - (v / max) * (H - pad * 2);
    return [x, y];
  });
  const line = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const area = (pts) => `${line(pts)} L${pts[pts.length-1][0].toFixed(1)} ${H-pad} L${pts[0][0].toFixed(1)} ${H-pad} Z`;
  const p1 = toPts(data), p2 = toPts(data2);

  return (
    <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', padding: 20, boxShadow: 'var(--shadow-xs)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)' }}>Engagement over time</div>
          <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginTop: 2 }}>Opens vs. clicks, last 12 months</div>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--fg-muted)' }}><span style={{ width: 10, height: 3, borderRadius: 9999, background: 'var(--accent)' }}/>Opens</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--fg-muted)' }}><span style={{ width: 10, height: 3, borderRadius: 9999, background: 'var(--ink-300)' }}/>Clicks</span>
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id="fillA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16"/>
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {[0,1,2,3].map(i => (
          <line key={i} x1={pad} x2={W-pad} y1={pad + i*((H-pad*2)/3)} y2={pad + i*((H-pad*2)/3)} stroke="var(--hairline)" strokeWidth="1"/>
        ))}
        <path d={area(p1)} fill="url(#fillA)"/>
        <path d={line(p2)} fill="none" stroke="var(--ink-300)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 5"/>
        <path d={line(p1)} fill="none" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        {p1.map((p, i) => i === p1.length - 1 && (
          <circle key={i} cx={p[0]} cy={p[1]} r="4.5" fill="var(--accent)" stroke="var(--bg-elevated)" strokeWidth="2.5"/>
        ))}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, padding: `0 ${pad}px` }}>
        {labels.map(l => <span key={l} style={{ fontSize: 10.5, color: 'var(--fg-subtle)', fontFamily: 'var(--font-mono)' }}>{l}</span>)}
      </div>
    </div>
  );
};

/* ---------- Channel breakdown ---------- */
const Channels = () => {
  const rows = [
    ['Email', 62, 'var(--accent)'],
    ['In-app', 21, 'var(--accent-300)'],
    ['Push', 11, 'var(--accent-200)'],
    ['SMS', 6, 'var(--ink-300)'],
  ];
  return (
    <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', padding: 20, boxShadow: 'var(--shadow-xs)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)' }}>Channel mix</div>
      <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginTop: 2, marginBottom: 18 }}>Share of sends this month</div>
      <div style={{ display: 'flex', height: 10, borderRadius: 9999, overflow: 'hidden', marginBottom: 20 }}>
        {rows.map(([n, v, c]) => <div key={n} style={{ width: `${v}%`, background: c }}/>)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {rows.map(([n, v, c]) => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 9, height: 9, borderRadius: 3, background: c, flex: '0 0 auto' }}/>
            <span style={{ flex: 1, fontSize: 13, color: 'var(--fg)' }}>{n}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg)' }}>{v}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- Campaigns table ---------- */
const CampaignTable = () => {
  const rows = [
    ['Spring product launch', 'Email', 'Sent', 'success', '24,180', '41.2%', '8.4%'],
    ['Reactivation — dormant 30d', 'In-app', 'Running', 'accent', '6,420', '38.7%', '12.1%'],
    ['Weekly digest #38', 'Email', 'Scheduled', 'warning', '—', '—', '—'],
    ['Trial day-3 nudge', 'Push', 'Running', 'accent', '3,902', '52.0%', '18.9%'],
    ['Win-back Q2', 'Email', 'Draft', 'neutral', '—', '—', '—'],
  ];
  const th = { textAlign: 'left', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg-subtle)', fontWeight: 600, padding: '0 14px 12px' };
  const td = { fontSize: 13.5, color: 'var(--fg)', padding: '13px 14px', borderTop: '1px solid var(--hairline)' };
  return (
    <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--hairline)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-xs)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px 14px' }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)' }}>Recent campaigns</div>
        <Button variant="link" size="sm" iconAfter={<Icons.ArrowUpRight size={14}/>}>View all</Button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 20 }}>Campaign</th>
              <th style={th}>Channel</th>
              <th style={th}>Status</th>
              <th style={{ ...th, textAlign: 'right' }}>Sent</th>
              <th style={{ ...th, textAlign: 'right' }}>Open</th>
              <th style={{ ...th, textAlign: 'right', paddingRight: 20 }}>Click</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <td style={{ ...td, paddingLeft: 20, fontWeight: 600 }}>{r[0]}</td>
                <td style={{ ...td, color: 'var(--fg-muted)' }}>{r[1]}</td>
                <td style={td}><Badge tone={r[3]} dot>{r[2]}</Badge></td>
                <td style={{ ...td, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--fg-muted)' }}>{r[4]}</td>
                <td style={{ ...td, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>{r[5]}</td>
                <td style={{ ...td, textAlign: 'right', paddingRight: 20, fontFamily: 'var(--font-mono)', fontSize: 12.5 }}>{r[6]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ---------- Page ---------- */
const Dashboard = ({ onSignOut }) => {
  const [nav, setNav] = React.useState('overview');
  const titles = { overview: 'Overview', campaigns: 'Campaigns', audiences: 'Audiences', insights: 'Insights', automations: 'Automations', integrations: 'Integrations', settings: 'Settings' };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }} data-screen-label="Dashboard">
      <Sidebar nav={nav} setNav={setNav} onSignOut={onSignOut}/>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <Topbar title={titles[nav]}/>
        <main style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {nav === 'overview' ? (
            <React.Fragment>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                <StatCard label="Active contacts" value="48,291" delta="6.2%" up spark={<Spark points={[20,24,22,28,30,34,40]}/>}/>
                <StatCard label="Open rate" value="38.4%" delta="4.2 pts" up spark={<Spark points={[30,32,31,34,36,37,38]}/>}/>
                <StatCard label="Click rate" value="9.1%" delta="0.8 pts" up spark={<Spark points={[6,7,6.5,8,8.5,9,9.1]}/>}/>
                <StatCard label="Attributed revenue" value="$182k" delta="2.1%" up={false} spark={<Spark points={[40,44,42,38,36,34,33]} color="var(--ink-400)"/>}/>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 16 }}>
                <PerfChart/>
                <Channels/>
              </div>
              <CampaignTable/>
            </React.Fragment>
          ) : (
            <div style={{
              background: 'var(--bg-elevated)', border: '1px dashed var(--border)',
              borderRadius: 'var(--r-lg)', padding: '64px 32px', textAlign: 'center',
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 'var(--r-md)', background: 'var(--accent-50)', color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icons.Layers size={22}/>
              </div>
              <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--fg)' }}>{titles[nav]}</div>
              <p style={{ fontSize: 14, color: 'var(--fg-muted)', margin: '6px 0 0' }}>This screen isn't part of the kit yet — the Overview tab is the built-out example.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

window.Dashboard = Dashboard;
