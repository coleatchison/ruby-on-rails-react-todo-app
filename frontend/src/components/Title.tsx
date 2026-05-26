import { LayoutList } from "lucide-react";
import Section from "./Section";

interface TitleProps {
  count?: number;
}

export default function Title({ count }: TitleProps) {
  return (
    <Section>
      <div className="flex grow items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br to-violet-500/10 to-70%  from-white/60 backdrop-blur-md border border-white/30 shadow-md">
            <span className="text-2xl">
              <LayoutList />
            </span>
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-800">
              Your Todos
            </h1>
            <p className="text-sm text-gray-500">
              Stay organized and productive
            </p>
          </div>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/10 -from-5%  via-white/60 to-cyan-300/10 -to-5%  border border-white/40 backdrop-blur-md text-lg font-semibold shadow-md">
          {count || 0}
        </div>
      </div>
    </Section>
  );
}
