'use client';

import React from 'react';
import { useBrand } from '../context/BrandContext';
import { Check, Shield, User, Wallet, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const { brand } = useBrand();

  const steps = [
    {
      num: '01',
      title: 'Request ID',
      desc: `Send a WhatsApp message to our customer support executives to request and get your cricket exchange and gaming ID`
    },
    {
      num: '02',
      title: 'Make Deposit',
      desc: 'Make secure deposits directly from your BHIM UPI, PhonePe, Paytm, or bank account with a minimum deposit amount of ₹500'
    },
    {
      num: '03',
      title: 'Start Playing',
      desc: 'Log in to the exchange portal and start tracking high liquidity Cricket matches, Football leagues, and Casino odds'
    },
    {
      num: '04',
      title: 'Instant Cashout',
      desc: 'Send a WhatsApp message to the support team to instantly cashout your winnings directly to your bank account within 15 mins'
    }
  ];

  return (
    <section className="py-20 bg-bg-dark border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 bg-accent/15 border border-accent/30 text-accent rounded-full text-[10px] font-black uppercase tracking-widest">
              Simple Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Get your online cricket ID and start wagering with ease on VictoryExchange
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              We have optimised the registration and deposit process on our gaming portal to ensure zero hassles and delays for our users.
            </p>

            {/* List checklist */}
            <div className="space-y-3 pt-2">
              {[
                'Instant account opening in 2-min',
                'Multiple payment mode options for deposits',
                'Guaranteed 15-min cashout on withdrawals 24x7',
                'End-to-end data encryption for total privacy'
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-semibold text-white">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Steps Column */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-surface border border-slate-800 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-primary/45 tracking-widest">{step.num}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-accent">
                    ★
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5 tracking-wide">{step.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
