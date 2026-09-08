# Personal Portfolio

A modern, responsive personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. It includes smooth animations, dark/light theme switching, a projects showcase, an experience timeline, and a working contact form powered by Resend.

![Next.js](https://img.shields.io/badge/Next.js-14.2.x-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-blueviolet?style=for-the-badge&logo=framer)

## Analytics

Web analytics is provided by **Vercel Web Analytics** and **Speed Insights**. All custom events go through `lib/analytics.ts`'s `trackEvent` helper — components never import `@vercel/analytics` directly, so the provider can be swapped in that one file later.

Tracked events:

| Event | Props | Fired from |
|---|---|---|
| `resume_preview_open` | – | "Preview Resume" button |
| `resume_download` | – | Resume modal "Download Resume" |
| `resume_open_new_tab` | – | Resume modal "Open in new tab" |
| `contact_form_submit` | – | Contact form submit |
| `contact_form_result` | `{ success }` | Contact form send result |
| `contact_quick_link_click` | `{ channel }` | Contact quick-links (email/whatsapp/cal) |
| `social_link_click` | `{ network }` | Intro social row (linkedin/github/x/cal) |
| `book_meeting_click` | `{ location }` | Header "Book a Call" |
| `project_card_open` | `{ project }` | Opening a project card |
| `project_demo_click` | `{ project }` | Project "Live Demo" link |
| `project_repo_click` | `{ project }` | Project "Code" link |
| `nav_click` | `{ section, source }` | Header/mobile nav links |
| `theme_toggle` | `{ to }` | Theme switch button |
| `section_view` | `{ section }` | A section scrolling into view (fires once per section per page load) |

No PII (contact form email/message) is ever sent as an event property.

Custom events must be enabled in the Vercel dashboard (Project → Analytics) before they appear.