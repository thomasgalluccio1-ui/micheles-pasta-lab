export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F1E3] text-[#243028]">

      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#F7F1E3]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          <div className="text-xl font-semibold tracking-tight">
            Michele&apos;s{" "}
            <span className="text-[#B85C38]">Pasta Lab</span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              href="#courses"
              className="transition hover:text-[#B85C38]"
            >
              Courses
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-[#B85C38]"
            >
              How it works
            </a>

            <a
              href="#about"
              className="transition hover:text-[#B85C38]"
            >
              About Michele
            </a>
          </div>

          <a
            href="#courses"
            className="rounded-full bg-[#596B45] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#4D5D3C]"
          >
            Start Learning
          </a>

        </nav>
      </header>


      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">

          <div className="max-w-xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#B85C38]">
              Authentic Italian Cooking
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              The art of
              <br />
              <span className="italic text-[#B85C38]">
                Italian cooking.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#657066]">
              Discover the art of authentic Italian homemade cooking,
              from traditional doughs and fresh pasta to timeless
              recipes made with passion.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#courses"
                className="rounded-full bg-[#596B45] px-7 py-4 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#4D5D3C]"
              >
                Explore Courses →
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#596B45]/30 px-7 py-4 text-center font-semibold transition hover:bg-white"
              >
                Meet Michele
              </a>

            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#657066]">
              <span>✓ Traditional Italian techniques</span>
              <span>✓ Step-by-step lessons</span>
              <span>✓ Learn from your own kitchen</span>
            </div>

          </div>


          {/* HERO IMAGE */}
          <div className="relative">

            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#E6D5B8] shadow-2xl">

              <div className="flex h-full items-center justify-center p-10 text-center">

                <div>

                  <div className="mb-4 text-7xl">
                    👨‍🍳
                  </div>

                  <p className="text-lg font-medium text-[#243028]">
                    Italian cooking, made at home
                  </p>

                  <p className="mt-2 text-sm text-[#657066]">
                    Your hero image / video goes here
                  </p>

                </div>

              </div>

            </div>


            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">

              <p className="text-xs uppercase tracking-widest text-[#657066]">
                From Italy
              </p>

              <p className="mt-1 font-semibold">
                Made with passion 🇮🇹
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PRESENTATION - IMAGE WITH TEXT OVERLAY */}
      <section className="bg-white px-6 py-20 lg:px-10">

        <div className="mx-auto max-w-5xl">

          <div className="group relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-2xl md:min-h-[600px]">

            {/* BACKGROUND IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=90"
              alt="Italian homemade cooking"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#243028]/55" />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#243028]/80 via-[#243028]/30 to-transparent" />

            {/* TEXT */}
            <div className="relative flex min-h-[520px] items-end md:min-h-[600px]">

              <div className="w-full max-w-4xl p-8 text-white md:p-14 lg:p-16">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E6D5B8]">
                  A journey through Italian cuisine
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
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


      {/* COURSES */}
      <section
        id="courses"
        className="bg-white px-6 py-24 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85C38]">
              Choose your journey
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Learn the craft.
              <br />
              <span className="italic">
                Master the tradition.
              </span>
            </h2>

          </div>


          {/* FOUR MAIN COURSES */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {/* BREAD DOUGH */}
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


            {/* FRESH PASTA */}
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


            {/* PIZZA DOUGH */}
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


            {/* TORTA AL TESTO */}
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


          {/* COMPLETE COLLECTION */}
          <div className="mt-8 rounded-[2rem] bg-[#596B45] p-8 text-white md:p-12">

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E6D5B8]">
                  Best value
                </p>

                <h3 className="mt-2 text-3xl font-semibold">
                  Complete Italian Collection
                </h3>

                <p className="mt-2 max-w-xl text-white/70">
                  Get all four courses and build a complete foundation
                  in traditional Italian dough-making.
                </p>

              </div>


              <div className="flex items-center gap-6">

                <span className="text-4xl font-semibold">
                  €69
                </span>

                <button className="rounded-full bg-white px-6 py-4 font-semibold text-[#596B45] transition hover:scale-105">
                  Get the Collection →
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ITALIAN CLASSICS */}
      <section className="bg-[#F7F1E3] px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85C38]">
              Italian Classics
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From the sauce
              <br />
              <span className="italic">
                to the table.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#657066]">
              Discover the traditional sauces and dishes that bring
              authentic Italian cooking to life.
            </p>

          </div>


          {/* THREE NEW COURSES */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {/* SQUID RAGÙ */}
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


            {/* BOLOGNESE */}
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


            {/* LASAGNA */}
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


      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-white px-6 py-24 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85C38]">
              Simple by design
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Your kitchen. Your pace. Your Italian table.
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


      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#F7F1E3] px-6 py-24 lg:px-10"
      >

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div className="flex aspect-square items-center justify-center rounded-[2rem] bg-[#E6D5B8]">

            <span className="text-8xl">
              👨‍🍳
            </span>

          </div>


          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85C38]">
              Meet Michele
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Italian cooking is more than food.
              <br />
              <span className="italic">
                It&apos;s a way of life.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#657066]">
              Michele&apos;s Pasta Lab brings authentic Italian cooking
              techniques directly to your kitchen. No complicated equipment,
              no unnecessary rules — just good ingredients, traditional
              techniques and the pleasure of making something yourself.
            </p>

            <button className="mt-8 rounded-full border border-[#596B45]/30 px-7 py-4 font-semibold transition hover:bg-white">
              Discover Michele →
            </button>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-[#B85C38] px-6 py-24 text-center text-white">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
          Ready to start?
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Bring the taste of Italy into your kitchen.
        </h2>

        <a
          href="#courses"
          className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[#243028] transition hover:scale-105"
        >
          Explore the Courses →
        </a>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#243028] px-6 py-12 text-white lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xl font-semibold">
              Michele&apos;s{" "}
              <span className="text-[#E6D5B8]">
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


/* COURSE CARD */

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
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* IMAGE */}
      <div className="h-[180px] w-full overflow-hidden">

        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

      </div>


      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5">

        <div className="flex items-center justify-between">

          <span className="text-sm font-semibold text-[#B85C38]">
            {number}
          </span>

          <span className="rounded-full bg-[#F7F1E3] px-3 py-1 text-xs font-medium">
            {level}
          </span>

        </div>


        <div className="mt-7">

          <h3 className="text-2xl font-semibold">
            {title}
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#657066]">
            {description}
          </p>

        </div>


        {/* PRICE */}
        <div className="mt-auto border-t border-black/10 pt-5">

          <div className="flex items-end justify-between gap-3">

            <div>

              <p className="text-3xl font-semibold">
                {price}
              </p>

              <p className="mt-1 text-xs text-[#657066]">
                {lessons} · Lifetime access
              </p>

            </div>


            <button className="rounded-full bg-[#596B45] px-5 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#4D5D3C]">
              View Course →
            </button>

          </div>

        </div>

      </div>

    </article>
  );
}


/* STEP */

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

      <span className="text-sm font-semibold text-[#B85C38]">
        {number}
      </span>

      <h3 className="mt-4 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-[#657066]">
        {text}
      </p>

    </div>
  );
}