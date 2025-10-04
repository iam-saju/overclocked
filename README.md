# OverClocked CTF 2024

A modern, retro-styled website for Kerala's largest Capture The Flag (CTF) event. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Retro Gaming Design**: Cyberpunk-inspired UI with neon colors and gaming fonts
- **Team Registration**: ID card-style registration form
- **Event Schedule**: Interactive timeline with event phases
- **Live Leaderboard**: Real-time rankings with animated elements
- **Responsive Design**: Works perfectly on all devices
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Fonts**: Google Fonts (Share Tech Mono, Press Start 2P)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher)
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/iam-saju/overclocked.git
cd overclocked
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ctf/
├── public/
│   ├── overclocked-logo.png
│   └── WhatsApp_Image_2025-09-27_at_1.07.09_PM-removebg-preview.png
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   └── Registration.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── SchedulePage.tsx
│   │   └── LeaderboardPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Colors & Themes
The website uses a warm orange/yellow to red gradient theme. You can customize colors in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and custom classes

### Fonts
Custom gaming fonts are imported in `src/index.css`:
- **Share Tech Mono**: For cyber-style text
- **Press Start 2P**: For retro gaming elements

### Components
All components are located in `src/components/` and can be easily modified:
- **Hero**: Landing page with countdown timer
- **About**: Event information and features
- **Registration**: Team registration form
- **Navigation**: Top navigation bar
- **Footer**: Site footer

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📱 Pages

- **Home** (`/`): Landing page with hero section, about, and registration
- **Schedule** (`/schedule`): Event timeline and schedule information
- **Leaderboard** (`/leaderboard`): Live rankings and team statistics

## 🎯 Features Overview

### Hero Section
- Animated countdown timer
- Event branding and logo
- Call-to-action buttons

### Registration Form
- ID card-style design
- Team and leader information
- Form validation
- Responsive layout

### Schedule Page
- Interactive timeline
- Event phases and details
- Retro gaming styling

### Leaderboard
- Live rankings display
- Team statistics
- Animated elements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎮 About OverClocked CTF

OverClocked is Kerala's largest 24-hour Capture The Flag event, part of Abhiyanthriki 2025 at Rajagiri School of Engineering & Technology. The event features:

- **24 Hours** of non-stop hacking
- **200+ Players** from across Kerala
- **100+ Challenges** across 13 domains
- **Real-time Leaderboard** updates
- **Exciting Prizes** for top performers

## 📞 Contact

For questions about the event or website:
- **Event**: Abhiyanthriki 2025, RSET
- **Website**: Built with ❤️ for the hacking community

---

**Ready to hack? Let's get started! 🚀**