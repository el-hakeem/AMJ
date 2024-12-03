document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.getElementById("language-switcher");

  // Data terjemahan
  const translations = {
    id: {
      // Terjemahan Bahasa Indonesia
      // Navbar Translate ID
      page_title: "PT Ampera Mandiri Jaya",
      navbar_brand: "PT AMPERA MANDIRI JAYA",
      nav_about: "Tentang",
      nav_project: "Proyek",
      nav_services: "Layanan",
      nav_contact: "Hubungi Kami",

      // Dashboard Translate ID
      banner_title: "AMPERA MANDIRI JAYA",
      banner_subtitle:
        "Oil Tools Fabrication and Repair Services<br />General Supply and Special Tools",
      company_profile_title: "Profil Perusahaan",
      company_profile_description:
        "PT Ampera Mandiri Jaya didirikan pada tahun 2021, adalah perusahaan yang bergerak di bidang manufaktur industri Palm Oil serta sektor Oil and Gas. Kami memiliki pengalaman dalam memproduksi peralatan sesuai permintaan pelanggan, khususnya untuk mendukung proses pengolahan kelapa sawit. Selain itu, kami juga berpengalaman dalam pembuatan peralatan untuk industri minyak dan gas serta berbagai spesial tools lainnya.",
      vision_title: "Visi",
      vision_description:
        "Membangun perusahaan yang terpercaya melalui profesionalisme dan etika bisnis untuk mencapai kepuasan pelanggan.",
      mission_title: "Misi",
      mission_description:
        "Berkomitmen untuk memenuhi kebutuhan pelanggan melalui tenaga profesional dan fasilitas produksi canggih, serta meningkatkan kepuasan pelanggan secara berkelanjutan.",
      projects_preview_title: "Pratinjau Proyek",
      preview_project1:
        "<strong>MUD TANK</strong><br>Proyek PT Umran Rubi Perkasa",
      preview_project2:
        "<strong>AIRLOCK DESTONER</strong><br>Proyek Kalimantan Tengah",
      preview_project3:
        "<strong>THRESHER DRUM</strong><br>Proyek Kalimantan Tengah",
      preview_project4:
        "<strong>WATER TANK 200bbl & 150bbl</strong><br>Proyek Mustika Petrotech Indonesia",
      service1_title: "Oil Tools Fabrication",
      services1_description:
        "Kami menyediakan layanan pembuatan alat pendukung sektor oil and gas serta sektor palm oil sesuai spesifikasi yang dibutuhkan oleh pelanggan.",
      service2_title: "Repair Services",
      services2_description:
        "Kami menyediakan layanan perbaikan dan pemeliharaan untuk kebutuhan pelanggan dan sesuai permintaan serta spesifikasi yang diinginkan.",
      service3_title: "General Supply",
      services3_description:
        "Kami menyediakan bahan baku, komponen dan peralatan yang bersifat finished good untuk mendukung proses manufaktur. Seperti material, peralatan maupun perlengkapan kerja sesuai permintaan pelanggan.",

      // Tentang Kami Translate ID
      about_title_company_profile: "Profil Perusahaan",
      about_description_company_profile:
        "PT Ampera Mandiri Jaya adalah perusahaan yang bergerak di industri manufaktur Palm Oil serta sektor Oil and Gas. PT Ampera Mandiri Jaya berdiri sejak tahun 2021, kami berkomitmen untuk membangun perusahaan manufaktur yang terpercaya dan profesional di sektor Palm Oil dan Oil and Gas di Indonesia. Dengan semangat dan dedikasi para pelopor PT Ampera Mandiri Jaya, kami berupaya mencapai kepuasan pelanggan melalui pemenuhan kebutuhan setiap pelanggan.",
      about_team_management: "Manajemen Tim PT Ampera Mandiri Jaya",
      about_team1_management:
        "<strong>Mr Abie</strong><br />CEO PT Ampera Mandiri Jaya",
      about_team2_management: "<strong>Mr Romy</strong><br />Direktur Utama",
      about_team3_management: "<strong>Mr Basuki</strong><br />Direksi",
      about_team4_management: "<strong>Mr Subhan</strong><br />Direksi",
      about_costumers: "Pelanggan Utama Kami",
      about_certificate:
        "Sertifikat Organisasi Internasional untuk Standardisasi (ISO)",
      about_info_order_title: "Info Pemesanan",
      about_info_order_description:
        "Silahkan hubungi kami untuk informasi lebih lanjut",
      about_document1_company: "Profil Perusahaan Palm Oil Mill",
      about_document2_company: "Profil Perusahaan Fabrikasi",
      about_document1_unduh: "Unduh Dokumen PDF",
      about_document2_unduh: "Unduh Dokumen PDF",

      // Proyek Translate ID
      project_palm_title: "Proyek Pabrik Minyak Kelapa Sawit",
      project_palm_product1:
        "<strong>AIRLOCK DESTONER</strong><br>Proyek Kalimantan Tengah",
      project_palm_product2:
        "<strong>THRESHER DRUM</strong><br>Proyek Kalimantan Tengah",
      project_palm_product3:
        "<strong>FFB RECYCLING CONVEYOR</strong><br>Proyek Kalimantan Tengah",
      project_palm_product4:
        "<strong>EMPTY BUNCH PRESS CONVEYOR</strong><br>Proyek Kalimantan Tengah",
      project_palm_product5:
        "<strong>SCRAPPER FFB CONVEYOR</strong><br>Proyek di Kalimantan Barat dan Nabire",
      project_palm_product6:
        "<strong>CHIMNEY BOILER</strong><br>Proyek Kalimantan Tengah",
      project_palm_product7:
        "<strong>SINGLE CUTTING POD <br>Kapasitas 70CuFT</strong><br>Proyek PT Mustika Petrotech Indonesia",
      project_palm_product8:
        "<strong>ANION & CATION</strong><br>Proyek Kalimantan Tengah",
      project_palm_product9:
        "<strong>CONTINUOUS SETTLING TANK</strong><br>Proyek Kalimantan Tengah",
      project_palm_product10:
        "<strong>CEMENT TANK SILO</strong><br>Proyek PT Mustika Petrotech Indonesia",
      project_oil_title: "Proyek Minyak dan Gas",
      project_oil_product1:
        "<strong>MUD TANK</strong><br>Proyek PT Umran Rubi Perkasa",
      project_oil_product2:
        "<strong>DUMP ARM ROLL</strong><br>Proyek PT Internusa Artha Sekawan",
      project_oil_product3:
        "<strong>SLEEPER CONTAINER</strong><br>Proyek Sorong Papua",
      project_oil_product4:
        "<strong>WATER TANK 200bbl & 150bbl</strong><br>Proyek Mustika Petrotech Indonesia",
      project_oil_product5:
        "<strong>ROOF SHELTER PUMP</strong><br>Proyek PT Lerindro Indonesia",
      project_oil_product6:
        "<strong>SKID COMPRESSOR</strong><br>Proyek PT Branky Bumiasri",
      project_oil_product7:
        "<strong>SETLINK TANK</strong><br>Proyek PT Internusa Artha Sekawan",
      project_info_order_title: "Informasi Pemesanan",
      project_info_order_subtitle:
        "Silahkan hubungi kami untuk informasi lebih lanjut",
      project_head_office_title: "Kantor Pusat",
      project_workshop_title: "Workshop",

      // Services Translate ID
      services_oiltools_title: "Oil Tools Fabrication",
      services_oiltools_description:
        "Kami menyediakan layanan pembuatan alat pendukung sektor Oil and Gas Palm Oil sesuai spesifikasi yang dibutuhkan oleh pelanggan.",
      services_repair_title: "Repair Servies",
      services_repair_description:
        "Kami menyediakan layanan perbaikan dan pemeliharaan untuk kebutuhan pelanggan dan sesuai permintaan serta spesifikasi yang diinginkan.",
      services_generalsupp_title: "General Supply",
      services_generalsupp_description:
        "Kami menyediakan bahan baku, komponen, dan peralatan yang bersifat finished good untuk mendukung proses manufaktur, seperti material, peralatan, maupun perlengkapan kerja sesuai permintaan pelanggan.",
      services_info_order_title: "Info Pemesanan",
      services_info_order_subtitle:
        "Silahkan hubungi kami untuk informasi lebih lanjut.",
      services_head_office_title: "Kantor Pusat",
      services_workshop_title: "Workshop",

      // Kontak Page Translate ID
      contact_title: "Hubungi Kami",
      contact_subtitle: "Kirimkan pesan Anda ke email kami",
      contact_form_name: "Nama",
      contact_form_email: "Email",
      contact_form_subject: "Subyek",
      contact_form_message: "Ketik Pesan Anda di sini",
      contact_form_send_message: "Kirim Pesan",
      contact_info_order_title: "Info Pemesanan",
      contact_info_order_subtitle:
        "Silahkan hubungi kami untuk informasi lebih lanjut",
      contact_head_office_title: "Kantor Pusat",
      contact_workshop_title: "Workshop",

      //Kontak Translate ID
      info_order_title: "Info Pemesanan",
      info_order_description:
        "Silahkan hubungi kami untuk informasi lebih lanjut",
      head_office_title: "Kantor Pusat",
      workshop_title: "Workshop",
      workshop_address:
        "Jl. WR Supratman RT.001 RW.007<br />Kel. Cimuning Mustikajaya, Kota Bekasi 17518",
      footer_text: "© 2024 PT Ampera Mandiri Jaya All Rights Reserved",
    },

    en: {
      // Terjemahan Bahasa Inggris
      // Navbar Translate EN
      page_title: "PT Ampera Mandiri Jaya",
      navbar_brand: "PT AMPERA MANDIRI JAYA",
      nav_about: "About",
      nav_project: "Projects",
      nav_services: "Services",
      nav_contact: "Contact Us",

      // Dashboard Translate EN
      banner_title: "AMPERA MANDIRI JAYA",
      banner_subtitle:
        "Oil Tools Fabrication and Repair Services<br />General Supply and Special Tools",
      company_profile_title: "Company Profile",
      company_profile_description:
        "Established in 2021, PT Ampera Mandiri Jaya is a company specializing in the manufacturing industry of Palm Oil and the Oil and Gas sectors. We have expertise in producing equipment tailored to customer requests, particularly for supporting palm oil processing. Additionally, we are experienced in manufacturing equipment for the oil and gas industry as well as various other specialized tools.",
      vision_title: "Vision",
      vision_description:
        "Building a trusted company through professionalism and business ethics to achieve customer satisfaction.",
      mission_title: "Mission",
      mission_description:
        "Committed to meeting customer needs through professional staff and advanced production facilities, as well as continuously enhancing customer satisfaction.",
      projects_preview_title: "Projects Preview",
      preview_project1:
        "<strong>MUD TANK</strong><br>Project PT Umran Rubi Perkasa",
      preview_project2:
        "<strong>AIRLOCK DESTONER</strong><br>Project Central Kalimantan",
      preview_project3:
        "<strong>THRESHER DRUM</strong><br>Project Central Kalimantan",
      preview_project4:
        "<strong>WATER TANK 200bbl & 150bbl</strong><br>Project Mustika Petrotech Indonesia",
      service1_title: "Oil Tools Fabrication",
      services1_description:
        "We provide oil and gas sector support tool fabrication services as well as palm oil sector support tools according to customer specifications.",
      service2_title: "Repair Services",
      services2_description:
        "We provide repair and maintenance services for customer needs according to requested specifications.",
      service3_title: "General Supply",
      services3_description:
        "We provide raw materials, components, and finished goods equipment to support manufacturing processes, such as materials, equipment, and work supplies according to customer requests.",

      // About Us Translate EN
      about_title_company_profile: "Company Profile",
      about_description_company_profile:
        "PT Ampera Mandiri Jaya is a company engaged in the manufacturing industry of Palm Oil and the Oil and Gas sectors. PT Ampera Mandiri Jaya established in 2021, we are committed to building a trusted and professional manufacturing company in the Oil and Gas and Palm Oil sectors in Indonesia. Through the spirit and dedication of the pioneers of PT Ampera Mandiri Jaya, we strive to achieve customer satisfaction by fulfilling every customer’s needs.",
      about_team_management: "Team Management PT Ampera Mandiri Jaya",
      about_team1_management:
        "<strong>Mr Abie</strong><br />CEO PT Ampera Mandiri Jaya",
      about_team2_management:
        "<strong>Mr Romy</strong><br />President Director",
      about_team3_management: "<strong>Mr Basuki</strong><br />Director",
      about_team4_management: "<strong>Mr Subhan</strong><br />Director",
      about_costumers: "Our Value Customers",
      about_certificate:
        "Certificate International Organization For Standardization (ISO)",
      about_info_order_title: "Order Information",
      about_info_order_description: "Please contact us for more information",
      about_document1_company: "Company Profile Palm Oil Mill",
      about_document2_company: "Company Profile Fabrication",
      about_document1_unduh: "Download PDF Document",
      about_document2_unduh: "Download PDF Document",

      // Project Translate EN
      project_palm_title: "Palm Oil Mill Project",
      project_palm_product1:
        "<strong>AIRLOCK DESTONER</strong><br>Project Central Kalimantan",
      project_palm_product2:
        "<strong>THRESHER DRUM</strong><br>Project Central Kalimantan",
      project_palm_product3:
        "<strong>FFB RECYCLING CONVEYOR</strong><br>Project Central Kalimantan",
      project_palm_product4:
        "<strong>EMPTY BUNCH PRESS CONVEYOR</strong><br>Project Central Kalimantan",
      project_palm_product5:
        "<strong>SCRAPPER FFB CONVEYOR</strong><br>Projects in West Kalimantan and Nabire",
      project_palm_product6:
        "<strong>CHIMNEY BOILER</strong><br>Project Central Kalimantan",
      project_palm_product7:
        "<strong>SINGLE CUTTING POD <br>Cap. 70CuFT</strong><br>Project PT Mustika Petrotech Indonesia",
      project_palm_product8:
        "<strong>ANION & CAUTION</strong><br>Project Central Kalimantan",
      project_palm_product9:
        "<strong>CONTINUOUS SETTLING TANK</strong><br>Project Central Kalimantan",
      project_palm_product10:
        "<strong>CEMENT TANK SILO</strong><br>Project PT Mustika Petrotech Indonesia",
      project_oil_title: "Oil and Gas Project",
      project_oil_product1:
        "<strong>MUD TANK</strong><br>Project PT Umran Rubi Perkasa",
      project_oil_product2:
        "<strong>DUMP ARM ROLL</strong><br>Project PT Internusa Artha Sekawan",
      project_oil_product3:
        "<strong>SLEEPER CONTAINER</strong><br>Project Sorong Papua",
      project_oil_product4:
        "<strong>WATER TANK <br>200bbl & 150bbl</strong><br>Project Mustika Petrotech Indonesia",
      project_oil_product5:
        "<strong>ROOF SHELTER PUMP</strong><br>Project PT Lerindro Indonesia",
      project_oil_product6:
        "<strong>SKID COMPRESSOR</strong><br>Project PT Branky Bumiasri",
      project_oil_product7:
        "<strong>SETLINK TANK</strong><br>Project PT Internusa Artha Sekawan",
      project_info_order_title: "Order Information",
      project_info_order_subtitle: "Please contact us for more information",
      project_head_office_title: "Head Office",
      project_workshop_title: "Workshop",

      // Services Translate EN
      services_oiltools_title: "Oil Tools Fabrication",
      services_oiltools_description:
        "We provide fabrication services for tools supporting the Oil and Gas, Palm Oil sectors according to customer specifications.",
      services_repair_title: "Repair Services",
      services_repair_description:
        "We provide repair and maintenance services for customer needs as per requested specifications.",
      services_generalsupp_title: "General Supply",
      services_generalsupp_description:
        "We supply raw materials, components, and finished goods to support manufacturing processes, including materials, equipment, and work supplies as per customer requests.",
      services_info_order_title: "Order Information",
      services_info_order_subtitle: "Please contact us for more information.",
      services_head_office_title: "Head Office",
      services_workshop_title: "Workshop",

      // Contact Page Translate EN
      contact_title: "Contact Us",
      contact_subtitle: "Send your message to our email",
      contact_form_name: "Name",
      contact_form_email: "Email",
      contact_form_subject: "Subject",
      contact_form_message: "Type your message here",
      contact_form_send_message: "Send Message",
      contact_info_order_title: "Order Information",
      contact_info_order_subtitle: "Please contact us for more information",
      contact_head_office_title: "Head Office",
      contact_workshop_title: "Workshop",

      // Contact Translate EN
      info_order_title: "Order Information",
      info_order_description: "Please contact us for more information",
      head_office_title: "Head Office",
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

    // Menyesuaikan gambar bendera sesuai dengan bahasa yang dipilih
    const flagIcon = languageSwitcher.querySelector("img");
    if (lang === "en") {
      flagIcon.src = "img/UK.png"; // Ganti dengan path ke gambar bendera Inggris
      languageSwitcher.innerHTML =
        '<img src="img/INA_FLAG.png" alt="Indonesia" style="width: 20px; height: 15px; margin-right: 5px;"> ID'; // Ubah teks menjadi "EN" dan gambar bendera
    } else {
      flagIcon.src = "img/INA.png"; // Ganti dengan path ke gambar bendera Indonesia
      languageSwitcher.innerHTML =
        '<img src="img/UK_FLAG.png" alt="English" style="width: 20px; height: 15px; margin-right: 5px;"> EN'; // Ubah teks menjadi "ID" dan gambar bendera
    }
  };

  // Set default language
  const defaultLang = "id";
  languageSwitcher.setAttribute("data-lang", defaultLang);
  changeLanguage(defaultLang);

  // Event listener pada tombol alih bahasa
  languageSwitcher.addEventListener("click", function () {
    const currentLang = this.getAttribute("data-lang");
    const newLang = currentLang === "en" ? "id" : "en";
    this.setAttribute("data-lang", newLang);
    changeLanguage(newLang);
  });
});
