import { Reveal } from "@/components/site/reveal";
import { Eyebrow } from "@/components/site/eyebrow";
import { cardTypes, type CardType } from "@/lib/data";

function fluteFor(y: number, amp: number, step: number, x0 = 6, w = 148) {
  let d = `M${x0},${y}`;
  let up = true;
  for (let x = x0 + step; x <= x0 + w; x += step) {
    d += ` Q${x - step / 2},${up ? y - amp : y + amp} ${x},${y}`;
    up = !up;
  }
  return d;
}

const LINER_TOP = "var(--kraft)";
const LINER_MID = "#c99f66";
const LINER_BOTTOM = "var(--kraft-dark)";
const FLUTE_COLOR = "#8fb2ea";

function FluteArt({ flute }: { flute: CardType["flute"] }) {
  const liner = (key: string, y: number, fill: string) => (
    <rect key={key} x={6} y={y} width={148} height={7} rx={3} fill={fill} />
  );
  const wave = (key: string, y: number, amp: number, step: number) => (
    <path
      key={key}
      d={fluteFor(y, amp, step)}
      fill="none"
      stroke={FLUTE_COLOR}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

  if (flute.double) {
    return (
      <svg viewBox="0 0 160 108" preserveAspectRatio="none" aria-hidden className="block h-16 w-full">
        {liner("l1", 12, LINER_TOP)}
        {wave("w1", 32, 6, flute.step2 ?? 15)}
        {liner("l2", 52, LINER_MID)}
        {wave("w2", 74, 7, flute.step)}
        {liner("l3", 96, LINER_BOTTOM)}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 96" preserveAspectRatio="none" aria-hidden className="block h-16 w-full">
      {liner("l1", 16, LINER_TOP)}
      {wave("w1", 50, flute.amp, flute.step)}
      {liner("l2", 76, LINER_BOTTOM)}
    </svg>
  );
}

export function CardTypes() {
  return (
    <section id="tipos" className="bg-brand-dark py-25 text-white">
      <div className="mx-auto max-w-[1200px] px-7">
        <Reveal className="mb-11 max-w-[640px]">
          <Eyebrow className="text-[#8fb2ea]" lineClassName="bg-[#3f6db0]">
            Tipos de cartão
          </Eyebrow>
          <h2 className="mt-4 font-heading text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.05] tracking-[-0.025em] text-white">
            Um cartão para cada necessidade
          </h2>
          <p className="mt-4.5 max-w-[58ch] text-[19px] leading-[1.6] text-[#b9c7e4]">
            Cada tipo combina folhas planas (liner) com uma ou duas
            caneluras. A espessura e o número de folhas definem a
            flexibilidade e a resistência da caixa.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cardTypes.map((t) => (
            <Reveal key={t.num}>
              <article className="h-full rounded-[18px] border border-white/12 bg-white/4.5 px-5.5 pt-6.5 pb-6 transition-[transform,background,border-color] duration-300 hover:-translate-y-1.25 hover:border-[#8fb2ea]/50 hover:bg-white/9">
                <span className="font-mono text-xs font-bold tracking-[.08em] text-[#8fb2ea]">{t.num}</span>
                <div className="mt-5 mb-2 rounded-xl border border-white/10 bg-white/4 px-3.5 py-4">
                  <FluteArt flute={t.flute} />
                </div>
                <h3 className="mt-3.5 font-heading text-[19px] font-bold text-white">{t.name}</h3>
                <div className="mt-4 font-mono text-[28px] leading-none font-bold text-[#8fb2ea]">
                  {t.mm}
                  <small className="text-sm text-[#7f95c4]"> mm</small>
                </div>
                <div className="my-3 h-2 overflow-hidden rounded-full bg-white/13">
                  <span
                    className={`block h-full rounded-full bg-gradient-to-r from-[#3f7ad0] to-[#8fb2ea] ${t.gaugeWidthClass}`}
                  />
                </div>
                <div className="font-mono text-[11.5px] tracking-[.03em] text-[#9db0d6]">{t.sheets}</div>
                <p className="mt-3 text-sm leading-[1.5] text-[#c4d1ea]">{t.use}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
