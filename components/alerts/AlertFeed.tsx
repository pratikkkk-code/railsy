"use client";
import AlertCard from "./AlertCard";
import { alertsMock } from "@/mock";
export default function AlertFeed() {
  return (
    <section id="alert-feed" className="h-full flex flex-col bg-navy border-t-2 border-saffron">
      <div className="flex items-center gap-0 h-full overflow-hidden">
        <div className="bg-saffron text-navy text-[10px] font-bold px-3 h-full flex items-center whitespace-nowrap">LIVE ALERTS</div>
        <div id="alert-feed-container" className="flex items-center gap-2 px-3 overflow-x-auto flex-1">
          {alertsMock.map(a => {
            const colors = { critical:"bg-red-900/30 text-red-300 border-red-500/40", warning:"bg-amber-900/30 text-amber-300 border-amber-500/40", info:"bg-green-900/30 text-green-300 border-green-500/40" };
            const icons: Record<string,string> = {critical:"🔴",warning:"🟠",info:"🟢"};
            return (
              <div key={a.id} className={`shrink-0 border rounded-full px-3 py-1 text-[10px] flex items-center gap-1.5 ${colors[a.priority]}`}>
                {icons[a.priority]} {a.trainId} — {a.description}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
