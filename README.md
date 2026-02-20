Ini adalah panduan untuk Anda. Simpan file ini di root folder proyek.

Panduan Pengelolaan Website Ladang Buah Medan (LBM)
Selamat datang di panduan pengelolaan website LBM! Website ini dirancang agar mudah Anda kelola sendiri menggunakan Visual Studio Code.

Struktur Folder
ladang-buah-medan/├── assets/ # Semua file pendukung (CSS, JS, Gambar)│ ├── css/ # File stylesheet│ ├── js/ # File JavaScript (logika dan data)│ └── images/ # Semua gambar website├── index.html # Halaman Utama (Stock)├── pelayanan.html # Halaman Kontak Admin├── ... # Halaman HTML lainnya└── README.md # File panduan ini
Cara Mengubah Stok dan Harga Buah (Penting!)
Semua data buah, stok, dan harga berada di satu file: assets/js/data.js.

Langkah-langkah:
Buka folder proyek ladang-buah-medan di Visual Studio Code.
Buka file assets/js/data.js.
Anda akan melihat sebuah array bernama const products.
Contoh Struktur Data Produk:
{ id: 1, name: "Apel Malang", image: "assets/images/buah/apel.jpg", description: "Apel segar, renyah, dan manis dari dataran tinggi Malang.", stock: 50, // Stok dalam satuan utama (Kg, Sisir, dll) priceOptions: { perKg: 35000, // Harga per Kilogram perPack: 25000, // Harga per Pack perSisir: null, // null jika tidak ada satuan ini opsional: "Per Karung", // Label satuan tambahan hargaOpsional: 300000 // Harga untuk satuan tambahan }}
Cara Memperbarui:
Mengubah Harga Apel per Kg:Cari objek dengan name: "Apel Malang", lalu ubah angka pada priceOptions.perKg.
// DariperKg: 35000,// MenjadiperKg: 40000,
Mengupdate Stok Jeruk:Cari objek dengan name: "Jeruk Sunkist", lalu ubah nilai pada stock.
// Daristock: 30,// Menjadistock: 75,
Menambah Buah Baru:Salin salah satu objek produk, tempel di dalam array products, lalu ubah semua nilainya (id, name, image, dll). Pastikan id baru unik.
Mengubah Satuan Harga:Anda bisa mengubah teks pada opsional menjadi apa saja, misal "Per Dus Besar" atau "Per Box". Jika suatu satuan tidak digunakan, isi nilainya dengan null.
Setelah selesai mengedit, simpan file data.js. Buka index.html di browser, perubahan akan langsung terlihat.

Cara Mengubah Informasi Admin Pelayanan
Data admin juga berada di file assets/js/data.js, di dalam array const admins.

Contoh Struktur Data Admin:
{ name: "Kurniawan", division: "Admin Pelayanan 1", whatsapp: "81234567890" }
Cara Memperbarui:
Mengubah Nama atau Divisi: Cari objek admin yang bersangkutan dan ubah nilai name atau division.
Mengubah Nomor WhatsApp: Ubah nilai whatsapp. PENTING: Gunakan format angka tanpa "0" di depan dan tanpa "+62". Contoh, untuk nomor 081-2345-6789, tulis 8123456789.
Cara Mengubah Konten Penawaran/Subscribe
Konten di halaman subscribe.html juga diatur dari assets/js/data.js, di dalam objek const discountInfo.

const discountInfo = { title: "Dapatkan Penawaran Spesial!", description: "Daftarkan email Anda...", currentOffer: "Diskon 20% untuk semua pembelian Apel Malang minggu ini! Gunakan kode: APELHEMAT20"};
Anda bisa mengubah title, description, dan currentOffer sesuai kebutuhan.

Panduan Pengembangan Lebih Lanjut
Website ini adalah versi "statis" yang dikelola via file. Untuk pengembangan ke tahap yang lebih canggih, Anda bisa mempertimbangkan:

Backend & Database Sejati: Gunakan teknologi seperti Node.js, PHP, atau Python yang terhubung ke database (MySQL, PostgreSQL). Ini akan memungkinkan:
Manajemen stok dan pesanan real-time.
Sistem login untuk admin.
Dashboard untuk mengelola kontung tanpa harus edit kode.
API yang Sesungguhnya: Buat API (misal RESTful API) yang menyediakan data buah dan admin. Frontend akan memanggil API ini. Ini memisahkan logika bisnis (backend) dengan tampilan (frontend) secara sempurna.
Fitur Keranjang Belanja & Checkout: Implementasikan logika keranjang belanja menggunakan JavaScript (localStorage untuk sementara) atau session di backend. Integrasi dengan payment gateway (Midtrans, Xendit) untuk proses pembayaran.
Deployment: Unggah website ini ke hosting agar bisa diakses publik. Anda bisa menggunakan layanan seperti Netlify, Vercel (untuk versi statis ini), atau shared hosting (untuk versi dengan PHP/Node.js).
Menjalankan Website Secara Lokal
Pastikan Anda memiliki ekstensi Live Server di Visual Studio Code.
Klik kanan pada file index.html.
Pilih "Open with Live Server".
Website akan otomatis terbuka di browser Anda.
Selamat mengelola website Ladang Buah Medan!
