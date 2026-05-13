# EduAI Lab

The public, static research website for the EduAI Lab project at UBC Okanagan Campus. Showcases the lab's vision, research goals, and team.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
app/                # Next.js App Router pages (home, team)
components/         # Reusable React components (cards, header, footer, nav)
config/             # Site configuration (siteConfig, projectInfo)
data/               # Team data and TypeScript types
hooks/              # Custom React hooks
lib/                # Utility functions
public/images/      # Team photos and logo
```

## Features

- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui components
- Responsive design
- Static export ready

## Deployment

This project is configured for static export and can be deployed to any static hosting service.

```bash
npm run build
```

## License

This project is for academic research purposes at UBC Okanagan Campus.