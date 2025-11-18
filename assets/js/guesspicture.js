// Game Logic untuk Tebak Gambar Jawa Timur
class GuessPictureGame {
    constructor() {
        this.pictures = [];
        this.currentPictureIndex = 0;
        this.score = 0;
        this.selectedPictures = [];
        this.totalPictures = 5;
        this.userAnswers = [];
        this.isAnswerSelected = false;
        
        this.initializeGame();
    }

    // Inisialisasi game
    initializeGame() {
        this.setupEventListeners();
        
        // Pilih 5 gambar secara acak dari 25 gambar
        this.selectedPictures = this.getRandomItems(guessPictures, this.totalPictures);
        console.log('Game initialized with', this.selectedPictures.length, 'pictures');
    }

    // Fungsi untuk mengambil item acak dari array
    getRandomItems(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Fungsi untuk mengacak array
    shuffleArray(array) {
        return [...array].sort(() => 0.5 - Math.random());
    }

    // Setup event listeners
    setupEventListeners() {
        const startGuessBtn = document.getElementById('startGuess');
        const nextImageBtn = document.getElementById('nextImage');
        const playAgainBtn = document.getElementById('playAgain');
        
        if (startGuessBtn) {
            startGuessBtn.addEventListener('click', () => {
                this.startGame();
            });
        }

        if (nextImageBtn) {
            nextImageBtn.addEventListener('click', () => {
                this.nextPicture();
            });
        }

        if (playAgainBtn) {
            playAgainBtn.addEventListener('click', () => {
                this.restartGame();
            });
        }
    }

    // Mulai game
    startGame() {
        const startScreen = document.getElementById('startScreen');
        const gameScreen = document.getElementById('gameScreen');
        
        if (startScreen && gameScreen) {
            startScreen.classList.remove('active');
            gameScreen.classList.add('active');
            this.showPicture();
        }
    }

    // Tampilkan gambar saat ini
    showPicture() {
        const currentPicture = this.selectedPictures[this.currentPictureIndex];
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const imagePlaceholder = document.getElementById('imagePlaceholder');
        
        if (!currentPicture || !questionText || !optionsContainer || !imagePlaceholder) return;
        
        // Update progress
        this.updateProgress();
        
        // Set teks pertanyaan
        questionText.textContent = 'Apa nama gambar di atas?';
        
        // Tampilkan gambar sebenarnya atau placeholder jika gambar tidak ada
        this.displayImage(currentPicture, imagePlaceholder);
        
        // Kosongkan container options
        optionsContainer.innerHTML = '';
        
        // Acak urutan options
        const shuffledOptions = this.shuffleArray([...currentPicture.options]);
        
        // Buat tombol options
        shuffledOptions.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.innerHTML = `
                <span class="option-text">${option}</span>
            `;
            optionBtn.dataset.answer = option;
            
            optionBtn.addEventListener('click', () => {
                if (!this.isAnswerSelected) {
                    this.selectAnswer(option);
                }
            });
            
            optionsContainer.appendChild(optionBtn);
        });
        
