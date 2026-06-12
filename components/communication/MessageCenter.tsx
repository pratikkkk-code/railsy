"use client";
import { useState } from "react";
import { Send, Mic, Siren } from "lucide-react";
import Card from "@/components/ui/Card";
export default function MessageCenter() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState<{id:string;text:string;ts:string}[]>([
    { id:"1", text:"TR-2291 → All: Visibility reduced ahead of Karjat junction.", ts:"12:41" },
    { id:"2", text:"Control → TR-4481: Maintain speed, track clear.", ts:"12:43" },
  ]);
  const send = () => {
    if (!msg.trim()) return;
    setMsgs(prev => [{id:Date.now().toString(), text:`TR-4481 → All: ${msg}`, ts:new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}, ...prev]);
    setMsg("");
  };
  return (
    <div id="communication-center">
      <Card title="Communication Center" accent="navy">
        <div id="receive-message-feed" className="h-40 overflow-y-auto space-y-2 mb-3 pr-1">
          {msgs.map(m => (
            <div key={m.id} className="bg-slate-50 dark:bg-d-surface rounded-lg p-2">
              <p className="text-[10px] text-slate-500">{m.ts}</p>
              <p className="text-xs">{m.text}</p>
            </div>
          ))}
        </div>
        <textarea id="message-input" value={msg} onChange={e => setMsg(e.target.value)}
          placeholder="Send message to nearby trains..."
          className="w-full h-16 text-xs rounded-lg bg-slate-50 dark:bg-d-surface border border-slate-200 dark:border-d-border p-2 resize-none focus:outline-none focus:ring-1 focus:ring-saffron"/>
        <div className="flex gap-2 mt-2">
          <button id="broadcast-btn" onClick={send} className="flex-1 flex items-center justify-center gap-2 bg-saffron text-navy font-semibold text-xs py-2 rounded-lg hover:opacity-90">
            <Send size={13}/> Broadcast
          </button>
          <button id="voice-alert-btn" className="px-3 bg-igreen text-white rounded-lg hover:opacity-90"><Mic size={14}/></button>
          <button id="emergency-alert-btn" className="px-3 bg-red-600 text-white rounded-lg hover:opacity-90"><Siren size={14}/></button>
        </div>
      </Card>
    </div>
  );
}
