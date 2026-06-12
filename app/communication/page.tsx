import MainLayout from "@/components/layout/MainLayout";
import MessageCenter from "@/components/communication/MessageCenter";
import CollisionRadar from "@/components/collision/CollisionRadar";
export default function CommunicationPage() {
  return (
    <MainLayout>
      <div className="p-4 grid grid-cols-2 gap-4 h-full overflow-auto">
        <MessageCenter />
        <CollisionRadar />
      </div>
    </MainLayout>
  );
}
