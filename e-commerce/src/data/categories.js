const categoryConfigs = {
    ELECTRONICS: {
        title: "Elektronik",
        description: "Telefonlar, bilgisayarlar, tabletler ve daha fazlası",
        features: ["Telefonlar & Aksesuarlar", "Laptoplar & Bilgisayarlar", "Tabletler & E-Reader"],
        linkTo: "/category/electronics",
        icon: 'bi bi-phone',
        gradientFrom: 'blue-500',
        gradientTo: 'blue-600'
    },
    CLOTHING: {
        title: "Giyim & Moda",
        description: "Erkek, kadın ve çocuk giyim koleksiyonları",
        features: ["Erkek Giyim", "Kadın Giyim", "Çocuk Giyim & Ayakkabı"],
        linkTo: "/category/clothing",
        icon: 'bi bi-person',
        gradientFrom: 'green-500',
        gradientTo: 'green-600'
    },
    HOME: {
        title: "Ev & Yaşam",
        description: "Mobilya, dekorasyon ve ev aksesuarları",
        features: ["Mobilya & Dekorasyon", "Mutfak & Yemek", "Bahçe & Açık Hava"],
        linkTo: "/category/home-living",
        icon: 'bi bi-house',
        gradientFrom: 'orange-500',
        gradientTo: 'orange-600'
    },
    SPORTS: {
        title: "Spor & Fitness",
        description: "Fitness ekipmanları ve spor malzemeleri",
        features: ["Fitness & Egzersiz", "Açık Hava Sporları", "Takım Sporları"],
        linkTo: "/category/sports",
        icon: 'bi bi-trophy',
        gradientFrom: 'yellow-500',
        gradientTo: 'yellow-600'
    },
    BOOKS: {
        title: "Kitap & Eğitim",
        description: "Kitaplar, eğitim materyalleri ve ofis malzemeleri",
        features: ["Roman & Edebiyat", "Akademik & Eğitim", "Ofis Malzemeleri"],
        linkTo: "/category/books",
        icon: 'bi bi-book',
        gradientFrom: 'purple-500',
        gradientTo: 'purple-600'
    },
    BEAUTY: {
        title: "Güzellik & Bakım",
        description: "Kozmetik, cilt bakımı ve kişisel bakım ürünleri",
        features: ["Cilt Bakımı", "Makyaj & Kozmetik", "Parfüm & Deodorant"],
        linkTo: "/category/beauty",
        icon: 'bi bi-heart',
        gradientFrom: 'pink-500',
        gradientTo: 'pink-600'
    },
    TOYS: {
        title: "Oyuncak & Hobi",
        description: "Çocuk oyuncakları, hobi malzemeleri ve oyunlar",
        features: ["Çocuk Oyuncakları", "Hobi Malzemeleri", "Masa Oyunları"],
        linkTo: "/category/toys",
        icon: 'bi bi-emoji-smile',
        gradientFrom: 'red-500',
        gradientTo: 'red-600'
    },
    AUTOMOTIVE: {
        title: "Otomotiv",
        description: "Araç aksesuarları, bakım ürünleri ve yedek parçalar",
        features: ["Araç Aksesuarları", "Bakım & Temizlik", "Yedek Parçalar"],
        linkTo: "/category/automotive",
        icon: 'bi bi-car-front',
        gradientFrom: 'gray-600',
        gradientTo: 'gray-700'
    }
};

export const categories = Object.entries(categoryConfigs).map(([type, config]) => ({
    type,
    ...config
})); 