import { useEffect, useRef, useState } from 'react'
import { site, hero, filters, projects, archive, testimonials, contact, caseStudies } from './content.js'
import './App.css'

function Placeholder({ label, className = '', style }) {
  return (
    <div className={`placeholder ${className}`} style={style}>
      <span>{label}</span>
    </div>
  )
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Nav({ onGreen }) {
  return (
    <header className={`nav ${onGreen ? 'nav--green' : ''}`}>
      <a href="#top" className="nav__name">{site.name}</a>
      <nav className="nav__links">
        <a href={site.resumeUrl} target="_blank" rel="noreferrer">Resume</a>
        <a href="#about">About me</a>
        <a href="#contact">Get in touch</a>
      </nav>
    </header>
  )
}

function PillIcon({ type }) {
  if (type === 'avatar')
    return <span className="pill__avatar" style={hero.portrait && { backgroundImage: `url(${hero.portrait})` }} />
  if (type === 'laptop')
    return (
      <svg className="pill__icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="11" rx="1.5" fill="currentColor" opacity=".55" />
        <rect x="2" y="16" width="20" height="3" rx="1" fill="currentColor" opacity=".8" />
      </svg>
    )
  return (
    <svg className="pill__icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" opacity=".6" />
      <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor" opacity=".35" />
      <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor" opacity=".35" />
      <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" opacity=".6" />
    </svg>
  )
}

function Hero() {
  const [active, setActive] = useState(0)
  const n = hero.pills.length

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % n), 2600)
    return () => clearInterval(id)
  }, [n])

  return (
    <section className="hero" id="top">
      <p className="eyebrow reveal">{hero.eyebrow}</p>
      <h1 className="hero__title reveal">
        {hero.headline.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>

      <div className="pills">
        {hero.pills.map((p, i) => {
          let offset = i - active
          if (offset > n / 2) offset -= n
          if (offset < -n / 2) offset += n
          return (
            <button
              key={p.label}
              className={`pill ${offset === 0 ? 'pill--active' : ''}`}
              style={{ '--offset': offset }}
              onClick={() => setActive(i)}
            >
              <PillIcon type={p.icon} />
              {p.label}
            </button>
          )
        })}
      </div>

      <div className="portrait">
        <div className="portrait__card">
          {hero.portrait ? (
            <img src={hero.portrait} alt={site.name} />
          ) : (
            <Placeholder label="Portrait / video" />
          )}
          <span key={active} className="portrait__label">{hero.pills[active].label}</span>
        </div>
        <div className="portrait__reflection" aria-hidden="true">
          <span>{hero.pills[active].label}</span>
        </div>
        <div className="mouse" aria-hidden="true"><span /></div>
      </div>
    </section>
  )
}

