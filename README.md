# BSP Data Mapper Tool

A prototype web application for managing Buyer-Seller Partnerships in the financial advisory space.

## Overview

This is a clickable prototype demonstrating an end-to-end managed marketplace where:
- **Buying Partners** discover and express interest in listings
- **Selling Partners** create listings and manage their sales process  
- **Internal Team** manages qualifications, approvals, and case progression

## Tech Stack

- **React 19** - UI framework
- **Vite** - Fast dev server and build tool
- **Tailwind CSS** - Utility-first styling
- **DaisyUI** - Pre-built component library
- **Zustand** - Lightweight state management
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing (ready to integrate)

## Project Structure

```
src/
├── main.tsx              # React app entry point
├── root.tsx              # Root layout with navigation
├── routes/
│   └── index.tsx         # Dashboard component
├── store/
│   └── mockData.ts       # Zustand store with mock data
└── styles/
    └── globals.css       # Global Tailwind directives
```

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Features

### Dashboard
- Role-based view switcher (Buying Partner / Selling Partner / Internal Team)
- Metric cards showing key stats
- Responsive layout

### Mock Data
- Pre-populated partner data
- Sample listings
- Store state persistence with Zustand

### Styling
- DaisyUI components for professional UI
- Tailwind CSS for responsive design
- Light/dark theme support ready

## Next Steps

1. **Add Routing** - Implement multi-page navigation with React Router
2. **Partner Onboarding** - Create signup/qualification flow
3. **Marketplace** - Build listing browser and search
4. **Matching** - Implement buyer interest and case matching
5. **Case Management** - Timeline and document management
6. **Backend Integration** - Connect to actual API instead of mock data

## Development

The app uses Vite's HMR (Hot Module Replacement) for instant updates during development.

Edit any file in `src/` and see changes instantly in your browser.

## License

MIT
