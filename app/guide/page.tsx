import type { Metadata } from "next";
import Link from "next/link";
import { ReadingProgress } from "../reading-progress";
import { ProtocolHeroImage, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Как пользоваться протоколами",
  description: "Как выбрать цель, начать с минимальной версии протокола и оценить результат без перегрузки.",
};

const toc = [
  ["goal", "Выберите цель"],
  ["minimum", "Начните с минимума"],
  ["change", "Меняйте постепенно"],
  ["signals", "Оценивайте результат"],
  ["levels", "Уровни рекомендаций"],
  ["safety", "Когда нужна осторожность"],
];

export default function GuideProtocol() {
  return (
    <main id="top">
      <ReadingProgress />
      <SiteHeader />

      <section className="protocol-hero shell">
        <div className="protocol-hero-copy">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link href="/">Главная</Link><span>/</span><Link href="/#protocols">Протоколы</Link><span>/</span><span>Как пользоваться</span>
          </nav>
          <p className="eyebrow"><span /> Протокол 01 · Навигация</p>
          <h1>Как пользоваться протоколами</h1>
          <p className="protocol-deck">
            Выберите одну цель, начните с минимального действия и смотрите на
            устойчивый результат — без попытки изменить всю жизнь за один день.
          </p>
          <div className="protocol-meta">
            <span><strong>3 минуты</strong> на чтение</span>
            <span><strong>1–2 недели</strong> на пробу</span>
            <span><strong>1 цель</strong> за раз</span>
          </div>
        </div>
        <ProtocolHeroImage
          src="/images/guide-hero.png"
          alt="Рука выбирает одну из трёх карточек простого протокола"
          caption="Сначала одна цель, затем один понятный шаг"
          compact
        />
      </section>

      <div className="article-layout shell">
        <aside className="article-aside">
          <details className="toc-mobile">
            <summary>Оглавление <span>6 разделов</span></summary>
            <nav>{toc.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          </details>
          <nav className="toc-desktop" aria-label="Оглавление протокола">
            <p>В этом протоколе</p>
            {toc.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
          </nav>
          <div className="aside-note">
            <span aria-hidden="true">1</span>
            <p><strong>Одна цель.</strong> Так легче понять, какое изменение действительно сработало.</p>
          </div>
        </aside>

        <article className="protocol-article">
          <div className="article-intro">
            <p>
              Протокол — не жёсткое расписание, а короткая последовательность действий.
              Он отделяет основную пользу от дополнительных методов и помогает встроить
              рекомендации в реальную жизнь.
            </p>
          </div>

          <section className="article-section" id="goal">
            <p className="article-label">01 · Точка приложения</p>
            <h2>Выберите одну основную цель</h2>
            <div className="goal-selector">
              <span>Больше энергии</span><span>Лучше спать</span><span>Регулярно есть</span>
              <span>Больше двигаться</span><span>Снизить стресс</span><span>Решить конкретную проблему</span>
            </div>
            <p>
              Если одновременно менять сон, питание, тренировки и добавки, невозможно
              понять, что улучшило самочувствие или вызвало нежелательную реакцию. Одна
              главная цель снижает нагрузку и делает результат заметнее.
            </p>
          </section>

          <section className="minimum-card" id="minimum">
            <div className="minimum-heading"><span>Минимальная версия</span><p>Рабочая последовательность на первые одну-две недели.</p></div>
            <ol>
              <li><span>01</span><p><strong>Выберите один протокол</strong> по самой важной для вас проблеме.</p></li>
              <li><span>02</span><p><strong>Возьмите 2–3 базовых действия,</strong> которые реально повторять каждый день.</p></li>
              <li><span>03</span><p><strong>Соблюдайте их 1–2 недели,</strong> не добавляя сразу новые эксперименты.</p></li>
              <li><span>04</span><p><strong>Оцените эффект и удобство.</strong> Только затем усложняйте план.</p></li>
            </ol>
          </section>

          <section className="article-section" id="change">
            <p className="article-label">02 · Маленькая нагрузка на систему</p>
            <h2>Меняйте постепенно</h2>
            <div className="change-path" role="img" aria-label="Последовательность: база, повторение, оценка и только затем дополнение">
              <article><span>База</span><strong>Одно действие</strong></article><i>→</i>
              <article><span>Повторение</span><strong>1–2 недели</strong></article><i>→</i>
              <article><span>Оценка</span><strong>Что изменилось?</strong></article><i>→</i>
              <article><span>Следующий шаг</span><strong>Только при необходимости</strong></article>
            </div>
            <p>
              Например, для сна сначала зафиксируйте время пробуждения и добавьте
              утренний свет. Покупать трекер, полностью менять питание и начинать
              несколько добавок для этого не требуется.
            </p>
          </section>

          <section className="article-section" id="signals">
            <p className="article-label">03 · Не только цифры</p>
            <h2>Оценивайте то, что влияет на жизнь</h2>
            <div className="signal-grid">
              <article><strong>Самочувствие</strong><span>Энергия, настроение, аппетит и концентрация</span></article>
              <article><strong>Функция</strong><span>Сон, сила, выносливость и переносимость нагрузок</span></article>
              <article><strong>Устойчивость</strong><span>Удобно ли это и сможете ли вы продолжать</span></article>
              <article><strong>Данные</strong><span>Трекеры дополняют наблюдения, но не заменяют их</span></article>
            </div>
          </section>

          <section className="article-section" id="levels">
            <p className="article-label">04 · Что внедрять первым</p>
            <h2>Три уровня рекомендаций</h2>
            <div className="evidence-levels">
              <article className="level-base"><span>База</span><h3>Начните здесь</h3><p>Действия с наиболее устойчивой доказательной основой и понятным соотношением пользы и риска.</p></article>
              <article><span>Дополнительно</span><h3>Под конкретную цель</h3><p>Методы, полезные при определённых условиях или индивидуальных особенностях.</p></article>
              <article><span>Эксперимент</span><h3>Необязательная зона</h3><p>Новые технологии и чужие схемы с ограниченными данными. Они не заменяют базу.</p></article>
            </div>
          </section>

          <section className="article-section" id="safety">
            <p className="article-label">05 · Безопасность</p>
            <h2>Когда нужна осторожность</h2>
            <div className="caution-box caution-wide"><span aria-hidden="true">!</span><div><p>Не повторяйте чужие схемы рецептурных препаратов, гормонов и высоких доз добавок. При беременности, хроническом заболевании, расстройстве пищевого поведения, серьёзном нарушении сна или регулярном приёме лекарств изменения лучше обсудить с врачом.</p></div></div>
            <p>Главный критерий хорошего протокола — не сложность, а безопасность, понятность и возможность соблюдать его в обычной жизни.</p>
          </section>

          <Link className="article-next" href="/sleep/" aria-label="Открыть следующий протокол: сон">
            <div><span>Следующий протокол</span><strong>Сон</strong></div><span className="next-arrow" aria-hidden="true">↗</span>
          </Link>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
