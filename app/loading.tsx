export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-navy">
      <div className="text-center">
        <div className="text-4xl mb-3">🚆</div>
        <div className="text-saffron text-xl font-bold tracking-widest">RAILSY</div>
        <div className="text-white/50 text-sm mt-1 animate-pulse">Loading…</div>
      </div>
    </div>
  );
}
