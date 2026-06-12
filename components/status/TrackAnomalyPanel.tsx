import Card from "@/components/ui/Card";
const anomalies = [
  { id:"track-crack-alert",    label:"Track Cracks",      val:"2", color:"text-red-600 dark:text-red-400" },
  { id:"misalignment-alert",   label:"Misalignment",      val:"1 section", color:"text-saffron-d dark:text-saffron" },
  { id:"obstacle-alert",       label:"Obstacles",         val:"Clear", color:"text-igreen-d dark:text-green-400" },
  { id:"animal-alert",         label:"Animal Intrusion",  val:"3 sightings", color:"text-saffron-d dark:text-saffron" },
  { id:"human-alert",          label:"Human Intrusion",   val:"1 report", color:"text-red-600 dark:text-red-400" },
];
export default function TrackAnomalyPanel() {
  return (
    <div id="track-anomaly-panel">
      <Card title="Track Anomalies" accent="navy">
        <div className="space-y-1">
          {anomalies.map(a => (
            <div key={a.id} id={a.id} className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-d-border last:border-0 text-xs">
              <span className="text-slate-600 dark:text-slate-300">{a.label}</span>
              <span className={`font-semibold ${a.color}`}>{a.val}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
