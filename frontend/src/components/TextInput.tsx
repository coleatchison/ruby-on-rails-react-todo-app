import { cn } from "../utils/cn";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  isError?: boolean;
}

export default function TextInput({
  value,
  onChange,
  placeholder,
  isError = false,
}: TextInputProps) {
  return (
    <textarea
      value={value}
      className={cn(
        "w-full min-h-13 rounded-xl border border-violet-200/80 bg-white/80 px-4 py-3 text-gray-800 placeholder:text-gray-500 shadow-sm backdrop-blur-md outline-none transition-all duration-200 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-200/60 focus:shadow-lg focus:shadow-violet-200/40",
        isError && "border-red-400 focus:border-red-400 focus:ring-red-200/50",
      )}
      onChange={onChange}
      placeholder={placeholder || "Enter text..."}
    />
  );
}
