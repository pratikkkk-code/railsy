interface Props { label: string; status: "online"|"warning"|"offline"; }
const colors = { online:"bg-green-500", warning:"bg-saffron", offline:"bg-red-500" };
export default function StatusIndicator({ label, status }: Props) {
  return (
    <div className="flex items-center gap-1.5">
      <div className={`w-1.5 h-1.5 rounded-full ${colors[status]} animate-pulse`} />
      <span className="text-[10px] text-white/70">{label}</span>
    </div>
  );
}
