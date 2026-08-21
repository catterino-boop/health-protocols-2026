import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowIcon,
  ProtocolCardImage,
  SiteFooter,
  SiteHeader,
  SleepHeroImage,
} from "./site-components";

export const metadata: Metadata = {
  title: "Протоколы здоровья 2026",
  description:
    "Короткие доказательные протоколы для сна, питания, движения, восстановления и профилактического ухода за здоровьем.",
};

const protocols = [
  { number: "01", title: "Как пользоваться", time: "3 мин", tone: "sand", href: "/guide/", image: "/images/guide-hero.png", alt: "Простая последовательность: выбрать цель, сделать один шаг и оценить результат" },
  { number: "02", title: "Сон", time: "8 мин", tone: "night", href: "/sleep/", image: "/images/sleep-circadian-hero.png", alt: "Суточный цикл света и сна" },
  { number: "03", title: "Питание", time: "9 мин", tone: "berry", href: "/nutrition/", image: "/images/nutrition-hero.png", alt: "Сбалансированная тарелка" },
  { number: "04", title: "Интервальное голодание", time: "6 мин", tone: "amber", href: "/fasting/", image: "/images/fasting-hero.png", alt: "Пищевое окно в суточном ритме" },
  { number: "05", title: "Движение и тренировки", time: "5 мин", tone: "sky", href: "/movement/", image: "/images/movement-card.png", alt: "Крупный план быстрой ходьбы по лестнице" },
  { number: "06", title: "Стресс и восстановление", time: "6 мин", tone: "sage", href: "/stress/", image: "/images/stress-card.png", alt: "Спокойная композиция для восстановления без цифровых стимулов" },
  { number: "07", title: "Вредные привычки: как изменить поведение", time: "7 мин", tone: "coral", href: "/habits/", image: "/images/habits-card.png", alt: "Руки с чашкой рядом с часами — пауза перед решением" },
  { number: "08", title: "Кожа", time: "8 мин", tone: "rose", href: "/skin/", image: "/images/skin-hero.png", alt: "Базовый уход и защита кожи" },
  { number: "09", title: "Волосы и кожа головы", time: "8 мин", tone: "moss", href: "/hair/", image: "/images/hair-hero.png", alt: "Базовый уход за волосами и кожей головы" },
  { number: "10", title: "БАДы", time: "9 мин", tone: "aqua", href: "/supplements/", image: "/images/supplements-hero.png", alt: "Добавки и продукты, сгруппированные по целям" },
  { number: "11", title: "Здоровье зубов", time: "6 мин", tone: "mint", href: "/oral-health/", image: "/images/oral-health-hero.png", alt: "Вечерний уход за зубами: щётка, нить и ирригатор" },
  { number: "12", title: "Контроль здоровья", time: "7 мин", tone: "blue", href: "/monitoring/", image: "/images/monitoring-hero.png", alt: "Спокойная система наблюдения за показателями здоровья" },
  { number: "13", title: "Эксперты и биохакеры", time: "9 мин", tone: "plum", href: "/experts/", image: "/images/experts-hero.png", alt: "Разные подходы к здоровью вокруг общей доказательной базы" },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="home-hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Актуализировано в 2026 году</p>
          <h1>
            Здоровье становится проще, когда есть <em>понятный протокол.</em>
          </h1>
          <p className="hero-intro">
            Короткие доказательные рекомендации для сна, питания, движения,
            восстановления и профилактического ухода — без перегрузки и крайностей.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#protocols">
              Выбрать протокол <ArrowIcon />
            </Link>
            <Link className="text-link" href="#how-it-works">
              Как это работает <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <dl className="hero-stats">
            <div><dt>13</dt><dd>протоколов</dd></div>
            <div><dt>3–9</dt><dd>минут на чтение</dd></div>
            <div><dt>2026</dt><dd>актуальные данные</dd></div>
          </dl>
        </div>
        <div className="hero-visual-wrap">
          <SleepHeroImage />
          <div className="floating-note">
            <span className="floating-icon" aria-hidden="true">☼</span>
            <span><strong>Начните со света</strong>Утренний свет помогает настроить внутренние часы.</span>
          </div>
        </div>
      </section>

      <section className="protocol-section" id="protocols">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Библиотека</p>
              <h2>Выберите одну область</h2>
            </div>
            <p>
              Не нужно менять всё сразу. Начните с темы, которая сильнее всего
              влияет на ваше самочувствие сегодня.
            </p>
          </div>

          <div className="protocol-grid">
            {protocols.map((protocol) => {
              const content = (
                <>
                  <div className={`protocol-art tone-${protocol.tone}${protocol.image ? " protocol-art-has-image" : ""}`}>
                    {protocol.image ? <ProtocolCardImage src={protocol.image} alt={protocol.alt ?? ""} /> : null}
                    <span>{protocol.number}</span>
                    {!protocol.image ? <i /> : null}
                  </div>
                  <div className="protocol-card-body">
                    <p>{protocol.number} · {protocol.time}</p>
                    <h3>{protocol.title}</h3>
                    <span className="card-arrow" aria-hidden="true">↗</span>
                  </div>
                </>
              );

              return protocol.href ? (
                <Link className="protocol-card is-ready" href={protocol.href} key={protocol.number}>
                  {content}
                </Link>
              ) : (
                <article className="protocol-card" key={protocol.number}>
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="how-section shell" id="how-it-works">
        <div className="how-copy">
          <p className="section-kicker">Как пользоваться</p>
          <h2>Не идеальный режим.<br />Рабочая последовательность.</h2>
          <p>
            Каждый протокол отделяет базу от дополнительных методов и объясняет,
            почему действие имеет смысл. Это помогает выбрать минимальную версию,
            которую реально соблюдать.
          </p>
          <Link className="button button-light" href="/sleep/">
            Посмотреть на примере сна <ArrowIcon />
          </Link>
        </div>
        <ol className="step-list">
          <li><span>01</span><div><h3>Выберите цель</h3><p>Сон, питание, энергия, движение или конкретная проблема.</p></div></li>
          <li><span>02</span><div><h3>Начните с базы</h3><p>Несколько действий с наиболее устойчивой доказательной основой.</p></div></li>
          <li><span>03</span><div><h3>Оцените результат</h3><p>Смотрите на самочувствие, удобство и устойчивые изменения, а не на идеальность.</p></div></li>
        </ol>
      </section>

      <section className="feature-banner shell">
        <div>
          <p className="section-kicker">Протокол 02</p>
          <h2>Хороший сон начинается утром.</h2>
          <p>Разберитесь, как свет, режим и дневная активность готовят вечернее засыпание.</p>
        </div>
        <Link className="round-link" href="/sleep/" aria-label="Открыть протокол сна">
          <ArrowIcon />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
