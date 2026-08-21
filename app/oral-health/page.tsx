import type { Metadata } from "next";
import Link from "next/link";
import { ReadingProgress } from "../reading-progress";
import { ProtocolHeroImage, SiteFooter, SiteHeader } from "../site-components";

export const metadata: Metadata = {
  title: "Здоровье зубов и полости рта",
  description: "Вечерняя чистка, паста с фтором, зубная нить, ирригатор, питание, сухость во рту и безопасное отбеливание.",
};

const toc = [
  ["minimum", "Короткий протокол"], ["night", "Почему важен вечер"],
  ["between", "Нить и ирригатор"], ["gums", "Кровоточивость"],
  ["extras", "Ополаскиватель и язык"], ["food", "Питание и сухость"],
  ["whitening", "Отбеливание"], ["dentist", "Осмотры"],
];

export default function OralHealthProtocol() {
  return (
    <main id="top">
      <ReadingProgress /><SiteHeader />
      <section className="protocol-hero shell">
        <div className="protocol-hero-copy">
          <nav className="breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Главная</Link><span>/</span><Link href="/#protocols">Протоколы</Link><span>/</span><span>Зубы</span></nav>
          <p className="eyebrow"><span /> Протокол 11 · Профилактика</p>
          <h1>Здоровье зубов и полости рта</h1>
          <p className="protocol-deck">Налёт нельзя надёжно убрать ополаскивателем или редкой профессиональной чисткой. Основа — ежедневное очищение зубов, контактов и линии дёсен.</p>
          <div className="protocol-meta"><span><strong>6 минут</strong> на чтение</span><span><strong>2 раза</strong> в день</span><span><strong>1 раз</strong> между зубами</span></div>
        </div>
        <ProtocolHeroImage src="/images/oral-health-hero.png" alt="Щётка, зубная нить и ирригатор на раковине вечером" caption="Вечерний уход защищает зубы в часы минимального слюноотделения" compact />
      </section>

      <div className="article-layout shell">
        <aside className="article-aside">
          <details className="toc-mobile"><summary>Оглавление <span>8 разделов</span></summary><nav>{toc.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></details>
          <nav className="toc-desktop" aria-label="Оглавление протокола"><p>В этом протоколе</p>{toc.map(([id,label],i) => <a key={id} href={`#${id}`}><span>{String(i+1).padStart(2,"0")}</span>{label}</a>)}</nav>
          <div className="aside-note"><span aria-hidden="true">PM</span><p><strong>Не пропускайте вечер.</strong> Ночью естественная защита слюной слабее.</p></div>
        </aside>
        <article className="protocol-article">
          <div className="article-intro"><p>Здоровье полости рта — это не только белизна. Главные задачи ухода: предотвращать кариес, воспаление дёсен, разрушение эмали и потерю зубов.</p></div>

          <section className="minimum-card" id="minimum">
            <div className="minimum-heading"><span>Короткий протокол</span><p>Ежедневная основа без лишних средств.</p></div>
            <ol>
              <li><span>01</span><p><strong>Чистите дважды в день</strong> примерно по две минуты; один раз — обязательно перед сном.</p></li>
              <li><span>02</span><p><strong>Используйте пасту с фтором.</strong> После чистки выплюньте её, но не смывайте водой.</p></li>
              <li><span>03</span><p><strong>Раз в день очищайте промежутки</strong> нитью или ирригатором.</p></li>
              <li><span>04</span><p><strong>Снижайте частоту сладких перекусов,</strong> а не только общее количество сахара.</p></li>
              <li><span>05</span><p><strong>Если личного графика нет,</strong> запланируйте осмотр раз в полгода.</p></li>
            </ol>
          </section>

          <section className="article-section" id="night">
            <p className="article-label">01 · Самая важная чистка дня</p><h2>Почему нельзя пропускать вечер</h2>
            <div className="night-oral-flow" role="img" aria-label="Ночью меньше слюны, налёт дольше контактирует с зубами и растёт риск кариеса и воспаления">
              <article><span>Ночью</span><strong>Меньше слюны</strong></article><i>→</i>
              <article><span>Поэтому</span><strong>Кислоты нейтрализуются медленнее</strong></article><i>→</i>
              <article><span>Без чистки</span><strong>Налёт остаётся на несколько часов</strong></article>
            </div>
            <p>Остатки еды и бактериальный налёт создают условия для деминерализации эмали, запаха и воспаления дёсен. После вечерней чистки лучше не есть и не пить ничего, кроме воды: оставшийся на зубах фтор продолжает защищать эмаль.</p>
          </section>

          <section className="article-section" id="between">
            <p className="article-label">02 · Там, куда не попадает щётка</p><h2>Нить, ирригатор и масла для дёсен</h2>
            <div className="interdental-tools">
              <article><span>Плотные контакты</span><h3>Зубная нить</h3><p>Механически снимает налёт с боковых поверхностей, где часто начинается кариес. Её аккуратно проводят вдоль зуба, не врезая в десну.</p></article>
              <article><span>Брекеты и сложные зоны</span><h3>Ирригатор</h3><p>Струя вымывает остатки вдоль дёсен и удобна при имплантах, мостах и скученности. В плотных контактах не всегда полностью заменяет нить.</p></article>
              <article><span>Необязательное дополнение</span><h3>Масло для дёсен</h3><p>Может временно уменьшить ощущение сухости и трение. Доказательность полоскания маслом очень низкая; оно не удаляет камень и не заменяет пасту, нить или ирригатор.</p></article>
            </div>
          </section>

          <section className="article-section" id="gums">
            <p className="article-label">03 · Кровь — часто признак воспаления</p><h2>Если дёсны кровоточат</h2>
            <p>Кровоточивость обычно не означает, что очищение нужно прекратить. В первые дни бережного использования нити или ирригатора воспалённая десна может кровоточить сильнее, но затем это должно уменьшаться.</p>
            <div className="gum-path"><span>Бережное ежедневное очищение</span><i>→</i><span>Меньше налёта у десны</span><i>→</i><span>Снижение воспаления и кровоточивости</span></div>
            <p>Если кровь сохраняется, усиливается или сочетается с запахом, отёком, болью или подвижностью зубов, нужен осмотр: зубной камень дома не удалить.</p>
          </section>

          <section className="article-section" id="extras">
            <p className="article-label">04 · Дополнительные средства</p><h2>Ополаскиватель и чистка языка</h2>
            <div className="oral-extra-grid">
              <article><span>Ополаскиватель</span><p>Не заменяет щётку и межзубное очищение. Фторсодержащий вариант при высоком риске кариеса используют в другое время, а хлоргексидин — ограниченным курсом по рекомендации стоматолога.</p></article>
              <article><span>Язык</span><p>Можно мягко очищать щёткой или скребком раз в день. Это улучшает свежесть, но не лечит кариес, воспаление дёсен и другие причины запаха.</p></article>
            </div>
          </section>

          <section className="article-section" id="food">
            <p className="article-label">05 · Коротко о среде во рту</p><h2>Питание, кариес и сухость</h2>
            <div className="oral-compact-grid">
              <article><h3>Важна частота сахара</h3><p>Каждый сладкий перекус запускает новую кислотную атаку. Сладкое лучше есть вместе с основным приёмом пищи, а не понемногу весь день.</p></article>
              <article><h3>Слюна защищает эмаль</h3><p>При сухости помогают вода небольшими порциями, жвачка без сахара и увлажняющие средства. Если сухость постоянная, стоит проверить лекарства, дыхание через рот и заболевания.</p></article>
            </div>
          </section>

          <section className="article-section" id="whitening">
            <p className="article-label">06 · Осветлить, не повредить</p><h2>Отбеливание</h2>
            <p>Лучше изучены средства на основе перекиси водорода или карбамида. Они осветляют естественные ткани зуба, но не пломбы, коронки и виниры; временная чувствительность возможна.</p>
            <div className="myth-fact"><article><span>Можно</span><p>Обсудить систему после лечения кариеса и воспаления дёсен.</p></article><article><span>Не стоит</span><p>Использовать лимон, уголь, соду и бытовую перекись: абразивность и кислоты могут повреждать эмаль и дентин.</p></article></div>
          </section>

          <section className="article-section" id="dentist">
            <p className="article-label">07 · Понятный график</p><h2>Как часто посещать стоматолога</h2>
            <div className="dentist-schedule"><span>2×</span><div><strong>Раз в полгода — удобная база</strong><p>Если у вас нет индивидуального графика, запланируйте два профилактических осмотра в год. Это просто запомнить и легче соблюдать.</p></div></div>
            <p>Стоматолог может сделать интервал короче или длиннее с учётом кариеса, дёсен, сухости во рту, курения, диабета, имплантов и домашнего ухода. Профессиональная чистка удаляет камень из недоступных зон, но не отменяет ежедневную профилактику.</p>
          </section>

          <Link className="article-next" href="/monitoring/" aria-label="Открыть следующий протокол: контроль здоровья"><div><span>Следующий протокол</span><strong>Контроль здоровья</strong></div><span className="next-arrow" aria-hidden="true">↗</span></Link>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
