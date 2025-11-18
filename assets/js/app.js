// Aplikasi utama - Mengatur komponen dan fungsi global
document.addEventListener('DOMContentLoaded', function() {
    // Memuat komponen navbar dan footer
    loadComponent('navbar-container', 'assets/components/navbar.html');
    loadComponent('footer-container', 'assets/components/footer.html');
    
    // Inisialisasi aplikasi
    initializeApp();
});

// Fungsi untuk memuat komponen HTML
function loadComponent(containerId, componentUrl) {
    fetch(componentUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Komponen tidak ditemukan: ' + componentUrl);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            // Setup mobile menu setelah navbar dimuat
            setupMobileMenu();
        })
        .catch(error => {
            console.error('Error loading component:', error);
            document.getElementById(containerId).innerHTML = '<p>Error loading component</p>';
        });
}

// Setup mobile menu
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Tutup menu mobile ketika klik di luar
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// Inisialisasi aplikasi
function initializeApp() {
    console.log('Aplikasi Seberapa Jatim Kamu telah diinisialisasi');
    
    // Set CSS variables untuk tema warna
    const root = document.documentElement;
    root.style.setProperty('--primary-gold', '#F5C27D');
    root.style.setProperty('--primary-brown', '#8B5E2A');
    root.style.setProperty('--primary-green', '#3C6E47');
    root.style.setProperty('--primary-blue', '#1E4F7B');
}

// Fungsi utilitas untuk format angka
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Fungsi untuk menampilkan notifikasi
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style notifikasi
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animasi masuk
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hapus setelah 3 detik
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Fungsi untuk menampilkan loading
function showLoading(container) {
    container.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
}

// Fungsi untuk menghilangkan loading
function hideLoading(container, content) {
    container.innerHTML = content;
}