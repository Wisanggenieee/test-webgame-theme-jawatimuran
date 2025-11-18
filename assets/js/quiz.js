// Quiz Logic untuk Kuis Jawa Timur
class QuizGame {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedQuestions = [];
        this.totalQuestions = 15;
        this.userAnswers = [];
        this.isAnswerSelected = false;
        
        this.initializeQuiz();
    }

    // Inisialisasi kuis
    initializeQuiz() {
        this.setupEventListeners();
        
        // Pilih 15 soal secara acak dari 50 soal
        this.selectedQuestions = this.getRandomItems(quizQuestions, this.totalQuestions);
        console.log('Quiz initialized with', this.selectedQuestions.length, 'questions');
    }

    // Fungsi untuk mengambil item acak dari array
    getRandomItems(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Setup event listeners
    setupEventListeners() {
        const startQuizBtn = document.getElementById('startQuiz');
        const nextQuestionBtn = document.getElementById('nextQuestion');
        const playAgainBtn = document.getElementById('playAgain');
        
        if (startQuizBtn) {
            startQuizBtn.addEventListener('click', () => {
                this.startQuiz();
            });
        }

        if (nextQuestionBtn) {
            nextQuestionBtn.addEventListener('click', () => {
                this.nextQuestion();
            });
        }

        if (playAgainBtn) {
            playAgainBtn.addEventListener('click', () => {
                this.restartQuiz();
            });
        }
    }

    // Mulai kuis
    startQuiz() {
        const startScreen = document.getElementById('startScreen');
        const quizScreen = document.getElementById('quizScreen');
        
        if (startScreen && quizScreen) {
            startScreen.classList.remove('active');
            quizScreen.classList.add('active');
            this.showQuestion();
        }
    }

    // Tampilkan soal saat ini
    showQuestion() {
        const currentQuestion = this.selectedQuestions[this.currentQuestionIndex];
        const questionText = document.getElementById('questionText');
        const questionNumber = document.getElementById('questionNumber');
        const optionsContainer = document.getElementById('optionsContainer');
        
        if (!currentQuestion || !questionText || !optionsContainer) return;
        
        // Update progress
        this.updateProgress();
        
        // Set teks soal dan nomor
        questionText.textContent = currentQuestion.question;
        if (questionNumber) {
            questionNumber.textContent = `Q${this.currentQuestionIndex + 1}`;
        }
        
        // Kosongkan container options
        optionsContainer.innerHTML = '';
        
        // Buat tombol options
        currentQuestion.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            optionBtn.dataset.index = index;
            
            optionBtn.addEventListener('click', () => {
                if (!this.isAnswerSelected) {
                    this.selectAnswer(index);
                }
            });
            
            optionsContainer.appendChild(optionBtn);
        });
        
        // Reset state
        this.isAnswerSelected = false;
        const nextButton = document.getElementById('nextQuestion');
        if (nextButton) nextButton.disabled = true;
    }

    // Update progress bar
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
            progressFill.classList.add('progress-animate');
            setTimeout(() => progressFill.classList.remove('progress-animate'), 500);
        }
        if (progressText) {
            progressText.textContent = `Soal ${this.currentQuestionIndex + 1} dari ${this.totalQuestions}`;
        }
    }

    // Pilih jawaban
    selectAnswer(selectedIndex) {
        const currentQuestion = this.selectedQuestions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option-btn');
        const nextButton = document.getElementById('nextQuestion');
        
        if (!currentQuestion || !options.length) return;
        
        this.isAnswerSelected = true;
        
        // Nonaktifkan semua tombol
        options.forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('selected');
        });
        
        // Tandai jawaban yang dipilih
        options[selectedIndex].classList.add('selected');
        
        // Simpan jawaban user
        this.userAnswers[this.currentQuestionIndex] = selectedIndex;
        
        // Cek apakah jawaban benar
        const isCorrect = selectedIndex === currentQuestion.correctAnswer;
        
        if (isCorrect) {
            // Jawaban benar
            options[selectedIndex].classList.add('correct');
            this.playSound('correct');
            this.score++;
        } else {
            // Jawaban salah
            options[selectedIndex].classList.add('wrong');
            // Tampilkan jawaban yang benar
            options[currentQuestion.correctAnswer].classList.add('correct');
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

    // Lanjut ke soal berikutnya
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.totalQuestions) {
            this.showQuestion();
        } else {
            this.showResults();
        }
    }

    // Tampilkan hasil
    showResults() {
        const quizScreen = document.getElementById('quizScreen');
        const resultsScreen = document.getElementById('resultsScreen');
        
        if (quizScreen && resultsScreen) {
            quizScreen.classList.remove('active');
            resultsScreen.classList.add('active');
            this.displayResults();
        }
    }

    // Tampilkan hasil kuis
    displayResults() {
        const scoreNumber = document.getElementById('scoreNumber');
        const correctAnswers = document.getElementById('correctAnswers');
        const percentage = document.getElementById('percentage');
        const resultsTitle = document.getElementById('resultsTitle');
        const resultsMessage = document.getElementById('resultsMessage');
        const resultsBadge = document.getElementById('resultsBadge');
        
        if (!scoreNumber || !correctAnswers || !percentage) return;
        
        const percentageValue = Math.round((this.score / this.totalQuestions) * 100);
        
        // Update score display
        scoreNumber.textContent = this.score;
        correctAnswers.textContent = this.score;
        percentage.textContent = `${percentageValue}%`;
        
        // Tentukan pesan hasil berdasarkan skor
        let message = '';
        let title = '';
        let badge = '';
        let messageClass = '';
        
        if (percentageValue >= 85) {
            title = 'Wah, Arek Jatim Asli! 🎉';
            message = 'Rek! Cah iki Jatim poll! Pengetahuanmu tentang Jawa Timur sangat luar biasa. Kamu benar-benar Arek Jatim sejati! 🔥';
            badge = '🏆';
            messageClass = 'excellent';
        } else if (percentageValue >= 70) {
            title = 'Lumayan, Rek! 👏';
            message = 'Wah, pengetahuanmu tentang Jawa Timur cukup baik! Tingkatkan lagi biar jadi Arek Jatim sejati! 💪';
            badge = '⭐';
            messageClass = 'good';
        } else if (percentageValue >= 60) {
            title = 'Bisa Lebih Baik Lagi! 📚';
            message = 'Ojo meneng-meneng wae rek, sinau maning tentang Jawa Timur! Masih ada yang perlu dipelajari nih. 😊';
            badge = '📖';
            messageClass = 'average';
        } else {
            title = 'Ayo Belajar Lagi! 🌟';
            message = 'Wah, kayane kudu dolan ning Jatim maning rek! Jangan menyerah, belajar lagi yuk tentang kekayaan budaya Jawa Timur! 🚀';
            badge = '🎯';
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
        const quizResult = {
            score: this.score,
            totalQuestions: this.totalQuestions,
            percentage: percentage,
            type: 'quiz',
            timestamp: new Date().toISOString(),
            userAnswers: this.userAnswers,
            questions: this.selectedQuestions.map(q => q.id)
        };
        
        try {
            localStorage.setItem('quizResult', JSON.stringify(quizResult));
        } catch (error) {
            console.log('Failed to save results:', error);
        }
    }

    // Restart kuis
    restartQuiz() {
        // Reset semua state
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.isAnswerSelected = false;
        
        // Pilih soal baru secara acak
        this.selectedQuestions = this.getRandomItems(quizQuestions, this.totalQuestions);
        
        // Kembali ke start screen
        const resultsScreen = document.getElementById('resultsScreen');
        const startScreen = document.getElementById('startScreen');
        
        if (resultsScreen && startScreen) {
            resultsScreen.classList.remove('active');
            startScreen.classList.add('active');
        }
    }
}

// Fungsi utility untuk copy ke clipboard
function salinKeClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Hasil berhasil disalin ke clipboard! 📋');
    }).catch(() => {
        // Fallback untuk browser lama
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Hasil berhasil disalin ke clipboard! 📋');
    });
}

// Inisialisasi kuis ketika DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah kita berada di halaman quiz
    if (document.getElementById('startScreen')) {
        window.kuisGame = new QuizGame();
    }
    
    // Setup mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = event.target.closest('.nav-container');
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Global function untuk bagikan hasil
function bagikanHasil() {
    const scoreNumber = document.getElementById('scoreNumber');
    const percentage = document.getElementById('percentage');
    
    if (!scoreNumber || !percentage) return;
    
    const skor = scoreNumber.textContent;
    const total = 15;
    const persentase = percentage.textContent;
    
    const teks = `🎯 Aku baru saja menyelesaikan Kuis Jawa Timur di Seberapa Jatim Koe? dan mendapatkan ${skor}/${total} (${persentase})! Coba tantangan ini di: ${window.location.origin}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Hasil Kuis Jawa Timur - Seberapa Jatim Koe?',
            text: teks,
            url: window.location.href
        });
    } else {
        salinKeClipboard(teks);
    }
}