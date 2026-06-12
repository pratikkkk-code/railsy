# 🚆 Railsy — AI-Powered Railway Command & Control Center

<div align="center">

![Railsy Banner](https://img.shields.io/badge/Railsy-AI%20Railway%20Platform-FF9933?style=for-the-badge&logo=train&logoColor=white)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0-orange?style=flat-square)](https://zustand-demo.pmnd.rs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**A real-time AI railway safety and operations platform built for the Indian railway network.**  
Live tracking · Collision prediction · Fleet management · AI decision engine

[Features](#-features) · [Screenshots](#-screenshots) · [Quick Start](#-quick-start) · [Architecture](#-architecture) · [API Docs](#-api-reference) · [Contributing](#-contributing)

</div>

---

## 🇮🇳 Overview

Railsy is a mission-critical railway intelligence platform designed to give control room operators, drivers, and fleet managers a unified command center. It combines real-time telemetry, AI-driven collision prediction, and fleet-wide monitoring into a single tablet-optimized interface — themed in the Indian tricolour.

Built with the Mumbai–Pune corridor as a reference deployment, Railsy is architected to scale across any railway network.

---

## ✨ Features

### Core Modules
| Module | Description |
|--------|-------------|
| 🗺 **Live Tracking** | Real-time train positions on a Mapbox GL map with signal, weather, and collision overlays |
| ❤️ **Train Health** | Live telemetry — speed, engine temp, fuel, brake pressure, wheel health |
| ⚠️ **Collision Monitor** | 500ms risk scoring with time-to-impact, nearby train ID, and AI-suggested action |
| 🛤 **Track Anomaly Detection** | Cracks, misalignment, obstacles, animal and human intrusion alerts |
| 🚂 **Fleet Management** | Multi-train overview with status table, analytics charts, and route replay |
| 🧠 **AI Decision Engine** | Approve/reject AI-generated speed adjustments, rerouting, and maintenance alerts |
| 📡 **Communication Center** | Train-to-train messaging, broadcast, voice alert, and emergency alert |
| 📊 **Observability Dashboard** | System health, API latency trends, error tracking, and audit logs |
| 🔐 **Role-Based Access Control** | Driver / Operator / Maintenance / Admin roles with permission guards |
| 📴 **Offline Mode** | IndexedDB caching, background sync, and PWA tablet installation support |

---

## 📸 Screenshots

> Dashboard · Fleet Management · Collision Monitor · AI Decision Engine · Settings

The dashboard follows the **Indian tricolour theme** — saffron (`#FF9933`), white, and India green (`#138808`) — against a deep navy command-center background.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 22+
- A [Mapbox](https://www.mapbox.com/) public token

### Installation

```bash
# Clone the repo
git clone https://github.com/your-org/railsy.git
cd railsy

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SOCKET_URL=ws://localhost:5000/ws
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

### Run

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) — the app redirects to `/dashboard` automatically.

---

## 🗂 Project Structure

```
railsy/
├── app/                    # Next.js App Router pages
│   ├── dashboard/
│   ├── live-tracking/
│   ├── train-health/
│   ├── track-health/
│   ├── alerts/
│   ├── communication/
│   ├── collision-monitor/
│   ├── fleet/
│   ├── ai/
│   ├── ops/
│   ├── maintenance/
│   ├── settings/
│   └── login/
│
├── components/             # Reusable UI components
│   ├── layout/             # Header, Sidebar, MainLayout
│   ├── map/                # RailwayMap, markers, layers
│   ├── status/             # TrainStatusCard, TrainHealthPanel, CollisionMonitor
│   ├── charts/             # SpeedGauge, FuelChart, BrakePressureChart
│   ├── fleet/              # FleetOverview, FleetTable, FleetAnalytics
│   ├── collision/          # CollisionRadar, RouteConflictPanel
│   ├── ai/                 # AIDecisionPanel, AICommandBar, DigitalTwinViewer
│   ├── alerts/             # AlertFeed, AlertCard
│   ├── communication/      # MessageCenter, BroadcastPanel
│   ├── observability/      # SystemHealthCard, ApiLogViewer, ErrorPanel
│   └── ui/                 # Card, Badge, Gauge, StatusIndicator
│
├── services/
│   ├── api/                # Axios services (train, collision, fleet, AI, telemetry…)
│   ├── websocket/          # WebSocket connection manager
│   └── offline/            # Alert queue, IndexedDB helpers
│
├── store/                  # Zustand state stores
├── types/                  # TypeScript domain models
├── hooks/                  # Custom React hooks (polling, realtime, PWA)
├── mock/                   # Mock data for development
├── lib/                    # Constants, utils, env validation, tracer
└── docs/                   # API contracts, WebSocket guide, architecture
```

---

## 🏗 Architecture

```
┌─────────────────────────┐
│       Railsy UI          │   Next.js 15 · App Router · TypeScript
└──────────┬──────────────┘
           │
     Zustand Stores         trainStore · collisionStore · fleetStore · aiStore …
           │
  ┌────────┴────────┐
  │                 │
REST APIs       WebSocket      Axios · 250ms–2s polling intervals
  │                 │
  └────────┬────────┘
           │
     Backend Core             FastAPI / NestJS / Node.js
           │
  ┌────────┼────────┐
  │        │        │
Train  Collision  Alert       Microservice-ready service boundaries
Service  Service  Service
```

### Refresh Rates

| Module | Interval |
|--------|----------|
| Telemetry | 250 ms |
| Collision risk | 500 ms |
| Map / location | 1 s |
| Train health | 2 s |
| Fleet summary | 1 s |
| Alerts | WebSocket (realtime) |

---

## 🔌 API Reference

### Train Status
```http
GET /api/train/status
```
```json
{
  "trainId": "TR-4481",
  "speed": 94,
  "fuelLevel": 71,
  "brakeStatus": "NORMAL",
  "engineHealth": 93,
  "trackCondition": "GOOD",
  "driverStatus": "ACTIVE"
}
```

### Collision Data
```http
GET /api/collision
```
```json
{
  "trainId": "TR-2291",
  "riskScore": 18,
  "distanceMeters": 1300,
  "closingSpeed": 42,
  "timeToImpact": 540,
  "threatLevel": "LOW",
  "recommendedAction": "Maintain Current Speed",
  "confidence": 87
}
```

### Fleet Summary
```http
GET /api/fleet/summary
```
```json
{
  "totalTrains": 128,
  "activeTrains": 98,
  "emergencyTrains": 2,
  "maintenanceTrains": 12,
  "averageHealth": 91
}
```

Full API contracts are documented in [`/docs/api.md`](docs/api.md).  
WebSocket event schema is in [`/docs/websocket.md`](docs/websocket.md).

---

## 🧠 AI Decision Engine

Railsy includes a frontend-side AI decision approval workflow. The backend posts pending decisions (speed adjustments, rerouting, emergency stops) to `/api/ai/decisions`. Operators can approve or reject each decision from the **AI Engine** page.

The **Digital Twin** module simulates each train's predicted state — delay, collision probability, and energy consumption — independently of live telemetry.

---

## 📱 PWA / Tablet Support

Railsy is optimized for **1280 × 800 landscape** tablet displays and can be installed as a standalone app via `next-pwa`.

```json
{
  "name": "Railsy Command Center",
  "short_name": "Railsy",
  "display": "standalone",
  "theme_color": "#FF9933"
}
```

Offline mode caches the last known telemetry and queues alerts for sync when connectivity is restored.

---

## 🔐 Roles & Permissions

| Role | Access |
|------|--------|
| `DRIVER` | Own train telemetry, communication |
| `OPERATOR` | Full dashboard, AI approvals, alerts |
| `MAINTENANCE` | Train health, track anomalies, maintenance |
| `ADMIN` | All modules + user management + audit logs |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.6 |
| Styling | Tailwind CSS 3.4 |
| State | Zustand 5 |
| Maps | Mapbox GL JS 3 |
| Charts | Recharts 2 |
| Forms | React Hook Form 7 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| HTTP | Axios 1.7 |
| Realtime | WebSocket (native) |
| Offline | idb (IndexedDB wrapper) |
| PWA | next-pwa |

---

## 🐳 Docker

```bash
docker build -t railsy .
docker run -p 3000:3000 railsy
```

Or with Docker Compose:

```bash
docker-compose up
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a Pull Request

Please follow the existing code style and include types for all new interfaces.

---

## 📄 License

MIT © 2024 Railsy Contributors

---

<div align="center">
Built with ❤️ for the Indian railway network 🇮🇳
</div>
