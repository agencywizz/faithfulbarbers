import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <ScrollReveal direction="right" delay={200} duration={800}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/barber-working.jpg"
                alt="Barber at work providing a premium shave"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative gold corner */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-gold/30 rounded-br-sm" />
            <div className="absolute -top-4 -left-4 h-24 w-24 border-t-2 border-l-2 border-gold/30 rounded-tl-sm" />
          </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal direction="up" delay={0} duration={700}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Our Story
              </p>
              <h2 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-5xl">
                Built on Skill.
                <br />
                <span className="text-gold-gradient">Driven by Pride.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} duration={700}>
              <div className="mt-8 space-y-5 text-silver-light/70 leading-relaxed">
                <p>
                  We&rsquo;re a barbershop in Castlerea that takes the work
                  seriously. Every client gets a proper consultation, a clean
                  technique, and a result they&rsquo;re proud to walk out with.
                </p>
                <p>
                  No rushing. No guessing. Whether it&rsquo;s a sharp fade,
                  a classic cut, or a hot towel shave &mdash; we do it right,
                  every time.
                </p>
                <p>
                  From kids getting their first trim to regulars who&rsquo;ve
                  been in the chair for years, everyone gets the same level of
                  care and attention.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="up" delay={300} duration={700}>
              <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
                <div>
                  <p className="font-heading text-3xl font-bold text-gold">4.5</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream/50">
                    on Google
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-gold">100%</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream/50">
                    Client Focus
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-gold">5+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream/50">
                    Years Cutting
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
