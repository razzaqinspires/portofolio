import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Server, Users, Zap, QrCode, ExternalLink, CreditCard } from 'lucide-react';
import { siteConfig } from '../site.config.js'; // Import Config

export default function Fundraising() {
  const { targetAmount, currentAmount, url, tiers } = siteConfig.funding;
  const progress = (currentAmount / targetAmount) * 100;

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="w-full p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/80 to-slate-950/80 backdrop-blur-xl relative overflow-hidden group">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
          <div className="p-2 bg-emerald-500/20 rounded-lg">
            <TrendingUp className="text-emerald-400" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Seed Funding: Phase 1</h3>
            <p className="text-xs text-slate-500 uppercase tracking-widest">Status: <span className="text-emerald-400 animate-pulse">Open for Public</span></p>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="mb-8 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-xs text-slate-500 font-mono mb-1">Dana Terkumpul (Verified)</p>
              <p className="text-2xl font-bold text-white font-mono">{formatRupiah(currentAmount)}</p>
            </div>
            <div className="text-right">
               <p className="text-xs text-slate-500 font-mono mb-1">Target 5 Miliar</p>
               <p className="text-lg font-bold text-emerald-400 font-mono">{((currentAmount/targetAmount)*100).toFixed(6)}%</p>
            </div>
          </div>
          
          <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 relative">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.max(progress, 1.5)}%` }} 
              transition={{ duration: 1.5, ease: "circOut" }}
              className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-cyan-400 relative"
            >
              <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite] w-full"></div>
            </motion.div>
          </div>
        </div>

        {/* PILIHAN DONASI (TIERS) */}
        <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <CreditCard size={16} className="text-emerald-500"/> Opsi Dukungan (Saweria)
        </h4>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
            {tiers.map((tier, index) => (
                <a 
                    key={index}
                    href={url} 
                    target="_blank" 
                    className="p-3 rounded-xl bg-slate-800/40 border border-slate-700 hover:bg-slate-700/50 hover:border-emerald-500/50 transition-all group/item text-left"
                >
                    <div className="font-mono text-emerald-400 font-bold text-sm">
                        {formatRupiah(tier.amount)}
                    </div>
                    <div className="text-xs text-slate-400 group-hover/item:text-white">
                        {tier.label}
                    </div>
                </a>
            ))}
        </div>

        {/* TOMBOL UTAMA */}
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full py-4 flex items-center justify-center gap-3 bg-[#EAB308] hover:bg-[#CA8A04] text-slate-950 font-bold rounded-xl transition-all shadow-lg"
        >
          <QrCode size={20} />
          <span>Buka Halaman Pembayaran (Saweria)</span>
          <ExternalLink size={16} className="opacity-50 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="text-center text-[10px] text-slate-500 mt-4 leading-tight">
          *Mendukung QRIS, GoPay, OVO, Dana, & Transfer Bank. <br/>
          Link resmi: <span className="font-mono text-slate-400">{url.replace('https://', '')}</span>
        </p>

      </div>
    </div>
  );
}