# Cling Infotech - Home Page

A responsive clone of the Cling Info Tech home page, built as a frontend assignment. I recreated the full landing page, from the navbar and hero section to the contact form and footer, using React and Tailwind CSS.

## Tech Stack

- React 18
- Vite
- Tailwind CSS v4
- React Icons

## Features

- Fully responsive layout (mobile, tablet and desktop)
- Navbar with dropdown menus and a slide-in mobile menu
- Animated stats counter that starts when it scrolls into view
- Auto-sliding testimonials with dot navigation
- Contact form with basic validation
- Floating WhatsApp button

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
- Flags and profile photos are loaded from the internet, so you need a connection to see them.
- This is only the frontend. The contact form does not send data anywhere yet.