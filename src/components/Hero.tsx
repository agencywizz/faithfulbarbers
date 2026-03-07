import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/shop-interior.jpg"
          alt="Faithful Barbers shop interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <ScrollReveal direction="up" delay={0} duration={800}>
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.jpg"
              alt="Faithful Barbers Logo"
              width={220}
              height={220}
              priority
              className="drop-shadow-2xl"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150} duration={800}>
          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-cream">Your Best Cut,</span>
            <br />
            <span className="text-gold-gradient">Every Single Time.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={300} duration={800}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-silver-light/80 sm:text-xl">
            Skilled barbers. Sharp results. A barbershop in Castlerea
            you&rsquo;ll keep coming back to.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={450} duration={800}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#booking"
              className="rounded-sm bg-gold px-8 py-4 text-base font-semibold uppercase tracking-wider text-charcoal transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
            >
              Book Your Appointment
            </a>
            <a
              href="#portfolio"
              className="rounded-sm border border-gold/40 px-8 py-4 text-base font-semibold uppercase tracking-wider text-gold transition-all hover:border-gold hover:bg-gold/10"
            >
              See Our Work
            </a>
          </div>
        </ScrollReveal>

        {/* Rating badge */}
        <ScrollReveal direction="up" delay={600} duration={800}>
        <div className="mt-12 inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 backdrop-blur-sm border border-white/10">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <svg
              className="h-4 w-4 text-gold/50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span className="text-sm text-cream/70">
            4.5 stars on Google
          </span>
        </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60 animate-[bounce_2s_ease-in-out_3]">
        <svg
          className="h-6 w-6 text-gold/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
