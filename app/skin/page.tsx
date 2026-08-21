import type { Metadata } from "next";
import Link from "next/link";
import { ReadingProgress } from "../reading-progress";
import { ProtocolHeroImage, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Кожа: базовый протокол",
  description:
    "Практический протокол ухода за кожей: очищение, увлажнение, SPF 30+, ретиноиды, ниацинамид, витамин C, азелаиновая и салициловая кислоты.",
};

const toc = [
  ["minimum", "Минимальная рутина"],
  ["cleansing", "Очищение"],
  ["barrier", "Кожный барьер"],
  ["sun", "Защита от солнца"],
  ["new-product", "Новое средство"],
  ["actives", "Активные ингредиенты"],
  ["retinoids", "Ретиноиды"],
  ["one-goal", "Одна главная задача"],
  ["timeline", "Когда ждать результат"],
  ["dermatologist", "Когда нужен врач"],
];

export default function SkinProtocol() {
  return (
    <main id="top">
      <ReadingProgress />
      <SiteHeader />

      <section className="protocol-hero shell">
        <div className="protocol-hero-copy">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link href="/">Главная</Link><span>/</span><Link href="/#protocols">Протоколы</Link><span>/</span><span>Кожа</span>
          </nav>
          <p className="eyebrow"><span /> Протокол 08 · Уход</p>
          <h1>Кожа: базовый протокол</h1>
          <p className="protocol-deck">
            Короткая рутина, которая поддерживает кожный барьер и защищает от солнца.
            Активные средства добавляются только под конкретную задачу.
          </p>
          <div className="protocol-meta">
            <span><strong>8 минут</strong> на чтение</span>
            <span><strong>3 действия</strong> в основе</span>
            <span><strong>2026</strong> актуализация</span>
          </div>
        </div>
        <ProtocolHeroImage
          src="/images/skin-hero.png"
          alt="Женщина наносит солнцезащитный крем рядом с базовыми средствами ухода"
          caption="Очищение, увлажнение и защита от солнца — основа ухода"
          compact
        />
      </section>

      <div className="article-layout shell">
        <aside className="article-aside">
          <details className="toc-mobile">
            <summary>Оглавление <span>10 разделов</span></summary>
            <nav>{toc.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
          </details>
          <nav className="toc-desktop" aria-label="Оглавление протокола">
            <p>В этом протоколе</p>
            {toc.map(([id, label], index) => (
              <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>
            ))}
          </nav>
          <div className="aside-note">
            <span aria-hidden="true">3</span>
            <p><strong>Больше не значит лучше.</strong> Начните с трёх базовых действий, а не с десяти банок.</p>
          </div>
        </aside>

        <article className="protocol-article">
          <div className="article-intro">
            <p>
              Здоровье кожи не зависит от количества средств на полке. Для большинства
              людей основную пользу дают мягкое очищение, поддержание барьера и защита
              от солнца. Одновременное введение множества активов чаще вызывает
              раздражение, чем ускоряет результат.
            </p>
          </div>

          <section className="article-section" id="minimum">
            <p className="article-label">01 · Ежедневная основа</p>
            <h2>Минимальная рутина</h2>
            <div className="skin-routine" role="img" aria-label="Утром: мягкое очищение при необходимости, увлажнение и SPF; вечером: очищение, увлажнение и один актив при необходимости">
              <article className="routine-morning"><span>Утро</span><ol><li>Вода или мягкое очищение</li><li>Увлажнение при необходимости</li><li>Защита широкого спектра SPF 30+</li></ol></article>
              <div className="routine-sun" aria-hidden="true">☼</div>
              <article className="routine-evening"><span>Вечер</span><ol><li>Удалить макияж и SPF</li><li>Мягко очистить кожу</li><li>Увлажнить</li><li>Один актив — только под задачу</li></ol></article>
            </div>
            <p>Если утром кожа комфортно чувствует себя без очищающего средства, использовать его дважды в день необязательно.</p>
          </section>

          <section className="article-section" id="cleansing">
            <p className="article-label">02 · Без «скрипа»</p>
            <h2>Мягкое очищение</h2>
            <p>
              Очищение должно удалять загрязнения, пот, макияж и солнцезащитное
              средство, не повреждая защитный барьер кожи.
            </p>
            <div className="cleansing-rules">
              <span>Прохладная или тёплая вода</span><span>Без щёток и жёстких скрабов</span>
              <span>Не тереть полотенцем</span><span>При чувствительности — без отдушек</span>
              <span>Не добиваться ощущения «скрипа»</span>
            </div>
            <p>Регулярная стянутость после умывания может означать, что очищение слишком агрессивное.</p>
          </section>

          <section className="article-section" id="barrier">
            <p className="article-label">03 · Удержание влаги</p>
            <h2>Увлажнение и кожный барьер</h2>
            <p>
              Кожный барьер уменьшает потерю воды и защищает от раздражителей. Сухой
              воздух, частое очищение, кислоты и ретиноиды могут временно его нарушать.
            </p>
            <div className="barrier-diagram" role="img" aria-label="Увлажняющие компоненты притягивают воду, липиды поддерживают барьер, окклюзивные компоненты уменьшают потерю влаги">
              <article><span>Притянуть воду</span><strong>Глицерин · гиалуроновая кислота · мочевина</strong></article>
              <i>+</i>
              <article><span>Поддержать барьер</span><strong>Керамиды · сквалан</strong></article>
              <i>+</i>
              <article><span>Уменьшить потерю</span><strong>Вазелин и другие окклюзивы</strong></article>
            </div>
            <p>
              Жирной коже может подойти лёгкий гель, сухой — более плотный крем.
              Наличие акне не означает, что увлажнение нужно исключить: пересушивание
              часто усиливает раздражение и ухудшает переносимость лечения.
            </p>
          </section>

          <section className="article-section" id="sun">
            <p className="article-label">04 · Главная профилактика</p>
            <h2>Защита от солнца</h2>
            <p>
              Ультрафиолет участвует в развитии рака кожи, пигментации и преждевременных
              изменений кожи. Поэтому защита от солнца — основа как профилактического,
              так и антивозрастного ухода.
            </p>
            <div className="sun-shield">
              <div><strong>SPF 30+</strong><span>Широкий спектр UVA/UVB</span></div>
              <ul><li>Выбирайте комфортную текстуру для регулярного нанесения.</li><li>При спорте, жаре и плавании — водостойкое средство.</li><li>Обновляйте на улице примерно каждые два часа и после воды или сильного потоотделения.</li><li>Не забывайте лицо, шею, уши и другие открытые участки.</li></ul>
            </div>
            <p>
              SPF дополняют тень, головной убор, очки и одежда. При мелазме и
              поствоспалительной пигментации может быть полезно тонированное средство
              с оксидами железа, которое частично защищает и от видимого света.
            </p>
          </section>

          <section className="article-section" id="new-product">
            <p className="article-label">05 · Один шаг за раз</p>
            <h2>Как вводить новое средство</h2>
            <div className="product-intro-flow">
              <article><span>01</span><p>Добавьте только один новый актив.</p></article>
              <article><span>02</span><p>Проверьте на небольшом участке 7–10 дней.</p></article>
              <article><span>03</span><p>Начните с 2–3 применений в неделю.</p></article>
              <article><span>04</span><p>Увеличивайте частоту только при хорошей переносимости.</p></article>
              <article><span>05</span><p>Дайте средству достаточно времени.</p></article>
            </div>
            <div className="caution-box"><span aria-hidden="true">!</span><p>Жжение, сильный зуд и отёк — не признак того, что средство «работает». Прекратите применение и оцените реакцию.</p></div>
          </section>

          <section className="article-section" id="actives">
            <p className="article-label">06 · Выбор под задачу</p>
            <h2>Активные ингредиенты</h2>
            <div className="actives-grid">
              <article><span>Сильная база</span><h3>Ретиноиды и ретинол</h3><p>Акне, неровная текстура и фотостарение. Эффективны, но часто раздражают.</p></article>
              <article><span>Базовая поддержка</span><h3>Глицерин и керамиды</h3><p>Сухость, стянутость и повреждённый кожный барьер.</p></article>
              <article><span>Умеренная база</span><h3>Ниацинамид 2–5%</h3><p>Барьер, жирность, умеренное покраснение и пигментация. Выше — не обязательно лучше.</p></article>
              <article><span>Зависит от формулы</span><h3>Витамин C</h3><p>Антиоксидантная поддержка и пигментация. Не заменяет SPF.</p></article>
              <article><span>Много задач</span><h3>Азелаиновая кислота</h3><p>Акне, следы после него, мелазма и некоторые проявления розацеа.</p></article>
              <article><span>Закупоренные поры</span><h3>Салициловая кислота</h3><p>Чёрные точки и жирность. Частое применение может пересушивать.</p></article>
              <article><span>Воспалительное акне</span><h3>Бензоилпероксид</h3><p>Уменьшает количество бактерий; низкие концентрации часто раздражают меньше.</p></article>
            </div>
          </section>

          <section className="article-section" id="retinoids">
            <p className="article-label">07 · Наиболее изученный актив</p>
            <h2>Ретиноиды и ретинол</h2>
            <p>
              Производные витамина A влияют на обновление клеток, образование коллагена
              и закупоривание пор. Рецептурный третиноин изучен лучше большинства
              косметических антивозрастных ингредиентов; ретинол действует мягче,
              а результат зависит от концентрации и формулы.
            </p>
            <div className="retinoid-start">
              <span>Вечером на сухую кожу</span><span>Начать с 2 раз в неделю</span>
              <span>Добавить увлажнение</span><span>Не наносить на раздражённую кожу</span>
              <span>Ежедневно защищаться от солнца</span>
            </div>
            <p>
              При выраженной сухости уменьшите частоту или временно остановитесь.
              Ретиноиды и ретинол обычно не используют во время беременности; при её
              планировании и грудном вскармливании уход обсуждают с врачом.
            </p>
          </section>

          <section className="article-section" id="one-goal">
            <p className="article-label">08 · Не всё одновременно</p>
            <h2>Выберите одну главную задачу</h2>
            <div className="skin-goals">
              <article><span>Сухость</span><strong>Сначала восстановить барьер</strong></article>
              <article><span>Акне</span><strong>Один подходящий противовоспалительный актив</strong></article>
              <article><span>Пигментация</span><strong>SPF и одно осветляющее средство</strong></article>
              <article><span>Фотостарение</span><strong>Солнцезащита и постепенно введённый ретиноид</strong></article>
            </div>
            <p>
              Одновременное введение ретиноида, кислот, бензоилпероксида и нескольких
              сывороток затрудняет понимание реакции. Если кожа стала красной и
              болезненной, временно оставьте только мягкое очищение, увлажнение и SPF.
            </p>
            <div className="micro-humor"><span>Полка не лечит</span><p>Пять активов в один вечер — не ускоренная программа. Чаще это ускоренный путь к раздражению.</p></div>
          </section>

          <section className="article-section" id="timeline">
            <p className="article-label">09 · Реалистичные сроки</p>
            <h2>Когда ожидать результат</h2>
            <div className="skin-timeline" role="img" aria-label="Увлажнение может ощущаться в первые дни, оценка акне занимает от 6 до 8 недель, пигментация и фотостарение — месяцы">
              <article><strong>Дни</strong><span>Увлажнение и уменьшение стянутости</span></article>
              <i>→</i><article><strong>6–8 недель</strong><span>Первая осмысленная оценка терапии акне</span></article>
              <i>→</i><article><strong>Месяцы</strong><span>Пигментация и признаки фотостарения</span></article>
            </div>
            <p>Не меняйте средство каждую неделю: коже требуется время, а частые эксперименты повышают риск раздражения.</p>
          </section>

          <section className="article-section" id="dermatologist">
            <p className="article-label">10 · Медицинская оценка</p>
            <h2>Когда нужен дерматолог</h2>
            <div className="stop-signs recovery-signs">
              <span>Болезненное глубокое акне</span><span>Рубцы</span><span>Нет улучшения несколько месяцев</span>
              <span>Постоянные зуд и шелушение</span><span>Выраженная реакция на средство</span>
              <span>Незаживающий участок</span><span>Изменение родинки</span><span>Проблема влияет на качество жизни</span>
            </div>
            <p>Косметический уход не должен заменять диагностику кожного заболевания.</p>
          </section>

          <Link className="article-next" href="/hair/" aria-label="Открыть следующий протокол: волосы и кожа головы">
            <div><span>Следующий протокол</span><strong>Волосы и кожа головы</strong></div>
            <span className="next-arrow" aria-hidden="true">↗</span>
          </Link>
        </article>
      </div>

      <SiteFooter />
    </main>
  );
}
