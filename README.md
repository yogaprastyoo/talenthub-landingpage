# TalentHub Landing Page

Landing page TalentHub — Platform ATS Rekrutmen Indonesia. Dibangun dengan Vite + React + TypeScript + Tailwind CSS.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v3 + PostCSS + Autoprefixer
- shadcn-style UI primitives
- Plus Jakarta Sans via Google Fonts

---

## Development

```bash
# Install dependencies
npm install

# Jalankan dev server (localhost:5173)
npm run dev

# Type check
npx tsc --noEmit

# Lint
npm run lint

# Build untuk production
npm run build

# Preview hasil build secara lokal
npm run preview
```

---

## Deploy dengan PM2

### Prasyarat

Pastikan sudah terinstall di server:

```bash
node --version    # v18+
npm --version
pm2 --version     # jika belum: npm install -g pm2
serve --version   # jika belum: npm install -g serve
```

### Langkah Deploy

**1. Clone repo**

```bash
git clone https://github.com/yogaprastyoo/talenthub-landingpage.git
cd talenthub-landingpage
```

**2. Install dependencies**

```bash
npm install
```

**3. Build**

```bash
npm run build
```

Output build ada di folder `dist/`.

**4. Jalankan dengan PM2**

```bash
pm2 start ecosystem.config.cjs
```

Aplikasi akan berjalan di port **8080**.

---

## Konfigurasi PM2

File `ecosystem.config.cjs` sudah tersedia di root project:

```js
module.exports = {
  apps: [
    {
      name: "talenthub-landing",
      script: "serve",
      args: "dist --single --listen 8080",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
```

| Opsi | Keterangan |
|------|-----------|
| `name` | Nama proses di PM2 |
| `dist` | Folder hasil build yang di-serve |
| `--single` | SPA mode — semua route diarahkan ke `index.html` |
| `--listen 8080` | Port yang digunakan |

---

## Perintah PM2

### Start & Stop

```bash
# Start aplikasi
pm2 start ecosystem.config.cjs

# Stop aplikasi
pm2 stop talenthub-landing

# Restart aplikasi
pm2 restart talenthub-landing

# Hapus dari daftar PM2
pm2 delete talenthub-landing
```

### Monitoring

```bash
# Lihat semua proses yang berjalan
pm2 status

# Monitor real-time (CPU, memory, logs)
pm2 monit

# Lihat logs
pm2 logs talenthub-landing

# Lihat 100 baris log terakhir
pm2 logs talenthub-landing --lines 100

# Bersihkan semua logs
pm2 flush
```

### Auto-start setelah Reboot Server

```bash
# Simpan daftar proses PM2 saat ini
pm2 save

# Generate startup script (jalankan perintah yang muncul setelahnya)
pm2 startup
```

---

## Update / Redeploy

Setiap ada perubahan kode, jalankan:

```bash
git pull origin develop
npm install
npm run build
pm2 restart talenthub-landing
```

Atau dalam satu baris:

```bash
git pull origin develop && npm install && npm run build && pm2 restart talenthub-landing
```

---

## Troubleshooting

**Port 8080 sudah digunakan**

```bash
# Cek proses yang menggunakan port 8080
lsof -i :8080

# Atau
ss -tlnp | grep 8080
```

**PM2 tidak menemukan `serve`**

```bash
npm install -g serve
which serve   # pastikan path-nya terdeteksi
```

**Cek logs jika aplikasi crash**

```bash
pm2 logs talenthub-landing --err
```