        // Reset state
        this.isAnswerSelected = false;
        const nextButton = document.getElementById('nextImage');
        if (nextButton) nextButton.disabled = true;
    }

    // Tampilkan gambar atau placeholder
    displayImage(picture, container) {
        const imagePath = `assets/img/game/${picture.image}`;
        
        // Cek apakah gambar ada
        this.checkImageExists(imagePath).then(exists => {
            if (exists) {
                // Tampilkan gambar sebenarnya
                container.innerHTML = `
                    <img src="${imagePath}" alt="${picture.correctAnswer}" class="image-preview" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <div class="image-fallback" style="display: none;">
                        <div style="background: linear-gradient(135deg, var(--hijau-daun), var(--biru-laut)); 
                                   width: 100%; height: 100%; 
                                   display: flex; align-items: center; justify-content: center; 
                                   color: white; border-radius: var(--radius-sedang);
                                   font-size: 1.5rem; font-weight: 600; text-align: center; padding: 1rem;">
                            <div>
                                <div style="font-size: 3rem; margin-bottom: 0.5rem;">🖼️</div>
                                <div>${picture.correctAnswer}</div>
                                <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">Gambar ${this.currentPictureIndex + 1} dari ${this.totalPictures}</div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // Tampilkan placeholder
                container.innerHTML = `
                    <div class="image-fallback">
                        <div style="background: linear-gradient(135deg, var(--hijau-daun), var(--biru-laut)); 
                                   width: 100%; height: 100%; 
                                   display: flex; align-items: center; justify-content: center; 
                                   color: white; border-radius: var(--radius-sedang);
                                   font-size: 1.5rem; font-weight: 600; text-align: center; padding: 1rem;">
                            <div>
                                <div style="font-size: 3rem; margin-bottom: 0.5rem;">🖼️</div>
                                <div>${picture.correctAnswer}</div>
                                <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">Gambar ${this.currentPictureIndex + 1} dari ${this.totalPictures}</div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }).catch(() => {
            // Jika error, tampilkan placeholder
            container.innerHTML = `
                <div class="image-fallback">
                    <div style="background: linear-gradient(135deg, var(--hijau-daun), var(--biru-laut)); 
                               width: 100%; height: 100%; 
                               display: flex; align-items: center; justify-content: center; 
                               color: white; border-radius: var(--radius-sedang);
                               font-size: 1.5rem; font-weight: 600; text-align: center; padding: 1rem;">
                        <div>
                            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🖼️</div>
                            <div>${picture.correctAnswer}</div>
                            <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">Gambar ${this.currentPictureIndex + 1} dari ${this.totalPictures}</div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Cek apakah gambar ada
    async checkImageExists(imageUrl) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = imageUrl;
        });
    }

    // Update progress bar
    updateProgress() {
        const progress = ((this.currentPictureIndex + 1) / this.totalPictures) * 100;
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
            progressFill.classList.add('progress-animate');
            setTimeout(() => progressFill.classList.remove('progress-animate'), 500);
        }
        if (progressText) {
            progressText.textContent = `Gambar ${this.currentPictureIndex + 1} dari ${this.totalPictures}`;
        }
    }

    // Pilih jawaban
    selectAnswer(selectedAnswer) {
        const currentPicture = this.selectedPictures[this.currentPictureIndex];
        const options = document.querySelectorAll('.option-btn');
        const nextButton = document.getElementById('nextImage');
        
        if (!currentPicture || !options.length) return;
        
        this.isAnswerSelected = true;
        
        // Nonaktifkan semua tombol
        options.forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('selected');
        });
        
        // Tandai jawaban yang dipilih
        const selectedBtn = Array.from(options).find(btn => btn.dataset.answer === selectedAnswer);
        if (selectedBtn) selectedBtn.classList.add('selected');
        
        // Simpan jawaban user
        this.userAnswers[this.currentPictureIndex] = selectedAnswer;
        
        // Cek apakah jawaban benar
        const isCorrect = selectedAnswer === currentPicture.correctAnswer;
        
        if (isCorrect) {
            // Jawaban benar
            if (selectedBtn) selectedBtn.classList.add('correct');
            this.playSound('correct');
            this.score++;
        } else {
            // Jawaban salah
            if (selectedBtn) selectedBtn.classList.add('wrong');
            // Tampilkan jawaban yang benar
            const correctBtn = Array.from(options).find(btn => btn.dataset.answer === currentPicture.correctAnswer);
            if (correctBtn) correctBtn.classList.add('correct');
            this.playSound('wrong');
        }
        
        // Aktifkan tombol next
        if (nextButton) nextButton.disabled = false;
    }

    // Mainkan suara
    playSound(type) {
        try {
            // Buat elemen audio
            const audio = new Audio();
            if (type === 'correct') {
                audio.src = 'assets/sound/correct.mp3';
            } else {
                audio.src = 'assets/sound/wrong.mp3';
            }
            audio.volume = 0.5;
            audio.play().catch(e => console.log('Audio play failed:', e));
        } catch (error) {
            console.log('Sound error:', error);
        }
    }

    // Lanjut ke gambar berikutnya
    nextPicture() {
        this.currentPictureIndex++;
        
        if (this.currentPictureIndex < this.totalPictures) {
            this.showPicture();
        } else {
            this.showResults();
        }
    }

    // Tampilkan hasil
    showResults() {
        const gameScreen = document.getElementById('gameScreen');
        const resultsScreen = document.getElementById('resultsScreen');
        
        if (gameScreen && resultsScreen) {
            gameScreen.classList.remove('active');
            resultsScreen.classList.add('active');
            this.displayResults();
        }
    }

    // Tampilkan hasil game
    displayResults() {
        const scoreNumber = document.getElementById('scoreNumber');
        const correctAnswers = document.getElementById('correctAnswers');
        const percentage = document.getElementById('percentage');
        const resultsTitle = document.getElementById('resultsTitle');
        const resultsMessage = document.getElementById('resultsMessage');
        const resultsBadge = document.getElementById('resultsBadge');
        
        if (!scoreNumber || !correctAnswers || !percentage) return;
        
        const percentageValue = Math.round((this.score / this.totalPictures) * 100);
        
        // Update score display
        scoreNumber.textContent = this.score;
        correctAnswers.textContent = this.score;
        percentage.textContent = `${percentageValue}%`;
        
        // Tentukan pesan hasil berdasarkan skor
        let message = '';
        let title = '';
        let badge = '';
        let messageClass = '';
        
        if (percentageValue >= 80) {
            title = 'Mata Elang! 🦅';
            message = 'Wah, mata kamu tajam banget rek! Pengetahuan visualmu tentang Jawa Timur sangat luar biasa! 🔥';
            badge = '🦅';
            messageClass = 'excellent';
        } else if (percentageValue >= 60) {
            title = 'Lumayan Jeli! 👀';
            message = 'Mata kamu cukup jeli nih! Tingkatkan lagi pengamatanmu tentang kekayaan visual Jawa Timur! 💪';
            badge = '👀';
            messageClass = 'good';
        } else if (percentageValue >= 40) {
            title = 'Perlu Lebih Cermat! 🔍';
            message = 'Ojo terburu-buru rek, amati gambare kanthi teliti! Masih ada yang perlu dipelajari nih. 😊';
            badge = '🔍';
            messageClass = 'average';
        } else {
            title = 'Ayo Lebih Observatif! 🌟';
            message = 'Wah, kayane kudu luwih observatif maning rek! Perhatikan detail-detail kecil dalam gambar! 🚀';
            badge = '🌟';
            messageClass = 'poor';
        }
        
        // Update UI
        if (resultsTitle) resultsTitle.textContent = title;
        if (resultsBadge) resultsBadge.textContent = badge;
        if (resultsMessage) {
            resultsMessage.textContent = message;
            resultsMessage.className = `results-message ${messageClass}`;
        }
        
        // Simpan hasil ke localStorage
        this.saveResults(percentageValue);
    }

    // Simpan hasil ke localStorage
    saveResults(percentage) {
        const gameResult = {
            score: this.score,
            totalPictures: this.totalPictures,
            percentage: percentage,
            type: 'guessPicture',
            timestamp: new Date().toISOString(),
            userAnswers: this.userAnswers,
            pictures: this.selectedPictures.map(p => p.id)
        };
        
        try {
            localStorage.setItem('guessPictureResult', JSON.stringify(gameResult));
        } catch (error) {
            console.log('Failed to save results:', error);
        }
    }

    // Restart game
    restartGame() {
        // Reset semua state
        this.currentPictureIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isAnswerSelected = false;
        
        // Pilih gambar baru secara acak
        this.selectedPictures = this.getRandomItems(guessPictures, this.totalPictures);
        
        // Kembali ke start screen
        const resultsScreen = document.getElementById('resultsScreen');
        const startScreen = document.getElementById('startScreen');
        
        if (resultsScreen && startScreen) {
            resultsScreen.classList.remove('active');
            startScreen.classList.add('active');
        }
    }
}

// Inisialisasi game ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah kita berada di halaman guess picture
    if (document.getElementById('startScreen')) {
        window.guessPictureGame = new GuessPictureGame();
    }
});