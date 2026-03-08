// DATA STOCK BARANG
const products = [
  {
    id: 1,
    name: "Apel Hijau",
    image: "assets/images/buah/apel-hijau.jpg",
    description: "Apel segar, renyah, dan manis dari dataran tinggi Malang.",
    stock: 50,
    priceOptions: {
      perKg: 55000,
      perPack: null,
      perSisir: null,
      opsional: "null",
      hargaOpsional: null,
    },
  },
  {
    id: 2,
    name: "Jeruk Sunkist",
    image: "assets/images/buah/Jeruk-Sunkist-Australia.jpeg",
    description: "Jeruk import berkualitas dengan kandungan vitamin C tinggi.",
    stock: 30,
    priceOptions: {
      perKg: 45000,
      perPack: null,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 3,
    name: "Anggur Hitam ",
    image: "assets/images/buah/anggur-hitam.jpg",
    description: "Anggur hitam manis premium minim biji/non biji.",
    stock: 100,
    priceOptions: {
      perKg: 110000,
      perPack: null,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 4,
    name: "Alpukad Mentega",
    image: "assets/images/buah/alpukad-mentega.jpeg",
    description: "Alpukad mentega manis dan lezat, cocok untuk camilan sehat.",
    stock: 25,
    priceOptions: {
      perKg: 35000,
      perPack: null,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 5,
    name: "Anggur Hijau",
    image: "assets/images/buah/anggur-hijau.jpg",
    description: "Anggur hijau manis dan segar, cocok untuk camilan sehat.",
    stock: 25,
    priceOptions: {
      perKg: 90000,
      perPack: null,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 6,
    name: "Stroberi",
    image: "assets/images/buah/Stroberi-pack1.jpeg",
    description: "Stroberi segar dan manis, cocok untuk camilan sehat.",
    stock: 25,
    priceOptions: {
      perKg: null,
      perPack: 18000,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 7,
    name: "Pisang Sunpride",
    image: "assets/images/buah/pisang-sunpride.jpeg",
    description: "Pisang Sunpride manis dan lezat, cocok untuk camilan sehat.",
    stock: 50,
    priceOptions: {
      perKg: null,
      perPack: null,
      perSisir: 30000,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 8,
    name: "Semangka",
    image: "assets/images/buah/Semangka1.jpeg",
    description: "Semangka segar dari Pekanbaru, manis dan merah.",
    stock: 50,
    priceOptions: {
      perKg: 80000,
      perPack: null,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 10,
    name: "Jambu Kristal",
    image: "assets/images/buah/Jambu-kristal.jpeg",
    description: "Jambu kristal segar dari Pekanbaru, manis dan lezat.",
    stock: 50,
    priceOptions: {
      perKg: 30000,
      perPack: null,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 11,
    name: "Salak pondoh",
    image: "assets/images/buah/Salak-pondoh.jpeg",
    description: "Salak pondoh segar dari Pekanbaru, manis dan lezat.",
    stock: 50,
    priceOptions: {
      perKg: 20000,
      perPack: null,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 12,
    name: "Manggis",
    image: "assets/images/buah/Manggis.jpeg",
    description: "Manggis segar dari Pekanbaru, manis dan lezat.",
    stock: 50,
    priceOptions: {
      perKg: 15000,
      perPack: null,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
  {
    id: 13,
    name: "Jambu Air (Merah)",
    image: "assets/images/buah/Jambu-airmerah.jpeg",
    description: "Jambu air (merah) segar dari Pekanbaru, manis dan lezat.",
    stock: 50,
    priceOptions: {
      perKg: 30000,
      perPack: null,
      perSisir: null,
      opsional: null,
      hargaOpsional: null,
    },
  },
];

//-----------------------------------------------------------------------------------------------//
// DATA TIM PELAYANAN
// assets/js/data.js

// Data admin untuk halaman pelayanan
const admins = [
  {
    name: "John Doe",
    role: "Stok & Harga",
    photo: "assets/images/team/AdminPelayanan1.png", // Ganti dengan foto admin Anda
    description:
      "Cocok untuk menanyakan stok terbaru, harga harian, dan estimasi berat buah.",
    whatsapp: "628123456789",
  },
  {
    name: "Kurniawan",
    role: "Konsultasi Buah",
    photo: "assets/images/team/AdminPelayanan2.png", // Ganti dengan foto admin Anda
    description:
      "Hubungi jika merasa tidak sesuai dengan produk yang diterima, atau ingin konsultasi tentang buah yang anda.",
    whatsapp: "628987654321",
  },
  {
    name: "Admin Pengiriman1.png",
    role: "Pengiriman & Pemesanan",
    photo: "assets/images/team/AdminPengiriman1.png", // Ganti dengan foto admin Anda
    description:
      "Hubungi jika ada pertanyaan seputar status pengiriman atau resi pesanan Anda.",
    whatsapp: "628112233445",
  },
  {
    name: "Admin Ahmad",
    role: "Konsultasi Buah",
    photo: "assets/images/team/AdminStock1.png", // Ganti dengan foto admin Anda
    description:
      "Bingung mau pilih buah apa? Tanyakan saja rasa, tekstur, atau rekomendasi buah musiman.",
    whatsapp: "628554433221",
  },
];
//-----------------------------------------------------------------------------------------------//
// Info Subscribe
const discountInfo = {
  title: "Dapatkan Penawaran Spesial!",
  description:
    "Daftarkan email Anda untuk mendapatkan informasi stok terbaru, diskon eksklusif, dan tips seputar buah-buahan langsung dari kami.",
  currentOffer:
    "Penawaran Hari Ini: Beli Apel Malang 5kg, gratis 1kg! Hubungi admin kami sekarang.",
};
