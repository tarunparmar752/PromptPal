import HeroSearch from "./common/hero-search";
import Navbar from "./common/Navbar";
import PromptCard from "./PromptCard";

export default function Home() {
  const prompts = [
    {
      title: "Blog Post Outline",
      description: "Generate an outline for a blog post on traveling in Japan",
      tags: ["writing", "blog"],
    },
    {
      title: "Code Review",
      description: "Provide feedback on the following code snippet programming",
      tags: ["programming"],
    },
    {
      title: "Interview Questions",
      description:
        "Generate interview questions for a software engineer position",
      tags: ["interview", "hiring"],
    },
    {
      title: "Product Description",
      description:
        "Write a compelling description for a new fitness tracker smartwatch",
      tags: ["marketing", "product"],
    },
    {
      title: "Product Description",
      description:
        "Write a compelling description for a new eco-friendly water bottle",
      tags: ["marketing", "product"],
    },
    {
      title: "Email Template",
      description:
        "Create a professional follow-up email template for sales outreach",
      tags: ["email", "sales"],
    },
    {
      title: "Blog Post Outline",
      description: "Generate an outline for a blog post on traveling in Japan",
      tags: ["writing", "blog"],
    },
    {
      title: "Code Review",
      description: "Provide feedback on the following code snippet programming",
      tags: ["programming"],
    },
    {
      title: "Interview Questions",
      description:
        "Generate interview questions for a software engineer position",
      tags: ["interview", "hiring"],
    },
    {
      title: "Product Description",
      description:
        "Write a compelling description for a new fitness tracker smartwatch",
      tags: ["marketing", "product"],
    },
    {
      title: "Product Description",
      description:
        "Write a compelling description for a new eco-friendly water bottle",
      tags: ["marketing", "product"],
    },
    {
      title: "Email Template",
      description:
        "Create a professional follow-up email template for sales outreach",
      tags: ["email", "sales"],
    },
    {
      title: "Product Description",
      description:
        "Write a compelling description for a new fitness tracker smartwatch",
      tags: ["marketing", "product"],
    },
    {
      title: "Product Description",
      description:
        "Write a compelling description for a new eco-friendly water bottle",
      tags: ["marketing", "product"],
    },
    {
      title: "Email Template",
      description:
        "Create a professional follow-up email template for sales outreach",
      tags: ["email", "sales"],
    },
  ];

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
        <div className="grid grid-cols-1  mt-10 p-4 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {prompts.map((prompt, index) => (
            <PromptCard
              key={index}
              title={prompt.title}
              description={prompt.description}
              tags={prompt.tags}
            />
          ))}
        </div>
      </section>
    </>
  );
}
