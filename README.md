# Thamarapalli Gowtham - Personal Portfolio Website

Modern, responsive personal portfolio website for **Thamarapalli Gowtham**, 2nd-year B.Tech CSE (AI & ML) student at Marwadi University, Rajkot, and aspiring Full-Stack Developer & AI/ML Engineer.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Quick Start (Run Locally)

Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or newer).

```bash
# 1. Clone repository
git clone https://github.com/gowthamthamarapalli/gowtham-portfolio.git
cd gowtham-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

---

## 🛠️ Build for Production

To test the production build locally:

```bash
npm run build
npm run preview
```

The optimized static production files will be created in the `dist/` directory.

---

## 📦 Pushing to GitHub

To push your portfolio to your GitHub account:

```bash
# Initialize git repository (if not already initialized)
git init

# Stage all files
git add .

# Create your first commit
git commit -m "Initial commit: Thamarapalli Gowtham portfolio"

# Set main branch
git branch -M main

# Link to your remote GitHub repository
# (Create a new empty repository on github.com first named 'gowtham-portfolio')
git remote add origin https://github.com/gowthamthamarapalli/gowtham-portfolio.git

# Push your code
git push -u origin main
```

---

## 🌐 Deploying to Vercel (Step-by-Step)

This project includes a pre-configured `vercel.json` and standard Vite build scripts.

### Method 1: Using the Vercel Web Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com/) and click **Sign Up** / **Log In** with your GitHub account.
2. Click **Add New...** → **Project**.
3. Select your `gowtham-portfolio` repository from your GitHub repository list and click **Import**.
4. Vercel automatically configures:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your portfolio will be live on a free `*.vercel.app` domain in less than 60 seconds!

### Method 2: Using the Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🎨 How to Customize Your Portfolio

### 1. Adding Your Profile Photo
- Place your photo inside the `public/` directory named `profile.jpg` (or any image format).
- In `src/components/About.tsx`, you can set the image source directly or use the live interactive photo previewer right in the browser!

### 2. Updating Skills, Education, or Projects
All portfolio content is neatly centralized in a single file:
`src/data/portfolioData.ts`
- Add new skills
- Update your CGPA
- Add newly completed projects
- Add new certifications (e.g. AWS, Coursera, HackerRank)

---

## 📄 License
MIT © Thamarapalli Gowtham
