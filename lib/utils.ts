export function getThreatColor(score: number, dark = true): string {
  if (score <= 20) return dark ? "text-green-400"  : "text-green-700";
  if (score <= 50) return dark ? "text-yellow-400" : "text-yellow-600";
  if (score <= 80) return dark ? "text-orange-400" : "text-orange-600";
  return dark ? "text-red-400" : "text-red-700";
}
export function getThreatBg(score: number): string {
  if (score <= 20) return "#22c55e";
  if (score <= 50) return "#f59e0b";
  if (score <= 80) return "#f97316";
  return "#ef4444";
}
export function priorityColor(p: string) {
  if (p === "critical") return { bg:"bg-red-50 dark:bg-red-900/20", border:"border-red-400", text:"text-red-600 dark:text-red-400" };
  if (p === "warning")  return { bg:"bg-amber-50 dark:bg-amber-900/20", border:"border-amber-400", text:"text-amber-600 dark:text-amber-400" };
  return { bg:"bg-green-50 dark:bg-green-900/20", border:"border-green-400", text:"text-green-600 dark:text-green-400" };
}
