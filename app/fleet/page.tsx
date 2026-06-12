import MainLayout from "@/components/layout/MainLayout";
import FleetOverview from "@/components/fleet/FleetOverview";
import FleetTable from "@/components/fleet/FleetTable";
export default function FleetPage() {
  return (
    <MainLayout>
      <div className="p-4 grid grid-cols-12 gap-4 h-full overflow-auto">
        <div className="col-span-3"><FleetOverview /></div>
        <div className="col-span-9"><FleetTable /></div>
      </div>
    </MainLayout>
  );
}
