# 📸 MUMI GG - Real-Time Web PhotoBooth

Aplikasi Web PhotoBooth instan, interaktif, responsif, dan terintegrasi secara *real-time* dengan dashboard operator cetak tanpa menggunakan database backend (100% Serverless/Static). Cocok digunakan untuk event, pesta, dan kepanitiaan.

---

## ✨ Fitur Utama

- **100% Serverless / Static Web:** Hanya terdiri dari 3 file utama (`index.html`, `index.css`, `index.js`). Sangat ringan dan mudah dideploy di GitHub Pages, Vercel, atau Netlify.
- **Kamera & Filter Real-Time:** Dilengkapi dengan fitur pemotretan multi-frame (grid 1 hingga 4 foto), mirror kamera, hitung mundur, serta filter estetik (Vivid, Drama, B&W, Retro, dll) beserta opsi hapus latar belakang (Remove BG).
- **Custom Sticker Editor:** Warga bisa menempelkan emoji dan stiker kustom di atas foto strip secara bebas (bisa digeser, diubah ukurannya, dan dihapus).
- **Dashboard Operator Terpusat (`?op`):** Layar khusus panitia untuk melacak foto masuk berdasarkan kode unik receipt warga (contoh: `B9K5`) dan langsung memicu dialog cetak printer (`Ctrl + P`).
- **Kelola Bingkai Panitia Real-Time:** 
  - Operator dapat mengunggah bingkai PNG transparan kustom panitia langsung via dashboard.
  - Opsi **Gunakan** (aktifkan/nonaktifkan bingkai untuk warga).
  - Opsi **Pin (★)** (jadikan bingkai utama default yang otomatis terpasang saat warga mulai berfoto).
- **Sinkronisasi Real-Time ntfy.sh:** Menggunakan Server-Sent Events (SSE) dan REST API dari `ntfy.sh` sebagai jembatan data gambar dan konfigurasi tema antara HP warga dan laptop operator secara instan.
- **Anti-Refresh Warning:** Mencegah warga/operator kehilangan data sesi secara tidak sengaja akibat halaman ter-refresh secara tidak sengaja.
- **Desain Khusus Mobile (CapCut/Instagram Style):**
  - Panel editor horizontal tumpuk-bawah di HP agar area kanvas foto terlihat sangat lebar dan besar.
  - Laci geser rol film (`🎞️`) tersembunyi dengan tombol melayang interaktif untuk melihat antrean slot foto di HP.
  - Pilihan ekspor terpusat dalam Bottom Sheet Menu (titik tiga `⋮`).

---

## 🛠️ Tech Stack & Dependencies

- **Frontend:** HTML5, Vanilla CSS3 (Custom Variables, Flexbox, CSS Grid, DVH units), Vanilla JS (ES6+).
- **Real-Time Channel:** SSE (EventSource) & Fetch API via [ntfy.sh](https://ntfy.sh).
- **QR Engine:** QR Code Generator API (qrserver.com).
- **Libraries:** *Zero dependencies* (tidak memerlukan framework luar atau bundler).

---

## 🚀 Alur Kerja Sistem

- **Tampilan Operator:** Operator masuk ke `?mode=operator` atau `?op` untuk memantau room. Panitia mengunggah berkas bingkai (.png transparan) dan mem-pin salah satunya.
- **Tampilan HP Warga:** Warga scan QR operator atau ketik kode room. HP Warga otomatis mengunduh konfigurasi bingkai dari operator dan memasangnya sebagai default.
- **Cetak:** Hasil foto dikirim oleh warga ke operator dengan kode unik (misal: `B9K5`). Warga menunjukkan kode tersebut ke operator untuk langsung dicetak.

---

## ⚙️ Cara Menjalankan Secara Lokal

1. Buka folder proyek di terminal lokal kamu.
2. Jalankan lokal web server. Contoh menggunakan Python:
   ```bash
   python3 -m http.server 8080
   ```
3. Buka browser dan akses:
   - **Tampilan Warga:** `http://localhost:8080`
   - **Tampilan Operator:** `http://localhost:8080/?op`

---

## 🌐 Parameter URL

Kamu bisa mengatur perilaku aplikasi menggunakan query parameter berikut:
- `?room=<nama_room>` : Menghubungkan HP warga secara otomatis ke room operator tertentu.
- `?op` atau `?mode=operator` : Membuka dashboard operator cetak dan panel manajemen bingkai kustom panitia.

---

## 🔒 Lisensi & Hak Cipta

Semua aset visual dan kode sumber dilindungi hak cipta.
**© MUMI GG** - Seluruh hak cipta dilindungi undang-undang.
