"use client";
import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import StatusIndicator from "@/components/ui/StatusIndicator";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-IN", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header id="header-main" className="
      h-[52px] flex items-center gap-4 px-4
      bg-navy border-b-2 border-saffron
      dark:bg-navy dark:border-saffron
    ">
      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-7 h-7 bg-saffron rounded-md flex items-center justify-center text-sm">🚆</div>
        <div>
          <div className="text-white font-semibold tracking-widest text-sm">RAILSY</div>
          <div className="text-saffron text-[8px] tracking-wider -mt-0.5">AI COMMAND CENTER</div>
        </div>
      </div>
      {/* Tricolor stripe */}
      <div className="tricolor w-16 rounded self-stretch py-1"><span/><span/><span/></div>

      {/* Train & route */}
      <div id="train-id" className="hidden md:flex flex-col">
        <span className="text-saffron font-medium text-sm">TR-4481</span>
        <span id="route-id" className="text-white/50 text-[10px]">Mumbai → Pune</span>
      </div>

      {/* Status pills */}
      <div className="hidden lg:flex items-center gap-4 ml-2">
        <div id="connection-status"><StatusIndicator label="Connected" status="online" /></div>
        <div id="gps-status"><StatusIndicator label="GPS Active" status="online" /></div>
        <div id="ai-status"><StatusIndicator label="AI Online" status="online" /></div>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <span className="text-white/50 text-xs font-mono hidden sm:block">{time}</span>
        <ThemeToggle />
        <button id="emergency-stop-btn" className="
          flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
          bg-red-600 hover:bg-red-700 text-white transition-colors
        ">
          <AlertTriangle size={13} />
          <span className="hidden sm:inline">Emergency</span>
        </button>
      </div>
    </header>
  );
}
