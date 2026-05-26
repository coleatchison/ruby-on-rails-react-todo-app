import { cn } from "../utils/cn";

interface CardProps {
  classes?: string;
  children: React.ReactNode;
}

export default function Card({ children, classes }: CardProps) {
  return (
    <div
      className={cn(
        "flex min-w-full rounded-2xl border border-white/40 bg-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.12)] p-6 transition-all duration-300 ease-out hover:bg-white/70",
        classes,
      )}
    >
      {children}
    </div>
  );
}
