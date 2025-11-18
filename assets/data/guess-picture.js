// Data gambar untuk tebak gambar Jawa Timur
const guessPictures = [
    {
        id: 1,
        image: "reog-ponorogo.jpg",
        correctAnswer: "Reog Ponorogo",
        options: ["Reog Ponorogo", "Tari Kecak", "Wayang Kulit", "Tari Topeng"],
        description: "Kesenian tradisional dari Ponorogo dengan topeng singa barong besar"
    },
    {
        id: 2,
        image: "bromo.jpg",
        correctAnswer: "Gunung Bromo",
        options: ["Gunung Semeru", "Gunung Bromo", "Gunung Arjuno", "Gunung Kelud"],
        description: "Gunung berapi aktif di Probolinggo dengan lautan pasir yang luas"
    },
    {
        id: 3,
        image: "suramadu.jpg",
        correctAnswer: "Jembatan Suramadu",
        options: ["Jembatan Ampera", "Jembatan Suramadu", "Jembatan Merah", "Jembatan Barito"],
        description: "Jembatan terpanjang di Indonesia yang menghubungkan Surabaya dan Madura"
    },
    {
        id: 4,
        image: "rawon.jpg",
        correctAnswer: "Rawon",
        options: ["Soto Ayam", "Rawon", "Rujak Cingur", "Lontong Balap"],
        description: "Sup daging sapi dengan kuah hitam dari kluwak, khas Jawa Timur"
    },
    {
        id: 5,
        image: "rujak-cingur.jpg",
        correctAnswer: "Rujak Cingur",
        options: ["Rujak Cingur", "Rujak Soto", "Rujak Petis", "Rujak Manis"],
        description: "Salad tradisional Surabaya dengan cingur (hidung sapi) dan bumbu petis"
    },
    {
        id: 6,
        image: "tahu-tek.jpg",
        correctAnswer: "Tahu Tek",
        options: ["Tahu Gejrot", "Tahu Tek", "Tahu Sumedang", "Tahu Bulat"],
        description: "Makanan khas Surabaya dengan tahu, lontong, kentang, dan telur dengan bumbu kacang"
    },
    {
        id: 7,
        image: "lontong-balap.jpg",
        correctAnswer: "Lontong Balap",
        options: ["Lontong Sayur", "Lontong Balap", "Ketoprak", "Gado-gado"],
        description: "Makanan khas Surabaya dengan lontong, tahu goreng, lentho, dan taoge"
    },
    {
        id: 8,
        image: "sate-madura.jpg",
        correctAnswer: "Sate Madura",
        options: ["Sate Padang", "Sate Madura", "Sate Taichan", "Sate Lilit"],
        description: "Sate daging dengan bumbu kacang khas Madura"
    },
    {
        id: 9,
        image: "tari-gandrung.jpg",
        correctAnswer: "Tari Gandrung",
        options: ["Tari Gandrung", "Tari Pendet", "Tari Serimpi", "Tari Jaipong"],
        description: "Tarian tradisional khas Banyuwangi yang dipentaskan pada malam hari"
    },
    {
        id: 10,
        image: "kawah-ijen.jpg",
        correctAnswer: "Kawah Ijen",
        options: ["Kawah Ijen", "Kawah Putih", "Kawah Ratu", "Kawah Sikidang"],
        description: "Gunung berapi di Banyuwangi dengan danau kawah berwarna biru kehijauan dan blue fire"
    },
    {
        id: 11,
        image: "pecel-madiun.jpg",
        correctAnswer: "Pecel Madiun",
        options: ["Gado-gado", "Pecel Madiun", "Karedok", "Urap"],
        description: "Salad sayuran dengan bumbu kacang khas Madiun"
    },
    {
        id: 12,
        image: "batik-sidoarjo.jpg",
        correctAnswer: "Batik Sidoarjo",
        options: ["Batik Solo", "Batik Sidoarjo", "Batik Pekalongan", "Batik Madura"],
        description: "Batik khas Sidoarjo dengan motif yang khas dan warna-warna cerah"
    },
    {
        id: 13,
        image: "keripik-apel.jpg",
        correctAnswer: "Keripik Apel",
        options: ["Keripik Singkong", "Keripik Apel", "Keripik Pisang", "Keripik Tempe"],
        description: "Oleh-oleh khas Malang dari daerah Batu"
    },
    {
        id: 14,
        image: "pantai-papuma.jpg",
        correctAnswer: "Pantai Papuma",
        options: ["Pantai Kuta", "Pantai Papuma", "Pantai Sanur", "Pantai Parangtritis"],
        description: "Pantai di Jember dengan pasir putih dan batu-batu karang yang indah"
    },
    {
        id: 15,
        image: "candi-badut.jpg",
        correctAnswer: "Candi Badut",
        options: ["Candi Borobudur", "Candi Badut", "Candi Prambanan", "Candi Sewu"],
        description: "Candi Hindu di Malang yang diperkirakan dibangun pada abad ke-8"
    },
    {
        id: 16,
        image: "selat-solo.jpg",
        correctAnswer: "Selat Solo",
        options: ["Gudeg", "Selat Solo", "Rawon", "Soto Betawi"],
        description: "Makanan khas Magetan berupa salad dengan daging dan sayuran"
    },
    {
        id: 17,
        image: "tahu-campur.jpg",
        correctAnswer: "Tahu Campur",
        options: ["Tahu Campur", "Tahu Telur", "Tahu Gimbal", "Tahu Lontong"],
        description: "Makanan khas Lamongan dengan tahu, lontong, dan sayuran dalam kuah kaldu"
    },
    {
        id: 18,
        image: "ronde.jpg",
        correctAnswer: "Wedang Ronde",
        options: ["Bajigur", "Wedang Ronde", "Bandrek", "Secang"],
        description: "Minuman hangat khas Jawa Timur dengan bola-bola ketan"
    },
    {
        id: 19,
        image: "ludruk.jpg",
        correctAnswer: "Ludruk",
        options: ["Wayang Orang", "Ludruk", "Ketoprak", "Lenong"],
        description: "Kesenian teater tradisional Jawa Timur dengan dialog dalam bahasa Jawa"
    },
    {
        id: 20,
        image: "tumpeng.jpg",
        correctAnswer: "Nasi Tumpeng",
        options: ["Nasi Kuning", "Nasi Tumpeng", "Nasi Liwet", "Nasi Uduk"],
        description: "Nasi kerucut dengan lauk-pauk khas Jawa dalam acara syukuran"
    },
    {
        id: 21,
        image: "sempol.jpg",
        correctAnswer: "Sempol",
        options: ["Bakwan", "Sempol", "Risol", "Pastel"],
        description: "Makanan khas Malang dari aci dan daging ayam yang digoreng"
    },
    {
        id: 22,
        image: "bakso-malang.jpg",
        correctAnswer: "Bakso Malang",
        options: ["Bakso Solo", "Bakso Malang", "Bakso Wonogiri", "Bakso Karimunjawa"],
        description: "Bakso khas Malang dengan isian lengkap dan kuah kaldu sapi"
    },
    {
        id: 23,
        image: "cethil.jpg",
        correctAnswer: "Cethil",
        options: ["Kerupuk", "Cethil", "Rengginang", "Kemplang"],
        description: "Makanan ringan khas Kediri dari ketela pohon"
    },
    {
        id: 24,
        image: "wingko-babat.jpg",
        correctAnswer: "Wingko Babat",
        options: ["Wingko Babat", "Lumpur", "Kue Cubit", "Klepon"],
        description: "Kue tradisional khas Lamongan dari kelapa dan tepung ketan"
    },
    {
        id: 25,
        image: "otak-otak.jpg",
        correctAnswer: "Otak-otak",
        options: ["Pempek", "Otak-otak", "Tekwan", "Kemplang"],
        description: "Makanan khas Gresik dari ikan tenggiri yang dibungkus daun pisang"
    }
];

// Jika menggunakan module system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { guessPictures };
}