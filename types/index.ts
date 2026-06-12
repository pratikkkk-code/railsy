// ── Train ──────────────────────────────────────────────
export interface TrainStatus {
  trainId: string; speed: number; fuelLevel: number;
  brakeStatus: "NORMAL"|"WARNING"|"CRITICAL";
  engineHealth: number; trackCondition: "GOOD"|"MODERATE"|"POOR";
  driverStatus: "ACTIVE"|"INACTIVE";
}
export interface TrainLocation {
  trainId: string; latitude: number; longitude: number; heading: number;
}
// ── Alert ─────────────────────────────────────────────
export type AlertPriority = "critical"|"warning"|"info";
export interface Alert {
  id: string; timestamp: string; trainId: string;
  priority: AlertPriority; description: string; acknowledged?: boolean;
}
// ── Collision ─────────────────────────────────────────
export interface CollisionRisk {
  trainId: string; riskScore: number; distanceMeters: number;
  closingSpeed: number; timeToImpact: number;
  threatLevel: "LOW"|"MEDIUM"|"HIGH"|"CRITICAL";
  recommendedAction: string; confidence: number;
}
// ── Telemetry ─────────────────────────────────────────
export interface TelemetryData {
  speed: number; targetSpeed: number; safeSpeed: number;
  engineTemperature: number; batteryHealth: number; fuelLevel: number;
  brakePressure: number; wheelHealth: number; vibrationLevel: number;
  timestamp: string;
}
// ── Fleet ─────────────────────────────────────────────
export interface FleetTrain {
  trainId: string; routeId: string; latitude: number; longitude: number;
  speed: number; status: "ACTIVE"|"STOPPED"|"MAINTENANCE"|"EMERGENCY";
  healthScore: number; fuelLevel: number; delayMinutes: number;
}
export interface FleetSummary {
  totalTrains: number; activeTrains: number;
  emergencyTrains: number; maintenanceTrains: number; averageHealth: number;
}
// ── AI ────────────────────────────────────────────────
export interface AIDecision {
  id: string; type: "SPEED_ADJUSTMENT"|"ROUTE_CHANGE"|"EMERGENCY_STOP"|"MAINTENANCE_ALERT";
  trainId: string; confidence: number; riskReduction: number;
  recommendedValue?: number; reasoning: string;
  status: "PENDING"|"APPROVED"|"REJECTED";
}
// ── Auth ──────────────────────────────────────────────
export type UserRole = "DRIVER"|"OPERATOR"|"MAINTENANCE"|"ADMIN";
export interface User { id: string; name: string; email: string; role: UserRole; }
// ── Map ───────────────────────────────────────────────
export interface MapTrain {
  trainId: string; latitude: number; longitude: number; heading: number; speed: number;
}
export interface RailwaySignal {
  id: string; latitude: number; longitude: number; status: "green"|"yellow"|"red";
}
