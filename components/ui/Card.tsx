import { ReactNode } from "react";
interface CardProps {
  title: string; children: ReactNode; className?: string;
  accent?: "saffron"|"green"|"navy";
}
const accents = { saffron:"border-t-saffron", green:"border-t-igreen", navy:"border-t-navy" };
export default function Card({ title, children, className="", accent="saffron" }: CardProps) {
  return (
    <div className={`panel p-4 h-full flex flex-col border-t-2 ${accents[accent]} ${className}`}>
      <div className="mb-3 flex items-center gap-1.5">
        <h3 className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
          {title}
        </h3>
      </div>
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}
