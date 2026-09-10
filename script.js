function pesan(namaProduk) {

    // GANTI NOMOR INI DENGAN NOMOR WHATSAPP TOKO
    let nomorWhatsApp = "6280000000000";

    let pesan =
        "Halo Let It Grow.id 🌵\n\n" +
        "Saya tertarik membeli:\n" +
        namaProduk +
        "\n\nApakah masih tersedia?";

    let url =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(pesan);

    window.open(url, "_blank");
}