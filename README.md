# AppNation Case Study - Weather Dashboard

An intuitive real-time weather dashboard built with Next.js, TypeScript, React, SWR, and Redux Toolkit.

**Live Demo:** [appnation-case-study.vercel.app](https://appnation-case-study.vercel.app)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)

## Features
- **Dynamic Location Search:** Debounced queries with live suggestions
- **Current Weather:** Temperature, humidity, wind, pressure, and condition
- **5‑Day Forecast:** Daily highs, lows, average temperatures and condition
- **Search History:** Searched locations stored locally via Redux Toolkit and `localStorage`
- **Responsive Design:** Mobile-first layout with Tailwind CSS
- **Error Handling:** Informative messages for network and API errors

## Tech Stack
- **Framework:** Next.js 15 (App Router)  
- **Language:** TypeScript  
- **State Management:** Redux Toolkit  
- **Data Fetching:** SWR for client-side search, Next.js Server Actions for WeatherAPI
- **Styling:** Tailwind CSS  
- **Icons:** Custom SVG components 

## Getting Started

### Prerequisites
- Node.js v18+  
- npm, Yarn, or pnpm  

### Installation
```bash
# Clone the repository
git clone https://github.com/ugurgocer/appnation-case-study.git
cd appnation-case-study

# Install dependencies
npm install
# or
# yarn install
# or
# pnpm install
```

### Running Locally
```bash
# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Environment Variables
Create a `.env.local` file in the project root and add:
```
WEATHER_API_KEY=your_api_key_here
WEATHER_API_URL=https://api.weatherapi.com/v1
```

### Available Scripts
- `npm run dev` — Start development server  
- `npm run build` — Build for production  
- `npm run start` — Run production build  
- `npm run lint` — Run ESLint checks

## Project Structure
```
appnation-case-study/
├── src/
│   ├── app/
│   │   ├── page.tsx                # Search page layout
│   │   ├── [location]/
│   │   │   ├── page.tsx            # Weather detail page
│   │   │   └── _component/Weather  # Weather display component
│   │   └── api/
│   │       ├── search/             # Location search endpoint
│   │       └── weather/[location]/ # Weather data endpoint
│   ├── constants/                  # Static enums and mappings
│   ├── lib/
│   │   ├── hooks/                  # Custom React and SWR hooks
│   │   ├── store/                  # Redux Toolkit slices and store
│   │   └── types/                  # TypeScript interfaces and enums
│   └── styles/                     # Global and utility styles
└── package.json                    # Project metadata and scripts
```
---
Powered by [![Weather Api](https://cdn.weatherapi.com/v4/images/weatherapi_logo.png)](https://www.weatherapi.com)