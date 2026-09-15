export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] text-[#1d2a24]">
      
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#f7f2e8]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div className="text-xl font-semibold tracking-tight">
            Michele&apos;s <span className="text-[#9d3828]">Pasta Lab</span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#courses" className="transition hover:text-[#9d3828]">
              Courses
            </a>
            <a href="#how-it-works" className="transition hover:text-[#9d3828]">
              How it works
            </a>
            <a href="#about" className="transition hover:text-[#9d3828]">
              About Michele
            </a>
          </div>

          <a
            href="#courses"
            className="rounded-full bg-[#1d2a24] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105"
          >
            Start Learning
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
          
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#9d3828]">
              Authentic Italian Pasta
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Make pasta
              <br />
              <span className="italic text-[#9d3828]">like an Italian.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#526058]">
              Learn the art of authentic homemade pasta with Michele,
              step by step, from your own kitchen.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#courses"
                className="rounded-full bg-[#1d2a24] px-7 py-4 text-center font-semibold text-white transition hover:-translate-y-1"
              >
                Explore Courses →
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#1d2a24]/20 px-7 py-4 text-center font-semibold transition hover:bg-white"
              >
                Meet Michele
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#526058]">
              <span>✓ Step-by-step videos</span>
              <span>✓ Lifetime access</span>
              <span>✓ Italian techniques</span>
            </div>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#d8c8ac] shadow-2xl">
              <div className="flex h-full items-center justify-center p-10 text-center">
                <div>
                  <div className="mb-4 text-7xl">🍝</div>
                  <p className="text-lg font-medium text-[#1d2a24]">
                    Michele making fresh pasta
                  </p>
                  <p className="mt-2 text-sm text-[#526058]">
                    Your hero image / video goes here
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-[#526058]">
                From Italy
              </p>
              <p className="mt-1 font-semibold">Made with passion 🇮🇹</p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9d3828]">
              Choose your journey
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Learn the craft.
              <br />
              <span className="italic">Master the pasta.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            
            <CourseCard
              number="01"
              title="Pasta Fundamentals"
              description="Start from zero and learn the foundations of fresh Italian pasta."
              price="€19"
              lessons="6 lessons"
              level="Beginner"
            />

            <CourseCard
              number="02"
              title="Italian Classics"
              description="Master the pasta dishes that made Italian cuisine famous."
              price="€29"
              lessons="8 lessons"
              level="Beginner / Intermediate"
            />

            <CourseCard
              number="03"
              title="Pasta Mastery"
              description="Take your pasta-making skills to the next level."
              price="€39"
              lessons="10 lessons"
              level="Advanced"
            />
          </div>

          <div className="mt-8 rounded-[2rem] bg-[#1d2a24] p-8 text-white md:p-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9b88b]">
                  Best value
                </p>
                <h3 className="mt-2 text-3xl font-semibold">
                  Complete Pasta Collection
                </h3>
                <p className="mt-2 max-w-xl text-white/60">
                  Get all three courses and master the complete Italian pasta
                  experience.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-4xl font-semibold">€69</span>
                <button className="rounded-full bg-white px-6 py-4 font-semibold text-[#1d2a24] transition hover:scale-105">
                  Get the Collection →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-[#f7f2e8] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9d3828]">
              Simple by design
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Your kitchen. Your pace. Your pasta.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            <Step number="01" title="Choose" text="Pick the course that fits your level." />
            <Step number="02" title="Learn" text="Watch Michele's step-by-step lessons." />
            <Step number="03" title="Cook" text="Follow along from your own kitchen." />
            <Step number="04" title="Enjoy" text="Make authentic Italian pasta at home." />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="aspect-square rounded-[2rem] bg-[#d8c8ac] flex items-center justify-center">
            <span className="text-8xl">👨‍🍳</span>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9d3828]">
              Meet Michele
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Pasta is more than food.
              <br />
              <span className="italic">It&apos;s a piece of Italy.</span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#526058]">
              Michele&apos;s Pasta Lab brings authentic Italian pasta-making
              techniques directly to your kitchen. No complicated equipment,
              no unnecessary rules — just good ingredients, traditional
              techniques and the pleasure of making pasta yourself.
            </p>

            <button className="mt-8 rounded-full border border-[#1d2a24]/20 px-7 py-4 font-semibold transition hover:bg-[#f7f2e8]">
              Discover Michele →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#9d3828] px-6 py-24 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
          Ready to start?
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Bring a taste of Italy into your kitchen.
        </h2>

        <a
          href="#courses"
          className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#1d2a24] transition hover:scale-105"
        >
          Explore the Courses →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1d2a24] px-6 py-12 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-semibold">
              Michele&apos;s <span className="text-[#d9b88b]">Pasta Lab</span>
            </p>
            <p className="mt-2 text-sm text-white/50">
              Authentic Italian pasta, wherever you are.
            </p>
          </div>

          <p className="text-sm text-white/40">
            © 2026 Michele&apos;s Pasta Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function CourseCard({
  number,
  title,
  description,
  price,
  lessons,
  level,
}: {
  number: string;
  title: string;
  description: string;
  price: string;
  lessons: string;
  level: string;
}) {
  return (
    <article className="group rounded-[2rem] border border-black/10 bg-[#f7f2e8] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#9d3828]">{number}</span>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium">
          {level}
        </span>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-[#526058]">
          {description}
        </p>
      </div>

      <div className="mt-8 border-t border-black/10 pt-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-semibold">{price}</p>
            <p className="mt-1 text-xs text-[#526058]">{lessons} · Lifetime access</p>
          </div>

          <button className="rounded-full bg-[#1d2a24] px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-[#9d3828]">
            View Course →
          </button>
        </div>
      </div>
    </article>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <span className="text-sm font-semibold text-[#9d3828]">{number}</span>
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-[#526058]">{text}</p>
    </div>
  );
}