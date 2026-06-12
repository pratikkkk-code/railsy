"use client";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
export default function SpeedGauge({ speed }: { speed: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-32 w-full">
        <ResponsiveContainer>
          <RadialBarChart data={[{value:speed,fill:"#FF9933"}]} innerRadius="60%" outerRadius="100%" startAngle={180} endAngle={0}>
            <RadialBar dataKey="value" background cornerRadius={4}/>
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-6">
          <span className="text-3xl font-bold text-saffron-d dark:text-saffron">{speed}</span>
          <span className="text-[10px] text-slate-500">km/h</span>
        </div>
      </div>
    </div>
  );
}
