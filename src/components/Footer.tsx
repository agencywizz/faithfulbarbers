export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-bold text-gold">
              Faithful Barbers
            </p>
            <p className="mt-1 text-sm text-cream/40">
              Premium barbering in Castlerea, Co. Roscommon
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-cream/40">
            <a href="#home" className="hover:text-gold transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-gold transition-colors">
              Services
            </a>
            <a href="#booking" className="hover:text-gold transition-colors">
              Book
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Contact
            </a>
            <a href="/privacy" className="hover:text-gold transition-colors">
              Privacy
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center space-y-1">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Faithful Barbers. All rights reserved.
          </p>
          <p className="text-xs text-cream/20">
            Developed by{" "}
            <a
              href="https://agencywizz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Wizz! digital agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
