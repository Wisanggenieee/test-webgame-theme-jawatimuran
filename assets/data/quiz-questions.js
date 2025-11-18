// Data soal kuis Jawa Timur - 50 soal
const quizQuestions = [
    {
        id: 1,
        question: "Apa sapaan khas Suroboyo untuk laki-laki?",
        options: [
            "Rek",
            "Cak",
            "Ndok", 
            "Pak"
        ],
        correctAnswer: 1, // Index array, jadi "Cak"
        explanation: "Cak adalah sapaan khas Suroboyo untuk laki-laki, sementara Rek lebih umum di Jawa Timur."
    },
    {
        id: 2,
        question: "Makanan khas Probolinggo yang terbuat dari tape singkong adalah?",
        options: [
            "Rujak Cingur",
            "Lontong Balap",
            "Getuk",
            "Sego Tempong"
        ],
        correctAnswer: 2,
        explanation: "Getuk adalah makanan khas Probolinggo yang terbuat dari tape singkong."
    },
    {
        id: 3,
        question: "Kesenian Reog berasal dari kota mana di Jawa Timur?",
        options: [
            "Surabaya",
            "Malang",
            "Ponorogo",
            "Banyuwangi"
        ],
        correctAnswer: 2,
        explanation: "Reog adalah kesenian tradisional yang berasal dari Ponorogo."
    },
    {
        id: 4,
        question: "Apa nama jembatan terpanjang di Jawa Timur yang menghubungkan Surabaya dengan Madura?",
        options: [
            "Jembatan Ampera",
            "Jembatan Suramadu",
            "Jembatan Merah",
            "Jembatan Nasional"
        ],
        correctAnswer: 1,
        explanation: "Jembatan Suramadu (Surabaya-Madura) adalah jembatan terpanjang di Indonesia."
    },
    {
        id: 5,
        question: "Soto khas Lamongan yang berkuah kuning disebut?",
        options: [
            "Soto Ayam",
            "Soto Lamongan",
            "Soto Daging",
            "Soto Bening"
        ],
        correctAnswer: 1,
        explanation: "Soto Lamongan memiliki ciri khas kuah kuning dengan koya sebagai pelengkap."
    },
    {
        id: 6,
        question: "Tari Gandrung berasal dari daerah mana?",
        options: [
            "Surabaya",
            "Banyuwangi",
            "Malang",
            "Kediri"
        ],
        correctAnswer: 1,
        explanation: "Tari Gandrung adalah tarian tradisional khas Banyuwangi."
    },
    {
        id: 7,
        question: "Apa nama gunung berapi aktif yang terkenal dengan lautan pasirnya?",
        options: [
            "Gunung Semeru",
            "Gunung Bromo",
            "Gunung Arjuno",
            "Gunung Kelud"
        ],
        correctAnswer: 1,
        explanation: "Gunung Bromo terkenal dengan lautan pasirnya yang luas."
    },
    {
        id: 8,
        question: "Makanan khas Malang yang terbuat dari apel adalah?",
        options: [
            "Keripik Tempe",
            "Keripik Apel",
            "Sari Apel",
            "Dodol Apel"
        ],
        correctAnswer: 1,
        explanation: "Keripik Apel adalah oleh-oleh khas Malang dari daerah Batu."
    },
    {
        id: 9,
        question: "Apa nama rumah adat Jawa Timur?",
        options: [
            "Rumah Joglo",
            "Rumah Limasan",
            "Rumah Panggung",
            "Rumah Gadang"
        ],
        correctAnswer: 0,
        explanation: "Rumah Joglo adalah rumah adat tradisional Jawa Timur."
    },
    {
        id: 10,
        question: "Kota di Jawa Timur yang terkenal dengan industri rokoknya adalah?",
        options: [
            "Kediri",
            "Malang",
            "Surabaya",
            "Mojokerto"
        ],
        correctAnswer: 0,
        explanation: "Kediri dikenal sebagai kota industri rokok dengan pabrik rokok terbesar."
    },
    {
        id: 11,
        question: "Apa nama makanan khas Madura dari daging sapi?",
        options: [
            "Sate Madura",
            "Rawon",
            "Rujak Cingur",
            "Lontong Balap"
        ],
        correctAnswer: 0,
        explanation: "Sate Madura terkenal dengan bumbu kacangnya yang khas."
    },
    {
        id: 12,
        question: "Danau di Jawa Timur yang terkenal dengan warna airnya yang berubah-ubah adalah?",
        options: [
            "Danau Toba",
            "Danau Kawah Ijen",
            "Danau Sarangan",
            "Danau Ranu Kumbolo"
        ],
        correctAnswer: 1,
        explanation: "Kawah Ijen terkenal dengan danau kawahnya yang berwarna biru kehijauan."
    },
    {
        id: 13,
        question: "Apa nama kerajaan Hindu-Buddha pertama di Jawa Timur?",
        options: [
            "Majapahit",
            "Singhasari",
            "Kediri",
            "Kahuripan"
        ],
        correctAnswer: 1,
        explanation: "Kerajaan Singhasari adalah kerajaan Hindu-Buddha pertama di Jawa Timur."
    },
    {
        id: 14,
        question: "Makanan khas Surabaya yang menggunakan cingur (hidung sapi) adalah?",
        options: [
            "Rawon",
            "Rujak Cingur",
            "Lontong Balap",
            "Tahu Tek"
        ],
        correctAnswer: 1,
        explanation: "Rujak Cingur adalah salad khas Surabaya yang menggunakan cingur."
    },
    {
        id: 15,
        question: "Apa nama festival tahunan di Banyuwangi yang menampilkan Tari Gandrung?",
        options: [
            "Festival Gandrung Sewu",
            "Festival Banyuwangi",
            "Festival Tari Nusantara",
            "Festival Osing"
        ],
        correctAnswer: 0,
        explanation: "Festival Gandrung Sewu menampilkan ribuan penari Gandrung secara massal."
    },
    {
        id: 16,
        question: "Kota mana yang dijuluki 'Kota Pahlawan'?",
        options: ["Surabaya", "Malang", "Kediri", "Madiun"],
        correctAnswer: 0,
        explanation: "Surabaya dijuluki Kota Pahlawan karena peristiwa 10 November 1945."
    },
    {
        id: 17,
        question: "Apa nama makanan khas Jember dari singkong?",
        options: ["Tape", "Getuk", "Keripik Singkong", "Gethuk"],
        correctAnswer: 0,
        explanation: "Tape singkong adalah makanan khas Jember."
    },
    {
        id: 18,
        question: "Pantai yang terkenal di Banyuwangi untuk melihat sunrise adalah?",
        options: ["Pantai Balekambang", "Pantai Papuma", "Pantai Pulau Merah", "Pantai Wedi Ireng"],
        correctAnswer: 2,
        explanation: "Pantai Pulau Merah terkenal untuk melihat sunrise yang indah."
    },
    {
        id: 19,
        question: "Apa nama makanan khas Madiun yang berupa sambal kacang dengan sayuran?",
        options: ["Pecel Madiun", "Rujak Cingur", "Lontong Balap", "Tahu Tek"],
        correctAnswer: 0,
        explanation: "Pecel Madiun terkenal dengan bumbu kacangnya yang khas."
    },
    {
        id: 20,
        question: "Kesenian Ludruk berasal dari daerah mana?",
        options: ["Surabaya", "Jombang", "Malang", "Lamongan"],
        correctAnswer: 1,
        explanation: "Ludruk adalah kesenian teater tradisional yang berasal dari Jombang."
    },
    {
        id: 21,
        question: "Apa nama minuman hangat khas Jawa Timur dengan bola-bola ketan?",
        options: ["Wedang Ronde", "Bajigur", "Bandrek", "Secang"],
        correctAnswer: 0,
        explanation: "Wedang Ronde adalah minuman hangat khas Jawa Timur."
    },
    {
        id: 22,
        question: "Kota di Jawa Timur yang terkenal dengan produksi gula adalah?",
        options: ["Mojokerto", "Sidoarjo", "Probolinggo", "Jombang"],
        correctAnswer: 2,
        explanation: "Probolinggo dikenal sebagai kota penghasil gula terbesar di Jawa Timur."
    },
    {
        id: 23,
        question: "Apa nama makanan khas Surabaya yang terdiri dari lontong, tahu, dan telur?",
        options: ["Tahu Tek", "Lontong Balap", "Rujak Cingur", "Rawon"],
        correctAnswer: 0,
        explanation: "Tahu Tek adalah makanan khas Surabaya dengan bumbu kacang."
    },
    {
        id: 24,
        question: "Taman Nasional yang terkenal dengan bantengnya di Jawa Timur adalah?",
        options: ["TN Baluran", "TN Bromo Tengger Semeru", "TN Meru Betiri", "TN Alas Purwo"],
        correctAnswer: 0,
        explanation: "Taman Nasional Baluran dikenal sebagai 'Africa van Java' dengan populasi banteng."
    },
    {
        id: 25,
        question: "Apa nama makanan khas Ponorogo dari daging ayam?",
        options: ["Sate Ponorogo", "Ayam Bakar", "Soto Ayam", "Gulai Ayam"],
        correctAnswer: 0,
        explanation: "Sate Ponorogo memiliki ciri khas bumbu kecap dan bumbu kacang."
    },
    {
        id: 26,
        question: "Kota mana yang dijuluki 'Kota Angin'?",
        options: ["Probolinggo", "Pasuruan", "Situbondo", "Banyuwangi"],
        correctAnswer: 1,
        explanation: "Pasuruan dijuluki Kota Angin karena lokasinya yang berdekatan dengan laut."
    },
    {
        id: 27,
        question: "Apa nama makanan khas Tuban dari ikan laut?",
        options: ["Pindang Serani", "Ikan Bakar", "Pecel Lele", "Gurame Bakar"],
        correctAnswer: 0,
        explanation: "Pindang Serani adalah makanan khas Tuban dari ikan laut."
    },
    {
        id: 28,
        question: "Candi peninggalan Majapahit yang terkenal di Trowulan adalah?",
        options: ["Candi Bajang Ratu", "Candi Tikus", "Candi Brahu", "Semua benar"],
        correctAnswer: 3,
        explanation: "Semua candi tersebut adalah peninggalan Majapahit di Trowulan."
    },
    {
        id: 29,
        question: "Apa nama makanan khas Bondowoso dari jagung?",
        options: ["Nasi Jagung", "Suwar-suwir", "Jenang Jagung", "Rengginang Jagung"],
        correctAnswer: 1,
        explanation: "Suwar-suwir adalah makanan khas Bondowoso dari jagung."
    },
    {
        id: 30,
        question: "Kesenian wayang kulit di Jawa Timur paling terkenal dari kota?",
        options: ["Surabaya", "Kediri", "Tulungagung", "Jombang"],
        correctAnswer: 2,
        explanation: "Tulungagung dikenal sebagai kota penghasil wayang kulit terbaik."
    },
    {
        id: 31,
        question: "Apa nama makanan khas Lumajang dari pisang?",
        options: ["Sale Pisang", "Kripik Pisang", "Pisang Goreng", "Pisang Rai"],
        correctAnswer: 0,
        explanation: "Sale Pisang adalah oleh-oleh khas Lumajang."
    },
    {
        id: 32,
        question: "Pelabuhan utama di Jawa Timur adalah?",
        options: ["Tanjung Perak", "Tanjung Priok", "Tanjung Emas", "Tanjung Wangi"],
        correctAnswer: 0,
        explanation: "Tanjung Perak adalah pelabuhan utama di Surabaya, Jawa Timur."
    },
    {
        id: 33,
        question: "Apa nama makanan khas Nganjuk dari daging bebek?",
        options: ["Bebek Goreng", "Bebek Bakar", "Bebek Sinjay", "Bebek Kaleyo"],
        correctAnswer: 2,
        explanation: "Bebek Sinjay adalah makanan khas Nganjuk."
    },
    {
        id: 34,
        question: "Taman Safari di Jawa Timur terletak di?",
        options: ["Prigen", "Batu", "Malang", "Surabaya"],
        correctAnswer: 0,
        explanation: "Taman Safari Indonesia 2 terletak di Prigen, Pasuruan."
    },
    {
        id: 35,
        question: "Apa nama makanan khas Trenggalek dari singkong?",
        options: ["Gethuk", "Tiwing", "Gathot", "Keripik Singkong"],
        correctAnswer: 1,
        explanation: "Tiwing adalah makanan khas Trenggalek dari singkong."
    },
    {
        id: 36,
        question: "Kota di Jawa Timur yang terkenal dengan industri mebel adalah?",
        options: ["Pasuruan", "Sidoarjo", "Kediri", "Jepara"],
        correctAnswer: 2,
        explanation: "Kediri terkenal dengan industri mebel dan kerajinan kayu."
    },
    {
        id: 37,
        question: "Apa nama makanan khas Bojonegoro dari nasi?",
        options: ["Nasi Boranan", "Nasi Krawu", "Nasi Pecel", "Nasi Campur"],
        correctAnswer: 0,
        explanation: "Nasi Boranan adalah makanan khas Bojonegoro."
    },
    {
        id: 38,
        question: "Gunung tertinggi di Jawa Timur adalah?",
        options: ["Gunung Bromo", "Gunung Semeru", "Gunung Arjuno", "Gunung Kelud"],
        correctAnswer: 1,
        explanation: "Gunung Semeru adalah gunung tertinggi di Jawa Timur (3.676 mdpl)."
    },
    {
        id: 39,
        question: "Apa nama makanan khas Pacitan dari ikan?",
        options: ["Ikan Wader", "Ikan Bakar", "Pindang Ikan", "Pecel Lele"],
        correctAnswer: 0,
        explanation: "Ikan Wader bakar adalah makanan khas Pacitan."
    },
    {
        id: 40,
        question: "Kota di Jawa Timur yang terkenal dengan batiknya adalah?",
        options: ["Sidoarjo", "Tulungagung", "Madium", "Kediri"],
        correctAnswer: 1,
        explanation: "Tulungagung terkenal dengan batik gedognya."
    },
    {
        id: 41,
        question: "Apa nama makanan khas Ngawi dari tempe?",
        options: ["Tempe Mendoan", "Tempe Bacem", "Tempe Kripik", "Tempe Gembus"],
        correctAnswer: 2,
        explanation: "Keripik tempe adalah oleh-oleh khas Ngawi."
    },
    {
        id: 42,
        question: "Bandara utama di Jawa Timur adalah?",
        options: ["Juanda", "Abdulrachman Saleh", "Blimbingsari", "Notohadinegoro"],
        correctAnswer: 0,
        explanation: "Bandara Internasional Juanda terletak di Sidoarjo, Jawa Timur."
    },
    {
        id: 43,
        question: "Apa nama makanan khas Magetan dari daging sapi?",
        options: ["Sate Sapi", "Rawon", "Selat Solo", "Lontong Balap"],
        correctAnswer: 2,
        explanation: "Selat Solo adalah makanan khas Magetan."
    },
    {
        id: 44,
        question: "Kota di Jawa Timur yang terkenal dengan kerajinan peraknya adalah?",
        options: ["Kediri", "Tulungagung", "Jombang", "Mojokerto"],
        correctAnswer: 1,
        explanation: "Tulungagung terkenal dengan kerajinan perak di daerah Campurdarat."
    },
    {
        id: 45,
        question: "Apa nama makanan khas Blitar dari pisang?",
        options: ["Pisang Goreng", "Sale Pisang", "Pisang Rai", "Kripik Pisang"],
        correctAnswer: 2,
        explanation: "Pisang Rai adalah makanan khas Blitar."
    },
    {
        id: 46,
        question: "Kesenian Jaranan berasal dari daerah mana?",
        options: ["Ponorogo", "Kediri", "Banyuwangi", "Lumajang"],
        correctAnswer: 1,
        explanation: "Jaranan adalah kesenian tradisional khas Kediri."
    },
    {
        id: 47,
        question: "Apa nama makanan khas Gresik dari daging kerbau?",
        options: ["Sate Kerbau", "Gule Kerbau", "Rujak Cingur", "Rawon"],
        correctAnswer: 0,
        explanation: "Sate Kerbau adalah makanan khas Gresik."
    },
    {
        id: 48,
        question: "Kota di Jawa Timur yang terkenal dengan industri garam adalah?",
        options: ["Sampang", "Sumenep", "Sidoarjo", "Gresik"],
        correctAnswer: 1,
        explanation: "Sumenep, Madura terkenal dengan produksi garamnya."
    },
    {
        id: 49,
        question: "Apa nama makanan khas Situbondo dari ikan?",
        options: ["Ikan Asap", "Ikan Bakar", "Pindang Ikan", "Pecel Lele"],
        correctAnswer: 0,
        explanation: "Ikan Asap adalah makanan khas Situbondo."
    },
    {
        id: 50,
        question: "Universitas tertua di Jawa Timur adalah?",
        options: ["Universitas Airlangga", "Universitas Brawijaya", "Universitas Negeri Malang", "ITS"],
        correctAnswer: 0,
        explanation: "Universitas Airlangga di Surabaya adalah universitas tertua di Jawa Timur."
    }
];

// Jika menggunakan module system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizQuestions };
}