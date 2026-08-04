"use client";

import { useState } from "react";

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const Check = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const Play = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 9 6-9 6V6Z" fill="currentColor"/></svg>;

const paths = [
  { no: "01", tag: "FOUNDATIONS", title: "Start with market clarity.", text: "Build the vocabulary, routines, and confidence to understand how global markets move.", lessons: "12 lessons" },
  { no: "02", tag: "STRATEGY", title: "Build your own playbook.", text: "Learn practical frameworks for analysis, risk, and decision-making—without the noise.", lessons: "18 lessons" },
  { no: "03", tag: "PRACTICE", title: "Turn knowledge into skill.", text: "Use guided exercises, market recaps, and feedback to develop a consistent process.", lessons: "24 lessons" },
];

const faqs = [
  ["Is WeTradeEDU suitable for complete beginners?", "Yes. Our Foundations path starts with the basics and gives you a clear learning order. You do not need prior market experience."],
  ["What is included with membership?", "Membership includes the full learning library, weekly market recaps, learning exercises, progress tracking, and community access."],
  ["Does WeTradeEDU give financial advice?", "No. WeTradeEDU is an educational platform. Our material is for learning purposes and is not personalised financial or investment advice."],
  ["Can I learn at my own pace?", "Absolutely. Every module is available on demand, so you can fit learning around your schedule and return to lessons whenever you need."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <div className="announcement">New: Foundations of Market Literacy is now open <a href="#paths">Explore the path <Arrow /></a></div>
    <header className="nav">
      <a className="brand" href="#top" aria-label="WeTradeEDU home"><span>WT</span> WeTrade<span>EDU</span></a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "×" : "☰"}</button>
      <nav className={menuOpen ? "open" : ""}>
        <a href="#paths">Learning paths</a><a href="#approach">Our approach</a><a href="#stories">Stories</a><a href="#faq">FAQ</a>
        <a className="nav-cta" href="#join">Start learning <Arrow /></a>
      </nav>
    </header>

    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-copy">
        <p className="eyebrow light">A clearer way to learn markets</p>
        <h1>Learn to think<br /><i>before</i> you trade.</h1>
        <p className="hero-text">A modern education platform for curious people who want to understand the markets, build durable skills, and make decisions with more clarity.</p>
        <div className="hero-actions"><a href="#join" className="button lime">Explore membership <Arrow /></a><a href="#approach" className="text-link">How it works <span>↓</span></a></div>
      </div>
      <div className="hero-art" aria-label="Abstract market learning illustration">
        <div className="sun" /><div className="arc a1" /><div className="arc a2" /><div className="arc a3" />
        <div className="orbit-dot d1" /><div className="orbit-dot d2" />
        <div className="hero-card"><span>THIS WEEK</span><b>Market<br />Fundamentals</b><em>Lesson 04 · 16 min</em><div className="progress"><i /></div></div>
        <p className="axis x">KNOWLEDGE</p><p className="axis y">CLARITY</p>
      </div>
      <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><span className="line" /><span>01 / 05</span></div>
    </section>

    <section className="trust"><p>BUILT FOR LEARNERS WHO WANT MORE THAN MARKET NOISE</p><div><b>01</b><b>02</b><b>03</b><b>04</b></div></section>

    <section className="intro section" id="approach">
      <div><p className="eyebrow">THE WETRADEEDU DIFFERENCE</p><h2>Education with a<br /><i>point of view.</i></h2></div>
      <div className="intro-copy"><p>Markets can feel overwhelming when every opinion competes for your attention. WeTradeEDU gives you a structured place to slow down, ask better questions, and build understanding that lasts.</p><a className="text-link dark" href="#paths">Meet our learning paths <Arrow /></a></div>
    </section>

    <section className="paths section" id="paths"><div className="section-heading"><div><p className="eyebrow">LEARN IN A SEQUENCE</p><h2>Your path to<br /><i>market fluency.</i></h2></div><p>Each path is practical, focused, and designed to connect the dots—one lesson at a time.</p></div>
      <div className="path-list">{paths.map((p, i) => <article className="path" key={p.no}><div className="path-number">{p.no}</div><div><p className="eyebrow">{p.tag}</p><h3>{p.title}</h3></div><p>{p.text}</p><div className="lesson-count"><span>{p.lessons}</span><a href="#join" aria-label={`View ${p.title}`}><Arrow /></a></div><div className={`path-art art-${i}`}><i /><i /><i /></div></article>)}</div>
    </section>

    <section className="feature"><div className="feature-image"><div className="portrait">M</div><div className="note">"The goal isn't to predict every move. It's to have a process you can trust."</div></div><div className="feature-copy"><p className="eyebrow light">LEARN FROM PRACTICE</p><h2>Make your<br /><i>thinking</i> visible.</h2><p>Our lessons don’t just tell you what to look at. They show you how to organise information, challenge assumptions, and reflect on decisions over time.</p><a href="#join" className="button lime">See how we teach <Arrow /></a></div></section>

    <section className="outcomes section"><div className="outcome-head"><p className="eyebrow">WHAT YOU’LL BUILD</p><h2>Small lessons.<br /><i>Lasting capability.</i></h2></div><div className="outcome-grid"><div><span>01</span><h3>A working market vocabulary</h3><p>Understand the terms and forces behind the headlines.</p></div><div><span>02</span><h3>A repeatable learning routine</h3><p>Stay consistent with guided study and clear next steps.</p></div><div><span>03</span><h3>Confidence in your process</h3><p>Use frameworks that help you think independently.</p></div></div></section>

    <section className="stories" id="stories"><div className="stories-top"><p className="eyebrow light">FROM THE COMMUNITY</p><h2>Progress feels<br /><i>different here.</i></h2></div><div className="testimonial"><div className="quote">“</div><blockquote>I stopped chasing every market update and started understanding what I was actually looking at. The weekly rhythm made all the difference.</blockquote><div className="person"><span>NA</span><p><b>Nadia A.</b><br />Member since 2025</p></div><div className="story-nav"><button>←</button><button>→</button></div></div></section>

    <section className="membership section" id="join"><div className="membership-box"><div><p className="eyebrow">ONE SIMPLE MEMBERSHIP</p><h2>Your next lesson<br />starts <i>today.</i></h2><p className="membership-text">Join a community of learners building a more thoughtful relationship with the markets.</p><a href="mailto:hello@wetradedu.com?subject=Membership enquiry" className="button dark-button">Start learning now <Arrow /></a></div><div className="membership-details"><p>MEMBERSHIP INCLUDES</p><ul><li><Check /> Full learning library</li><li><Check /> Weekly market recaps</li><li><Check /> Guided practice exercises</li><li><Check /> Community learning space</li></ul><small>Educational content only. Not financial advice.</small></div></div></section>

    <section className="faq section" id="faq"><div><p className="eyebrow">COMMON QUESTIONS</p><h2>Good questions<br />make better<br /><i>learners.</i></h2></div><div className="faq-list">{faqs.map(([q,a], i) => <div className="faq-item" key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><b>{openFaq === i ? "−" : "+"}</b></button>{openFaq === i && <p>{a}</p>}</div>)}</div></section>

    <footer><div className="footer-top"><a className="brand" href="#top"><span>WT</span> WeTrade<span>EDU</span></a><p>Learn the language.<br />Build your process.</p><a href="#join" className="button lime">Join WeTradeEDU <Arrow /></a></div><div className="footer-bottom"><span>© 2026 WeTradeEDU. All rights reserved.</span><span>Education, not financial advice.</span><div><a href="#">Privacy</a><a href="#">Terms</a><a href="mailto:hello@wetradedu.com">Contact</a></div></div></footer>
  </main>;
}
