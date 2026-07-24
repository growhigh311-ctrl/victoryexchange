'use client';

import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Shield, Zap, Clock, Smartphone, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const { brand } = useBrand();

  const featureItems = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: 'Instant ID Creation',
      desc: `Get your online cricket exchange and gaming ID on ${brand.name} in under 2 minutes on WhatsApp`
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: '15-Min Fast Withdrawals',
      desc: `Withdaw your Winnings directly to your bank account or UPI wallet within 10-15 minutes on ${brand.name}`
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />, // We can map this to active support
      title: '24x7 WhatsApp Support',
      desc: 'Our friendly customer support executives are available 24x7 on WhatsApp to assist and guide you'
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Secure & Private Platform',
      desc: 'All your user details, financial records, and transactions are safe on 256-bit encrypted nodes'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: 'Live Match Betting',
      desc: 'Bet live on interactive back-and-lay odds for Cricket matches, Football leagues, and Tennis events'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: '100% Trusted Service',
      desc: `Join thousands of active punters and get your cricket ID, casino account, and Teen Patti on ${brand.name}`
    }
  ];

  return (
    <section className="py-20 bg-bg-dark border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Premium Features Designed For You
          </h2>
          <p className="text-sm text-text-muted mt-3">
            We offer a quick, seamless, and transparent betting experience on India’s largest cricket exchange.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl bg-surface border border-slate-800/80 hover:border-primary/25 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-bg border border-slate-800/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
