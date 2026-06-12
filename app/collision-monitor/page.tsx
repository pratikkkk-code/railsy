import MainLayout from "@/components/layout/MainLayout";
import CollisionMonitor from "@/components/status/CollisionMonitor";
import CollisionRadar from "@/components/collision/CollisionRadar";
import RecommendationPanel from "@/components/ai/RecommendationPanel";
export default function CollisionMonitorPage() {
  return (
    <MainLayout>
      <div className="p-4 grid grid-cols-3 gap-4 h-full overflow-auto">
        <CollisionMonitor />
        <CollisionRadar />
        <RecommendationPanel />
      </div>
    </MainLayout>
  );
}
