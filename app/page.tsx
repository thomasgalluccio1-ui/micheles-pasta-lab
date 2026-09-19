"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#FFF9F0] text-[#17202A]">

      {/* =========================
          NAVBAR
      ========================== */}

      <header className="fixed top-0 z-50 w-full border-b border-[#17202A]/10 bg-[#FFF9F0]/90 backdrop-blur-xl">

        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          <a
            href="#top"
            className="text-xl font-bold tracking-tight transition hover:scale-[1.02]"
          >
            Michele&apos;s{" "}
            <span className="text-[#C63D2F]">
              Pasta Lab
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">

            <a
              href="#courses"
              className="nav-link"
            >
              Courses
            </a>

            <a
              href="#how-it-works"
              className="nav-link"
            >
              How it works
            </a>

            <a
              href="#about"
              className="nav-link"
            >
              About Michele
            </a>

          </div>

          <a
            href="#courses"
            className="button-animate rounded-full bg-[#C63D2F] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#A92F25]"
          >
            Start Learning
          </a>

        </nav>

      </header>


      {/* =========================
          HERO
      ========================== */}

      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden pt-20"
      >

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#F2E5D2] blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">

          {/* HERO TEXT */}

          <div className="relative z-10 max-w-xl">

            <div className="hero-animate inline-flex items-center rounded-full border border-[#C63D2F]/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C63D2F]">
              Authentic Italian Cooking
            </div>

            <h1 className="hero-animate hero-delay-1 mt-6 text-5xl font-bold leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-8xl">

              The art of
              <br />

              <span className="text-[#C63D2F]">
                Italian cooking.
              </span>

            </h1>

            <p className="hero-animate hero-delay-2 mt-8 max-w-lg text-lg leading-8 text-[#243447]/75">

              Discover the art of authentic Italian homemade cooking,
              from traditional doughs and fresh pasta to timeless
              recipes made with passion.

            </p>

            <div className="hero-animate hero-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#courses"
                className="button-animate group rounded-full bg-[#17202A] px-7 py-4 text-center font-semibold text-white hover:bg-[#243447]"
              >
                Explore Courses{" "}
                <span className="arrow-move">→</span>
              </a>

              <a
                href="#about"
                className="button-animate rounded-full border border-[#17202A]/20 bg-white px-7 py-4 text-center font-semibold hover:border-[#C63D2F]/40 hover:text-[#C63D2F]"
              >
                Meet Michele
              </a>

            </div>

            <div className="hero-animate hero-delay-4 mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#243447]/70">

              <span>
                ✓ Traditional techniques
              </span>

              <span>
                ✓ Step-by-step lessons
              </span>

              <span>
                ✓ Learn from home
              </span>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="hero-animate hero-delay-2 relative">

            <div className="image-reveal group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#F2E5D2] shadow-2xl">

              <img
                src="/michele2.jpg"
                alt="Michele preparing Italian homemade cooking"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17202A]/30 via-transparent to-transparent" />

            </div>


            <div className="floating-card absolute -bottom-6 -left-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-xl">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C63D2F]">
                From Italy
              </p>

              <p className="mt-1 font-semibold text-[#17202A]">
                Made with passion 🇮🇹
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PRESENTATION
      ========================== */}

      <section className="bg-white px-6 py-24 lg:px-10">

        <div className="reveal mx-auto max-w-5xl">

          <div className="presentation-container group relative min-h-[520px] overflow-hidden rounded-[2.5rem] shadow-2xl md:min-h-[600px]">

            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=90"
              alt="Italian homemade cooking"
              className="presentation-image absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-[#17202A]/60" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17202A]/90 via-[#17202A]/30 to-transparent" />

            <div className="relative flex min-h-[520px] items-end md:min-h-[600px]">

              <div className="w-full max-w-4xl p-8 text-white md:p-14 lg:p-16">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F2E5D2]">
                  A journey through Italian cuisine
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Discover new flavors, techniques and traditions.
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
                  In the culinary world, there are countless shades of taste.
                  I combine my experience with my passion for cooking to take you
                  on an exciting journey of discovery, exploring new flavors,
                  techniques and methods.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          COURSES
      ========================== */}

      <section
        id="courses"
        className="bg-[#FFF9F0] px-6 py-24 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="reveal max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C63D2F]">
              Choose your journey
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

              Learn the craft.
              <br />

              <span className="text-[#C63D2F]">
                Master the tradition.
              </span>

            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#243447]/70">
              Learn authentic Italian techniques directly from your own kitchen,
              one recipe at a time.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <CourseCard
              number="01"
              title="Bread Dough"
              description="Learn how to prepare soft and traditional Italian bread dough from scratch."
              price="€50"
              lessons="Video course"
              level="Beginner"
              image="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=90"
              alt="Traditional Italian bread"
            />

            <CourseCard
              number="02"
              title="Fresh Pasta"
              description="Discover the secrets behind authentic fresh Italian pasta made at home."
              price="€40"
              lessons="Video course"
              level="Beginner"
              image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=90"
              alt="Fresh homemade Italian pasta"
            />

            <CourseCard
              number="03"
              title="Pizza Dough"
              description="Master the perfect dough for authentic Italian-style pizza."
              price="€45"
              lessons="Video course"
              level="Beginner / Intermediate"
              image="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=90"
              alt="Authentic Italian pizza"
            />

            <CourseCard
              number="04"
              title="Torta al Testo"
              description="Learn how to prepare the traditional Torta al Testo from Perugia with its authentic dough and technique."
              price="€60"
              lessons="Video course"
              level="Traditional"
              image="https://commons.wikimedia.org/wiki/Special:FilePath/Torta%20al%20testo%20ham%20cheese.jpg"
              alt="Traditional Torta al Testo from Perugia, Umbria"
            />

          </div>


          {/* COLLECTION */}

          <div className="reveal mt-8 overflow-hidden rounded-[2.5rem] bg-[#17202A] p-8 text-white md:p-12">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2E5D2]">
                  Best value
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Complete Italian Collection
                </h3>

                <p className="mt-2 max-w-xl text-white/65">
                  Get all four courses and build a complete foundation
                  in traditional Italian dough-making.
                </p>

              </div>

              <div className="flex items-center gap-6">

                <span className="text-4xl font-bold">
                  €69
                </span>

                <button className="button-animate group rounded-full bg-[#C63D2F] px-6 py-4 font-semibold text-white hover:bg-[#A92F25]">

                  Get the Collection{" "}
                  <span className="arrow-move">→</span>

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          ITALIAN CLASSICS
      ========================== */}

      <section className="bg-[#F2E5D2] px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="reveal max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C63D2F]">
              Italian Classics
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">

              From the sauce
              <br />

              <span className="text-[#C63D2F]">
                to the table.
              </span>

            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#243447]/70">
              Discover the traditional sauces and dishes that bring
              authentic Italian cooking to life.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <CourseCard
              number="01"
              title="Squid Ragù"
              description="Learn how to prepare a delicious Italian squid ragù, with both the traditional white version and the tomato version."
              price="Coming soon"
              lessons="Video course"
              level="Traditional"
              image="https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1000&q=90"
              alt="Italian seafood pasta"
            />

            <CourseCard
              number="02"
              title="Classic Bolognese Ragù"
              description="Discover the secrets of traditional ragù alla bolognese and learn how to build its deep, rich Italian flavor."
              price="Coming soon"
              lessons="Video course"
              level="Traditional"
              image="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1000&q=90"
              alt="Classic Italian Bolognese pasta"
            />

            <CourseCard
              number="03"
              title="Lasagna"
              description="Learn how to make authentic Italian lasagna layer by layer, from the pasta and ragù to the final bake."
              price="Coming soon"
              lessons="Video course"
              level="Traditional"
              image="https://images.unsplash.com/photo-1574868235885-2f7a6c5e3f3a?auto=format&fit=crop&w=1000&q=90"
              alt="Traditional Italian lasagna"
            />

          </div>

        </div>

      </section>


      {/* =========================
          HOW IT WORKS
      ========================== */}

      <section
        id="how-it-works"
        className="bg-white px-6 py-24 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="reveal text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C63D2F]">
              Simple by design
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">

              Your kitchen. Your pace.
              <br />

              <span className="text-[#C63D2F]">
                Your Italian table.
              </span>

            </h2>

          </div>


          <div className="mt-16 grid gap-10 md:grid-cols-4">

            <Step
              number="01"
              title="Choose"
              text="Pick the course that fits your interests and level."
            />

            <Step
              number="02"
              title="Learn"
              text="Watch Michele's step-by-step lessons and discover traditional techniques."
            />

            <Step
              number="03"
              title="Cook"
              text="Follow along from your own kitchen using simple ingredients."
            />

            <Step
              number="04"
              title="Enjoy"
              text="Bring authentic Italian flavors to your table and share them with the people you love."
            />

          </div>

        </div>

      </section>


      {/* =========================
          ABOUT MICHELE
      ========================== */}

      <section
        id="about"
        className="bg-[#FFF9F0] px-6 py-24 lg:px-10"
      >

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div className="reveal image-reveal group relative aspect-square overflow-hidden rounded-[2.5rem] bg-[#F2E5D2] shadow-2xl">

            <img
              src="/michele2.jpg"
              alt="Michele preparing Italian homemade cooking"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17202A]/25 to-transparent" />

          </div>


          <div className="reveal">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C63D2F]">
              Meet Michele
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">

              Italian cooking is more than food.
              <br />

              <span className="text-[#C63D2F]">
                It&apos;s a way of life.
              </span>

            </h2>

            <p className="mt-7 text-lg leading-8 text-[#243447]/70">

              Michele&apos;s Pasta Lab brings authentic Italian cooking
              techniques directly to your kitchen. No complicated equipment,
              no unnecessary rules — just good ingredients, traditional
              techniques and the pleasure of making something yourself.

            </p>

            <button className="button-animate group mt-8 rounded-full bg-[#17202A] px-7 py-4 font-semibold text-white hover:bg-[#243447]">

              Discover Michele{" "}
              <span className="arrow-move">→</span>

            </button>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}

      <section className="relative overflow-hidden bg-[#C63D2F] px-6 py-24 text-center text-white">

        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="reveal relative">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Ready to start?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">

            Bring the taste of Italy into your kitchen.

          </h2>

          <a
            href="#courses"
            className="cta-button group mt-9 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#17202A]"
          >

            Explore the Courses{" "}
            <span className="arrow-move">→</span>

          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

      <footer className="bg-[#17202A] px-6 py-12 text-white lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xl font-bold">

              Michele&apos;s{" "}

              <span className="text-[#C63D2F]">
                Pasta Lab
              </span>

            </p>

            <p className="mt-2 text-sm text-white/50">
              Authentic Italian cooking, wherever you are.
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


