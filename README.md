# Personal Portfolio

A modern, responsive personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. It includes smooth animations, dark/light theme switching, a projects showcase, an experience timeline, and a working contact form powered by Resend.

![Next.js](https://img.shields.io/badge/Next.js-14.2.x-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-blueviolet?style=for-the-badge&logo=framer)

## Quick Start

```bash
git clone https://github.com/Dikshant441/Personal-Portfolio.git
cd Personal-Portfolio
cp .env.example .env.local   # add your RESEND_API_KEY
npm install
npm run dev
```

Visit: http://localhost:3000

To build & run production:
```bash
npm run build
npm run start
```

## Environment Variables

Create `.env.local` (never commit secrets):
```env
RESEND_API_KEY=your_resend_key_here
```
Used in `actions/SendEmail.ts`.

## Features

| Feature | Description |
|---------|-------------|
| Responsive UI | Works across mobile, tablet, desktop |
| Dark/Light Theme | Theme toggle stored client-side |
| Framer Motion Animations | Smooth section transitions & fades |
| Project Showcase | Cards with tech stack & repo links |
| Skills Grid | Tech stack pulled from `lib/data.ts` |
| Experience Timeline | Vertical timeline with icons |
| Contact Form | Validates input & sends email via Resend |
| Type-Safe | TypeScript types in `lib/types.ts` |

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Run production server (needs build)
npm run lint     # ESLint checks
```

## Tech Stack

Frontend: Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, React Icons

Email: Resend, React Email

Tooling: ESLint, PostCSS, Sharp

## Sections

Intro • About • Projects • Skills • Experience • Contact

## Adding Content

Add/edit data in `lib/data.ts`:

Projects (`projectsData`):
```ts
{
	title: "Cloud-AI-Saas",
	description: "SaaS app integrating Cloudinary AI",
	tags: ["Next.js", "TypeScript", "Cloudinary"],
	imageUrl: aisaasImg,
	url: "https://github.com/Dikshant441/AI-saas"
}
```

Skills (`skillsData`): append a string skill.

Experience (`experiencesData`): follow existing object pattern.

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   ├── Experience.tsx    # Experience timeline
│   ├── Header.tsx        # Navigation header
│   ├── Intro.tsx         # Hero section
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills section
│   └── Theme-Switch.tsx  # Dark/light mode toggle
├── context/              # React context providers
│   ├── active-section-context.tsx
│   └── Theme-Context.tsx
├── lib/                  # Utilities and data
│   ├── data.ts          # Static data (projects, skills, etc.)
│   ├── hooks.ts         # Custom React hooks
│   ├── types.ts         # TypeScript type definitions
│   └── utils.ts         # Utility functions
├── actions/             # Server actions
│   └── SendEmail.ts     # Email sending functionality
├── email/              # Email templates
│   └── Contact-form-email.tsx
└── public/             # Static assets
		└── (project images)
```

## Theme & Styling

Customize:
- Tailwind config: `tailwind.config.js`
- Global styles: `app/globals.css`
- Component classes in `components/` files

## Contact Form

Validation in `actions/SendEmail.ts` via `validateString`.
Update recipient email there. Uses React Email template at `email/Contact-form-email.tsx`.

## 🚀 Deployment

Recommended: Vercel. Add env vars in the dashboard and deploy from GitHub.

## Contributing

1. Fork
2. Branch: `git checkout -b feature/xyz`
3. Commit: `git commit -m "feat: add xyz"`
4. Push & PR

## License

MIT

## Author

**Dikshant Singh** · [GitHub @Dikshant441](https://github.com/Dikshant441)

---

⭐ If this project helps you, consider starring it.
