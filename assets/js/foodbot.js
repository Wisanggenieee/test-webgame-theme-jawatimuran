// PANGANANBOT - SIMPLIFIED VERSION (MAKANAN ONLY)
class PangananBot {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 2;
        this.userPreferences = {
            rasa: '',
            tingkat: ''
        };
        this.recommendedFoods = [];
        
        this.init();
    }

    // Initialize bot
    init() {
        console.log('🍜 PangananBot initialized - Makanan Only');
        this.setupEvents();
        this.showStep(1);
        this.addWelcomeMessage();
        
        // Check data availability
        this.checkData();
    }

    // Check data availability
    checkData() {
        if (!window.foods || !Array.isArray(window.foods)) {
            console.warn('⚠️ Foods data not found, loading fallback data...');
            this.loadFallbackData();
        } else {
            console.log('✅ Foods data ready:', window.foods.length + ' items');
        }
    }

    // Fallback data jika foods.js tidak terload
    loadFallbackData() {
        window.foods = [
            // Cemilan Ringan
            {
                id: 1,
                nama: "Klepon",
                jenis: "makanan",
                rasa: ["manis"],
                tingkat: "ringan",
                asal: "Jawa Timur",
                deskripsi: "Bola-bola ketan berisi gula merah yang direbus dan dibalur kelapa parut.",
                cocok: "cemilan sore atau pengganjal lapar",
                sejarah: "Jajanan tradisional yang populer di seluruh Jawa Timur."
            },
            {
                id: 2,
                nama: "Lumpur Surabaya",
                jenis: "makanan",
                rasa: ["manis", "gurih"],
                tingkat: "ringan",
                asal: "Surabaya",
                deskripsi: "Kue basah dengan tekstur lembut seperti lumpur, rasa vanila dan kismis.",
                cocok: "cemilan pagi atau sore",
                sejarah: "Kue khas Surabaya yang terkenal dengan teksturnya yang lembut."
            },
            // Makanan Berat
            {
                id: 8,
                nama: "Rawon Surabaya",
                jenis: "makanan",
                rasa: ["gurih", "asin"],
                tingkat: "berat",
                asal: "Surabaya",
                deskripsi: "Sup daging sapi dengan kuah hitam khas dari kluwak.",
                cocok: "malam hari",
                sejarah: "Makanan ikonik Surabaya yang sudah ada sejak zaman dulu."
            },
            {
                id: 9,
                nama: "Sate Madura",
                jenis: "makanan",
                rasa: ["manis", "gurih"],
                tingkat: "berat",
                asal: "Madura",
                deskripsi: "Sate daging dengan bumbu kacang yang legendaris.",
                cocok: "malam hari",
                sejarah: "Sate paling terkenal dari Indonesia."
            }
        ];
        console.log('✅ Fallback data loaded:', window.foods.length + ' items');
    }

    // Setup semua event listeners
    setupEvents() {
        const nextBtn = document.getElementById('nextStep');
        const prevBtn = document.getElementById('prevStep');
        const wizardSection = document.querySelector('.wizard-section');

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextStep());
        } else {
            console.error('❌ nextStep button not found');
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousStep());
        }

        if (wizardSection) {
            wizardSection.addEventListener('click', (e) => {
                if (e.target.classList.contains('wizard-option')) {
                    this.handleOptionClick(e.target);
                }
            });
        }
    }

    // Handle klik option
    handleOptionClick(option) {
        const step = this.currentStep;
        const value = option.dataset.value;
        
        console.log(`🎯 Selected: ${value} in step ${step}`);
        
        // Reset semua option di step ini
        const currentStep = document.getElementById(`step${step}`);
        if (currentStep) {
            const options = currentStep.querySelectorAll('.wizard-option');
            options.forEach(opt => opt.classList.remove('selected'));
            
            // Pilih option yang diklik
            option.classList.add('selected');
            
            // Simpan preference
            this.savePreference(step, value);
            
            // Update UI
            this.updateNextButton();
        }
    }

    // Simpan preference user
    savePreference(step, value) {
        switch(step) {
            case 1: this.userPreferences.rasa = value; break;
            case 2: this.userPreferences.tingkat = value; break;
        }
        console.log('📝 Preferences updated:', this.userPreferences);
    }

    // Update tombol next
    updateNextButton() {
        const nextBtn = document.getElementById('nextStep');
        const currentStep = document.getElementById(`step${this.currentStep}`);
        
        if (nextBtn && currentStep) {
            const hasSelection = currentStep.querySelector('.wizard-option.selected');
            nextBtn.disabled = !hasSelection;
        }
    }

    // Tampilkan step
    showStep(stepNum) {
        // Validasi step number
        if (stepNum < 1 || stepNum > this.totalSteps) {
            console.error('❌ Invalid step number:', stepNum);
            return;
        }
        
        // Sembunyikan semua step
        document.querySelectorAll('.wizard-step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Tampilkan step yang aktif
        const activeStep = document.getElementById(`step${stepNum}`);
        if (activeStep) {
            activeStep.classList.add('active');
        }
        
        this.currentStep = stepNum;
        this.updateNavigation();
        this.updateNextButton();
    }

    // Update navigasi
    updateNavigation() {
        const prevBtn = document.getElementById('prevStep');
        const nextBtn = document.getElementById('nextStep');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentStep === 1;
        }
        
        if (nextBtn) {
            if (this.currentStep === this.totalSteps) {
                nextBtn.textContent = '🎯 Cari Rekomendasi';
            } else {
                nextBtn.textContent = 'Lanjut →';
            }
        }
    }

    // Step selanjutnya
    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.showStep(this.currentStep + 1);
        } else {
            this.findRecommendations();
        }
    }

    // Step sebelumnya
    previousStep() {
        if (this.currentStep > 1) {
            this.showStep(this.currentStep - 1);
        }
    }

    // Cari rekomendasi
    findRecommendations() {
        console.log('🔍 Finding recommendations...');
        
        // Validasi data
        if (!window.foods || window.foods.length === 0) {
            this.showError('Data makanan tidak tersedia. Silakan refresh halaman.');
            return;
        }
        
        // Tampilkan loading
        this.showLoading();
        
        // Tunggu sebentar untuk efek loading
        setTimeout(() => {
            try {
                // Cari makanan yang cocok
                this.recommendedFoods = this.findMatchingFoods();
                console.log('✅ Found recommendations:', this.recommendedFoods.length);
                
                // Tampilkan hasil
                this.showResults();
                
            } catch (error) {
                console.error('❌ Error finding recommendations:', error);
                this.showError('Terjadi error saat mencari rekomendasi: ' + error.message);
            }
        }, 1500);
    }

    // Cari makanan yang match - HANYA 2 REKOMENDASI
    findMatchingFoods() {
        const matches = [];
        
        window.foods.forEach(food => {
            let score = 0;
            let matchCount = 0;
            
            // Validasi struktur food
            if (!food || typeof food !== 'object') return;
            
            // Check rasa (prioritas tinggi)
            if (this.userPreferences.rasa && Array.isArray(food.rasa) && food.rasa.includes(this.userPreferences.rasa)) {
                score += 60;
                matchCount++;
            }
            
            // Check tingkat
            if (this.userPreferences.tingkat && food.tingkat === this.userPreferences.tingkat) {
                score += 40;
                matchCount++;
            }
            
            // Bonus untuk multiple matches
            if (matchCount >= 2) {
                score += 20;
            }
            
            if (score > 0) {
                matches.push({
                    ...food,
                    score: score,
                    matchCount: matchCount
                });
            }
        });
        
        // Urutkan berdasarkan score dan ambil 2 terbaik saja
        return matches
            .sort((a, b) => b.score - a.score)
            .slice(0, 2); // HANYA 2 REKOMENDASI
    }

    // Tampilkan loading
    showLoading() {
        const resultArea = document.getElementById('recommendationResult');
        if (resultArea) {
            resultArea.innerHTML = `
                <div class="loading-state">
                    <div class="spinner"></div>
                    <p>🔍 Lagi nyari makanan yang cocok...</p>
                    <p class="loading-subtitle">Tunggu sedelok ya rek!</p>
                </div>
            `;
        }
        
        this.addBotMessage("🔍 _Lagi carik'e makanan sing pas karo sliramu..._");
    }

    // Tampilkan hasil
    showResults() {
        const resultArea = document.getElementById('recommendationResult');
        
        if (!resultArea) {
            console.error('❌ Result area not found');
            return;
        }
        
        // Pesan di chat
        this.addBotMessage(this.createResultMessage());
        
        // Tampilkan cards
        resultArea.innerHTML = this.createResultsHTML();
        
        // Scroll ke hasil
        setTimeout(() => {
            resultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }

    // Buat pesan hasil
    createResultMessage() {
        const prefs = this.userPreferences;
        let message = "**Berdasarkan pilihan sliramu:**\n\n";
        
        if (prefs.rasa) message += `• **Rasa:** ${this.capitalize(prefs.rasa)}\n`;
        if (prefs.tingkat) message += `• **Jenis:** ${this.capitalize(prefs.tingkat)}\n\n`;
        
        if (this.recommendedFoods.length > 0) {
            message += `🎯 **Tak rekomendasi'i ${this.recommendedFoods.length} makanan terbaik:**`;
        } else {
            message += "😔 **Waduh, ra onok sing cocok!**\nCoba pilihan liyane...";
        }
        
        return message;
    }

    // Buat HTML untuk hasil
    createResultsHTML() {
        if (this.recommendedFoods.length === 0) {
            return `
                <div class="no-results">
                    <div class="no-results-icon">😔</div>
                    <h4>Waduh, ra onok sing cocok!</h4>
                    <p>Coba pilihan rasa atau jenis makanan yang beda.</p>
                    <button class="btn btn-primary" onclick="pangananBot.reset()">
                        🔄 Coba Lagi
                    </button>
                </div>
            `;
        }
        
        return `
            <div class="results-container">
                <div class="foods-grid">
                    ${this.recommendedFoods.map((food, index) => `
                        <div class="food-card" style="animation-delay: ${index * 0.2}s">
                            <div class="food-header">
                                <div class="food-image">
                                    ${food.tingkat === 'ringan' ? '🥗' : '🍛'}
                                </div>
                                <div class="food-match">${food.score}% match</div>
                            </div>
                            <div class="food-body">
                                <h4>${food.nama}</h4>
                                <p class="food-location">📍 ${food.asal}</p>
                                <p class="food-description">${food.deskripsi}</p>
                                
                                <div class="food-tags">
                                    <span class="tag level">${food.tingkat === 'ringan' ? 'Cemilan' : 'Makanan Berat'}</span>
                                    ${food.rasa.map(flavor => `
                                        <span class="tag flavor">${flavor}</span>
                                    `).join('')}
                                </div>
                                
                                <div class="food-info">
                                    <p><strong>🍽️ Cocok untuk:</strong> ${food.cocok}</p>
                                    ${food.sejarah ? `
                                        <p><strong>📖 Cerita:</strong> ${food.sejarah}</p>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="results-actions">
                    <button class="btn btn-primary" onclick="pangananBot.reset()">
                        🔍 Cari Lagi
                    </button>
                </div>
            </div>
        `;
    }

    // Tambahkan pesan welcome
    addWelcomeMessage() {
        setTimeout(() => {
            this.addBotMessage("Halo rek! 🤖\nTak bantu carik'e makanan khas Jatim sing cocok karo sliramu.\n\nPilih dulu rasa favoritmu ya!");
        }, 1000);
    }

    // Tambahkan pesan bot
    addBotMessage(text) {
        const chatBox = document.getElementById('chatMessages');
        if (!chatBox) {
            console.error('❌ Chat messages box not found');
            return;
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                <strong>🤖 PangananBot:</strong> ${text.replace(/\n/g, '<br>')}
            </div>
        `;
        
        chatBox.appendChild(messageDiv);
        
        // Auto scroll
        setTimeout(() => {
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 100);
    }

    // Reset semua
    reset() {
        this.currentStep = 1;
        this.userPreferences = { rasa: '', tingkat: '' };
        this.recommendedFoods = [];
        
        // Reset UI
        document.querySelectorAll('.wizard-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        const resultArea = document.getElementById('recommendationResult');
        if (resultArea) {
            resultArea.innerHTML = '';
        }
        
        this.showStep(1);
        this.updateNextButton();
        this.addBotMessage("Mau cari makanan lain? 🍴\nAyo pilih preferensi maneh!");
    }

    // Tampilkan error
    showError(message) {
        console.error('❌ Error:', message);
        this.addBotMessage(`❌ ${message}`);
        
        const resultArea = document.getElementById('recommendationResult');
        if (resultArea) {
            resultArea.innerHTML = `
                <div class="error-state">
                    <div class="error-icon">❌</div>
                    <h4>Error</h4>
                    <p>${message}</p>
                    <button class="btn btn-primary" onclick="location.reload()">
                        🔄 Refresh Halaman
                    </button>
                </div>
            `;
        }
    }

    // Helper functions
    capitalize(text) {
        return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
    }
}

// Global instance
let pangananBot;

// Initialize ketika page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing PangananBot...');
    
    setTimeout(() => {
        try {
            if (document.getElementById('foodbot-container')) {
                pangananBot = new PangananBot();
                console.log('✅ PangananBot initialized successfully!');
                
                // Test data availability
                console.log('📊 Foods data check:', {
                    available: !!window.foods,
                    count: window.foods ? window.foods.length : 0
                });
            } else {
                console.log('ℹ️ Not on FoodBot page');
            }
        } catch (error) {
            console.error('❌ Failed to initialize PangananBot:', error);
        }
    }, 500);
});

// Export untuk akses global
if (typeof window !== 'undefined') {
    window.pangananBot = pangananBot;
}