import MainLayout from "@/components/layout/MainLayout";
import RailwayMap from "@/components/map/RailwayMap";
import TrainStatusCard from "@/components/status/TrainStatusCard";
import CollisionMonitor from "@/components/status/CollisionMonitor";
import TrackAnomalyPanel from "@/components/status/TrackAnomalyPanel";
import RecommendationPanel from "@/components/ai/RecommendationPanel";
import AlertFeed from "@/components/alerts/AlertFeed";

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="h-full flex flex-col overflow-hidden">
        {/* Main grid */}
        <div className="flex-1 grid grid-cols-[1fr_220px] gap-3 p-3 overflow-hidden min-h-0">
          {/* Map */}
          <section id="map-container" className="panel overflow-hidden rounded-panel">
            <RailwayMap />
          </section>
          {/* Right column */}
          <div className="flex flex-col gap-3 overflow-y-auto min-h-0">
            <div className="shrink-0"><TrainStatusCard /></div>
            <div className="shrink-0"><CollisionMonitor /></div>
            <div className="shrink-0"><TrackAnomalyPanel /></div>
            <div className="shrink-0"><RecommendationPanel /></div>
          </div>
        </div>
        {/* Alert feed strip */}
        <div className="h-10 shrink-0">
          <AlertFeed />
        </div>
      </div>
    </MainLayout>
  );
}
