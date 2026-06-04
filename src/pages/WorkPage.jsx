import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useVertoBehaviors } from '../hooks/useVertoBehaviors';

export default function WorkPage() {
  const { pathname } = useLocation();
  useVertoBehaviors(pathname);

  useEffect(() => {
    const filters = document.querySelectorAll('.filter');
    const sections = document.querySelectorAll('.cat-section');

    const handleClick = function () {
      const cat = this.dataset.filter;
      filters.forEach(x => x.classList.remove('on'));
      this.classList.add('on');
      sections.forEach(s => {
        if (cat === 'all' || s.dataset.category === cat) {
          s.classList.remove('cat-hidden');
        } else {
          s.classList.add('cat-hidden');
        }
      });
    };

    filters.forEach(f => f.addEventListener('click', handleClick));
    return () => filters.forEach(f => f.removeEventListener('click', handleClick));
  }, [pathname]);

  return (
    <>
      {/* PAGE HEAD */}
      <header className="page-head section" data-accent="coral">
        <div className="wrap">
          <span className="eyebrow reveal">Portfolio · 2018—2026</span>
          <h1 className="display" style={{ marginTop: '18px', fontSize: 'clamp(52px,11vw,168px)', lineHeight: '.85', letterSpacing: '-.04em' }}>
            <span className="line-mask"><span>All of our</span></span>
            <span className="line-mask" data-d="1"><span><em style={{ fontStyle: 'normal', color: 'var(--accent)', transition: 'color .6s' }}>work.</em></span></span>
          </h1>
          <p className="lead reveal" data-d="2" style={{ maxWidth: '500px', marginTop: 'clamp(18px,3vw,34px)' }}>
            20 projects across 6 disciplines — brands, packaging systems, campaigns, print, digital and bespoke wedding cards.
          </p>
        </div>
        <div className="wrap">
          <div className="filter-bar" role="group" aria-label="Filter by category">
            <button className="filter on" data-filter="all">All <span className="fc">20</span></button>
            <button className="filter" data-filter="branding">Brand Building <span className="fc">04</span></button>
            <button className="filter" data-filter="packaging">Packaging <span className="fc">04</span></button>
            <button className="filter" data-filter="campaigns">Campaigns <span className="fc">03</span></button>
            <button className="filter" data-filter="print">Print <span className="fc">03</span></button>
            <button className="filter" data-filter="digital">Digital <span className="fc">03</span></button>
            <button className="filter" data-filter="wedding">Wedding Cards <span className="fc">03</span></button>
          </div>
        </div>
      </header>

      {/* 01 — BRAND BUILDING */}
      <section className="cat-section section" data-accent="coral" data-category="branding">
        <div className="wrap">
          <div className="cat-head reveal">
            <div>
              <span className="cat-num">01 / Brand Building</span>
              <h2 className="cat-title">Brand<br />Building</h2>
            </div>
            <span className="cat-count">4 projects</span>
          </div>
          <div className="proj-grid">
            <a href="#" className="pcard w7 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#2f6bff,#6b4bf0)' }}></div><span className="idx">/ 01</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Northbank</h3><div className="pcat">Identity · Strategy · Web</div></div><span className="yr">'25</span></div>
            </a>
            <a href="#" className="pcard w5 reveal" data-d="1">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#241812,#8a7c72)' }}></div><span className="idx">/ 02</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Kessler &amp; Park</h3><div className="pcat">Identity · Rebrand</div></div><span className="yr">'23</span></div>
            </a>
            <a href="#" className="pcard w5 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#bfe817,#14a37f)' }}></div><span className="idx">/ 03</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Marigold</h3><div className="pcat">Brand · Identity · Guidelines</div></div><span className="yr">'24</span></div>
            </a>
            <a href="#" className="pcard w7 reveal" data-d="1">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#1a0a30,#6b4bf0)' }}></div><span className="idx">/ 04</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Wavr Audio</h3><div className="pcat">Brand · Strategy · Motion Mark</div></div><span className="yr">'24</span></div>
            </a>
          </div>
        </div>
      </section>

      {/* 02 — PACKAGING */}
      <section className="cat-section section" data-accent="violet" data-category="packaging">
        <div className="wrap">
          <div className="cat-head reveal">
            <div>
              <span className="cat-num">02 / Packaging Design</span>
              <h2 className="cat-title">Packaging<br />Design</h2>
            </div>
            <span className="cat-count">4 projects</span>
          </div>
          <div className="proj-grid">
            <a href="#" className="pcard w5 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#ff5436,#ffac1c)' }}></div><span className="idx">/ 01</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Saaru Foods</h3><div className="pcat">Packaging Range · Retail</div></div><span className="yr">'25</span></div>
            </a>
            <a href="#" className="pcard w7 reveal" data-d="1">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#0d3b2e,#bfe817)' }}></div><span className="idx">/ 02</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Atlas Tea</h3><div className="pcat">Premium Packaging · Print</div></div><span className="yr">'24</span></div>
            </a>
            <a href="#" className="pcard w7 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#14a37f,#bfe817)' }}></div><span className="idx">/ 03</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Loom &amp; Co</h3><div className="pcat">Textile Brand · Packaging</div></div><span className="yr">'22</span></div>
            </a>
            <a href="#" className="pcard w5 reveal" data-d="1">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#1a2a3a,#14a37f)' }}></div><span className="idx">/ 04</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Hodei Botanicals</h3><div className="pcat">Skincare Range · Packaging</div></div><span className="yr">'23</span></div>
            </a>
          </div>
        </div>
      </section>

      {/* 03 — CAMPAIGNS */}
      <section className="cat-section section" data-accent="blue" data-category="campaigns">
        <div className="wrap">
          <div className="cat-head reveal">
            <div>
              <span className="cat-num">03 / Campaigns &amp; Media</span>
              <h2 className="cat-title">Campaigns<br />&amp; Media</h2>
            </div>
            <span className="cat-count">3 projects</span>
          </div>
          <div className="proj-grid">
            <a href="#" className="pcard w8 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#ff3da6,#6b4bf0)' }}></div><span className="idx">/ 01</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Vire Studios</h3><div className="pcat">Brand Film · Campaign · Social</div></div><span className="yr">'24</span></div>
            </a>
            <a href="#" className="pcard w4 reveal" data-d="1">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#ffac1c,#ff5436)' }}></div><span className="idx">/ 02</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Solaris Energy</h3><div className="pcat">National Launch</div></div><span className="yr">'25</span></div>
            </a>
            <a href="#" className="pcard w12 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#bfe817 0%,#2f6bff 55%,#ff3da6 100%)' }}></div><span className="idx">/ 03</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Marigold — Annual Social Campaign</h3><div className="pcat">Social · OOH · Digital Display</div></div><span className="yr">'24</span></div>
            </a>
          </div>
        </div>
      </section>

      {/* 04 — PRINT */}
      <section className="cat-section section" data-accent="lime" data-category="print">
        <div className="wrap">
          <div className="cat-head reveal">
            <div>
              <span className="cat-num">04 / Print Management</span>
              <h2 className="cat-title">Print<br />Management</h2>
            </div>
            <span className="cat-count">3 projects</span>
          </div>
          <div className="proj-grid">
            <a href="#" className="pcard w4 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#241812,#2f6bff)' }}></div><span className="idx">/ 01</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Northbank Report</h3><div className="pcat">Annual Report · Litho Print</div></div><span className="yr">'25</span></div>
            </a>
            <a href="#" className="pcard w4 reveal" data-d="1">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#ff5436,#241812)' }}></div><span className="idx">/ 02</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Saaru Retail Display</h3><div className="pcat">POS · Print Production</div></div><span className="yr">'25</span></div>
            </a>
            <a href="#" className="pcard w4 reveal" data-d="2">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#3a2810,#8a7c72)' }}></div><span className="idx">/ 03</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Kessler &amp; Park</h3><div className="pcat">Stationery Suite · Production</div></div><span className="yr">'23</span></div>
            </a>
          </div>
        </div>
      </section>

      {/* 05 — DIGITAL */}
      <section className="cat-section section" data-accent="magenta" data-category="digital">
        <div className="wrap">
          <div className="cat-head reveal">
            <div>
              <span className="cat-num">05 / Digital &amp; Web</span>
              <h2 className="cat-title">Digital<br />&amp; Web</h2>
            </div>
            <span className="cat-count">3 projects</span>
          </div>
          <div className="proj-grid">
            <a href="#" className="pcard w7 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#22d3ee,#2f6bff)' }}></div><span className="idx">/ 01</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Northbank</h3><div className="pcat">Website · CMS · Motion</div></div><span className="yr">'25</span></div>
            </a>
            <a href="#" className="pcard w5 reveal" data-d="1">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#ff3da6,#ffac1c)' }}></div><span className="idx">/ 02</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Vire Motion System</h3><div className="pcat">Motion Identity · Digital</div></div><span className="yr">'24</span></div>
            </a>
            <a href="#" className="pcard w12 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#6b4bf0,#22d3ee)' }}></div><span className="idx">/ 03</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Wavr Audio — Product Website</h3><div className="pcat">Web Design · UX · Motion · Social Kit</div></div><span className="yr">'24</span></div>
            </a>
          </div>
        </div>
      </section>

      {/* 06 — WEDDING */}
      <section className="cat-section section" data-accent="amber" data-category="wedding">
        <div className="wrap">
          <div className="cat-head reveal">
            <div>
              <span className="cat-num">06 / Wedding Cards</span>
              <h2 className="cat-title">Wedding<br />Cards</h2>
            </div>
            <span className="cat-count">3 projects</span>
          </div>
          <div className="proj-grid">
            <a href="#" className="pcard w5 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#ffac1c,#ff5436)' }}></div><span className="idx">/ 01</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Hodei</h3><div className="pcat">Letterpress Suite · 5-Piece</div></div><span className="yr">'23</span></div>
            </a>
            <a href="#" className="pcard w7 reveal" data-d="1">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#ff3da6,#ffac1c)' }}></div><span className="idx">/ 02</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>Ananya × Rohan</h3><div className="pcat">Foil Stamping · Bespoke Illustration</div></div><span className="yr">'24</span></div>
            </a>
            <a href="#" className="pcard w12 reveal">
              <div className="vis"><div className="fill" style={{ background: 'linear-gradient(135deg,#6b4bf0,#ff3da6)' }}></div><span className="idx">/ 03</span></div>
              <div className="go">↗</div>
              <div className="pmeta"><div className="pm-left"><h3>The Mehra Collective</h3><div className="pcat">Illustrated Suite · Letterpress · Gold Foil · Emboss</div></div><span className="yr">'25</span></div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-pad cta" data-accent="coral">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ justifyContent: 'center', display: 'flex' }}>Your project, next</span>
          <h2 className="display reveal" data-d="1" style={{ marginTop: '24px' }}>
            Let's add you<br />to the <em>list</em>.
          </h2>
          <div className="crow reveal" data-d="2">
            <Link to="/contact" className="btn btn--accent btn--lg" data-magnetic>
              Start a project <span className="arrow">↗</span>
            </Link>
            <Link to="/about" className="btn btn--ghost btn--lg">Meet the studio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
