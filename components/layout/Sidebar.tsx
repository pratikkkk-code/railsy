"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Map, Route, HeartPulse, Bell,
  Radio, ShieldAlert, Train, Wrench, Settings
} from "lucide-react";
import { navigationItems } from "@/lib/navigation";

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard, Map, Route, HeartPulse, Bell,
  Radio, ShieldAlert, Train, Wrench, Settings
};

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside id="sidebar-navigation" className="
      w-[180px] shrink-0 bg-navy border-r border-saffron/20
      flex flex-col gap-0.5 p-3 overflow-y-auto
    ">
      <div className="tricolor rounded mb-3"><span/><span/><span/></div>
      <p className="text-[9px] tracking-widest text-white/30 px-2 mb-1">NAVIGATION</p>
      {navigationItems.map((item) => {
        const Icon = iconMap[item.icon] ?? Settings;
        const active = pathname === item.href;
        return (
          <Link key={item.id} id={item.id} href={item.href} className={`
            flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all
            ${active
              ? "bg-saffron/20 text-saffron border-l-2 border-saffron"
              : "text-white/60 hover:bg-white/10 hover:text-white"
            }
          `}>
            <Icon size={15} />
            <span>{item.label}</span>
            {"badge" in item && item.badge ? (
              <span className="ml-auto bg-red-600 text-white text-[9px] rounded-full px-1.5">{item.badge}</span>
            ) : null}
          </Link>
        );
      })}
      <div className="mt-auto pt-4 px-2">
        <div className="bg-igreen/10 border border-igreen/30 rounded-lg p-2">
          <div className="text-green-400 text-[9px] mb-1">● SYSTEM OK</div>
          <div className="text-white/60 text-[9px]">API: Online</div>
          <div className="text-white/60 text-[9px]">WS: Live</div>
          <div className="text-white/60 text-[9px]">AI: Active</div>
        </div>
      </div>
    </aside>
  );
}
