import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function HeroSearch() {
  return (
    <div className="relative max-w-2xl mx-auto mt-10">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder="Search Prompts...."
        className="pl-12 pr-4 py-4 h-14 text-lg placeholder:text-lg dark:placeholder:text-gray-200 w-lg rounded-xl shadow-sm border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      />
    </div>
  );
}
