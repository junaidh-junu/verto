import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useVertoBehaviors } from '../hooks/useVertoBehaviors';

export default function ContactPage() {
  const { pathname } = useLocation();
  useVertoBehaviors(pathname);
  const successRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    let ok = true;

    const nameEl = form.querySelector('[name="name"]');
    const emailEl = form.querySelector('[name="email"]');
    const messageEl = form.querySelector('[name="message"]');
    const svcGrid = form.querySelector('[data-group="services"]');

    const setErr = (el, has) => el.closest('.field').classList.toggle('err', has);
    const clearErr = el => { el.addEventListener('input', () => el.closest('.field').classList.remove('err'), { once: true }); };

    if (!nameEl.value.trim()) { setErr(nameEl, true); clearErr(nameEl); ok = false; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailEl.value.trim())) { setErr(emailEl, true); clearErr(emailEl); ok = false; }
    if (!messageEl.value.trim()) { setErr(messageEl, true); clearErr(messageEl); ok = false; }
    if (!svcGrid.querySelector('.opt.sel')) { svcGrid.closest('.field').classList.add('err'); ok = false; }

    if (!ok) return;
    if (successRef.current) successRef.current.classList.add('show');
  }

  function toggleOpt(e) {
    const opt = e.target.closest('.opt');
    if (!opt) return;
    const grid = e.currentTarget;
    const single = grid.dataset.single === '1';
    if (single) grid.querySelectorAll('.opt').forEach(o => { if (o !== opt) o.classList.remove('sel'); });
    opt.classList.toggle('sel');
    grid.closest('.field').classList.remove('err');
  }

  return (
    <>
      {/* PAGE HEAD */}
      <header className="page-head section" data-accent="coral">
        <div className="wrap">
          <span className="eyebrow reveal">Start a project</span>
          <h1 className="display" style={{ marginTop: '18px', fontSize: 'clamp(54px,12vw,180px)', lineHeight: '.85', letterSpacing: '-.04em' }}>
            <span className="line-mask"><span>Let's make</span></span>
            <span className="line-mask" data-d="1"><span>something <em style={{ fontStyle: 'normal', color: 'var(--accent)', transition: 'color .6s' }}>good</em>.</span></span>
          </h1>
        </div>
      </header>

      <section className="section" data-accent="coral" style={{ paddingBottom: 'clamp(72px,11vw,140px)' }}>
        <div className="wrap contact-grid">

          {/* LEFT INFO */}
          <div className="cinfo reveal">
            <div style={{ marginBottom: '24px' }}>
              <span className="avail"><span className="pulse"></span> Booking projects for Q3 2026</span>
            </div>
            <div className="blk">
              <div className="lbl">Email us</div>
              <a className="big-link" href="mailto:hello@verto.studio">hello@verto.studio</a>
              <div className="sub">We reply within one business day.</div>
            </div>
            <div className="blk">
              <div className="lbl">Call</div>
              <a className="big-link" href="tel:+914840000000">+91 484 000 0000</a>
              <div className="sub">Mon–Fri, 10:00–18:00 IST</div>
            </div>
            <div className="blk">
              <div className="lbl">Studio</div>
              <div className="big-link">Kochi, Kerala</div>
              <div className="sub">Working with clients worldwide.</div>
            </div>
            <div className="blk">
              <div className="lbl">Follow</div>
              <div className="socials">
                <a className="chip" href="#">Instagram</a>
                <a className="chip" href="#">Behance</a>
                <a className="chip" href="#">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="form-card reveal" data-d="1">
            <form onSubmit={handleSubmit} noValidate>
              <div className="frow">
                <div className="field">
                  <label>Your name <span className="req">*</span></label>
                  <input type="text" name="name" placeholder="Jane Doe" />
                  <div className="msg">Please tell us your name.</div>
                </div>
                <div className="field">
                  <label>Email <span className="req">*</span></label>
                  <input type="email" name="email" placeholder="jane@company.com" />
                  <div className="msg">Enter a valid email address.</div>
                </div>
              </div>
              <div className="frow">
                <div className="field">
                  <label>Company</label>
                  <input type="text" name="company" placeholder="Company / brand" />
                </div>
                <div className="field">
                  <label>Website</label>
                  <input type="text" name="website" placeholder="yoursite.com" />
                </div>
              </div>

              <div className="field">
                <label>What do you need? <span className="req">*</span></label>
                <div className="optgrid" data-group="services" onClick={toggleOpt}>
                  <span className="opt">Branding</span>
                  <span className="opt">Packaging</span>
                  <span className="opt">Campaign</span>
                  <span className="opt">Print</span>
                  <span className="opt">Web / Digital</span>
                  <span className="opt">Wedding cards</span>
                </div>
                <div className="msg">Pick at least one.</div>
              </div>

              <div className="field">
                <label>Budget</label>
                <div className="optgrid" data-group="budget" data-single="1" onClick={toggleOpt}>
                  <span className="opt">&lt; ₹1L</span>
                  <span className="opt">₹1–5L</span>
                  <span className="opt">₹5–15L</span>
                  <span className="opt">₹15L+</span>
                  <span className="opt">Not sure yet</span>
                </div>
              </div>

              <div className="field">
                <label>Tell us about it <span className="req">*</span></label>
                <textarea name="message" rows="4" placeholder="What are you building, and what does success look like?"></textarea>
                <div className="msg">A sentence or two helps us prepare.</div>
              </div>

              <div className="submit-row">
                <button type="submit" className="btn btn--accent btn--lg" data-magnetic>
                  Send enquiry <span className="arrow">↗</span>
                </button>
                <p className="note">No spam, ever. Your details stay between us.</p>
              </div>
            </form>

            <div className="success" ref={successRef}>
              <div className="check">✓</div>
              <h3>Thanks — message sent.</h3>
              <p>We've got your enquiry and will be in touch within one business day. In the meantime, take a look at our recent work.</p>
              <Link to="/work" className="btn btn--ghost">See the work <span className="arrow">↗</span></Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
