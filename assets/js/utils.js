// Utilitas untuk aplikasi Seberapa Jatim Kamu

// Fungsi untuk mengambil data dari localStorage
function getFromStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error getting from storage:', error);
        return null;
    }
}

// Fungsi untuk menyimpan data ke localStorage
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('Error saving to storage:', error);
        return false;
    }
}

// Fungsi untuk menghapus data dari localStorage
function removeFromStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing from storage:', error);
        return false;
    }
}

// Fungsi untuk mengacak array (Fisher-Yates shuffle)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Fungsi untuk mengambil item acak dari array
function getRandomItems(array, count) {
    if (array.length <= count) return shuffleArray(array);
    const shuffled = shuffleArray(array);
    return shuffled.slice(0, count);
}

// Fungsi untuk memutar suara
function playSound(soundFile) {
    try {
        const audio = new Audio(`assets/sound/${soundFile}`);
        audio.volume = 0.5;
        audio.play().catch(e => console.log('Audio play failed:', e));
    } catch (error) {
        console.error('Error playing sound:', error);
    }
}

// Fungsi untuk format waktu (detik ke menit:detik)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Fungsi untuk membuat ID unik
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Fungsi untuk delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fungsi untuk validasi email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fungsi debounce untuk mencegah fungsi dipanggil terlalu sering
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Fungsi untuk format tanggal Indonesia
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(date).toLocaleDateString('id-ID', options);
}

// Ekspor fungsi untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getFromStorage,
        saveToStorage,
        removeFromStorage,
        shuffleArray,
        getRandomItems,
        playSound,
        formatTime,
        generateId,
        delay,
        isValidEmail,
        debounce,
        formatDate
    };
}
// Tambahkan fungsi ini di utils.js untuk membantu PangananBot

// Fungsi untuk menampilkan loading state
function showLoading(container, message = 'Loading...') {
    container.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>${message}</p>
        </div>
    `;
}

// Fungsi untuk validasi data makanan
function validateFoodData(food) {
    const requiredFields = ['nama', 'jenis', 'rasa', 'tingkat', 'gaya', 'asal', 'deskripsi', 'cocok'];
    return requiredFields.every(field => food[field]);
}

// Fungsi untuk filter makanan dengan scoring system
function filterFoodsWithScore(foods, preferences) {
    return foods.map(food => {
        let score = 0;
        
        // Jenis makanan (exact match)
        if (food.jenis === preferences.jenis) score += 3;
        
        // Rasa (partial match)
        if (preferences.rasa && food.rasa.includes(preferences.rasa)) score += 2;
        
        // Tingkat (exact match)
        if (food.tingkat === preferences.tingkat) score += 2;
        
        // Gaya (partial match)
        if (preferences.gaya && food.gaya.includes(preferences.gaya)) score += 1;
        
        return { ...food, score };
    })
    .filter(food => food.score > 0)
    .sort((a, b) => b.score - a.score);
}