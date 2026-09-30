# Cling Infotech - Home Page Redesign

My redesign of the Cling Info Tech home page, made as an internship assignment. I kept the brand colours (red and blue) and the same content, but gave the page a cleaner, more modern look and a shorter flow so it is easier to scan.

## Tech Stack

- React 18
- Vite
- Tailwind CSS v4
- React Icons

## What I changed

- New hero with a clear headline and call-to-action buttons
- Dark stats strip with a count-up animation
- Six service cards (the old page only showed three) with hover effects
- Vision and Mission as tabs, and the company journey as a timeline
- Client names in a scrolling marquee, plus a compact "global presence" section
- Testimonial slider with arrows, dots and auto-play
- Contact section with office details next to the form, with basic validation
- Sticky blurred navbar, scroll animations and a floating WhatsApp button
- Fully responsive for mobile, tablet and desktop

## Getting Started

Make sure Node.js is installed, then run:

```
npm install
npm run dev
```

The app will open at `http://localhost:5173`.

To create a production build:

```
npm run build
```

## Folder Structure

```
src/
├── assets/        logo and hero image
├── components/    one file for each section of the page
├── data/          client and country lists
├── App.jsx
├── main.jsx
└── index.css
```

## Notes

- Client names, team members and testimonials are placeholder content.
- Flags and profile photos load from the internet, so you need a connection to see them.
- This is only the frontend. The contact form does not send data anywhere yet.
