const Footer = () => {
  const cols = [
    {
      title: "Product",
      items: [
        "Composer",
        "Audiences",
        "Insights",
        "Automations",
        "Integrations",
        "What's new",
      ],
    },
    {
      title: "Solutions",
      items: ["For startups", "For B2B SaaS", "For e-commerce", "For agencies"],
    },
    {
      title: "Company",
      items: ["About", "Customers", "Careers", "Press", "Contact"],
    },
    {
      title: "Resources",
      items: ["Docs", "Guides", "API reference", "Status", "Changelog"],
    },
  ];
  return (
    <footer
      style={{
        background: "var(--bg-sunken)",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 32px 32px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(4, 1fr)",
            gap: 48,
          }}
        >
          <div>
            <Logo />
            <p
              style={{
                fontSize: 13,
                color: "var(--fg-muted)",
                margin: "16px 0 20px",
                maxWidth: 280,
                lineHeight: 1.55,
              }}
            >
              The marketing workspace for product-led teams.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["X", "GH", "IN"].map((s) => (
                <a
                  key={s}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--fg-muted)",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--fg-subtle)",
                  marginBottom: 14,
                }}
              >
                {c.title}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      style={{
                        fontSize: 14,
                        color: "var(--fg-muted)",
                        cursor: "pointer",
                      }}
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: "1px solid var(--hairline)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 12, color: "var(--fg-subtle)" }}>
            © 2026 Lumen Labs, Inc.
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              fontSize: 12,
              color: "var(--fg-muted)",
            }}
          >
            <a style={{ cursor: "pointer", color: "inherit" }}>Privacy</a>
            <a style={{ cursor: "pointer", color: "inherit" }}>Terms</a>
            <a style={{ cursor: "pointer", color: "inherit" }}>Security</a>
            <a style={{ cursor: "pointer", color: "inherit" }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
