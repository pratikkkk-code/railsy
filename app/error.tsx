"use client";
export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="h-screen flex items-center justify-center bg-l-bg dark:bg-d-bg">
      <div className="panel p-8 text-center max-w-sm">
        <div className="text-3xl mb-3">⚠️</div>
        <h1 className="text-red-600 font-bold text-xl mb-2">System Error</h1>
        <p className="text-slate-500 text-sm">{error.message}</p>
      </div>
    </div>
  );
}
