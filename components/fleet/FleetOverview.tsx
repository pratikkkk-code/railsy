"use client";
import Card from "@/components/ui/Card";
import { fleetSummaryMock as s } from "@/mock";
export default function FleetOverview() {
  const stats = [
    { label:"Total",   val:s.totalTrains,       color:"text-navy dark:text-blue-400" },
    { label:"Active",  val:s.activeTrains,       color:"text-igreen-d dark:text-green-400" },
    { label:"Maint.",  val:s.maintenanceTrains,  color:"text-saffron-d dark:text-saffron" },
    { label:"Emerg.",  val:s.emergencyTrains,    color:"text-red-600 dark:text-red-400" },
  ];
  return (
    <Card title="Fleet Overview" accent="navy">
      <div className="grid grid-cols-2 gap-2 mb-3">
        {stats.map(st => (
          <div key={st.label} className="bg-slate-50 dark:bg-d-surface rounded-lg p-2 text-center">
            <div className={`text-xl font-bold ${st.color}`}>{st.val}</div>
            <div className="text-[9px] text-slate-500">{st.label}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[9px] text-slate-500 w-14">Utilization</span>
        <div className="flex-1 h-2 bg-slate-200 dark:bg-d-border rounded-full overflow-hidden">
          <div className="h-full bg-navy rounded-full" style={{width:"76%"}}/>
        </div>
        <span className="text-[10px] font-bold text-navy dark:text-blue-400">76%</span>
      </div>
    </Card>
  );
}
