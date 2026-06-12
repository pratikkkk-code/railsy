"use client";
import Card from "@/components/ui/Card";
import { trainStatusMock as t } from "@/mock";
export default function TrainStatusCard() {
  return (
    <div id="train-status-card">
      <Card title="Train Status · TR-4481">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label:"Speed",     id:"train-speed",     val:`${t.speed} km/h`,       color:"text-saffron-d dark:text-saffron" },
            { label:"Engine",    id:"engine-health",   val:`${t.engineHealth}%`,     color:"text-igreen-d dark:text-green-400" },
            { label:"Fuel",      id:"fuel-level",      val:`${t.fuelLevel}%`,        color:"text-navy dark:text-blue-400" },
            { label:"Battery",   id:"battery",         val:"95%",                    color:"text-igreen-d dark:text-green-400" },
            { label:"Brakes",    id:"brake-status",    val:t.brakeStatus,            color:"text-igreen-d dark:text-green-400" },
            { label:"Driver",    id:"driver-status",   val:t.driverStatus,           color:"text-igreen-d dark:text-green-400" },
          ].map(m => (
            <div key={m.id} id={m.id} className="bg-slate-50 dark:bg-d-surface rounded-lg p-2">
              <p className="text-[9px] text-slate-500 dark:text-slate-400">{m.label}</p>
              <p className={`text-sm font-semibold ${m.color}`}>{m.val}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 space-y-1.5">
          {[
            { label:"Eng. Temp", val:82, max:120, color:"bg-saffron" },
            { label:"Brake PSI", val:84, max:100, color:"bg-navy" },
            { label:"Wheel",     val:91, max:100, color:"bg-igreen" },
          ].map(g => (
            <div key={g.label} className="flex items-center gap-2">
              <span className="text-[9px] text-slate-500 dark:text-slate-400 w-16">{g.label}</span>
              <div className="flex-1 h-1.5 bg-slate-200 dark:bg-d-border rounded-full overflow-hidden">
                <div className={`h-full ${g.color} rounded-full`} style={{width:`${(g.val/g.max)*100}%`}} />
              </div>
              <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300 w-8 text-right">{g.val}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
