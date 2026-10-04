# Thamarapalli Gowtham - Personal Portfolio Website

Modern, responsive personal portfolio website for **Thamarapalli Gowtham**, 2nd-year B.Tech CSE (AI & ML) student at Marwadi University, Rajkot, and aspiring Full-Stack Developer & AI/ML Engineer.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Quick Start (Run Locally)

Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or newer).

```bash
# 1. Clone repository
git clone https://github.com/gowthamthamarapalli/thamarapalli-gowtham-portfolio.git
cd thamarapalli-gowtham-portfolio

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

# Create your commit
git commit -m "Fix dependency tree and verify Vite static build for Vercel"

# Set main branch
git branch -M main

# Link to your remote GitHub repository
git remote add origin https://github.com/gowthamthamarapalli/thamarapalli-gowtham-portfolio.git

# Push your code
git push -u origin main
```

---

## 🌐 Deploying to Vercel (Zero-Config)

This project is a 100% static React + Vite application. Vercel automatically detects Vite natively without any custom configuration or serverless functions.

### Method 1: Using the Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com/) and click **Sign Up** / **Log In** with your GitHub account.
2. Click **Add New...** → **Project**.
3. Select your `thamarapalli-gowtham-portfolio` repository and click **Import**.
4. Vercel automatically detects:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your portfolio will build cleanly and deploy in under a minute!

### Method 2: Using the Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🎨 How to Customize Your Portfolio

### 1. Adding Your Profile Photo
- Place your photo file inside `public/assets/profile/` named `profile.jpg` (`public/assets/profile/profile.jpg`).
- The portfolio automatically displays it in both the Hero and About Me sections with responsive cropping (`object-fit: cover`) and accessible alt text. If the file hasn't been added yet, a clean monogram placeholder is displayed automatically with zero broken layouts.

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
