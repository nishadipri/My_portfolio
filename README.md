# Nishadi Samarathunge — Portfolio

Personal portfolio website. Live at [nishadi.com](https://nishadi.com)

## Tech Stack

- **Frontend:** React 18, React Router v6
- **Styling:** Bootstrap 5, Tailwind CSS 3, Custom CSS (per-component)
- **Animations:** CSS particles, react-parallax-tilt, typewriter-effect
- **Contact Form:** EmailJS + React Hook Form
- **PDF Viewer:** react-pdf
- **Icons:** react-icons
- **Deployment:** Netlify (auto-deploy from GitHub)

## Getting Started

```bash
npm install
npm start        # development server at localhost:3000
npm run build    # production build → /build
```

## Environment Variables

Create a `.env` file in the project root (never commit this):

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── Assets/           # Images, PDF resume
├── components/
│   ├── Home/         # Hero, intro, typewriter
│   ├── Contact/      # EmailJS contact form
│   ├── Projects/     # Project cards
│   └── Resume/       # PDF resume viewer + stats
├── data/             # Project data
├── styles/           # Per-component CSS files
└── App.js            # Routing
```

## Routes

| Route | Description |
|---|---|
| `/` | Home — hero, skills, projects, GitHub calendar |
| `/project` | Projects — full project grid |
| `/resume` | Resume — PDF viewer with page navigation |
| `/contact` | Contact — form + social links |

## Customisation

- **Projects:** `src/data/projects.js`
- **Resume:** Replace `src/Assets/NishCV.pdf`
- **Hero photo:** Replace `src/Assets/home-main.png`
- **SEO:** `public/index.html`
