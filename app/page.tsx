const sections = [
  {
    id: "featured-articles",
    title: "Featured Articles",
    accent: "rose",
    cards: [
      "The Digital Girlhood Experience",
      "Why Burnout Feels Romanticized",
      "The Softness We Hide"
    ]
  },
  {
    id: "psychology",
    title: "Psychology",
    accent: "blue",
    cards: [
      "Notes From A Restless Mind",
      "Attachment patterns we normalize online",
      "How to feel safe in your own mind"
    ]
  },
  {
    id: "culture",
    title: "Culture",
    accent: "yellow",
    cards: [
      "Growing Up Online",
      "Internet nostalgia and feminine identity",
      "What moodboards reveal about modern desire"
    ]
  },
  {
    id: "girlhood",
    title: "Girlhood",
    accent: "rose",
    cards: [
      "Friendship as a survival language",
      "Becoming yourself beyond perfection",
      "Soft rebellion in loud spaces"
    ]
  },
  {
    id: "poetry-expression",
    title: "Poetry & Expression",
    accent: "lavender",
    cards: [
      "Letters I never sent",
      "Poems for the version of me still healing",
      "Art as emotional translation"
    ]
  },
  {
    id: "midnight-thoughts",
    title: "Midnight Thoughts",
    accent: "blue",
    cards: [
      "What I think about at 2:17 a.m.",
      "Gentle scripts for anxious nights",
      "How to come back to your breath"
    ]
  },
  {
    id: "student-voices",
    title: "Student Voices",
    accent: "yellow",
    cards: [
      "First-gen stories of becoming",
      "On balancing ambition and tenderness",
      "Burnout diaries from campus life"
    ]
  },
  {
    id: "lifestyle-identity",
    title: "Lifestyle & Identity",
    accent: "lavender",
    cards: [
      "Style as personal mythology",
      "Designing your room like a sanctuary",
      "The confidence of choosing softness"
    ]
  }
];

export default function Home() {
  return (
    <div className="site-shell">
      <div className="aurora aurora-pink" aria-hidden />
      <div className="aurora aurora-blue" aria-hidden />
      <div className="aurora aurora-yellow" aria-hidden />
      <div className="sparkle sp-1" aria-hidden>✦</div>
      <div className="sparkle sp-2" aria-hidden>✧</div>
      <div className="sparkle sp-3" aria-hidden>✦</div>

      <header className="topbar glass">
        <h1>Psyeica</h1>
        <p className="tagline">Where psychology meets girlhood, culture, and youth expression.</p>
        <nav aria-label="Primary navigation">
          <a href="#featured-articles">Featured</a>
          <a href="#psychology">Psychology</a>
          <a href="#culture">Culture</a>
          <a href="#student-led">About</a>
          <a href="#student-voices">Student Voices</a>
        </nav>
      </header>

      <main className="homepage">
        <section className="hero glass">
          <p className="hero-tag">Editorial Issue · May 2026</p>
          <h2>Dreamy, intelligent, and emotionally expressive journalism.</h2>
          <p>
            Psyeica is a soft digital editorial space exploring inner life, internet culture, artistic identity,
            and the language of becoming. Every page is built like a moodboard and written like a diary with depth.
          </p>
        </section>

        <section id="student-led" className="about-mag glass">
          <h3>About Psyeica</h3>
          <p>
            Psyeica is a student-led digital magazine dedicated to creativity, psychology, storytelling,
            and youth perspectives from around the world. We publish essays, poems, visual narratives,
            and reflective features that center emotional honesty, feminine nuance, and cultural curiosity.
          </p>
        </section>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mag-section">
            <div className="section-head">
              <h3>{section.title}</h3>
              <a href="#">View all →</a>
            </div>
            <div className="card-grid">
              {section.cards.map((card) => (
                <article key={card} className={`article-card glass accent-${section.accent}`}>
                  <p>{section.title}</p>
                  <h4>{card}</h4>
                  <a href="#">Read article →</a>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="writer-feature glass" aria-label="Featured Writer of the Month">
          <p className="label">Featured Writer of the Month</p>
          <h3>Naomi Elowen</h3>
          <p>
            Naomi writes emotionally rich essays on identity, nervous-system healing, and modern intimacy,
            blending lyrical storytelling with grounded psychological insight.
          </p>
          <a href="#">Read Naomi’s column →</a>
        </section>
      </main>

      <footer className="glass soft-footer">
        <div>
          <h5>Psyeica Magazine</h5>
          <p>Soft thoughts, sharp ideas, and beautiful emotional storytelling.</p>
        </div>
        <div className="footer-links">
          <a href="#">Submit Writing</a>
          <a href="#">Pitch a Story</a>
          <a href="#">Join the Newsletter</a>
        </div>
        <div className="socials" aria-label="Social links">
          <a href="#" aria-label="Instagram">◉</a>
          <a href="#" aria-label="Pinterest">◈</a>
          <a href="#" aria-label="TikTok">◍</a>
          <a href="#" aria-label="YouTube">◌</a>
        </div>
      </footer>
    </div>
  );
}
