import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Lisa Kelly",
    rating: 5,
    time: "3 months ago",
    text: "Took my 18-month-old son today for his first trim. He loved the car seat and the service was incredible. Thank you for such a brilliant first experience for my little lad.",
    initials: "LK",
  },
  {
    name: "Irish Chef",
    rating: 5,
    time: "1 year ago",
    text: "Amazing service, highly skilled barbers and a welcoming, comfortable atmosphere. Spotless barbershop. You get more than you pay for, and the attention to detail is exceptional as well.",
    initials: "IC",
    badge: "Local Guide",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-gold" : "text-white/10"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 lg:py-32 bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Testimonials
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-5xl">
              What Our <span className="text-gold-gradient">Clients</span> Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-silver-light/60">
              Real clients. Real results. Here&rsquo;s what people are saying
              after leaving the chair.
            </p>
          </div>
        </ScrollReveal>

        {/* Google Rating Summary */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mt-12 flex flex-col items-center">
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-6xl font-bold text-gold">4.5</span>
              <span className="text-lg text-cream/50">/5</span>
            </div>
            <StarRating rating={5} />
            <p className="mt-2 text-sm text-cream/50">Based on Google Reviews</p>
          </div>
        </ScrollReveal>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.name} direction="up" delay={index * 150 + 200}>
            <div
              className="rounded-sm border border-white/5 bg-charcoal p-8 transition-all duration-300 hover:border-gold/20"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold font-semibold text-sm">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-cream">{review.name}</p>
                  <div className="flex items-center gap-2">
                    {review.badge && (
                      <span className="text-xs text-gold/80">{review.badge}</span>
                    )}
                    <span className="text-xs text-cream/40">{review.time}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <StarRating rating={review.rating} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-silver-light/70">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Review CTA */}
        <ScrollReveal direction="up" delay={400}>
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=Faithful+Barbers+Reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUPm6vU5Rmxp-jNOYl-KKpgIY0Qv0MdvyxxOxFvAlhJxXCTIh5_XC-u00Bu4M1jb9hg1x9rKlpgabbbNB3Xs-VN9fXwSByXmFpEn15ndbTnBzUH3eA%3D%3D&sa=X"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/30 px-6 py-3 text-sm font-medium text-gold transition-all hover:border-gold hover:bg-gold/10"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Leave Us a Review on Google
          </a>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
