// JavaScript untuk halaman informasi
class InformasiPage {
    constructor() {
        this.initializePage();
    }

    // Inisialisasi halaman
    initializePage() {
        this.setupEventListeners();
        this.animateElements();
    }

    // Setup event listeners
    setupEventListeners() {
        // Smooth scroll untuk anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Download button handlers
        const downloadButtons = document.querySelectorAll('.download-buttons .btn');
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleDownload(e.target);
            });
        });
    }

    // Animasi elemen saat scroll
    animateElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe semua section
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    // Handle download button click
    handleDownload(button) {
        const buttonText = button.textContent;
        
        // Simulasi download
        button.innerHTML = '⏳ Downloading...';
        button.disabled = true;
        
        setTimeout(() => {
            if (buttonText.includes('Logbook')) {
                this.downloadLogbook();
            } else {
                this.downloadLaporan();
            }
            
            button.innerHTML = buttonText;
            button.disabled = false;
            
            showNotification('Download berhasil!', 'success');
        }, 2000);
    }

    // Download logbook (simulasi)
    downloadLogbook() {
        const content = this.generateLogbookContent();
        this.downloadFile(content, 'logbook-arekai-jatim-2025.md', 'text/markdown');
    }

    // Download laporan (simulasi)
    downloadLaporan() {
        const content = this.generateLaporanContent();
        this.downloadFile(content, 'laporan-projek-jatim.md', 'text/markdown');
    }

    // Generate konten logbook
    generateLogbookContent() {
        return `# LOGBOOK PROJEK - SEBERAPA JATIM KAMU?
        
## Informasi Projek
- **Nama Projek**: Website Interaktif "Seberapa Jatim Kamu?"
- **Tim Pengembang**: Wisanggeni Cahya Manggalar & Kharis Fatur Rohman
- **Sekolah**: SMKN 1 DLANGGU
- **Lomba**: AREK_AI MURID JATIM 2025

## Fitur yang Dikembangkan
1. Kuis Jawa Timur (50 soal)
2. Tebak Gambar Jatim (20 gambar)
3. PangananBot (Chatbot rekomendasi makanan)
4. Halaman Informasi

## Teknologi yang Digunakan
- HTML5, CSS3, JavaScript ES6+
- Local Storage untuk penyimpanan data
- CSS Variables untuk tema
- Responsive Design

## Catatan Pengembangan
Proyek ini dikembangkan dengan bantuan AI (DeepSeek & ChatGPT) untuk mempercepat proses development dan memastikan kualitas kode yang baik.

---
*Dibuat dengan ❤️ untuk melestarikan budaya Jawa Timur*`;
    }

    // Generate konten laporan
    generateLaporanContent() {
        return `# LAPORAN PROJEK - SEBERAPA JATIM KAMU?

## Abstrak
Website interaktif edukatif bertema budaya Jawa Timur yang menampilkan tiga fitur utama: kuis pengetahuan, tebak gambar, dan chatbot rekomendasi makanan.

## 1. Pendahuluan
### 1.1 Latar Belakang
Jawa Timur memiliki kekayaan budaya yang sangat beragam namun belum sepenuhnya dikenal oleh generasi muda. Website ini hadir sebagai solusi edukatif yang interaktif.

### 1.2 Tujuan
- Memperkenalkan budaya Jawa Timur kepada generasi muda
- Menyediakan media pembelajaran yang menyenangkan
- Melestarikan kekayaan budaya lokal

## 2. Metodologi
### 2.1 Teknologi
- Frontend: HTML, CSS, JavaScript murni
- Penyimpanan: Local Storage
- Design: Responsive Web Design

### 2.2 Pengembangan
Pengembangan dilakukan secara agile dengan bantuan AI untuk mempercepat proses coding dan debugging.

## 3. Hasil dan Pembahasan
Website berhasil dibuat dengan semua fitur yang direncanakan berjalan dengan baik. Testing dilakukan pada berbagai device dan browser.

## 4. Kesimpulan
Website "Seberapa Jatim Kamu?" berhasil menjadi media edukasi yang efektif dan menarik untuk memperkenalkan budaya Jawa Timur.

---
**Tim Pengembang**:
- Wisanggeni Cahya Manggalar
- Kharis Fatur Rohman

SMKN 1 DLANGGU - AREK_AI MURID JATIM 2025`;
    }

    // Fungsi download file
    downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Inisialisasi halaman informasi ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah kita berada di halaman informasi
    if (document.querySelector('.informasi-container')) {
        new InformasiPage();
    }
});