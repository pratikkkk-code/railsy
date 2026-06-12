import { Alert } from "@/types";
import { priorityColor } from "@/lib/utils";
const icons: Record<string,string> = { critical:"🔴", warning:"🟠", info:"🟢" };
export default function AlertCard({ alert }: { alert: Alert }) {
  const c = priorityColor(alert.priority);
  return (
    <div id={`alert-item-${alert.id}`} data-testid="alert-item"
      className={`border rounded-xl p-3 ${c.bg} ${c.border}`}>
      <div className="flex justify-between items-start gap-2">
        <span className={`text-xs font-semibold ${c.text}`}>{icons[alert.priority]} {alert.trainId}</span>
        <span className="text-[10px] text-slate-500 dark:text-slate-400 shrink-0">{alert.timestamp}</span>
      </div>
      <p className="text-xs mt-1 text-slate-700 dark:text-slate-300">{alert.description}</p>
    </div>
  );
}
