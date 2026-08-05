const Signup = ({ onSubmit, onBack }) => {
  const [email, setEmail] = React.useState('');
  const [workspace, setWorkspace] = React.useState('');

  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '48px 32px', background: 'var(--bg)',
    }}>
      <div style={{
        width: '100%', maxWidth: 440, background: 'var(--bg-elevated)',
        border: '1px solid var(--hairline)', borderRadius: 20, padding: 40,
        boxShadow: 'var(--shadow-lg)',
      }}>
        <Logo/>
        <h1 style={{
          fontSize: 28, fontWeight: 700, letterSpacing: '-0.025em',
          margin: '24px 0 6px', color: 'var(--fg)',
        }}>Start your free trial</h1>
        <p style={{ fontSize: 14, color: 'var(--fg-muted)', margin: '0 0 28px', lineHeight: 1.55 }}>
          14 days, no credit card required.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Field label="Work email">
            <input value={email} onChange={e => setEmail(e.target.value)}
                   placeholder="you@company.com"
                   style={inputStyle}/>
          </Field>
          <Field label="Workspace URL">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, ...inputStyle, padding: '10px 12px' }}>
              <span style={{ color: 'var(--fg-subtle)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>lumen.app/</span>
              <input value={workspace} onChange={e => setWorkspace(e.target.value)}
                     placeholder="your-team"
                     style={{ all: 'unset', flex: 1, font: 'inherit', color: 'var(--fg)' }}/>
            </div>
          </Field>
          <Button variant="primary" onClick={onSubmit}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
            Create workspace
          </Button>
          <div style={{ fontSize: 12, color: 'var(--fg-subtle)', textAlign: 'center', lineHeight: 1.5, marginTop: 4 }}>
            By signing up you agree to our <a style={{ color: 'var(--accent)' }}>Terms</a> &amp; <a style={{ color: 'var(--accent)' }}>Privacy</a>.
          </div>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, margin: '28px 0',
        }}>
          <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }}/>
          <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-subtle)', fontWeight: 600 }}>or</span>
          <div style={{ flex: 1, height: 1, background: 'var(--hairline)' }}/>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700 }}>G</span>
            Continue with Google
          </Button>
          <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700 }}>SSO</span>
            Continue with SSO
          </Button>
        </div>

        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--fg-muted)' }}>
          Already on Lumen? <a style={{ color: 'var(--accent)', cursor: 'pointer' }} onClick={onBack}>Sign in</a>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%', boxSizing: 'border-box',
  padding: '10px 12px', borderRadius: 10,
  border: '1px solid var(--border)', background: 'var(--bg-elevated)',
  fontFamily: 'inherit', fontSize: 14, color: 'var(--fg)',
  outline: 'none',
};

const Field = ({ label, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--fg)' }}>{label}</label>
    {children}
  </div>
);

window.Signup = Signup;
