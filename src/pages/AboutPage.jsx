import { Link, useLocation } from 'react-router-dom';
import { useVertoBehaviors } from '../hooks/useVertoBehaviors';

export default function AboutPage() {
  const { pathname } = useLocation();
  useVertoBehaviors(pathname);

  return (
    <>
      {/* PAGE HEAD */}
      <header className="page-head section" data-accent="violet">
        <div className="wrap">
          <span className="eyebrow reveal">The studio · Est. 2014</span>
          <h1 className="display" style={{ marginTop: '18px', fontSize: 'clamp(52px,11vw,170px)', lineHeight: '.85', letterSpacing: '-.04em' }}>
            <span className="line-mask"><span>We turn ideas</span></span>
            <span className="line-mask" data-d="1"><span>into <em style={{ fontStyle: 'normal', color: 'var(--accent)', transition: 'color .6s' }}>pixels.</em></span></span>
          </h1>
        </div>
      </header>

      {/* MANIFESTO */}
      <section className="section section-pad" data-accent="violet" style={{ paddingTop: 'clamp(30px,5vw,60px)' }}>
        <div className="wrap man-grid">
          <p className="manifesto reveal">
            A multidisciplinary studio that helps brands <span className="accent-text">turn</span> — from where they are to where they need to be.
          </p>
          <div className="man-side reveal" data-d="1">
            <p>Verto started in 2014 with a stubborn belief: good design isn't decoration, it's a business advantage. Over a decade later, that belief still runs everything we make.</p>
            <p>We're a tight team of strategists, designers and makers working across brand, packaging, advertising and print. Small enough to care about every pixel, sharp enough to ship work that performs.</p>
            <p>The name says it best. <em>Verto</em> — Latin for "to turn, to change." We exist to help ambitious companies change how the world sees them. Not cosmetically. Fundamentally.</p>
            <p>We don't do trends. We do rigour — and we stay with you until the work lands exactly as intended, in every market and on every surface.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" data-accent="blue" style={{ paddingBottom: 'clamp(50px,7vw,90px)' }}>
        <div className="wrap">
          <div className="about-stats reveal">
            <div><div className="n"><span data-count="11">0</span></div><div className="l">Years in business</div></div>
            <div><div className="n"><span className="accent-text" data-count="240" data-suffix="+">0</span></div><div className="l">Projects delivered</div></div>
            <div><div className="n"><span data-count="14">0</span></div><div className="l">People in the studio</div></div>
            <div><div className="n"><span className="accent-text" data-count="9">0</span></div><div className="l">Countries served</div></div>
          </div>
        </div>
      </section>

      {/* CLIENTS STRIP */}
      <section className="clients-strip" data-accent="blue">
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
            <span className="item">Solaris Energy <span className="star">✦</span></span>
            <span className="item">Wavr Audio <span className="star">✦</span></span>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-pad" data-accent="blue" style={{ paddingTop: 'clamp(50px,7vw,90px)' }}>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="display reveal">How we<br />think</h2>
            <p className="lead sh-right reveal" data-d="1">Three principles we refuse to compromise on — whatever the brief, whatever the budget.</p>
          </div>
          <div className="values">
            <div className="vcard reveal">
              <div className="blob"></div>
              <span className="vn">/ 01</span>
              <div>
                <h3>Strategy first</h3>
                <p>Every pixel earns its place. We start with the problem, the market and the audience — never with a trend. Decoration without direction is just noise.</p>
              </div>
            </div>
            <div className="vcard reveal" data-d="1">
              <div className="blob"></div>
              <span className="vn">/ 02</span>
              <div>
                <h3>Craft obsessed</h3>
                <p>The 2% nobody notices is the 2% that makes work feel premium. We sweat the kerning, the dieline, the paper finish, the press run. It shows.</p>
              </div>
            </div>
            <div className="vcard reveal" data-d="2">
              <div className="blob"></div>
              <span className="vn">/ 03</span>
              <div>
                <h3>Built to adapt</h3>
                <p>We shape our process around your problem. No rigid templates, no design-by-committee — just the right tool, the right team, and the right outcome.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section section-pad" data-accent="magenta" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="display reveal">The people<br />behind it</h2>
            <p className="lead sh-right reveal" data-d="1">Six makers, one standard.</p>
          </div>
          <div className="team">
            <div className="member reveal">
              <div className="ph"><div className="fill" style={{ background: 'linear-gradient(135deg,#ff5436,#ffac1c)' }}></div></div>
              <div className="nm">Ravi Menon</div>
              <div className="rl">Founder · Creative Director</div>
              <p className="bio">11 years shaping brands that move markets. Obsessed with the idea that design is a business tool, not a styling exercise.</p>
            </div>
            <div className="member reveal" data-d="1">
              <div className="ph"><div className="fill" style={{ background: 'linear-gradient(135deg,#6b4bf0,#2f6bff)' }}></div></div>
              <div className="nm">Nila Thomas</div>
              <div className="rl">Design Lead</div>
              <p className="bio">Leads identity and packaging work. Former NID graduate with a razor eye for type and a deep love for paper finishes.</p>
            </div>
            <div className="member reveal" data-d="2">
              <div className="ph"><div className="fill" style={{ background: 'linear-gradient(135deg,#ff3da6,#6b4bf0)' }}></div></div>
              <div className="nm">Arjun Pillai</div>
              <div className="rl">Strategy &amp; Brand</div>
              <p className="bio">Connects business goals to creative briefs. Believes a strong brief is already half the design done.</p>
            </div>
            <div className="member reveal">
              <div className="ph"><div className="fill" style={{ background: 'linear-gradient(135deg,#14a37f,#bfe817)' }}></div></div>
              <div className="nm">Sara Koshy</div>
              <div className="rl">Packaging &amp; Print</div>
              <p className="bio">Runs every press run and dieline review. The reason our packaging always ships looking exactly like the approved proof.</p>
            </div>
            <div className="member reveal" data-d="1">
              <div className="ph"><div className="fill" style={{ background: 'linear-gradient(135deg,#22d3ee,#2f6bff)' }}></div></div>
              <div className="nm">Devika Nair</div>
              <div className="rl">Digital &amp; Motion</div>
              <p className="bio">Brings brands to life on screen — websites, motion systems, social kits. She thinks in interactions, not just frames.</p>
            </div>
            <div className="member reveal" data-d="2">
              <div className="ph"><div className="fill" style={{ background: 'linear-gradient(135deg,#ffac1c,#ff3da6)' }}></div></div>
              <div className="nm">Kiran Iyer</div>
              <div className="rl">Campaigns &amp; Copy</div>
              <p className="bio">Writes headlines people remember and art-directs campaigns people talk about. Formerly JWT and Leo Burnett.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section section-pad" data-accent="lime" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="display reveal">A decade<br />of turning</h2>
            <p className="lead sh-right reveal" data-d="1">From a two-person studio in Kochi to a team of 14 working across 9 countries.</p>
          </div>
          <div className="timeline">
            <div className="tl-item reveal">
              <span className="tl-year">2014</span><span className="tl-dot"></span>
              <div className="tl-content"><h3>Founded in Kochi</h3><p>Ravi Menon starts Verto with one collaborator and a single belief — that rigorous design is a business advantage, not a luxury. First client: a heritage textile brand in Kerala.</p></div>
            </div>
            <div className="tl-item reveal">
              <span className="tl-year">2016</span><span className="tl-dot"></span>
              <div className="tl-content"><h3>First national packaging brief</h3><p>Atlas Tea — a full packaging system for a premium loose-leaf range — becomes Verto's first project to hit national retail shelves. The work wins recognition at the India Design Mark awards.</p></div>
            </div>
            <div className="tl-item reveal">
              <span className="tl-year">2018</span><span className="tl-dot"></span>
              <div className="tl-content"><h3>Studio expands to 8 people</h3><p>Dedicated strategy, packaging and digital disciplines established. The studio begins taking on D2C brand builds alongside its packaging work — and ships its first bespoke wedding card suite.</p></div>
            </div>
            <div className="tl-item reveal">
              <span className="tl-year">2021</span><span className="tl-dot"></span>
              <div className="tl-content"><h3>First international project</h3><p>Northbank Financial (Singapore) becomes the studio's first international brand build. The project opens Verto to a new category: financial services identity done without the corporate clichés.</p></div>
            </div>
            <div className="tl-item reveal">
              <span className="tl-year">2023</span><span className="tl-dot"></span>
              <div className="tl-content"><h3>Campaigns practice launched</h3><p>Kiran Iyer joins from Leo Burnett and the studio formalises its campaigns discipline. Vire Studios becomes the first brand film produced entirely in-house — scoring 4M+ views in the first week.</p></div>
            </div>
            <div className="tl-item reveal">
              <span className="tl-year">2026</span><span className="tl-dot"></span>
              <div className="tl-content"><h3>14 people, 9 countries, still refusing to blend in</h3><p>240+ projects. 38 industry recognitions. And the same stubborn belief we started with: design should change how the world sees a brand — not just how it looks.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section section-pad" data-accent="amber" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="display reveal">Awards &amp;<br />recognition</h2>
            <p className="lead sh-right reveal" data-d="1">38 wins across industry bodies — but the real test is still the shelf.</p>
          </div>
          <div className="awards-grid reveal">
            <div className="aw-item"><span className="aw-year">2025</span><div className="aw-title">Brand of the Year — Small Studio</div><div className="aw-org">India Brand Council</div></div>
            <div className="aw-item"><span className="aw-year">2025</span><div className="aw-title">Gold — Packaging Design</div><div className="aw-org">Kyoorius Design Awards</div></div>
            <div className="aw-item"><span className="aw-year">2024</span><div className="aw-title">Best Integrated Campaign</div><div className="aw-org">Abby Awards</div></div>
            <div className="aw-item"><span className="aw-year">2024</span><div className="aw-title">Silver — Brand Identity</div><div className="aw-org">Kyoorius Design Awards</div></div>
            <div className="aw-item"><span className="aw-year">2023</span><div className="aw-title">Design Mark — Packaging</div><div className="aw-org">India Design Mark, NID</div></div>
            <div className="aw-item"><span className="aw-year">2022</span><div className="aw-title">Communication Design Excellence</div><div className="aw-org">CII Design Excellence Awards</div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-pad cta" data-accent="coral">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ justifyContent: 'center', display: 'flex' }}>Like how we think?</span>
          <h2 className="display reveal" data-d="1" style={{ marginTop: '24px' }}>
            Let's <em>work</em><br />together.
          </h2>
          <div className="crow reveal" data-d="2">
            <Link to="/contact" className="btn btn--accent btn--lg" data-magnetic>
              Start a project <span className="arrow">↗</span>
            </Link>
            <Link to="/work" className="btn btn--ghost btn--lg">See the work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
