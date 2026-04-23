import { profile } from "@/data/profile";

export function IntroPanel() {
  return (
    <aside className="intro-panel">
      <div className="intro-panel__inner l-stack">
        <span className="wordmark" aria-label="Home">
          OV
        </span>

        <div className="intro-panel__main">
          <div className="l-stack">
            <p className="eyebrow">{profile.title}</p>
            <h1 aria-label={profile.name}>
              <span>Oleksii</span>
              <span>Vyshnevskyi</span>
            </h1>
          </div>
        </div>

        <address className="contact-list l-stack">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </address>
      </div>
    </aside>
  );
}
