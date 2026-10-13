// Futura is scoped to this section only so the rest of the site keeps its
// Mona Sans font. The font itself is imported in index.css.
const FONT_STYLE = {
  fontFamily: "'Futura Md BT Medium', system-ui, -apple-system, sans-serif",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
};

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4";

// Dark rose theme. CARD must match the video fade colour (to-[#12070b] below).
const CARD = "bg-[#12070b] border border-rose-950/70";

// Edit the copy here.
const content = {
  eyebrow: "Why work with me",
  heading: "Key Benefits",
  seo: {
    title: ["SEO That Gets You", "Found on Google"],
    body: "Keyword research, on-page fixes, off-page work and Google My Business setup, so the customers searching for what you sell find you first.",
  },
  campaigns: {
    title: ["Campaigns Built", "to Grow Your Brand"],
  },
  reporting: {
    title: ["Clear Reports,", "Real Results"],
    body: "Straightforward reporting from Google Analytics and Meta Insights, so you always know what's working, what isn't, and what to do next.",
  },
  cta: { text: "Get a free SEO review", href: "#contact" },
};

const BenefitsSection = () => (
  <div className="w-full flex justify-center bg-black" style={FONT_STYLE}>
    <div className="w-full max-w-[1400px]">
      <section className="relative w-full bg-black px-4 sm:px-6 md:px-10 py-12 sm:py-20">
        <p className="text-center text-sm sm:text-base uppercase tracking-[0.25em] text-rose-400 mb-4">
          {content.eyebrow}
        </p>
        <h2
          className="text-rose-50 text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 sm:mb-24"
          style={{ letterSpacing: "-0.04em" }}
        >
          {content.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {/* Card 1: SEO (paragraph in the middle) */}
          <div
            className={`relative h-[380px] sm:h-[460px] rounded-2xl ${CARD} overflow-hidden p-6 sm:p-8`}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-[420px] h-[460px] w-[460px] rounded-full bg-[#9f1239] blur-3xl opacity-40" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-rose-50 text-xl sm:text-2xl font-light leading-tight">
                {content.seo.title[0]}
                <br />
                {content.seo.title[1]}
              </h3>
              <p className="mt-12 sm:mt-20 text-[13px] sm:text-[14px] leading-relaxed text-rose-100/70 font-light max-w-[280px]">
                {content.seo.body}
              </p>
            </div>
          </div>

          {/* Card 2: looping video */}
          <div
            className={`relative h-[380px] sm:h-[460px] rounded-2xl ${CARD} overflow-hidden flex flex-col`}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ height: "75%" }}
            >
              <video
                className="w-full h-full object-cover block"
                src={VIDEO_URL}
                autoPlay
                loop
                muted
                playsInline
              />
              {/* rose tint over the video so it sits inside the theme */}
              <div className="pointer-events-none absolute inset-0 bg-rose-900/25 mix-blend-multiply" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#12070b]" />
            </div>
            <div className="flex-1 flex items-center justify-start p-6 sm:p-8">
              <h3 className="text-rose-50 text-xl sm:text-2xl font-light leading-tight text-left">
                {content.campaigns.title[0]}
                <br />
                {content.campaigns.title[1]}
              </h3>
            </div>
          </div>

          {/* Card 3: reporting (paragraph pinned to the bottom) */}
          <div
            className={`relative h-[380px] sm:h-[460px] rounded-2xl ${CARD} overflow-hidden p-6 sm:p-8`}
          >
            <div className="absolute -top-28 -right-28 h-56 w-56 rounded-full bg-[#9f1239] blur-3xl opacity-40" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-rose-50 text-xl sm:text-2xl font-light leading-tight">
                {content.reporting.title[0]}
                <br />
                {content.reporting.title[1]}
              </h3>
              <p className="mt-auto text-[13px] sm:text-[14px] leading-relaxed text-rose-100/70 font-light max-w-[320px]">
                {content.reporting.body}
              </p>
            </div>
          </div>
        </div>

        {/* call to action for potential clients */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <a
            href={content.cta.href}
            className="rounded-full bg-rose-600 px-7 py-3 text-base sm:text-lg text-white transition-colors duration-300 hover:bg-rose-500"
          >
            {content.cta.text}
          </a>
        </div>
      </section>
    </div>
  </div>
);

export default BenefitsSection;
