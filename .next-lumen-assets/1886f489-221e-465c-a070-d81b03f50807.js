const SignIn = ({ onSignIn, onSignup }) => {
  const [email, setEmail] = React.useState('alex@northwind.co');
  const [pw, setPw] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [remember, setRemember] = React.useState(true);

  const field = {
    width: '100%', boxSizing: 'border-box',
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '11px 12px', borderRadius: 'var(--r-md)',
    border: '1px solid var(--border)', background: 'var(--bg-elevated)',
    boxShadow: 'var(--shadow-inset)',
  };
  const input = { all: 'unset', flex: 1, font: 'inherit', fontSize: 14, color: 'var(--fg)' };

  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)', display: 'grid', gridTemplateColumns: '1fr 1fr',
      background: 'var(--bg)',
    }}>
      {/* Left — form */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 32px' }}>
        <div style={{ width: '100%', maxWidth: 380 }}>
          <Logo/>
          <h1 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.025em', margin: '28px 0 6px', color: 'var(--fg)' }}>
            Welcome back.
          </h1>
          <p style={{ fontSize: 14, color: 'var(--fg-muted)', margin: '0 0 28px' }}>
            Sign in to your Lumen workspace.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--fg)' }}>Work email</label>
              <div style={field}>
                <Icons.Mail size={16} style={{ color: 'var(--fg-subtle)' }}/>
                <input style={input} value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com"/>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--fg)' }}>Password</label>
                <a style={{ fontSize: 12, color: 'var(--accent)', cursor: 'pointer' }}>Forgot?</a>
              </div>
              <div style={field}>
                <Icons.Lock size={16} style={{ color: 'var(--fg-subtle)' }}/>
                <input style={input} type={show ? 'text' : 'password'} value={pw}
                       onChange={e => setPw(e.target.value)} placeholder="••••••••"
                       onKeyDown={e => e.key === 'Enter' && onSignIn()}/>
                <span onClick={() => setShow(s => !s)} style={{ cursor: 'pointer', color: 'var(--fg-subtle)', display: 'inline-flex' }}>
                  <Icons.Eye size={16}/>
                </span>
              </div>
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--fg)', cursor: 'pointer', userSelect: 'none' }}>
              <span onClick={() => setRemember(r => !r)} style={{
                width: 18, height: 18, borderRadius: 5, flex: '0 0 auto',
                border: `1.5px solid ${remember ? 'var(--accent)' : 'var(--border-strong)'}`,
                background: remember ? 'var(--accent)' : 'transparent',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 120ms',
              }}>
                {remember && <Icons.Check size={12} stroke={3} style={{ color: '#fff' }}/>}
              </span>
              Keep me signed in
            </label>

            <Button variant="primary" onClick={onSignIn}
                    style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
              Sign in
            </Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }}/>
            <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-subtle)', fontWeight: 600 }}>or</span>
            <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }}/>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Button variant="secondary" onClick={onSignIn} style={{ width: '100%', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700 }}>G</span>
              Continue with Google
            </Button>
            <Button variant="secondary" onClick={onSignIn} style={{ width: '100%', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700 }}>SSO</span>
              Continue with SSO
            </Button>
          </div>

          <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--fg-muted)' }}>
            New to Lumen? <a style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: 500 }} onClick={onSignup}>Start a free trial</a>
          </div>
        </div>
      </div>

      {/* Right — brand panel */}
      <div style={{
        background: 'var(--ink-800)', position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '56px 48px', color: '#F4F4EF',
      }}>
        <svg viewBox="0 0 600 600" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18, pointerEvents: 'none' }}>
          <defs>
            <pattern id="si-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#5A75FF"/>
            </pattern>
          </defs>
          <rect width="600" height="600" fill="url(#si-dots)"/>
        </svg>

        <div style={{ position: 'relative' }}>
          <Badge tone="accent" style={{ background: 'rgba(90,117,255,0.16)', color: '#B4C2FF' }}>Lumen 2.4</Badge>
        </div>

        <div style={{ position: 'relative' }}>
          <blockquote style={{ fontSize: 26, lineHeight: 1.35, fontWeight: 500, letterSpacing: '-0.015em', margin: '0 0 24px', textWrap: 'pretty', color: '#F4F4EF' }}>
            "We replaced four tools with Lumen in a quarter. The team got faster because the seams just disappeared."
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 9999, background: 'rgba(180,194,255,0.2)', color: '#B4C2FF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14 }}>MR</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#F4F4EF' }}>Maya Reyes</div>
              <div style={{ fontSize: 13, color: '#A6A6A0' }}>VP Growth, Northwind</div>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', gap: 28, fontSize: 12, color: '#A6A6A0' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icons.Shield size={14} style={{ color: '#8499FF' }}/>SOC 2 Type II</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icons.Check size={14} style={{ color: '#8499FF' }}/>GDPR ready</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icons.Check size={14} style={{ color: '#8499FF' }}/>99.98% uptime</span>
        </div>
      </div>
    </div>
  );
};

window.SignIn = SignIn;
