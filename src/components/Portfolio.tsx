"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const images = [
  {
    src: "/images/portfolio-1.jpg",
    alt: "Precision shave — barber at work with straight razor",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/portfolio-2.jpg",
    alt: "Perfect skin fade result — rear view",
    span: "",
  },
  {
    src: "/images/portfolio-3.jpg",
    alt: "Leather apron with barber tools",
    span: "",
  },
  {
    src: "/images/portfolio-4.jpg",
    alt: "Barbershop interior — full row of chairs",
    span: "col-span-1",
  },
  {
    src: "/images/portfolio-5.jpg",
    alt: "Barbers preparing stations — the team at work",
    span: "col-span-1",
  },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Our Work
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-5xl">
              The <span className="text-gold-gradient">Portfolio</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-silver-light/60">
              A glimpse inside Faithful Barbers. Our space, our craft, our
              commitment to excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:h-[600px]">
          {images.map((img, index) => (
            <ScrollReveal
              key={img.src}
              direction="up"
              delay={index * 100}
              duration={700}
              className={`${img.span} aspect-square md:aspect-auto md:h-full`}
            >
            <button
              onClick={() => setLightbox(index)}
              className="group relative h-full w-full overflow-hidden rounded-sm"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-all duration-300 group-hover:bg-charcoal/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-gold/90 p-3">
                  <svg
                    className="h-5 w-5 text-charcoal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream/80 hover:text-gold transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-h-[85vh] max-w-4xl w-full aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain rounded-sm"
            />
          </div>
          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox > 0 ? lightbox - 1 : images.length - 1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gold/20 p-3 text-gold hover:bg-gold/30 transition-colors"
            aria-label="Previous image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox < images.length - 1 ? lightbox + 1 : 0);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gold/20 p-3 text-gold hover:bg-gold/30 transition-colors"
            aria-label="Next image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
