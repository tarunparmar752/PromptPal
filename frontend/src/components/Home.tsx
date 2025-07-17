import HeroSearch from "./common/hero-search";
import Navbar from "./common/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-cente mt-10">
        <h3 className="text-6xl font-semibold dark:text-gray-200">
          Discover AI prompts
        </h3>
        <p className="mt-8 text-xl font-normal dark:text-gray-200">
          Browse a collection of prompts for AI tools like ChatGPT, Claude,
          Gemini etc.
        </p>
        <HeroSearch />
      </section>
    </>
  );
}
