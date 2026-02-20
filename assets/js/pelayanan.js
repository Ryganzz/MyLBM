// assets/js/pelayanan.js

document.addEventListener("DOMContentLoaded", function () {
  const adminContainer = document.getElementById("admin-container");

  // Cek apakah elemen admin-container ada di halaman ini
  if (adminContainer && typeof admins !== "undefined") {
    // Loop melalui setiap admin di data.js
    admins.forEach((admin) => {
      // Buat elemen card untuk setiap admin dengan struktur baru
      const adminCard = `
                <div class="col-lg-6 col-xl-4 mb-4">
                    <div class="card h-100 shadow-sm d-flex flex-column">
                        <div class="card-body text-center d-flex flex-column">
                            <img src="${admin.photo}" class="admin-photo mx-auto mb-3" alt="Foto ${admin.name}">
                            <h5 class="card-title">${admin.name}</h5>
                            <p class="card-text text-muted">${admin.role}</p>
                            <p class="card-text small flex-grow-1">${admin.description}</p>
                        </div>
                        <div class="card-footer bg-transparent border-top-0 mt-auto p-3">
                             <a href="https://wa.me/${admin.whatsapp}?text=Halo Kak ${admin.name}, saya lihat dari website Ladang Buah Medan..." 
                               class="btn btn-success w-100" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                <i class="bi bi-whatsapp"></i> Chat via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            `;
      // Tambahkan card ke dalam container
      adminContainer.innerHTML += adminCard;
    });
  }
});
