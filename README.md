# Nishadi Samarathunge - Portfolio

Personal portfolio website showcasing my work as a Software Developer and Ayurvedic Physician.

## Tech Stack

- **Frontend:** React 17, React Router v6
- **Styling:** Bootstrap 5, Tailwind CSS 3, Custom CSS
- **Animations:** tsparticles, react-parallax-tilt, typewriter-effect
- **PDF Viewer:** react-pdf
- **Icons:** react-icons
- **Build Tool:** Create React App (react-scripts 5)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

The build output is in the `build/` directory, ready for deployment to any static hosting service.

## Project Structure

```
src/
├── Assets/          # Images, PDF resume
├── components/
│   ├── About/       # About page (bio, skills, GitHub calendar)
│   ├── Contact/     # Contact form
│   ├── Home/        # Hero section with typewriter effect
│   ├── Projects/    # Project showcase cards
│   └── Resume/      # PDF resume viewer
├── data/            # Centralized project & social link data
├── style.css        # Global styles & animations
└── App.js           # Root component with routing
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Hero section with intro |
| `/about` | About - Bio, tech stack, GitHub activity |
| `/project` | Projects - Showcase of recent work |
| `/resume` | Resume - PDF viewer with download |
| `/contact` | Contact - Contact form & social links |

## Customization

- **Projects:** Edit `src/data/projects.js` to add/modify projects
- **Social Links:** Edit `src/data/socialLinks.js` to update URLs
- **Contact Email:** Search for `your.email@example.com` and replace with your email
- **SEO:** Update `public/index.html` meta tags and `public/sitemap.xml` with your domain
- **Resume:** Replace `src/Assets/NishCV.pdf` with your resume

## Deployment

This is a static site that can be deployed to:
- Vercel: `npx vercel`
- Netlify: Drag & drop the `build/` folder
- GitHub Pages: Use `gh-pages` package
- AWS S3 + CloudFront: Upload `build/` to S3 bucket
