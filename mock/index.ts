import { TrainStatus, Alert, CollisionRisk, FleetTrain, FleetSummary, MapTrain, RailwaySignal } from "@/types";

export const trainStatusMock: TrainStatus = {
  trainId:"TR-4481", speed:94, fuelLevel:71, brakeStatus:"NORMAL",
  engineHealth:93, trackCondition:"GOOD", driverStatus:"ACTIVE"
};

export const alertsMock: Alert[] = [
  { id:"1", timestamp:"12:42:31", trainId:"TR-4481", priority:"critical", description:"Track anomaly detected 1.2km ahead." },
  { id:"2", timestamp:"12:44:10", trainId:"TR-2291", priority:"warning",  description:"Reduced visibility due to weather." },
  { id:"3", timestamp:"12:46:00", trainId:"TR-4481", priority:"info",     description:"Signal junction 7A cleared." },
  { id:"4", timestamp:"12:50:12", trainId:"TR-9088", priority:"critical", description:"Sensor failure — Engine bay 3." },
];

export const collisionMock: CollisionRisk = {
  trainId:"TR-2291", riskScore:18, distanceMeters:1300, closingSpeed:42,
  timeToImpact:540, threatLevel:"LOW", recommendedAction:"Maintain Current Speed", confidence:87
};

export const fleetTrainsMock: FleetTrain[] = [
  { trainId:"TR-4481", routeId:"RT-12", latitude:18.52, longitude:73.85, speed:94,  status:"ACTIVE",      healthScore:93, fuelLevel:71, delayMinutes:0  },
  { trainId:"TR-2291", routeId:"RT-07", latitude:18.62, longitude:73.90, speed:76,  status:"ACTIVE",      healthScore:88, fuelLevel:58, delayMinutes:4  },
  { trainId:"TR-9088", routeId:"RT-03", latitude:19.10, longitude:72.85, speed:0,   status:"MAINTENANCE", healthScore:62, fuelLevel:40, delayMinutes:20 },
  { trainId:"TR-3301", routeId:"RT-15", latitude:18.30, longitude:74.20, speed:110, status:"ACTIVE",      healthScore:97, fuelLevel:85, delayMinutes:0  },
  { trainId:"TR-5566", routeId:"RT-09", latitude:17.90, longitude:73.50, speed:0,   status:"EMERGENCY",   healthScore:45, fuelLevel:22, delayMinutes:35 },
];

export const fleetSummaryMock: FleetSummary = {
  totalTrains:128, activeTrains:98, emergencyTrains:2, maintenanceTrains:12, averageHealth:91
};

export const currentTrainMock: MapTrain = {
  trainId:"TR-4481", latitude:18.5204, longitude:73.8567, heading:45, speed:94
};

export const nearbyTrainsMock: MapTrain[] = [
  { trainId:"TR-2291", latitude:18.62, longitude:73.90, heading:180, speed:76 }
];

export const signalsMock: RailwaySignal[] = [
  { id:"SIG-1", latitude:18.58, longitude:73.88, status:"green" },
  { id:"SIG-2", latitude:18.43, longitude:73.82, status:"yellow" },
];
