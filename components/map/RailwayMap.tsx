"use client";
import { useEffect, useRef } from "react";
import { currentTrainMock, nearbyTrainsMock, signalsMock } from "@/mock";

export default function RailwayMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token || token === "YOUR_MAPBOX_TOKEN_HERE" || !mapRef.current) return;
    let map: any;
    import("mapbox-gl").then((mbgl) => {
      import("mapbox-gl/dist/mapbox-gl.css");
      mbgl.default.accessToken = token;
      map = new mbgl.default.Map({
        container: mapRef.current!,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [currentTrainMock.longitude, currentTrainMock.latitude],
        zoom: 9,
      });
      map.on("load", () => {
        new mbgl.default.Marker({ color: "#FF9933" })
          .setLngLat([currentTrainMock.longitude, currentTrainMock.latitude])
          .addTo(map);
        nearbyTrainsMock.forEach(t =>
          new mbgl.default.Marker({ color: "#4FC3F7" })
            .setLngLat([t.longitude, t.latitude]).addTo(map)
        );
        signalsMock.forEach(s => {
          const c = s.status === "green" ? "#4CAF50" : s.status === "yellow" ? "#FF9800" : "#EF4444";
          new mbgl.default.Marker({ color: c })
            .setLngLat([s.longitude, s.latitude]).addTo(map);
        });
      });
    });
    return () => map?.remove();
  }, []);

  return (
    <div id="map-view" className="relative w-full h-full bg-[#060B1A]">
      <div ref={mapRef} className="w-full h-full rounded-sm" />
      {/* SVG fallback map shown when no Mapbox token */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg">
        <rect width="680" height="380" fill="#060B1A"/>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,128,0.15)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="680" height="380" fill="url(#grid)"/>
        <path d="M60 300 Q180 260 320 200 Q420 160 580 120" stroke="#FF9933" strokeWidth="3" fill="none"/>
        <path d="M60 300 Q160 290 280 270 Q380 255 580 220" stroke="#138808" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <circle cx="60" cy="300" r="8" fill="#FF9933" stroke="#fff" strokeWidth="1.5"/>
        <text x="72" y="315" fill="rgba(255,255,255,0.7)" fontSize="9">Mumbai CST</text>
        <circle cx="320" cy="200" r="6" fill="#fff" stroke="#138808" strokeWidth="1.5"/>
        <text x="332" y="198" fill="rgba(255,255,255,0.7)" fontSize="9">Lonavala</text>
        <circle cx="580" cy="120" r="8" fill="#138808" stroke="#fff" strokeWidth="1.5"/>
        <text x="545" y="113" fill="rgba(255,255,255,0.7)" fontSize="9">Pune Jn</text>
        {/* TR-4481 */}
        <circle cx="390" cy="172" r="12" fill="rgba(255,153,51,0.2)" stroke="#FF9933" strokeWidth="1.5"/>
        <circle cx="390" cy="172" r="6" fill="#FF9933" stroke="#fff" strokeWidth="1.5"/>
        <rect x="400" y="157" width="54" height="18" rx="3" fill="rgba(0,0,30,0.9)" stroke="#FF9933" strokeWidth="1"/>
        <text x="404" y="169" fill="#FF9933" fontSize="9" fontWeight="bold">TR-4481</text>
        <text x="404" y="179" fill="rgba(255,255,255,0.5)" fontSize="7">94 km/h</text>
        {/* TR-2291 */}
        <circle cx="270" cy="175" r="5" fill="#4FC3F7" stroke="#fff" strokeWidth="1.5"/>
        <rect x="276" y="167" width="42" height="14" rx="3" fill="rgba(0,0,30,0.85)" stroke="#4FC3F7" strokeWidth="1"/>
        <text x="280" y="177" fill="#4FC3F7" fontSize="8">TR-2291</text>
        {/* Signals */}
        <circle cx="280" cy="195" r="4" fill="#4CAF50"/>
        <circle cx="430" cy="162" r="4" fill="#FF9800"/>
        <circle cx="520" cy="140" r="4" fill="#4CAF50"/>
        {/* Collision zone */}
        <circle cx="310" cy="195" r="22" fill="rgba(211,47,47,0.08)" stroke="rgba(211,47,47,0.4)" strokeWidth="1" strokeDasharray="4 2"/>
        <text x="292" y="224" fill="rgba(211,47,47,0.7)" fontSize="8">⚠ Collision Zone</text>
        {/* Weather */}
        <rect x="100" y="72" width="72" height="26" rx="4" fill="rgba(0,0,60,0.75)" stroke="rgba(100,150,255,0.4)" strokeWidth="1"/>
        <text x="108" y="84" fill="rgba(200,220,255,0.9)" fontSize="8">🌧 Heavy Rain</text>
        <text x="115" y="94" fill="rgba(200,220,255,0.6)" fontSize="7">Visibility 60%</text>
        {/* Legend */}
        <rect x="530" y="20" width="140" height="90" rx="5" fill="rgba(0,0,30,0.7)" stroke="rgba(255,153,51,0.3)" strokeWidth="1"/>
        <text x="540" y="37" fill="rgba(255,255,255,0.8)" fontSize="9" fontWeight="bold">Map Layers</text>
        <circle cx="542" cy="50" r="4" fill="#FF9933"/><text x="552" y="54" fill="rgba(255,255,255,0.6)" fontSize="8">Trains</text>
        <circle cx="542" cy="64" r="4" fill="#4CAF50"/><text x="552" y="68" fill="rgba(255,255,255,0.6)" fontSize="8">Signals</text>
        <circle cx="542" cy="78" r="4" fill="#4FC3F7"/><text x="552" y="82" fill="rgba(255,255,255,0.6)" fontSize="8">Stations</text>
        <circle cx="542" cy="92" r="4" fill="rgba(211,47,47,0.7)"/><text x="552" y="96" fill="rgba(255,255,255,0.6)" fontSize="8">Risk Zones</text>
      </svg>
      {/* HUD overlays */}
      <div id="current-train-marker" className="hidden"/>
      <div id="nearby-trains-layer" className="hidden"/>
      <div id="signal-layer" className="hidden"/>
      <div id="anomaly-layer" className="hidden"/>
      <div id="collision-layer" className="hidden"/>
      <div id="weather-layer" className="hidden"/>
      <div className="absolute bottom-3 left-3 flex gap-2">
        {["🟠 128 trains","🟢 98 Active","🔴 3 Alerts"].map(s => (
          <div key={s} className="bg-black/60 text-white text-[10px] rounded-full px-3 py-1 border border-white/10">{s}</div>
        ))}
      </div>
      <div className="absolute top-2 left-3 text-white/40 text-[10px]">Mumbai–Pune Corridor · Live</div>
    </div>
  );
}
