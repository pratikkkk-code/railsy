"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("operator@railsy.in");
  const [pass, setPass] = useState("");
  return (
    <div className="h-screen flex items-center justify-center bg-navy">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🚆</div>
          <div className="text-saffron text-2xl font-bold tracking-widest">RAILSY</div>
          <div className="text-white/40 text-xs mt-1 tracking-wide">AI RAILWAY COMMAND CENTER</div>
          <div className="tricolor w-32 mx-auto mt-3 rounded"><span/><span/><span/></div>
        </div>
        <div className="bg-d-card border border-d-border rounded-xl p-8 space-y-4">
          <h2 className="text-white font-medium text-sm mb-4">Sign in to your account</h2>
          <div>
            <label className="text-white/50 text-xs block mb-1">Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 bg-d-surface border border-d-border rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-saffron"/>
          </div>
          <div>
            <label className="text-white/50 text-xs block mb-1">Password</label>
            <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="••••••••" className="w-full p-3 bg-d-surface border border-d-border rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-saffron"/>
          </div>
          <button onClick={()=>router.push("/dashboard")} className="w-full bg-saffron text-navy font-bold py-3 rounded-lg hover:opacity-90 transition mt-2">
            Login
          </button>
        </div>
        <p className="text-white/20 text-[10px] text-center mt-4">© 2024 Railsy. Built for Indian Railways 🇮🇳</p>
      </div>
    </div>
  );
}
