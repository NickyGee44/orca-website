export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Contact us</h2>
          <p className="mt-2 text-foreground/70 text-sm sm:text-base max-w-2xl">
            Replace with your current contact call-to-action, address and email.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a href="mailto:info@orcaaudit.com" className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
              Email us
            </a>
            <a href="/contact" className="rounded-full border border-foreground/20 px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:border-foreground/40">
              Contact page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


