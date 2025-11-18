// DATA MAKANAN JAWA TIMUR - 7 CEMILAN & 8 MAKANAN BERAT
window.foods = [
    // MAKANAN RINGAN/CEMILAN (7 items)
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
    {
        id: 3,
        nama: "Kue Lapis",
        jenis: "makanan",
        rasa: ["manis"],
        tingkat: "ringan",
        asal: "Jawa Timur",
        deskripsi: "Kue tradisional berlapis-lapis dengan warna-warni yang menarik.",
        cocok: "cemilan saat santai",
        sejarah: "Kue tradisional yang sering disajikan dalam acara selamatan."
    },
    {
        id: 4,
        nama: "Onde-onde",
        jenis: "makanan",
        rasa: ["manis"],
        tingkat: "ringan",
        asal: "Jawa Timur",
        deskripsi: "Bola-bola tepung ketan berisi kacang hijau, digoreng dan dibalur wijen.",
        cocok: "cemilan pagi atau sore",
        sejarah: "Jajanan tradisional yang sudah ada sejak lama di Jawa Timur."
    },
    {
        id: 5,
        nama: "Getuk Pisang",
        jenis: "makanan",
        rasa: ["manis"],
        tingkat: "ringan",
        asal: "Madura",
        deskripsi: "Olahan pisang yang dikukus dan dibentuk, memiliki tekstur kenyal.",
        cocok: "cemilan sore",
        sejarah: "Cemilan khas Madura dari olahan pisang yang melimpah."
    },
    {
        id: 6,
        nama: "Wingko Babat",
        jenis: "makanan",
        rasa: ["manis", "gurih"],
        tingkat: "ringan",
        asal: "Babat, Lamongan",
        deskripsi: "Kue tradisional dari kelapa dan tepung ketan, dipanggang hingga kecoklatan.",
        cocok: "cemilan pagi atau pengganjal lapar",
        sejarah: "Kue khas Babat, Lamongan yang sudah menjadi oleh-oleh khas."
    },
    {
        id: 7,
        nama: "Rujak Cingur",
        jenis: "makanan",
        rasa: ["pedas", "gurih"],
        tingkat: "ringan",
        asal: "Surabaya",
        deskripsi: "Rujak khas Surabaya dengan cingur (moncong sapi) rebus empuk dan bumbu petis pedas gurih yang nagih.",
        cocok: "makan siang atau makan malam yang segar",
        sejarah: "Kuliner ikonik Surabaya yang sudah ada sejak zaman dulu, terkenal dengan paduan cingur sapi dan bumbu petis kental."
    },
    // MAKANAN BERAT (8 items)
    {
        id: 8,
        nama: "Rawon",
        jenis: "makanan",
        rasa: ["gurih", "asin"],
        tingkat: "berat",
        asal: "Surabaya",
        deskripsi: "Sup daging sapi dengan kuah hitam dari kluwak, sangat gurih dan nikmat.",
        cocok: "makan malam atau saat hujan",
        sejarah: "Makanan legendaris Surabaya yang sudah ada sejak zaman dulu."
    },
    {
        id: 9,
        nama: "Sate Madura",
        jenis: "makanan",
        rasa: ["manis", "gurih"],
        tingkat: "berat",
        asal: "Madura",
        deskripsi: "Sate daging dengan bumbu kacang khas, empuk dan lezat.",
        cocok: "makan siang atau malam",
        sejarah: "Sate paling terkenal dari Indonesia dengan cita rasa manis-gurih."
    },
    {
        id: 10,
        nama: "Soto Lamongan",
        jenis: "makanan",
        rasa: ["gurih"],
        tingkat: "berat",
        asal: "Lamongan",
        deskripsi: "Soto ayam dengan kuah kuning gurih dan koya sebagai pelengkap.",
        cocok: "sarapan atau makan siang",
        sejarah: "Soto khas Lamongan yang terkenal dengan koyanya."
    },
    {
        id: 11,
        nama: "Bakso Malang",
        jenis: "makanan",
        rasa: ["gurih"],
        tingkat: "berat",
        asal: "Malang",
        deskripsi: "Bakso dengan isian lengkap dalam kuah kaldu sapi yang segar.",
        cocok: "makan siang atau malam",
        sejarah: "Bakso Malang terkenal dengan isian yang komplit dan kuah yang gurih."
    },
    {
        id: 12,
        nama: "Sego Tempong",
        jenis: "makanan",
        rasa: ["pedas"],
        tingkat: "berat",
        asal: "Banyuwangi",
        deskripsi: "Nasi dengan lauk dan sambal terasi yang super pedas.",
        cocok: "makan siang untuk pecinta pedas",
        sejarah: "Makanan khas Banyuwangi yang terkenal pedasnya."
    },
    {
        id: 13,
        nama: "Tahu Campur",
        jenis: "makanan",
        rasa: ["gurih", "manis"],
        tingkat: "berat",
        asal: "Lamongan",
        deskripsi: "Tahu, lontong, sayuran dalam kuah kaldu dengan bumbu petis.",
        cocok: "makan siang atau malam",
        sejarah: "Makanan khas Lamongan yang berbeda dari tahu campur daerah lain."
    },
    {
        id: 14,
        nama: "Rujak Soto",
        jenis: "makanan",
        rasa: ["pedas", "manis", "gurih"],
        tingkat: "berat",
        asal: "Banyuwangi",
        deskripsi: "Perpaduan unik antara rujak buah segar dengan kuah soto yang gurih.",
        cocok: "makan siang",
        sejarah: "Kuliner kreatif khas Banyuwangi yang memadukan dua rasa berbeda."
    },
    {
        id: 15,
        nama: "Pecel Lele",
        jenis: "makanan",
        rasa: ["pedas", "gurih"],
        tingkat: "berat",
        asal: "Jawa Timur",
        deskripsi: "Lele goreng crispy dengan sambal terasi dan lalapan segar.",
        cocok: "makan malam",
        sejarah: "Makanan rakyat yang populer di warung-warung makan Jawa Timur."
    }
];

console.log('✅ Foods data loaded successfully: ' + window.foods.length + ' makanan (' + 
            window.foods.filter(f => f.tingkat === 'ringan').length + ' cemilan, ' + 
            window.foods.filter(f => f.tingkat === 'berat').length + ' makanan berat)');