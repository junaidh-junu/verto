import { Link, useLocation } from 'react-router-dom';
import { useVertoBehaviors } from '../hooks/useVertoBehaviors';

export default function ServicesPage() {
  const { pathname } = useLocation();
  useVertoBehaviors(pathname);

  return (
    <>
      {/* PAGE HEAD */}
      <header className="page-head section" data-accent="coral">
        <div className="wrap">
          <span className="eyebrow reveal">Six disciplines · One standard</span>
          <h1 className="display" style={{ marginTop: '18px', fontSize: 'clamp(54px,12vw,180px)', lineHeight: '.85', letterSpacing: '-.04em' }}>
            <span className="line-mask"><span>What we</span></span>
            <span className="line-mask" data-d="1"><span>make <em style={{ fontStyle: 'normal', color: 'var(--accent)', transition: 'color .6s' }}>together.</em></span></span>
          </h1>
          <p className="lead reveal" data-d="2" style={{ maxWidth: '480px', marginTop: 'clamp(20px,3vw,36px)' }}>
            We plug in where you need us, or run the whole show end to end. Six disciplines driven by one obsessive standard of craft.
          </p>
        </div>
      </header>

      {/* SERVICES INDEX */}
      <section className="section" data-accent="coral" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <nav className="svc-index reveal" aria-label="Jump to service">
            <a href="#brand-building" className="svi-item"><span className="svi-num">01</span><span className="svi-name">Brand Building</span><span className="svi-arr">↓</span></a>
            <a href="#packaging" className="svi-item"><span className="svi-num">02</span><span className="svi-name">Packaging Design</span><span className="svi-arr">↓</span></a>
            <a href="#campaigns" className="svi-item"><span className="svi-num">03</span><span className="svi-name">Campaigns &amp; Media</span><span className="svi-arr">↓</span></a>
            <a href="#print" className="svi-item"><span className="svi-num">04</span><span className="svi-name">Print Management</span><span className="svi-arr">↓</span></a>
            <a href="#digital" className="svi-item"><span className="svi-num">05</span><span className="svi-name">Digital &amp; Web</span><span className="svi-arr">↓</span></a>
            <a href="#wedding" className="svi-item"><span className="svi-num">06</span><span className="svi-name">Wedding Cards</span><span className="svi-arr">↓</span></a>
          </nav>
        </div>
      </section>

      {/* 01 — BRAND BUILDING */}
      <section id="brand-building" className="svcd-section section" data-accent="coral">
        <div className="wrap svcd-grid">
          <div className="svcd-main">
            <span className="svcd-num reveal">01 / Brand Building</span>
            <h2 className="svcd-title reveal" data-d="1">Brand<br />Building</h2>
            <p className="svcd-tagline reveal" data-d="2">The north star every brand needs</p>
            <p className="svcd-desc reveal" data-d="2">We build complete brand ecosystems — from naming and verbal identity through visual systems, guidelines and launch assets. Whether starting from scratch or evolving an existing mark, we make sure every touchpoint speaks with one voice and refuses to be ignored.</p>
            <div className="svcd-delivers reveal" data-d="3">
              <h4>What's included</h4>
              <ul className="deliver-list">
                <li>Brand strategy &amp; positioning</li>
                <li>Naming &amp; verbal identity</li>
                <li>Logo &amp; visual identity system</li>
                <li>Typography &amp; colour system</li>
                <li>Brand guidelines (100+ pages)</li>
                <li>Motion marks &amp; brand film</li>
                <li>Launch asset suite</li>
              </ul>
            </div>
            <div className="svcd-for reveal" data-d="4">
              <h4>Ideal for</h4>
              <div className="chips"><span className="chip">Startups</span><span className="chip">Rebrands</span><span className="chip">Acquisitions</span><span className="chip">Series A+</span></div>
            </div>
          </div>
          <div className="reveal" data-d="1">
            <div className="svc-canvas" style={{ background: 'linear-gradient(150deg,#241812 0%,#ff5436 120%)' }}>
              <div className="sc-top"><span className="svcd-num" style={{ color: 'rgba(255,255,255,.6)' }}>Brand Building</span></div>
              <div><div className="sc-label">Identity<br />that turns<br />heads.</div></div>
              <div className="sc-tags"><span>Identity</span><span>Strategy</span><span>Guidelines</span><span>Naming</span><span>Motion</span></div>
              <div className="sc-bg-num">01</div>
              <div className="sc-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — PACKAGING */}
      <section id="packaging" className="svcd-section section" data-accent="violet">
        <div className="wrap svcd-grid">
          <div className="svcd-main">
            <span className="svcd-num reveal">02 / Packaging Design</span>
            <h2 className="svcd-title reveal" data-d="1">Packaging<br />Design</h2>
            <p className="svcd-tagline reveal" data-d="2">The 3 seconds that win the shelf</p>
            <p className="svcd-desc reveal" data-d="2">Packaging is the first handshake between your brand and a stranger. We design structural systems and surface graphics that stop, delight and convert — across cartons, pouches, bottles, labels and everything in between. Shelf presence is not an accident.</p>
            <div className="svcd-delivers reveal" data-d="3">
              <h4>What's included</h4>
              <ul className="deliver-list">
                <li>Structural design &amp; dielines</li>
                <li>Label &amp; surface graphics</li>
                <li>Range architecture</li>
                <li>Retailer-ready production files</li>
                <li>Material &amp; finish specification</li>
                <li>Sustainability guidance</li>
                <li>Photoshoot art direction</li>
              </ul>
            </div>
            <div className="svcd-for reveal" data-d="4">
              <h4>Ideal for</h4>
              <div className="chips"><span className="chip">FMCG</span><span className="chip">D2C</span><span className="chip">Premium Retail</span><span className="chip">Export Brands</span></div>
            </div>
          </div>
          <div className="reveal" data-d="1">
            <div className="svc-canvas" style={{ background: 'linear-gradient(150deg,#1a0a40 0%,#6b4bf0 120%)' }}>
              <div className="sc-top"><span className="svcd-num" style={{ color: 'rgba(255,255,255,.6)' }}>Packaging Design</span></div>
              <div><div className="sc-label">Shelves<br />don't lie.</div></div>
              <div className="sc-tags"><span>Structural</span><span>Labels</span><span>Retail</span><span>Range</span><span>Finishing</span></div>
              <div className="sc-bg-num">02</div>
              <div className="sc-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — CAMPAIGNS */}
      <section id="campaigns" className="svcd-section section" data-accent="blue">
        <div className="wrap svcd-grid">
          <div className="svcd-main">
            <span className="svcd-num reveal">03 / Campaigns &amp; Media</span>
            <h2 className="svcd-title reveal" data-d="1">Campaigns<br />&amp; Media</h2>
            <p className="svcd-tagline reveal" data-d="2">Creative work that earns attention</p>
            <p className="svcd-desc reveal" data-d="2">Campaigns that have something to say. We develop the big idea, the visual language and the execution — from TVC scripts to social content calendars, OOH design to digital display suites. We only make work we'd stop to look at ourselves.</p>
            <div className="svcd-delivers reveal" data-d="3">
              <h4>What's included</h4>
              <ul className="deliver-list">
                <li>Campaign strategy &amp; creative platform</li>
                <li>Art direction &amp; concept development</li>
                <li>Script &amp; storyboarding</li>
                <li>Social content (photo + video)</li>
                <li>OOH &amp; outdoor design</li>
                <li>Digital display &amp; banner suite</li>
                <li>Campaign performance reporting</li>
              </ul>
            </div>
            <div className="svcd-for reveal" data-d="4">
              <h4>Ideal for</h4>
              <div className="chips"><span className="chip">Product Launches</span><span className="chip">Seasonal Campaigns</span><span className="chip">Brand Moments</span></div>
            </div>
          </div>
          <div className="reveal" data-d="1">
            <div className="svc-canvas" style={{ background: 'linear-gradient(150deg,#0a1a30 0%,#2f6bff 120%)' }}>
              <div className="sc-top"><span className="svcd-num" style={{ color: 'rgba(255,255,255,.6)' }}>Campaigns &amp; Media</span></div>
              <div><div className="sc-label">Ideas worth<br />stopping for.</div></div>
              <div className="sc-tags"><span>Big Idea</span><span>Film</span><span>Social</span><span>OOH</span><span>Digital</span></div>
              <div className="sc-bg-num">03</div>
              <div className="sc-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — PRINT */}
      <section id="print" className="svcd-section section" data-accent="lime">
        <div className="wrap svcd-grid">
          <div className="svcd-main">
            <span className="svcd-num reveal">04 / Print Management</span>
            <h2 className="svcd-title reveal" data-d="1">Print<br />Management</h2>
            <p className="svcd-tagline reveal" data-d="2">Where pixels meet paper</p>
            <p className="svcd-desc reveal" data-d="2">Beautiful files mean nothing if the press run is wrong. We manage the full print process — vendor selection, proofing, press supervision and quality sign-off — so what you approved is exactly what ships. No surprises on delivery day.</p>
            <div className="svcd-delivers reveal" data-d="3">
              <h4>What's included</h4>
              <ul className="deliver-list">
                <li>Vendor sourcing &amp; management</li>
                <li>File preparation &amp; pre-press</li>
                <li>Material &amp; substrate specification</li>
                <li>Press supervision &amp; proofing</li>
                <li>Special finishes (foil, emboss, spot UV)</li>
                <li>Quality sign-off &amp; delivery coordination</li>
              </ul>
            </div>
            <div className="svcd-for reveal" data-d="4">
              <h4>Ideal for</h4>
              <div className="chips"><span className="chip">Collateral</span><span className="chip">Packaging</span><span className="chip">Events</span><span className="chip">Annual Reports</span></div>
            </div>
          </div>
          <div className="reveal" data-d="1">
            <div className="svc-canvas" style={{ background: 'linear-gradient(150deg,#1a1a0a 0%,#8a9a00 120%)' }}>
              <div className="sc-top"><span className="svcd-num" style={{ color: 'rgba(255,255,255,.6)' }}>Print Management</span></div>
              <div><div className="sc-label">What you<br />approved<br />is what ships.</div></div>
              <div className="sc-tags"><span>Litho</span><span>Foil</span><span>Emboss</span><span>Spot UV</span><span>Pre-press</span></div>
              <div className="sc-bg-num">04</div>
              <div className="sc-glow" style={{ background: 'rgba(191,232,23,.4)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — DIGITAL */}
      <section id="digital" className="svcd-section section" data-accent="magenta">
        <div className="wrap svcd-grid">
          <div className="svcd-main">
            <span className="svcd-num reveal">05 / Digital &amp; Web</span>
            <h2 className="svcd-title reveal" data-d="1">Digital<br />&amp; Web</h2>
            <p className="svcd-tagline reveal" data-d="2">Screens deserve craft too</p>
            <p className="svcd-desc reveal" data-d="2">From marketing websites to product UI, we design digital experiences that carry your brand's personality into every interaction. Motion, micro-interactions and system thinking — not just pretty pages that look good in a mockup and disappoint in the browser.</p>
            <div className="svcd-delivers reveal" data-d="3">
              <h4>What's included</h4>
              <ul className="deliver-list">
                <li>UX strategy &amp; wireframes</li>
                <li>UI design system</li>
                <li>Responsive web design</li>
                <li>Motion design &amp; micro-interactions</li>
                <li>CMS setup &amp; developer handoff</li>
                <li>Social media template systems</li>
                <li>Performance &amp; accessibility review</li>
              </ul>
            </div>
            <div className="svcd-for reveal" data-d="4">
              <h4>Ideal for</h4>
              <div className="chips"><span className="chip">Launch Sites</span><span className="chip">Rebrands</span><span className="chip">SaaS</span><span className="chip">D2C</span></div>
            </div>
          </div>
          <div className="reveal" data-d="1">
            <div className="svc-canvas" style={{ background: 'linear-gradient(150deg,#2a0520 0%,#ff3da6 120%)' }}>
              <div className="sc-top"><span className="svcd-num" style={{ color: 'rgba(255,255,255,.6)' }}>Digital &amp; Web</span></div>
              <div><div className="sc-label">Interactions<br />that feel<br />alive.</div></div>
              <div className="sc-tags"><span>Web</span><span>UI</span><span>Motion</span><span>UX</span><span>CMS</span></div>
              <div className="sc-bg-num">05</div>
              <div className="sc-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — WEDDING */}
      <section id="wedding" className="svcd-section section" data-accent="amber">
        <div className="wrap svcd-grid">
          <div className="svcd-main">
            <span className="svcd-num reveal">06 / Wedding Cards</span>
            <h2 className="svcd-title reveal" data-d="1">Wedding<br />Cards</h2>
            <p className="svcd-tagline reveal" data-d="2">Invitations worth keeping forever</p>
            <p className="svcd-desc reveal" data-d="2">Every wedding invitation tells a story before the day begins. We design bespoke suites — from the first save-the-date to the ceremony programme — combining traditional craft techniques like letterpress and foil with contemporary design sensibilities and custom illustration.</p>
            <div className="svcd-delivers reveal" data-d="3">
              <h4>What's included</h4>
              <ul className="deliver-list">
                <li>Concept &amp; design (3 directions)</li>
                <li>Full suite: invite, RSVP, details, envelope liner</li>
                <li>Custom illustration &amp; monogramming</li>
                <li>Letterpress, foil &amp; embossing</li>
                <li>Paper &amp; envelope curation</li>
                <li>Full print management &amp; delivery</li>
              </ul>
            </div>
            <div className="svcd-for reveal" data-d="4">
              <h4>Ideal for</h4>
              <div className="chips"><span className="chip">Weddings</span><span className="chip">Engagements</span><span className="chip">Special Occasions</span></div>
            </div>
          </div>
          <div className="reveal" data-d="1">
            <div className="svc-canvas" style={{ background: 'linear-gradient(150deg,#2a1400 0%,#ffac1c 120%)' }}>
              <div className="sc-top"><span className="svcd-num" style={{ color: 'rgba(255,255,255,.6)' }}>Wedding Cards</span></div>
              <div><div className="sc-label">Every detail<br />tells your<br />story.</div></div>
              <div className="sc-tags"><span>Letterpress</span><span>Foil</span><span>Emboss</span><span>Illustration</span><span>Bespoke</span></div>
              <div className="sc-bg-num">06</div>
              <div className="sc-glow" style={{ background: 'rgba(255,172,28,.4)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-pad cta" data-accent="coral">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ justifyContent: 'center', display: 'flex' }}>Got something brewing?</span>
          <h2 className="display reveal" data-d="1" style={{ marginTop: '24px' }}>
            Let's make<br />something <em>worth</em><br />looking at.
          </h2>
          <div className="crow reveal" data-d="2">
            <Link to="/contact" className="btn btn--accent btn--lg" data-magnetic>
              Start a project <span className="arrow">↗</span>
            </Link>
            <Link to="/work" className="btn btn--ghost btn--lg">
              See the work <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
