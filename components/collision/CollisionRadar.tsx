"use client";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/Card";
import { collisionMock as c } from "@/mock";
const data = [
  { metric:"Risk",       value: c.riskScore },
  { metric:"Closing",    value: c.closingSpeed },
  { metric:"Confidence", value: c.confidence },
  { metric:"Speed",      value: 60 },
  { metric:"Distance",   value: 55 },
];
export default function CollisionRadar() {
  return (
    <Card title="Collision Radar" accent="green">
      <div className="h-48">
        <ResponsiveContainer>
          <RadarChart data={data}>
            <PolarGrid stroke="rgba(128,128,128,0.2)"/>
            <PolarAngleAxis dataKey="metric" tick={{fontSize:9, fill:"currentColor"}}/>
            <Radar dataKey="value" stroke="#FF9933" fill="#FF9933" fillOpacity={0.2} strokeWidth={2}/>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
