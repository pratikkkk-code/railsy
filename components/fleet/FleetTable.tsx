"use client";
import Card from "@/components/ui/Card";
import { fleetTrainsMock } from "@/mock";
const statusColors: Record<string,string> = {
  ACTIVE:      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  MAINTENANCE: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  EMERGENCY:   "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  STOPPED:     "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
};
export default function FleetTable() {
  return (
    <Card title="Fleet Status Table" accent="saffron">
      <div className="overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-200 dark:border-d-border">
              {["Train ID","Route","Status","Speed","Health","Fuel","Delay"].map(h => (
                <th key={h} className="text-left py-2 px-1 text-[10px] text-slate-500 dark:text-slate-400 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fleetTrainsMock.map(t => (
              <tr key={t.trainId} className="border-b border-slate-100 dark:border-d-border hover:bg-slate-50 dark:hover:bg-d-surface transition-colors">
                <td className="py-2 px-1 font-medium text-saffron-d dark:text-saffron">{t.trainId}</td>
                <td className="py-2 px-1 text-slate-500">{t.routeId}</td>
                <td className="py-2 px-1"><span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${statusColors[t.status]}`}>{t.status}</span></td>
                <td className="py-2 px-1">{t.speed} km/h</td>
                <td className="py-2 px-1">
                  <div className="flex items-center gap-1">
                    <div className="w-12 h-1.5 bg-slate-200 dark:bg-d-border rounded-full overflow-hidden">
                      <div className="h-full bg-igreen rounded-full" style={{width:`${t.healthScore}%`}}/>
                    </div>
                    <span>{t.healthScore}%</span>
                  </div>
                </td>
                <td className="py-2 px-1">{t.fuelLevel}%</td>
                <td className="py-2 px-1 text-slate-500">{t.delayMinutes}m</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