function Work() {
  const [filter, setFilter] = useState('All')
  const shown = projects.filter((p) => filter === 'All' || p.category === filter)

  return (
    <section className="work dots" id="work">
      <h2 className="section-title reveal">Work I'm proud of</h2>
      <div className="filters reveal">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter ${f === filter ? 'filter--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid">
        {shown.map((p) => (
          <article className="card reveal" key={p.title}>
            <a href={p.href} className="card__media" style={{ background: p.tint }}>
              {p.image ? (
                <img src={p.image} alt="" className={p.fit} />
              ) : (
                <Placeholder label="Project visual" />
              )}
            </a>
            <p className="card__meta">
              {p.category} <i>•</i> <span>{p.tag}</span>
            </p>
            <h3 className="card__title"><a href={p.href} className="card__link">{p.title}</a></h3>
            <p className="card__desc">{p.description}</p>
            <a href={p.href} className="card__btn" aria-label={`Open ${p.title}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Archive() {
  const peek = archive.items.slice(0, 3)
  return (
    <section className="archive dots">
      <a href="#/archive" className="folder reveal" aria-label={`Open ${archive.title}`}>
        <div className="folder__back" />
        <div className="folder__tab" />
        {peek.map((img, i) => (
          <div className={`folder__sheet folder__sheet--${i}`} key={i}>
            {img ? <img src={img} alt="" /> : <Placeholder label="" />}
          </div>
        ))}
        <div className="folder__front" />
      </a>
      <h3 className="archive__title">{archive.title}</h3>
      <p className="archive__count">{archive.items.length} items</p>
    </section>
  )
}

function Testimonials() {
  const loop = [...testimonials, ...testimonials]
  return (
    <section className="testimonials dots" id="about">
      <h2 className="section-title reveal">
        Beyond the work, there's the
        <br />
        working together
      </h2>
      <div className="marquee">
        <div className="marquee__track">
          {loop.map((t, i) => (
            <figure className="quote" key={i} aria-hidden={i >= testimonials.length}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                {t.avatar ? <img src={t.avatar} alt="" /> : <span className="quote__avatar" />}
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ sectionRef }) {
  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <ul>
        {contact.map((c) => (
          <li key={c.strong}>
            <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {c.lead} <b>{c.strong}</b>
            </a>
          </li>
        ))}
      </ul>
      <a href="#top" className="to-top" aria-label="Back to top">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  )
}

function CaseStudy({ study }) {
  useReveal()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Everything past `sections` is optional, so number the sections as they render.
  let n = 0
  const num = () => String(++n).padStart(2, '0')
  const notes = study.posts.filter((p) => p.text)

  return (
    <article className="study">
      <header className="study__head">
        <a href="#work" className="study__back">← Back to work</a>
        <p className="eyebrow reveal">{study.eyebrow}</p>
        <h1 className="study__title reveal">{study.title}</h1>
        <p className="study__intro reveal">{study.intro}</p>
        {study.meta && (
          <dl className="study__meta reveal">
            {study.meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <div className="study__posts reveal" style={{ background: study.tint }}>
        {study.posts.map((p) => (
          <div className={`study__post ${p.aspect ? 'study__post--wide' : ''}`} style={{ aspectRatio: p.aspect, flexBasis: p.width }} key={p.title}>
            {p.image ? <img src={p.image} alt={p.title} /> : <Placeholder label={p.title} />}
          </div>
        ))}
      </div>

      <div className="study__body">
        {study.sections.map((s) => (
          <section className="study__section reveal" key={s.heading}>
            <h2><span>{num()}</span>{s.heading}</h2>
            <div>{s.body.map((t) => <p key={t}>{t}</p>)}</div>
          </section>
        ))}

        {study.decisions && (
          <section className="study__section reveal">
            <h2><span>{num()}</span>Design decisions</h2>
            <ul className="decisions">
              {study.decisions.map((d) => (
                <li key={d.element}>
                  <strong>{d.element}</strong>
                  <span>{d.why}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {notes.length > 0 && (
          <>
            <section className="study__section study__section--bare reveal">
              <h2><span>{num()}</span>Individual post explanation</h2>
            </section>
            <div className="post-notes">
              {notes.map((p, i) => (
                <div className="post-note reveal" key={p.title}>
                  <div className="post-note__media" style={{ background: study.tint }}>
                    {p.image ? <img src={p.image} alt={p.title} /> : <Placeholder label={p.title} />}
                  </div>
                  <div className="post-note__text">
                    <span>Post {i + 1}</span>
                    <h3>{p.title.replace(/^Post \d+:\s*/, '')}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {study.solution && (
          <section className="study__section reveal">
            <h2><span>{num()}</span>Final solution</h2>
            <div>{study.solution.map((t) => <p key={t}>{t}</p>)}</div>
          </section>
        )}

        {study.skills && (
          <section className="study__section reveal">
            <h2><span>{num()}</span>Skills explored</h2>
            <ul className="skills">
              {study.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </section>
        )}
      </div>

      {study.takeaway && (
        <blockquote className="study__takeaway reveal" style={{ background: study.tint }}>
          <p className="eyebrow">Takeaway</p>
          {study.takeaway}
        </blockquote>
      )}

      <a href="#work" className="study__next">← Back to all work</a>
    </article>
  )
}

function ArchivePage() {
  const [open, setOpen] = useState(null)
  useReveal()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <article className="study">
      <header className="study__head">
        <a href="#work" className="study__back">← Back to work</a>
        <h1 className="study__title reveal">{archive.title}</h1>
        <p className="study__intro reveal">{archive.items.length} items</p>
      </header>

      <div className="gallery">
        {archive.items.filter(Boolean).map((img) => (
          <button className="gallery__item reveal" key={img} onClick={() => setOpen(img)}>
            <img src={img} alt="" />
          </button>
        ))}
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <img src={open} alt="" />
          <button className="lightbox__close" aria-label="Close">×</button>
        </div>
      )}

      <a href="#work" className="study__next">← Back to all work</a>
    </article>
  )
}

function useRoute() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  if (hash.startsWith('#/archive')) return 'archive'
  const match = hash.match(/^#\/work\/([\w-]+)/)
  return match ? caseStudies[match[1]] : null
}

function App() {
  const study = useRoute()
  if (study === 'archive') {
    return (
      <>
        <Nav onGreen={false} />
        <ArchivePage />
      </>
    )
  }
  if (study) {
    return (
      <>
        <Nav onGreen={false} />
        <CaseStudy key={study.title} study={study} />
      </>
    )
  }
  return <Home />
}

function Home() {
  const contactRef = useRef(null)
  const [onGreen, setOnGreen] = useState(false)
  useReveal()

  useEffect(() => {
    // Coming back from a case study: jump to the section named in the hash.
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
    const onScroll = () => {
      const el = contactRef.current
      if (el) setOnGreen(el.getBoundingClientRect().top <= 60)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Nav onGreen={onGreen} />
      <main>
        <Hero />
        <Work />
        <Archive />
        <Testimonials />
        <Contact sectionRef={contactRef} />
      </main>
    </>
  )
}

export default App
