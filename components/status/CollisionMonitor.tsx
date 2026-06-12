"use client";
import Card from "@/components/ui/Card";
import { collisionMock as c } from "@/mock";
import { getThreatBg } from "@/lib/utils";
const RADIUS = 32, CIRC = 2 * Math.PI * RADIUS;
export default function CollisionMonitor() {
  const pct = c.riskScore / 100;
  return (
    <div id="collision-monitor">
      <Card title="Collision Monitor" accent="green">
        <div className="flex flex-col items-center mb-2">
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 72 72" className="w-20 h-20 -rotate-90">
              <circle cx="36" cy="36" r={RADIUS} fill="none" stroke="currentColor" strokeWidth="6" className="text-slate-200 dark:text-d-border"/>
              <circle cx="36" cy="36" r={RADIUS} fill="none" strokeWidth="6"
                stroke={getThreatBg(c.riskScore)}
                strokeDasharray={`${pct*CIRC} ${CIRC}`} strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span id="collision-risk" className="text-xl font-bold" style={{color:getThreatBg(c.riskScore)}}>{c.riskScore}%</span>
              <span className="text-[9px] text-slate-500">risk</span>
            </div>
          </div>
        </div>
        <div className="space-y-1 text-xs">
          {[
            ["Nearby Train", c.trainId],
            ["Time to Impact", `${c.timeToImpact}s`],
            ["Distance", `${c.distanceMeters}m`],
            ["Closing Speed", `${c.closingSpeed} km/h`],
          ].map(([k,v]) => (
            <div key={k} className="flex justify-between py-1 border-b border-slate-100 dark:border-d-border last:border-0">
              <span className="text-slate-500 dark:text-slate-400">{k}</span>
              <span className="font-medium">{v}</span>
            </div>
          ))}
          <div id="recommended-action" className="mt-2 text-center text-[10px] font-medium text-igreen-d dark:text-green-400 bg-igreen-l dark:bg-igreen/10 rounded-lg py-1.5 px-2">
            ✓ {c.recommendedAction}
          </div>
        </div>
      </Card>
    </div>
  );
}
