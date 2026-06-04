import { Link } from 'react-router-dom';
import { useVertoBehaviors } from '../hooks/useVertoBehaviors';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const { pathname } = useLocation();
  useVertoBehaviors(pathname);

  return (
    <>
      {/* HERO */}
      <header className="hero section" data-accent="coral">
        <div className="hero-grid-bg"></div>
        <div className="wrap hero-inner">
          <div className="hero-top">
            <span className="eyebrow reveal">Creative studio · Est. 2014</span>
            <p className="lead hero-sub reveal" data-d="1">
              A multidisciplinary studio shaping brands, packaging and campaigns for companies that refuse to blend in.
            </p>
          </div>
          <h1 className="display">
            <span className="line-mask"><span>Crafting <span className="pixcluster" aria-hidden="true">
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </span></span></span>
            <span className="line-mask" data-d="1"><span><em>pixels</em> that move</span></span>
            <span className="line-mask" data-d="2"><span>brands forward.</span></span>
          </h1>
          <div className="hero-actions reveal" data-d="3">
            <Link to="/work" className="btn btn--accent btn--lg" data-magnetic>
              See our work <span className="arrow">↗</span>
            </Link>
            <Link to="/contact" className="btn btn--ghost btn--lg">Start a project</Link>
          </div>
          <div className="scrollcue"><span className="ln"></span> Scroll to explore</div>
        </div>
      </header>

      {/* CLIENTS */}
      <section className="clients" data-accent="coral">
        <div className="marquee">
          <div className="marquee-track">
            <span className="item">Loom &amp; Co <span className="star">✦</span></span>
            <span className="item">Saaru Foods <span className="star">✦</span></span>
            <span className="item">Northbank <span className="star">✦</span></span>
            <span className="item">Vire Studios <span className="star">✦</span></span>
            <span className="item">Marigold <span className="star">✦</span></span>
            <span className="item">Kessler &amp; Park <span className="star">✦</span></span>
            <span className="item">Atlas Tea <span className="star">✦</span></span>
            <span className="item">Hodei <span className="star">✦</span></span>
          </div>
        </div>
      </section>

      {/* KINETIC MARQUEE */}
      <section className="kmarquee" data-accent="violet">
        <div className="marquee">
          <div className="marquee-track">
            <span className="item"><span className="ktext">Brand building</span><span className="dotsep"></span></span>
            <span className="item"><span className="ktext out">Packaging</span><span className="dotsep"></span></span>
            <span className="item"><span className="ktext">Campaigns</span><span className="dotsep"></span></span>
            <span className="item"><span className="ktext out">Print</span><span className="dotsep"></span></span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-pad" id="services" data-accent="violet">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="display reveal">What we<br />make together</h2>
            <p className="lead sh-right reveal" data-d="1">
              Six disciplines, one obsessive standard. We plug in where you need us — or run the whole show end to end.
            </p>
          </div>
          <div className="svc-list">
            <div className="svc reveal"><span className="num">01</span><span className="svc-name">Brand Building</span><span className="svc-tags"><span className="chip">Identity</span><span className="chip">Strategy</span><span className="chip">Guidelines</span></span></div>
            <div className="svc reveal"><span className="num">02</span><span className="svc-name">Packaging Design</span><span className="svc-tags"><span className="chip">Structure</span><span className="chip">Label</span><span className="chip">Retail</span></span></div>
            <div className="svc reveal"><span className="num">03</span><span className="svc-name">Media &amp; Advertising</span><span className="svc-tags"><span className="chip">Campaigns</span><span className="chip">Social</span><span className="chip">Film</span></span></div>
            <div className="svc reveal"><span className="num">04</span><span className="svc-name">Print Management</span><span className="svc-tags"><span className="chip">Production</span><span className="chip">Finishing</span></span></div>
            <div className="svc reveal"><span className="num">05</span><span className="svc-name">Digital &amp; Web</span><span className="svc-tags"><span className="chip">Sites</span><span className="chip">Product</span><span className="chip">Motion</span></span></div>
            <div className="svc reveal"><span className="num">06</span><span className="svc-name">Wedding Cards</span><span className="svc-tags"><span className="chip">Bespoke</span><span className="chip">Letterpress</span></span></div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section section-pad" data-accent="blue" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="display reveal">Selected work</h2>
            <p className="lead sh-right reveal" data-d="1">
              A few brands we've helped turn heads.
            </p>
          </div>
          <div className="work-grid">
            <Link to="/work" className="work-card reveal">
              <div className="work-thumb"><div className="fill" style={{ background: 'linear-gradient(135deg,#ff5436,#ffac1c)' }}></div><span className="ph-num">01</span></div>
              <div className="go">↗</div>
              <div className="work-meta"><div className="wm-txt"><h3>Saaru Foods</h3><div className="cat">Packaging · Brand</div></div><span className="yr">'25</span></div>
            </Link>
            <Link to="/work" className="work-card reveal" data-d="1">
              <div className="work-thumb"><div className="fill" style={{ background: 'linear-gradient(135deg,#6b4bf0,#2f6bff)' }}></div><span className="ph-num">02</span></div>
              <div className="go">↗</div>
              <div className="work-meta"><div className="wm-txt"><h3>Northbank</h3><div className="cat">Identity · Web</div></div><span className="yr">'25</span></div>
            </Link>
            <Link to="/work" className="work-card reveal">
              <div className="work-thumb"><div className="fill" style={{ background: 'linear-gradient(135deg,#0d3b2e,#bfe817)' }}></div><span className="ph-num">03</span></div>
              <div className="go">↗</div>
              <div className="work-meta"><div className="wm-txt"><h3>Atlas Tea</h3><div className="cat">Packaging · Print</div></div><span className="yr">'24</span></div>
            </Link>
            <Link to="/work" className="work-card reveal" data-d="1">
              <div className="work-thumb"><div className="fill" style={{ background: 'linear-gradient(135deg,#ff3da6,#6b4bf0)' }}></div><span className="ph-num">04</span></div>
              <div className="go">↗</div>
              <div className="work-meta"><div className="wm-txt"><h3>Vire Studios</h3><div className="cat">Campaign · Film</div></div><span className="yr">'24</span></div>
            </Link>
          </div>
          <div className="center" style={{ marginTop: '48px' }}>
            <Link to="/work" className="btn btn--ghost btn--lg" data-magnetic>
              View all projects <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" data-accent="lime" style={{ paddingBottom: 'clamp(72px,11vw,150px)' }}>
        <div className="wrap">
          <div className="stats reveal">
            <div className="glow"></div>
            <div className="stats-grid">
              <div className="stat"><div className="n"><span data-count="11" data-suffix="">0</span></div><div className="l">Years crafting brands that last</div></div>
              <div className="stat"><div className="n"><span className="accent-text" data-count="240" data-suffix="+">0</span></div><div className="l">Projects shipped across 9 countries</div></div>
              <div className="stat"><div className="n"><span data-count="38" data-suffix="">0</span></div><div className="l">Industry awards &amp; features</div></div>
              <div className="stat"><div className="n"><span className="accent-text" data-count="96" data-suffix="%">0</span></div><div className="l">Clients who come back for more</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-pad" data-accent="magenta" style={{ paddingTop: 0 }}>
        <div className="wrap proc">
          <div className="proc-sticky">
            <span className="eyebrow reveal">How we work</span>
            <h2 className="display reveal" data-d="1" style={{ fontSize: 'clamp(34px,5vw,68px)', marginTop: '18px' }}>
              A process<br />built to<br /><em className="accent-text">adapt</em>.
            </h2>
            <p className="lead reveal" data-d="2" style={{ marginTop: '22px', maxWidth: '380px' }}>
              Verto means "to turn." We shape our process around your problem — never the other way around.
            </p>
          </div>
          <div className="proc-steps">
            <div className="proc-step reveal"><div className="st-top"><span className="st-no">01</span><h3>Discover</h3></div><p>We dig into your market, audience and ambitions until the real problem is impossible to ignore.</p></div>
            <div className="proc-step reveal"><div className="st-top"><span className="st-no">02</span><h3>Define</h3></div><p>A sharp strategy and a creative platform everyone can rally behind — the north star for every pixel that follows.</p></div>
            <div className="proc-step reveal"><div className="st-top"><span className="st-no">03</span><h3>Design</h3></div><p>Identity, packaging, campaign and screen — crafted in tight loops with you, never over a wall.</p></div>
            <div className="proc-step reveal"><div className="st-top"><span className="st-no">04</span><h3>Deliver</h3></div><p>Production-ready files, print supervision and launch support, so the work lands exactly as intended.</p></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section" data-accent="amber" style={{ paddingBottom: 'clamp(72px,11vw,150px)' }}>
        <div className="wrap">
          <div className="quote-card reveal">
            <span className="qmark">"</span>
            <blockquote>Verto didn't just redesign us — they <em>reframed how the market sees us.</em></blockquote>
            <div className="qauthor">
              <span className="av"></span>
              <div><div className="nm">Ananya Rao</div><div className="rl">Founder, Saaru Foods</div></div>
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
          <div className="row reveal" data-d="2">
            <Link to="/contact" className="btn btn--accent btn--lg" data-magnetic>
              Start a project <span className="arrow">↗</span>
            </Link>
            <a href="mailto:hello@verto.studio" className="btn btn--ghost btn--lg">hello@verto.studio</a>
          </div>
        </div>
      </section>
    </>
  );
}
