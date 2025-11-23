# Vercel Deployment Guide for HA-Builders

## 📋 Project Analysis

**Framework Detected:** React SPA (Create React App)
- **Location:** `frontend/` directory
- **Build Command:** `cd frontend && npm install && npm run build`
- **Output Directory:** `frontend/build`
- **Framework Preset:** Create React App

**Backend:** FastAPI (Python) - Deploy separately (Railway, Render, or Vercel Serverless Functions)

---

## ✅ Step 1: Project Preparation (COMPLETED)

### Files Created:
- ✅ `.gitignore` - Excludes node_modules, build files, environment variables
- ✅ `vercel.json` - Vercel configuration for React SPA
- ✅ Committed and pushed to GitHub

### Git Status:
- ✅ Repository: `git@github.com:g25141/habuilders.git`
- ✅ Branch: `main`
- ✅ Remote configured correctly

---

## 🚀 Step 2: Vercel Project Setup

### 2.1 Log in to Vercel
1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub account (recommended for auto-deploys)

### 2.2 Import Git Repository
1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Select **`habuilders`** from your GitHub repositories
4. Click **"Import"**

### 2.3 Configure Project Settings

**Framework Preset:** `Create React App` (should auto-detect)

**Root Directory:** Leave empty (or set to `frontend` if Vercel doesn't auto-detect)

**Build Settings:**
- **Build Command:** `cd frontend && npm install && npm run build`
- **Output Directory:** `frontend/build`
- **Install Command:** `cd frontend && npm install`

**OR** if Vercel auto-detects Create React App, it will use:
- **Build Command:** `npm run build` (from frontend directory)
- **Output Directory:** `build`

---

## 🔐 Step 3: Environment Variables

### Required Environment Variables:

Add these in the Vercel project settings → **Environment Variables**:

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `REACT_APP_API_URL` | `https://your-backend-url.com/api` | Backend API URL (update after backend deployment) |

**Note:** For now, you can leave this empty or set it to `/api` if you plan to use Vercel serverless functions for the backend later.

### How to Add:
1. In Vercel project settings, go to **"Environment Variables"**
2. Add each variable for **Production**, **Preview**, and **Development**
3. Click **"Save"**

---

## 🎯 Step 4: Deploy

1. Click **"Deploy"** button
2. Wait for build to complete (usually 2-3 minutes)
3. Vercel will show you the deployment URL

---

## 🌐 Step 5: Access Your Live Site

### Generated URL:
After deployment, Vercel will provide:
- **Production URL:** `https://habuilders-xxx.vercel.app`
- **Preview URLs:** Generated for each branch/PR

### Find Your URL:
1. Go to your project dashboard on Vercel
2. Click on the latest deployment
3. Copy the **"Production"** or **"Preview"** URL

---

## 🔧 Step 6: Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `habuilders.com`)
4. Follow DNS configuration instructions:
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records as instructed
5. Wait for DNS propagation (5-60 minutes)
6. Vercel will automatically provision SSL certificate

---

## 🔄 Step 7: Auto-Deploy Configuration

### Branch → Deployment Behavior:

- ✅ **`main` branch** → **Production deployment**
  - Every push to `main` automatically triggers a production deploy
  - URL: `https://habuilders-xxx.vercel.app`

- ✅ **Other branches** → **Preview deployments**
  - Each branch gets its own preview URL
  - Format: `https://habuilders-git-{branch-name}-xxx.vercel.app`
  - Perfect for testing before merging to main

- ✅ **Pull Requests** → **Preview deployments**
  - Each PR gets a unique preview URL
  - Automatically updated on every push to the PR branch

### Verify Auto-Deploy:
1. Make a small change to your code
2. Commit and push to `main`
3. Check Vercel dashboard - new deployment should start automatically
4. Wait for completion - site updates automatically

---

## ✅ Step 8: Validation Checklist

Use this checklist to verify your deployment:

### Build & Deployment
- [ ] Build completes without errors in Vercel dashboard
- [ ] Deployment status shows "Ready"
- [ ] Production URL is accessible

### Frontend Functionality
- [ ] Home page loads correctly
- [ ] Navigation works (Home, Services, Contact)
- [ ] Services page displays all services with images
- [ ] Service detail pages load correctly
- [ ] Contact page displays correctly
- [ ] All images load (check service images)

### API Integration
- [ ] If backend is deployed, API calls work
- [ ] Check browser console for errors
- [ ] Network tab shows successful API requests (if backend connected)

### Environment Variables
- [ ] `REACT_APP_API_URL` is set correctly
- [ ] API calls use the correct backend URL

### Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] No console errors in browser DevTools
- [ ] No 404 errors in Network tab
- [ ] Images are optimized and load properly

### Mobile Responsiveness
- [ ] Site works on mobile devices
- [ ] Navigation menu works on mobile
- [ ] All pages are responsive

---

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify `package.json` has correct scripts
- Ensure all dependencies are in `package.json`

### Images Not Loading
- Verify image paths are correct (should be `/images/...`)
- Check that images are in `frontend/public/images/`
- Ensure images are committed to Git

### API Calls Failing
- Verify `REACT_APP_API_URL` environment variable is set
- Check backend is deployed and accessible
- Verify CORS settings on backend allow Vercel domain

### Routing Issues (404 on refresh)
- Verify `vercel.json` has the rewrite rule for SPA routing
- Check that all routes are handled by React Router

---

## 📝 Next Steps

1. **Deploy Backend Separately:**
   - Consider deploying FastAPI backend to:
     - Railway (https://railway.app)
     - Render (https://render.com)
     - Or convert to Vercel Serverless Functions

2. **Update API URL:**
   - Once backend is deployed, update `REACT_APP_API_URL` in Vercel
   - Redeploy frontend to pick up new environment variable

3. **Monitor Deployments:**
   - Set up Vercel notifications
   - Monitor build times and errors
   - Set up custom domain for production

---

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- React Router Deployment: https://reactrouter.com/en/main/start/overview#deploying

---

**Last Updated:** $(date)
**Repository:** git@github.com:g25141/habuilders.git

