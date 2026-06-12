import Card from "@/components/ui/Card";
const recs = [
  { id:"risk-analysis",              label:"Risk Level",    val:"Low Risk",                  icon:"✅" },
  { id:"suggested-speed",            label:"Suggested Speed",val:"95 km/h",                 icon:"🚄" },
  { id:"route-adjustment",           label:"Route Change",  val:"Not Required",              icon:"🛤" },
  { id:"maintenance-recommendation", label:"Maintenance",   val:"Wheel check in 48h",        icon:"🔧" },
];
export default function RecommendationPanel() {
  return (
    <div id="ai-recommendation-panel">
      <Card title="AI Recommendations" accent="saffron">
        <div className="space-y-2">
          {recs.map(r => (
            <div key={r.id} id={r.id} className="flex items-start gap-2 bg-slate-50 dark:bg-d-surface rounded-lg p-2">
              <span className="text-sm">{r.icon}</span>
              <div>
                <p className="text-[9px] text-slate-500 dark:text-slate-400">{r.label}</p>
                <p className="text-xs font-medium">{r.val}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