/* =========================
   COURSE CARD
========================= */

function CourseCard({
  number,
  title,
  description,
  price,
  lessons,
  level,
  image,
  alt,
}: {
  number: string;
  title: string;
  description: string;
  price: string;
  lessons: string;
  level: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="reveal course-card group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#17202A]/10 bg-white">

      <div className="image-reveal h-[190px] w-full">

        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
        />

      </div>


      <div className="flex flex-1 flex-col p-6">

        <div className="flex items-center justify-between">

          <span className="text-sm font-bold text-[#C63D2F]">
            {number}
          </span>

          <span className="rounded-full bg-[#F2E5D2] px-3 py-1 text-xs font-semibold text-[#243447]">
            {level}
          </span>

        </div>


        <div className="mt-7">

          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#243447]/65">
            {description}
          </p>

        </div>


        <div className="mt-auto border-t border-[#17202A]/10 pt-5">

          <div className="flex items-end justify-between gap-3">

            <div>

              <p className="text-3xl font-bold">
                {price}
              </p>

              <p className="mt-1 text-xs text-[#243447]/60">
                {lessons} · Lifetime access
              </p>

            </div>


            <button className="button-animate group rounded-full bg-[#C63D2F] px-5 py-3 text-sm font-semibold text-white hover:bg-[#A92F25]">

              View Course{" "}
              <span className="arrow-move">→</span>

            </button>

          </div>

        </div>

      </div>

    </article>
  );
}


/* =========================
   STEP
========================= */

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
    <div className="reveal group">

      <span className="step-number inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#C63D2F] text-sm font-bold text-white">
        {number}
      </span>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-[#243447]/65">
        {text}
      </p>

    </div>
  );
}
