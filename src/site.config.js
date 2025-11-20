export const siteConfig = {
  // --- IDENTITAS FOUNDER ---
  author: "Arifi Razzaq",
  role: "AI Research Scientist",
  email: "vr.zaq1@gmail.com",
  github: "https://github.com/razzaqinspires",
  // TAMBAHAN BARU: FOTO PROFIL
  // Pastikan nama file sesuai dengan yang di folder public
  profileImage: "/portofolio/profile.jpg", 
  
  // --- KONFIGURASI PENDANAAN (SAWERIA) ---
  funding: {
    url: "https://saweria.co/arzzq",
    targetAmount: 5000000000,
    currentAmount: 250000, 
    currency: "IDR",
    
    tiers: [
      { amount: 50000, label: "Coffee Fuel", desc: "Dukung 1 jam coding" },
      { amount: 100000, label: "Server Node", desc: "Sewa cloud server 1 hari" },
      { amount: 500000, label: "GPU Hour", desc: "1 jam training model AI" },
      { amount: 1000000, label: "Angel Investor", desc: "Masuk daftar kontributor utama" },
    ]
  },

  // --- PROJECT UTAMA ---
  heroProject: {
    title: "Metacognitive Nexus",
    desc: "Arsitektur Kesadaran Buatan (Artificial Consciousness) dengan Self-Model recursive loop.",
    tech: "Node.js • Neural Symbolic • Logic",
    link: "https://github.com/razzaqinspires/metacognitive-nexus",
    isSecret: true
  }
};