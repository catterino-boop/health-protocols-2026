import type { Metadata } from "next";
import Link from "next/link";
import { ReadingProgress } from "../reading-progress";
import { ProtocolHeroImage, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Подходы экспертов и биохакеров",
  description: "Что можно перенять у Брайана Джонсона, Эндрю Хубермана, Питера Аттиа и Ронды Патрик — без копирования личных схем.",
};

const toc = [
  ["shared", "Что их объединяет"], ["johnson", "Брайан Джонсон"],
  ["huberman", "Эндрю Хуберман"], ["attia", "Питер Аттиа"],
  ["patrick", "Ронда Патрик"], ["filter", "Как использовать идеи"],
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ExpertsProtocol() {
  return (
    <main id="top">
      <ReadingProgress /><SiteHeader />
      <section className="protocol-hero shell">
        <div className="protocol-hero-copy">
          <nav className="breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Главная</Link><span>/</span><Link href="/#protocols">Протоколы</Link><span>/</span><span>Эксперты</span></nav>
          <p className="eyebrow"><span /> Протокол 13 · Подходы</p>
          <h1>Эксперты и биохакеры</h1>
          <p className="protocol-deck">Известные люди предлагают разные системы, но самые полезные идеи сходятся в одной точке: сон, движение, питание, профилактика и последовательность.</p>
          <div className="protocol-meta"><span><strong>14 минут</strong> на чтение</span><span><strong>4 подхода</strong> без культа</span><span><strong>1 фильтр</strong> доказательности</span></div>
        </div>
        <ProtocolHeroImage src="/images/experts-hero.png" alt="Четыре разных подхода к здоровью вокруг общей доказательной основы" caption="Чужой протокол — источник идей, а не готовая инструкция" compact />
      </section>

      <div className="article-layout shell">
        <aside className="article-aside">
          <details className="toc-mobile"><summary>Оглавление <span>6 разделов</span></summary><nav>{toc.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></details>
          <nav className="toc-desktop" aria-label="Оглавление протокола"><p>В этом протоколе</p>{toc.map(([id,label],i) => <a key={id} href={`#${id}`}><span>{String(i+1).padStart(2,"0")}</span>{label}</a>)}</nav>
          <div className="aside-note"><span aria-hidden="true">4</span><p><strong>Берите принцип, не распорядок.</strong> Возраст, цели, здоровье и ресурсы у всех разные.</p></div>
        </aside>
        <article className="protocol-article">
          <div className="article-intro"><p>Этот раздел не связывает наши протоколы с одним автором. Он разбирает отдельные идеи известных экспертов и биохакеров и отделяет переносимую базу от личных, дорогих или экспериментальных схем.</p></div>

          <section className="article-section" id="shared">
            <p className="article-label">01 · Общий знаменатель</p><h2>Что объединяет разные подходы</h2>
            <div className="shared-foundation">
              <span>Сон</span><span>Сила и выносливость</span><span>Цельные продукты</span><span>Мышечная масса</span><span>Контроль риска</span><span>Профилактика</span><span>Без курения</span><span>Меньше алкоголя</span><span>Управление стрессом</span><span>Последовательность</span>
            </div>
            <div className="key-idea"><span aria-hidden="true">✓</span><p><strong>Самая доказательная часть биохакинга обычно выглядит скучно.</strong> Это хорошо организованная база, а не дорогая процедура или самая длинная полка добавок.</p></div>
          </section>

          <section className="article-section expert-section" id="johnson">
            <p className="article-label">02 · Системность и измерение</p>
            <div className="expert-intro">
              <figure className="expert-portrait"><img src={`${basePath}/images/experts/bryan-johnson.jpg`} width="180" height="220" loading="lazy" alt="Брайан Джонсон" /><figcaption>Фото: <a href="https://commons.wikimedia.org/wiki/File:Bryan_Johnson_2026.jpg">M Robertson</a> · <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></figcaption></figure>
              <div><h2>Брайан Джонсон</h2><p>Технологический предприниматель, превративший собственное тело в публичный долголетний эксперимент. Его знают по крайней системности: режим, еда, нагрузка и медицинские показатели подчинены одной системе Blueprint.</p></div>
            </div>
            <div className="expert-story">
              <article><span>Почему известен</span><h3>От финтеха к эксперименту над старением</h3><p>Джонсон основал платёжную компанию Braintree, которая купила Venmo, а затем была продана PayPal вместе с Venmo за 800 миллионов долларов. Позже он создал инвестиционный OS Fund и нейротехнологическую компанию Kernel. В 2021 году он запустил Project Blueprint и стал публично показывать свой режим, анализы и процедуры. Вирусные публикации и документальный фильм Netflix «Не умирай» сделали его лицом радикального антиэйджинга.</p></article>
              <article><span>В чём особенность</span><h3>Организм как инженерная система</h3><p>Он ставит измерение выше интуиции: сначала собирает максимум данных, затем пытается алгоритмизировать ежедневную жизнь и убрать решения, принимаемые в состоянии усталости или соблазна. Это самая видимая и самая экстремальная модель из четырёх: она хорошо показывает силу системности, но не доказывает, что весь его стек нужен другим людям.</p></article>
            </div>
            <div className="expert-profile">
              <article><span>Главные акценты</span><ul><li>сон как приоритет</li><li>стабильный режим</li><li>раннее завершение еды</li><li>растительный рацион</li><li>силовые и кардио</li><li>анализы и уход</li></ul></article>
              <article className="expert-take"><span>Можно перенять</span><h3>Организацию среды</h3><p>Подготовка еды, запланированные тренировки и спокойный вечер уменьшают число решений, зависящих от силы воли.</p></article>
              <article className="expert-caution"><span>Не копировать</span><h3>Точные цифры и полный стек</h3><p>Его калорийность, время последней еды, десятки добавок и медицинские вмешательства относятся к конкретному человеку. Часть протокола связана с продуктами его компании.</p></article>
            </div>
          </section>

          <section className="article-section expert-section" id="huberman">
            <p className="article-label">03 · Свет, нервная система и поведение</p>
            <div className="expert-intro">
              <figure className="expert-portrait"><img src={`${basePath}/images/experts/andrew-huberman.jpg`} width="180" height="220" loading="lazy" alt="Эндрю Хуберман" /><figcaption>Фото: <a href="https://commons.wikimedia.org/wiki/File:Andrew_D._Huberman,_Ph.D..jpg">Jamesbrianbounds</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></figcaption></figure>
              <div><h2>Эндрю Хуберман</h2><p>Стэнфордский нейробиолог, который сделал науку о нервной системе частью массовой культуры. Его сильная сторона — перевод сложной нейронауки в понятные поведенческие инструменты для сна, фокуса, стресса и обучения.</p></div>
            </div>
            <div className="expert-story">
              <article><span>Почему известен</span><h3>Учёный с одним из главных health-подкастов</h3><p>Хуберман — профессор нейробиологии и офтальмологии в Stanford School of Medicine. Его лаборатория изучала зрительную систему, развитие нервных цепей, нейропластичность, стресс и восстановление нервных связей. В 2021 году он запустил Huberman Lab: длинные бесплатные выпуски про сон, свет, дофамин, дыхание, тренировки и добавки. Подкаст регулярно занимает ведущие места среди мировых подкастов о здоровье.</p></article>
              <article><span>В чём особенность</span><h3>Управлять состоянием через среду и поведение</h3><p>Он рассматривает свет, дыхание, температуру, движение и режим как «рычаги», которые меняют возбуждение, внимание и циркадные ритмы. Благодаря ему утренний свет, физиологический вздох и NSDR стали массовыми понятиями. При этом не каждая точная схема из подкаста является результатом его собственного исследования или универсальным правилом.</p></article>
            </div>
            <div className="expert-profile">
              <article><span>Главные акценты</span><ul><li>утренний дневной свет</li><li>меньше яркого света вечером</li><li>стабильное пробуждение</li><li>силовые и кардио</li><li>прогулки</li><li>дыхание и NSDR</li></ul></article>
              <article className="expert-take"><span>Можно перенять</span><h3>Поведение раньше добавок</h3><p>Свет после пробуждения, ограничение позднего кофеина, ежедневное движение и снижение стимуляции вечером уже встроены в наши протоколы.</p></article>
              <article className="expert-caution"><span>С осторожностью</span><h3>Слишком точные правила</h3><p>Например, обязательная задержка кофеина на 90–120 минут удобна некоторым людям, но не доказана как необходимость для всех. Комплексы добавок для сна тоже не универсальны.</p></article>
            </div>
          </section>

          <section className="article-section expert-section" id="attia">
            <p className="article-label">04 · Функция на десятилетия вперёд</p>
            <div className="expert-intro">
              <figure className="expert-portrait"><img src={`${basePath}/images/experts/peter-attia.jpg`} width="180" height="220" loading="lazy" alt="Питер Аттиа" /><figcaption>Фото: <a href="https://commons.wikimedia.org/wiki/File:2025_Peter_Attia_(cropped).jpg">Jop van Velthuis</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a></figcaption></figure>
              <div><h2>Питер Аттиа</h2><p>Врач и один из главных популяризаторов профилактической медицины долголетия. Он предлагает начинать профилактику задолго до симптомов и измерять успех не только годами жизни, но и тем, сколько физических и умственных возможностей сохранится к старшему возрасту.</p></div>
            </div>
            <div className="expert-story">
              <article><span>Почему известен</span><h3>«Медицина 3.0», The Drive и бестселлер «Вне возраста»</h3><p>Аттиа получил медицинское образование в Стэнфорде, пять лет обучался общей хирургии в Johns Hopkins и занимался иммунной терапией меланомы в National Cancer Institute. Затем он создал клинику Early Medical, подкаст The Peter Attia Drive и книгу «Вне возраста», ставшую бестселлером №1 New York Times. Именно он сделал понятия lifespan и healthspan привычными для широкой аудитории.</p></article>
              <article><span>В чём особенность</span><h3>Планировать здоровье от будущего к настоящему</h3><p>Его модель исходит не из абстрактного «жить дольше», а из конкретной функции: что человек хочет уметь в 70–90 лет и какой запас силы, VO₂ max, равновесия и метаболического здоровья нужно создать сейчас. В отличие от Джонсона, он меньше сосредоточен на внешнем «омоложении» и больше — на раннем снижении риска хронических болезней и сохранении самостоятельности.</p></article>
            </div>
            <div className="centenarian-card">
              <span>«Десятиборье столетнего человека»</span>
              <h3>Что вы хотите уметь в 70–90 лет?</h3>
              <div><span>Подниматься по лестнице</span><span>Носить сумки</span><span>Вставать с пола</span><span>Путешествовать</span><span>Играть с внуками</span></div>
              <p>Тренировки сегодня создают запас перед естественным возрастным снижением силы и выносливости.</p>
            </div>
            <div className="expert-profile expert-profile-compact">
              <article className="expert-take"><span>Можно перенять</span><h3>Силу, аэробную форму и равновесие</h3><p>Вместе с контролем давления, липидов и обмена глюкозы это поддерживает самостоятельность и снижает риск травм.</p></article>
              <article className="expert-caution"><span>Не копировать</span><h3>Объём и медицинские цели</h3><p>Новичку не нужен его тренировочный объём. Целевые биомаркеры, лекарства и расширенные обследования зависят от общего риска.</p></article>
            </div>
          </section>

          <section className="article-section expert-section" id="patrick">
            <p className="article-label">05 · Питательная плотность и выносливость</p>
            <div className="expert-intro">
              <figure className="expert-portrait expert-portrait-wide"><img src={`${basePath}/images/experts/rhonda-patrick.jpg`} width="180" height="220" loading="lazy" alt="Ронда Патрик" /><figcaption>Фото: <a href="https://www.flickr.com/photos/139374113@N06/23997826219/">FoundMyFitness</a> · <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a></figcaption></figure>
              <div><h2>Ронда Патрик</h2><p>Учёный-биохимик и основатель FoundMyFitness. Она стала одним из самых заметных женских голосов в сфере долголетия, соединив биохимию микронутриентов с практическими темами тренировок, выносливости, тепла и старения.</p></div>
            </div>
            <div className="expert-story">
              <article><span>Почему известна</span><h3>Из лаборатории — в длинные научные разборы</h3><p>Патрик получила PhD по биомедицинским наукам и изучала митохондриальный метаболизм и гибель клеток в St. Jude Children’s Research Hospital. В постдокторантуре у Брюса Эймса она занималась микронутриентами, воспалением, витамином D и старением; также работала в Salk Institute. Через FoundMyFitness она стала разбирать исследования о питании, старении и профилактике для миллионной аудитории.</p></article>
              <article><span>В чём особенность</span><h3>Микронутриенты, гормезис и аэробная форма</h3><p>Её оптика — то, как достаточность витаминов и минералов, омега-3, нагрузка и краткие контролируемые стрессоры, например тепло и физическая активность, меняют процессы на клеточном уровне. Она много говорит о VO₂ max, энергетике клетки и питательной плотности. Это самый «биохимический» подход из четырёх, но наблюдательные данные о сауне и персональные «оптимальные» уровни не следует превращать в общую норму.</p></article>
            </div>
            <div className="expert-profile">
              <article><span>Главные акценты</span><ul><li>разнообразные цельные продукты</li><li>витамин D</li><li>омега-3</li><li>кардио и сила</li><li>VO₂ max</li><li>сауна</li></ul></article>
              <article className="expert-take"><span>Можно перенять</span><h3>Плотность рациона и аэробную форму</h3><p>Овощи, бобовые, ягоды, рыба, профилактика дефицита витамина D и регулярные нагрузки полезны и женщинам, и мужчинам.</p></article>
              <article className="expert-caution"><span>С осторожностью</span><h3>Сауна и «оптимальные» маркеры</h3><p>Связь сауны с меньшим риском получена главным образом в наблюдениях. Она может быть дополнением, но не заменяет движение. Высокие дозы витаминов тоже не обязательны.</p></article>
            </div>
          </section>

          <section className="article-section" id="filter">
            <p className="article-label">06 · Фильтр вместо копирования</p><h2>Как использовать чужие протоколы</h2>
            <div className="biohacking-filter" role="img" aria-label="Шесть шагов от проблемы до оценки результата">
              <article><span>01 →</span><strong>Назвать проблему</strong></article>
              <article><span>02 →</span><strong>Найти простую базу</strong></article>
              <article><span>03 →</span><strong>Проверить применимость</strong></article>
              <article><span>04 →</span><strong>Ввести одно изменение</strong></article>
              <article><span>05 →</span><strong>Оценить результат</strong></article>
              <article><span>06</span><strong>Не продолжать ради авторитета</strong></article>
            </div>
            <div className="expert-summary">
              <article><span>Джонсон</span><strong>Системность</strong></article><article><span>Хуберман</span><strong>Свет и ритмы</strong></article><article><span>Аттиа</span><strong>Функция в старшем возрасте</strong></article><article><span>Патрик</span><strong>Питательная плотность и аэробная форма</strong></article>
            </div>
            <p>Известность человека не повышает качество доказательств. Хорошая идея должна подходить вашей цели, быть безопасной и давать результат, который имеет смысл именно для вас.</p>
          </section>

          <Link className="article-next" href="/" aria-label="Вернуться ко всем протоколам"><div><span>Все 13 протоколов готовы</span><strong>Вернуться в библиотеку</strong></div><span className="next-arrow" aria-hidden="true">↗</span></Link>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
