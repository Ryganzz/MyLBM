// Fungsi untuk merender produk
function renderProducts(productsToRender = products) {
  const productContainer = document.getElementById("product-container");
  if (!productContainer) return;

  productContainer.innerHTML = ""; // Kosongkan container dulu

  if (productsToRender.length === 0) {
    productContainer.innerHTML =
      '<p class="col-12 text-center">Produk tidak ditemukan.</p>';
    return;
  }

  productsToRender.forEach((product) => {
    const prices = [];
    if (product.priceOptions.perKg)
      prices.push(
        `Rp ${product.priceOptions.perKg.toLocaleString("id-ID")}/Kg`,
      );
    if (product.priceOptions.perPack)
      prices.push(
        `Rp ${product.priceOptions.perPack.toLocaleString("id-ID")}/Pack`,
      );
    if (product.priceOptions.perSisir)
      prices.push(
        `Rp ${product.priceOptions.perSisir.toLocaleString("id-ID")}/Sisir`,
      );
    if (product.priceOptions.opsional && product.priceOptions.hargaOpsional)
      prices.push(
        `Rp ${product.priceOptions.hargaOpsional.toLocaleString("id-ID")}/${product.priceOptions.opsional}`,
      );

    const productCard = `
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card h-100 shadow-sm hover-lift">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="mt-auto">
                            <p class="card-text"><small class="text-muted">Stok: ${product.stock}</small></p>
                            <p class="card-text"><strong>${prices.join(" | ")}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    productContainer.innerHTML += productCard;
  });
}

// Fungsi untuk setup pencarian
function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm),
    );
    renderProducts(filteredProducts);
  });
}

// Fungsi untuk merender info admin
function renderAdmins() {
  const adminContainer = document.getElementById("admin-container");
  if (!adminContainer) return;

  adminContainer.innerHTML = ""; // Kosongkan container dulu

  admins.forEach((admin) => {
    const adminCard = `
            <div class="col-lg-3 col-md-6 mb-4">
                <a href="https://wa.me/${admin.whatsapp}" target="_blank" class="text-decoration-none text-dark">
                    <div class="card h-100 shadow-sm text-center p-3 hover-lift">
                        <i class="bi bi-person-circle display-4 text-success"></i>
                        <h6 class="mt-2 mb-1">${admin.name}</h6>
                        <p class="mb-0 small text-muted">${admin.division}</p>
                        <span class="badge bg-success mt-2">Hubungi via WhatsApp</span>
                    </div>
                </a>
            </div>
        `;
    adminContainer.innerHTML += adminCard;
  });
}

// Fungsi untuk merender info subscribe
function renderSubscribeInfo() {
  const subscribeContainer = document.getElementById("subscribe-info");
  if (!subscribeContainer) return;

  subscribeContainer.innerHTML = `
        <h3>${discountInfo.title}</h3>
        <p>${discountInfo.description}</p>
        <div class="alert alert-info" role="alert">
            <strong>Penawaran Hari Ini:</strong> ${discountInfo.currentOffer}
        </div>
    `;
}

// Fungsi yang dijalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupSearch();
  renderAdmins();
  renderSubscribeInfo();
});
// assets/js/app.js

document.addEventListener("DOMContentLoaded", function () {
  // Cari elemen-elemen yang kita perlukan
  const form = document.getElementById("my-form");

  // Jika form tidak ditemukan (misal di halaman lain), hentikan script
  if (!form) {
    return;
  }

  // Inisialisasi elemen-elemen UI
  const statusAlert = document.getElementById("form-error-alert");
  const submitButton = document.getElementById("my-form-button");
  const buttonText = document.getElementById("button-text");
  const buttonSpinner = document.getElementById("button-spinner");
  const confirmationModal = new bootstrap.Modal(
    document.getElementById("confirmationModal"),
  );

  // Fungsi untuk menangani submit form
  async function handleSubmit(event) {
    event.preventDefault(); // Cegah reload halaman

    // --- Tampilkan State "Loading" ---
    submitButton.disabled = true;
    buttonText.classList.add("d-none");
    buttonSpinner.classList.remove("d-none");
    statusAlert.classList.add("d-none"); // Sembunyikan error lama

    const data = new FormData(event.target);

    try {
      const response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // --- SUKSES ---
        form.reset(); // Kosongkan form
        confirmationModal.show(); // Tampilkan modal sukses
      } else {
        // --- ERROR DARI SERVER ---
        const errorData = await response.json();
        let errorMessage = "Oops! Terjadi kesalahan saat mengirim pesan.";
        if (Object.hasOwn(errorData, "errors")) {
          errorMessage = errorData["errors"]
            .map((error) => error["message"])
            .join(", ");
        }
        showError(errorMessage);
      }
    } catch (error) {
      // --- ERROR JARINGAN ---
      console.error("Fetch Error:", error);
      showError("Oops! Tidak ada koneksi internet. Silakan coba lagi.");
    } finally {
      // --- Kembalikan Tombol ke Keadaan Semula ---
      submitButton.disabled = false;
      buttonText.classList.remove("d-none");
      buttonSpinner.classList.add("d-none");
    }
  }

  // Fungsi untuk menampilkan pesan error
  function showError(message) {
    statusAlert.textContent = message;
    statusAlert.classList.remove("d-none");
    // Gulir halaman ke atas agar alert terlihat
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Pasang event listener ke form
  form.addEventListener("submit", handleSubmit);
});


