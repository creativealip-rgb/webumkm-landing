# 🚀 Deployment Guide - WebUMKM Landing

## ✅ GitHub - DONE!

Repository: **https://github.com/creativealip-rgb/webumkm-landing**

Code sudah di-push ke GitHub! 🎉

---

## 🔐 Vercel Deployment Options

### Option 1: Deploy via Vercel Dashboard (RECOMMENDED - Easiest!)

1. **Go to** [vercel.com](https://vercel.com)
2. **Login** with GitHub account
3. **Click** "Add New Project"
4. **Import** `webumkm-landing` repository
5. **Configure:**
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. **Click** "Deploy"

**Done!** Your site will be live at `https://webumkm-landing.vercel.app`

---

### Option 2: Deploy via Vercel CLI

**Step 1: Login to Vercel**
```bash
vercel login
```
This will open browser for authentication.

**Step 2: Deploy**
```bash
cd /home/ubuntu/.openclaw/workspace/web-dev-landing
vercel --prod
```

**Step 3: Link to GitHub (optional)**
```bash
vercel link --repo
```

---

### Option 3: Deploy with Token (CI/CD)

If you have Vercel token:
```bash
vercel --prod --token YOUR_VERCEL_TOKEN
```

---

## 🌐 Custom Domain Setup

After deployment:

1. Go to **Vercel Dashboard** → Your Project
2. Click **Settings** → **Domains**
3. Add your domain (e.g., `webumkm.id`)
4. Update DNS records:
   - **Type:** A Record
   - **Name:** @
   - **Value:** `76.76.21.21`
   - **TTL:** Auto

For subdomain (e.g., `www`):
- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com`

---

## ⚡ Post-Deployment Checklist

- [ ] Test on mobile (iOS + Android)
- [ ] Test all WhatsApp links
- [ ] Check page speed (PageSpeed Insights)
- [ ] Setup Google Analytics
- [ ] Add favicon
- [ ] Setup custom domain
- [ ] Submit to Google Search Console
- [ ] Test form submissions (if any)

---

## 🔗 Useful Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Repo:** https://github.com/creativealip-rgb/webumkm-landing

---

## 📊 Environment Variables

Update these in Vercel Dashboard → Settings → Environment Variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `6281234567890` | Production |
| `NEXT_PUBLIC_SITE_NAME` | `WebUMKM` | Production |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | `G-XXXXXXXXXX` | Production (optional) |

---

## 🎯 Auto-Deploy on Push

Once linked to GitHub, Vercel will **automatically deploy** on every push to `main` branch!

```bash
git add .
git commit -m "Update pricing"
git push origin main
# → Vercel will auto-deploy!
```

---

## 🆘 Troubleshooting

**Build fails:**
```bash
# Check build locally
npm run build

# Check logs
vercel logs
```

**Domain not working:**
- Wait 24-48 hours for DNS propagation
- Check DNS records in Vercel dashboard

**WhatsApp links not working:**
- Update number in `page.tsx`
- Format: `628xxxxxxxxxx` (no + or -)

---

**Need help?** Check README.md or contact support!
