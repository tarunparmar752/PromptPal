type PromptCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function PromptCard({
  title,
  description,
  tags,
}: PromptCardProps) {
  return (
    <div className="bg-white  dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md dark:hover:shadow-gray-900/25  transition-shadow duration-200 cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed text-lg dark:text-gray-300">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700
 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
