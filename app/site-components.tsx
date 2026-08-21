import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Протоколы здоровья 2026 — главная">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-name">Протоколы здоровья</span>
          <span className="brand-year">2026</span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          <Link href="/#protocols">Протоколы</Link>
          <Link href="/#how-it-works">Как пользоваться</Link>
          <Link href="/#about">О проекте</Link>
        </nav>

        <Link className="header-action" href="/sleep/">
          Начать со сна
          <span aria-hidden="true">↗</span>
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Открыть меню">
            <span />
            <span />
          </summary>
          <nav aria-label="Мобильная навигация">
            <Link href="/#protocols">Протоколы</Link>
            <Link href="/#how-it-works">Как пользоваться</Link>
            <Link href="/#about">О проекте</Link>
            <Link href="/sleep/">Открыть протокол сна</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="about">
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">
              <span />
            </span>
            <span className="brand-name">Протоколы здоровья</span>
            <span className="brand-year">2026</span>
          </div>
          <p className="footer-lead">
            Доказательные ориентиры, которые помогают выстраивать здоровье без
            перегрузки и крайностей.
          </p>
        </div>
        <div className="footer-note">
          <p>
            Материал актуализирован в 2026 году и носит информационный характер.
            Он не заменяет медицинскую консультацию.
          </p>
          <a href="#top">Наверх ↑</a>
        </div>
      </div>
    </footer>
  );
}

export function ProtocolHeroImage({
  src,
  alt,
  caption,
  compact = false,
}: {
  src: string;
  alt: string;
  caption: string;
  compact?: boolean;
}) {
  return (
    <figure className={compact ? "visual-frame visual-frame-compact" : "visual-frame"}>
      <img
        src={`${basePath}${src}`}
        alt={alt}
        width="1680"
        height="945"
      />
      <figcaption>
        <span className="visual-dot" aria-hidden="true" />
        {caption}
      </figcaption>
    </figure>
  );
}

export function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="article-image">
      <img src={`${basePath}${src}`} alt={alt} width="1536" height="864" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function ProtocolCardImage({ src, alt }: { src: string; alt: string }) {
  return <img className="protocol-card-image" src={`${basePath}${src}`} alt={alt} width="640" height="360" />;
}

export function SleepHeroImage({ compact = false }: { compact?: boolean }) {
  return (
    <ProtocolHeroImage
      src="/images/sleep-circadian-hero.png"
      alt="Утренний свет и вечерний сон, объединённые в один циркадный цикл"
      caption="Свет задаёт начало биологического дня"
      compact={compact}
    />
  );
}

export function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}
