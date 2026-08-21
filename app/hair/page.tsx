import type { Metadata } from "next";
import Link from "next/link";
import { ReadingProgress } from "../reading-progress";
import { ProtocolHeroImage, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Волосы и кожа головы",
  description: "Базовый уход, типы выпадения, питание и железо, перхоть, миноксидил и признаки, требующие дерматолога.",
};

const toc = [
  ["minimum", "Короткий протокол"], ["types", "Тип выпадения"],
  ["care", "Базовый уход"], ["scalp", "Кожа головы"],
  ["iron", "Железо и питание"], ["treatment", "Что работает"],
  ["track", "Как отслеживать"], ["doctor", "Когда нужен врач"],
];

export default function HairProtocol() {
  return (
    <main id="top">
      <ReadingProgress /><SiteHeader />
      <section className="protocol-hero shell">
        <div className="protocol-hero-copy">
          <nav className="breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Главная</Link><span>/</span><Link href="/#protocols">Протоколы</Link><span>/</span><span>Волосы</span></nav>
          <p className="eyebrow"><span /> Протокол 09 · Уход</p>
          <h1>Волосы и кожа головы</h1>
          <p className="protocol-deck">Уход защищает длину, но рост волос зависит и от фолликулов, питания, гормональных процессов, болезней и состояния кожи головы.</p>
          <div className="protocol-meta"><span><strong>8 минут</strong> на чтение</span><span><strong>1 раз в месяц</strong> фото</span><span><strong>2026</strong> актуализация</span></div>
        </div>
        <ProtocolHeroImage src="/images/hair-hero.png" alt="Бережное мытьё кожи головы и базовые средства ухода" caption="Сначала определите причину, затем выбирайте уход" compact />
      </section>

      <div className="article-layout shell">
        <aside className="article-aside">
          <details className="toc-mobile"><summary>Оглавление <span>8 разделов</span></summary><nav>{toc.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></details>
          <nav className="toc-desktop" aria-label="Оглавление протокола"><p>В этом протоколе</p>{toc.map(([id,label],i) => <a key={id} href={`#${id}`}><span>{String(i+1).padStart(2,"0")}</span>{label}</a>)}</nav>
          <div className="aside-note"><span aria-hidden="true">1×</span><p><strong>Фото раз в месяц.</strong> Волосы растут медленно, ежедневная проверка только создаёт шум.</p></div>
        </aside>
        <article className="protocol-article">
          <div className="article-intro"><p>Одного универсального средства «от выпадения» не существует. Постепенное поредение, равномерное выпадение, очаги и обламывание имеют разные причины — и требуют разных решений.</p></div>

          <section className="minimum-card" id="minimum">
            <div className="minimum-heading"><span>Короткий протокол</span><p>Что сделать до покупки новых средств.</p></div>
            <ol>
              <li><span>01</span><p><strong>Определите рисунок:</strong> поредение, выпадение по всей голове, очаги или обламывание.</p></li>
              <li><span>02</span><p><strong>Вспомните последние 2–3 месяца:</strong> болезнь, роды, стресс, операция, быстрое похудение или новое лекарство.</p></li>
              <li><span>03</span><p><strong>Мойте по мере загрязнения</strong> и защищайте длину кондиционером.</p></li>
              <li><span>04</span><p><strong>Лечите зуд и перхоть,</strong> а не маскируйте их маслами.</p></li>
              <li><span>05</span><p><strong>Не начинайте всё сразу.</strong> Иначе нельзя понять эффект и причину раздражения.</p></li>
            </ol>
          </section>

          <section className="article-section" id="types">
            <p className="article-label">01 · Сначала рисунок</p><h2>Как понять, что происходит</h2>
            <div className="hair-types-grid">
              <article><span>Постепенно</span><h3>Пробор становится шире</h3><p>Чаще похоже на андрогенетическое поредение: фолликулы постепенно уменьшаются. Раннее лечение сохраняет больше волос.</p></article>
              <article><span>Через 2–3 месяца</span><h3>Выпадение по всей голове</h3><p>После болезни, родов, стресса или дефицита энергии много волос одновременно переходит в фазу покоя.</p></article>
              <article><span>Отдельные зоны</span><h3>Чёткие округлые очаги</h3><p>Возможен аутоиммунный процесс. Домашний уход не заменяет диагностику дерматолога.</p></article>
              <article><span>Разная длина</span><h3>Обламывание</h3><p>Чаще связано с осветлением, высокой температурой, натяжением и грубым расчёсыванием, а не с выпадением из фолликула.</p></article>
            </div>
          </section>

          <section className="article-section" id="care">
            <p className="article-label">02 · Защита кожи и длины</p><h2>Базовый уход</h2>
            <p>Частота мытья зависит от жирности, активности и типа волос. Жирную кожу можно мыть ежедневно — специально «приучать» её к редкому мытью не нужно. Волосы в душе уже завершили цикл; само мытьё не вырывает их из здоровых фолликулов.</p>
            <div className="hair-care-sequence" role="img" aria-label="Последовательность ухода: шампунь, при необходимости маска, затем кондиционер">
              <article><span>01</span><strong>Шампунь</strong><p>На кожу головы, массаж подушечками пальцев около 1–2 минут. Повторить только при сильной жирности или большом количестве стайлинга.</p></article><i>→</i>
              <article><span>02</span><strong>Маска</strong><p>Необязательный этап. Используйте по инструкции; многие маски уже работают как кондиционер.</p></article><i>→</i>
              <article><span>03</span><strong>Кондиционер</strong><p>На длину и концы на указанное производителем время — обычно несколько минут. Он снижает трение и обламывание.</p></article>
            </div>
            <div className="care-rules"><span>Распутывать с концов</span><span>Редкие зубья для мокрых волос</span><span>Меньше горячего воздуха</span><span>Термозащита перед укладкой</span><span>Не держать волосы в постоянном натяжении</span></div>
          </section>

          <section className="article-section" id="scalp">
            <p className="article-label">03 · Перхоть и воспаление</p><h2>Кожа головы — часть протокола</h2>
            <p>Перхоть не всегда связана с недостаточной гигиеной. При лёгком и умеренном процессе помогают шампуни с противогрибковыми или противосеборейными компонентами, например кетоконазолом или сульфидом селена.</p>
            <div className="why-action-list">
              <article><span>Куда</span><h3>На кожу, не только на волосы</h3><p><strong>Почему:</strong> актив должен контактировать с зоной воспаления.</p></article>
              <article><span>Сколько</span><h3>Ровно по инструкции</h3><p><strong>Почему:</strong> лечебным формулам часто нужно несколько минут контакта.</p></article>
              <article><span>Как долго</span><h3>Курс, затем поддержание</h3><p><strong>Почему:</strong> себорейный дерматит склонен возвращаться после улучшения.</p></article>
              <article><span>Если не помогает</span><h3>Уточнить диагноз</h3><p><strong>Почему:</strong> похожими симптомами проявляются псориаз и контактный дерматит.</p></article>
            </div>
          </section>

          <section className="article-section" id="iron">
            <p className="article-label">04 · Фолликулу нужны ресурсы</p><h2>Железо, белок и питание</h2>
            <p>Дефицит железа, белка и энергии может усиливать диффузное выпадение. Риск выше при обильных менструациях, после родов, донорстве, быстром снижении веса и ограничительном или преимущественно растительном рационе.</p>
            <div className="iron-path">
              <article><span>Источники</span><strong>Мясо, рыба, бобовые, тофу, орехи, зелень</strong></article>
              <article><span>Улучшить усвоение</span><strong>Растительное железо + источник витамина C</strong></article>
              <article><span>Не мешать</span><strong>Чай и кофе не вместе с богатой железом едой при высоком риске</strong></article>
              <article><span>Основа</span><strong>Не допускать долгого дефицита калорий и белка</strong></article>
            </div>
            <p>Выпадение не означает автоматически нехватку железа. Ферритин оценивают вместе с симптомами и другими анализами; одной универсальной «идеальной цифры для волос» нет. Биотин тоже редко помогает без дефицита и может искажать лабораторные результаты.</p>
          </section>

          <section className="article-section" id="treatment">
            <p className="article-label">05 · Под диагноз</p><h2>Что действительно применяется</h2>
            <div className="treatment-evidence-grid">
              <article><span>Лучше изучено</span><h3>Наружный миноксидил</h3><p>Используется при андрогенетическом поредении. Эффект оценивают через месяцы и поддерживают регулярным применением; после отмены он постепенно теряется.</p></article>
              <article><span>По рецепту</span><h3>Системные препараты</h3><p>Финастерид, дутастерид, спиронолактон и таблетированный миноксидил имеют противопоказания и не подходят для самостоятельного эксперимента.</p></article>
              <article><span>Дополнение</span><h3>Свет, микронидлинг, плазма</h3><p>Результат зависит от диагноза, устройства и техники. Они не заменяют диагностику и основную терапию.</p></article>
              <article><span>Слабее доказательность</span><h3>Масла и «активаторы»</h3><p>Могут быть косметическим ритуалом, если не раздражают кожу, но не должны заменять лечение алопеции.</p></article>
            </div>
          </section>

          <section className="article-section" id="track">
            <p className="article-label">06 · Смотрите на месяцы</p><h2>Как отслеживать результат</h2>
            <div className="photo-protocol"><span>Одинаковый свет</span><i>+</i><span>Одинаковое расстояние</span><i>+</i><span>Пробор, виски и макушка</span><i>+</i><span>1 раз в месяц</span></div>
            <p>Количество волос после одного мытья слишком изменчиво. Записывайте также болезни, изменения веса, лекарства и дату начала лечения.</p>
          </section>

          <section className="article-section" id="doctor">
            <p className="article-label">07 · Не ждать</p><h2>Когда нужен дерматолог</h2>
            <div className="stop-signs recovery-signs"><span>Отдельные участки без волос</span><span>Быстрое внезапное выпадение</span><span>Боль, жжение или корочки</span><span>Гнойнички и мокнутие</span><span>Гладкая блестящая кожа</span><span>Выпадение бровей и ресниц</span><span>Слабость или нарушение цикла</span><span>Нет улучшения несколько месяцев</span></div>
            <p>Боль, рубцевание и исчезновение отверстий фолликулов особенно важны: некоторые воспалительные формы могут приводить к необратимой потере волос.</p>
          </section>

          <Link className="article-next" href="/supplements/" aria-label="Открыть следующий протокол: БАДы"><div><span>Следующий протокол</span><strong>БАДы</strong></div><span className="next-arrow" aria-hidden="true">↗</span></Link>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
