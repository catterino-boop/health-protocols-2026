import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports the home page and all 13 protocols", async () => {
  const [home, guide, sleep, nutrition, fasting, movement, stress, habits, skin, hair, supplements, oral, monitoring, experts] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    readFile(new URL("guide/index.html", outputRoot), "utf8"),
    readFile(new URL("sleep/index.html", outputRoot), "utf8"),
    readFile(new URL("nutrition/index.html", outputRoot), "utf8"),
    readFile(new URL("fasting/index.html", outputRoot), "utf8"),
    readFile(new URL("movement/index.html", outputRoot), "utf8"),
    readFile(new URL("stress/index.html", outputRoot), "utf8"),
    readFile(new URL("habits/index.html", outputRoot), "utf8"),
    readFile(new URL("skin/index.html", outputRoot), "utf8"),
    readFile(new URL("hair/index.html", outputRoot), "utf8"),
    readFile(new URL("supplements/index.html", outputRoot), "utf8"),
    readFile(new URL("oral-health/index.html", outputRoot), "utf8"),
    readFile(new URL("monitoring/index.html", outputRoot), "utf8"),
    readFile(new URL("experts/index.html", outputRoot), "utf8"),
  ]);

  assert.match(home, /<html lang="ru">/);
  assert.match(home, /Протоколы здоровья 2026/);
  assert.match(home, /<dt>13<\/dt><dd>протоколов<\/dd>/);
  assert.match(home, /Выберите одну область/);
  assert.match(home, /movement-card\.png/);
  assert.match(home, /stress-card\.png/);
  assert.match(home, /habits-card\.png/);
  assert.match(home, /guide-hero\.png/);
  assert.match(home, /experts-hero\.png/);

  assert.match(guide, /Как пользоваться протоколами/);
  assert.match(guide, /Три уровня рекомендаций/);
  assert.match(guide, /change-path/);

  assert.match(sleep, /Сон: базовый протокол/);
  assert.match(sleep, /Минимальная версия/);
  assert.match(sleep, /Когнитивно-поведенческая терапия бессонницы/);
  assert.match(sleep, /circadian-diagram/);

  assert.match(nutrition, /Питание: базовый протокол/);
  assert.match(nutrition, /Гарвардская тарелка/);
  assert.match(nutrition, /restriction-cycle/);

  assert.match(fasting, /Режим питания и интервальное голодание/);
  assert.match(fasting, /12:12/);
  assert.match(fasting, /fasting-schedules/);

  assert.match(movement, /Движение и тренировки/);
  assert.match(movement, /8–12 тысяч/);
  assert.match(movement, /steps-spectrum/);
  assert.match(movement, /Профилактика саркопении/);
  assert.doesNotMatch(movement, />Приседание</);

  assert.match(stress, /Стресс и восстановление/);
  assert.match(stress, /Цифровая гигиена/);
  assert.match(stress, /breathing-visual/);

  assert.match(habits, /Вредные привычки: как изменить поведение/);
  assert.match(habits, /Протокол первых десяти минут/);
  assert.match(habits, /habit-loop/);
  assert.match(habits, /Сонливость не равна восстановлению/);
  assert.match(habits, /официальная потребность выше на 35 мг/);

  assert.match(skin, /Кожа: базовый протокол/);
  assert.match(skin, /Ниацинамид 2–5%/);
  assert.match(skin, /skin-routine/);

  assert.match(hair, /Волосы и кожа головы/);
  assert.match(hair, /Железо, белок и питание/);
  assert.match(hair, /hair-care-sequence/);

  assert.match(supplements, /БАДы: профилактика и конкретные цели/);
  assert.match(supplements, /Креатин: мышцы, энергия и мозг/);
  assert.match(supplements, /sleep-supplement-grid/);
  assert.match(supplements, /600 МЕ/);
  assert.match(supplements, /с 39% до 9%/);
  assert.match(supplements, /Домашний напиток/);

  assert.match(oral, /Здоровье зубов и полости рта/);
  assert.match(oral, /Почему нельзя пропускать вечер/);
  assert.match(oral, /interdental-tools/);
  assert.match(oral, /Раз в полгода/);

  assert.match(monitoring, /Измерения и контроль здоровья/);
  assert.match(monitoring, /Минимальная система контроля/);
  assert.match(monitoring, /monitoring-timeline/);
  assert.match(monitoring, /21–35 дней/);
  assert.match(monitoring, /Вариабельность ритма/);
  assert.match(monitoring, /глубокий и REM-сон/);

  assert.match(experts, /Эксперты и биохакеры/);
  assert.match(experts, /Брайан Джонсон/);
  assert.match(experts, /Ронда Патрик/);
  assert.match(experts, /expert-story/);
  assert.match(experts, /От финтеха к эксперименту над старением/);
  assert.match(experts, /Управлять состоянием через среду и поведение/);
  assert.match(experts, /Планировать здоровье от будущего к настоящему/);
  assert.match(experts, /Микронутриенты, гормезис и аэробная форма/);
  assert.match(experts, /biohacking-filter/);
  assert.match(experts, /images\/experts\/bryan-johnson\.jpg/);
  assert.match(experts, /images\/experts\/rhonda-patrick\.jpg/);
});

test("exports required visual assets", async () => {
  await Promise.all([
    access(new URL("images/sleep-circadian-hero.png", outputRoot)),
    access(new URL("images/nutrition-hero.png", outputRoot)),
    access(new URL("images/fasting-hero.png", outputRoot)),
    access(new URL("images/harvard-plate-food.png", outputRoot)),
    access(new URL("images/mediterranean-food.png", outputRoot)),
    access(new URL("images/budget-food.png", outputRoot)),
    access(new URL("images/movement-hero.png", outputRoot)),
    access(new URL("images/stress-hero.png", outputRoot)),
    access(new URL("images/habits-hero.png", outputRoot)),
    access(new URL("images/skin-hero.png", outputRoot)),
    access(new URL("images/movement-card.png", outputRoot)),
    access(new URL("images/stress-card.png", outputRoot)),
    access(new URL("images/habits-card.png", outputRoot)),
    access(new URL("images/guide-hero.png", outputRoot)),
    access(new URL("images/hair-hero.png", outputRoot)),
    access(new URL("images/supplements-hero.png", outputRoot)),
    access(new URL("images/oral-health-hero.png", outputRoot)),
    access(new URL("images/monitoring-hero.png", outputRoot)),
    access(new URL("images/experts-hero.png", outputRoot)),
    access(new URL("images/experts/bryan-johnson.jpg", outputRoot)),
    access(new URL("images/experts/andrew-huberman.jpg", outputRoot)),
    access(new URL("images/experts/peter-attia.jpg", outputRoot)),
    access(new URL("images/experts/rhonda-patrick.jpg", outputRoot)),
    access(new URL("favicon.svg", outputRoot)),
  ]);
});
