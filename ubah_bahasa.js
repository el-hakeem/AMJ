document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.getElementById("language-switcher");

  // Data terjemahan
  const translations = {
    id: {
      // Terjemahan Bahasa Indonesia
      page_title: "PT Ampera Mandiri Jaya",
      navbar_brand: "PT AMPERA MANDIRI JAYA",
      nav_about: "Tentang",
      nav_project: "Proyek",
      nav_services: "Layanan",
      nav_contact: "Hubungi Kami",
      banner_title: "AMPERA MANDIRI JAYA",
      banner_subtitle:
        "Oil Tools Fabrication and Repair Services<br />General Supply and Special Tools",
      company_profile_title: "Profil Perusahaan",
      company_profile_description:
        "PT Ampera Mandiri Jaya didirikan pada tahun 2021 dan merupakan perusahaan yang bergerak di bidang manufaktur industri Palm Oil dan industri Oil and Gas. Kami memiliki pengalaman dalam pembuatan peralatan yang dibutuhkan dalam proses pengolahan kelapa sawit sesuai permintaan customer dan kami berpengalaman melayani pembuatan peralatan yang digunakan dalam industri minyak dan gas maupun spesial tools lainnya.",
      vision_title: "Visi",
      vision_description:
        "Membangun perusahaan yang terpercaya melalui profesionalisme dan etika bisnis untuk mencapai kepuasan pelanggan.",
      mission_title: "Misi",
      mission_description:
        "Berkomitmen untuk memenuhi kebutuhan pelanggan melalui tenaga profesional dan fasilitas produksi canggih, serta meningkatkan kepuasan pelanggan secara berkelanjutan.",
      projects_preview_title: "Pratinjau Proyek",
      service1_title: "Oil Tools Fabrication",
      services1_description:
        "Kami menyediakan layanan pembuatan alat pendukung sektor oil and gas serta sektor palm oil sesuai spesifikasi yang dibutuhkan oleh pelanggan.",
      service2_title: "Repair Services",
      services2_description:
        "Kami menyediakan layanan perbaikan dan pemeliharaan untuk kebutuhan pelanggan dan sesuai permintaan serta spesifikasi yang diinginkan.",
      service3_title: "General Supply",
      services3_description:
        "Kami menyediakan bahan baku, komponen dan peralatan yang bersifat finished good untuk mendukung proses manufaktur. Seperti material, peralatan maupun perlengkapan kerja sesuai permintaan pelanggan.",
      info_order_title: "Info Pemesanan",
      info_order_description:
        "Silahkan hubungi kami untuk informasi lebih lanjut",
      head_office_title: "Kantor Pusat",
      head_office_address:
        "Mutiara Gading Timur 2 Blok N1/8D<br />Mustikajaya, Kota Bekasi, Jawa Barat<br />Indonesia 17518",
      workshop_title: "Workshop",
      workshop_address:
        "Jl. WR Supratman RT.001 RW.007<br />Kel. Cimuning Mustikajaya, Kota Bekasi 17518",
      footer_text: "© 2024 PT Ampera Mandiri Jaya All Rights Reserved",
    },

    en: {
      page_title: "PT Ampera Mandiri Jaya",
      navbar_brand: "PT AMPERA MANDIRI JAYA",
      nav_about: "About",
      nav_project: "Projects",
      nav_services: "Services",
      nav_contact: "Contact Us",
      banner_title: "AMPERA MANDIRI JAYA",
      banner_subtitle:
        "Oil Tools Fabrication and Repair Services<br />General Supply and Special Tools",
      company_profile_title: "Company Profile",
      company_profile_description:
        "PT Ampera Mandiri Jaya was established in 2021 and is a company engaged in the Palm Oil and Oil and Gas manufacturing industries. We have experience in manufacturing the necessary equipment for palm oil processing according to customer requests and have experience in servicing the manufacturing of equipment used in the oil and gas industry as well as other special tools.",
      vision_title: "Vision",
      vision_description:
        "Building a trusted company through professionalism and business ethics to achieve customer satisfaction.",
      mission_title: "Mission",
      mission_description:
        "Committed to meeting customer needs through professional staff and advanced production facilities, as well as continuously enhancing customer satisfaction.",
      projects_preview_title: "Projects Preview",
      service1_title: "Oil Tools Fabrication",
      services1_description:
        "We provide oil and gas sector support tool fabrication services as well as palm oil sector support tools according to customer specifications.",
      service2_title: "Repair Services",
      services2_description:
        "We provide repair and maintenance services for customer needs according to requested specifications.",
      service3_title: "General Supply",
      services3_description:
        "We provide raw materials, components, and finished goods equipment to support manufacturing processes, such as materials, equipment, and work supplies according to customer requests.",
      info_order_title: "Order Information",
      info_order_description: "Please contact us for more information",
      head_office_title: "Head Office",
      head_office_address:
        "Mutiara Gading Timur 2 Blok N1/8D<br />Mustikajaya, Kota Bekasi, Jawa Barat<br />Indonesia 17518",
      workshop_title: "Workshop",
      workshop_address:
        "Jl. WR Supratman RT.001 RW.007<br />Kel. Cimuning Mustikajaya, Kota Bekasi 17518",
      footer_text: "© 2024 PT Ampera Mandiri Jaya All Rights Reserved",
    },
  };

  // Fungsi untuk mengganti teks berdasarkan bahasa
  const changeLanguage = (lang) => {
    document.querySelectorAll("[data-translate]").forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[lang][key]) {
        // Untuk mendukung HTML tag seperti <br />
        element.innerHTML = translations[lang][key];
      }
    });
  };

  // Event listener pada tombol alih bahasa
  languageSwitcher.addEventListener("click", function () {
    const currentLang = this.getAttribute("data-lang");
    const newLang = currentLang === "en" ? "id" : "en";
    this.setAttribute("data-lang", newLang);
    this.textContent = newLang.toUpperCase();
    changeLanguage(newLang);
  });

  // Set default language
  const defaultLang = "id";
  languageSwitcher.setAttribute("data-lang", defaultLang);
  changeLanguage(defaultLang);
});
