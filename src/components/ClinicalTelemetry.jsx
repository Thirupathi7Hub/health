import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Heart, Radio } from 'lucide-react';

export default function ClinicalTelemetry() {
  const [bpm, setBpm] = useState(72);
  const [spo2, setSpo2] = useState(99);
  const [rr, setRr] = useState(14);
  const [isBeeping, setIsBeeping] = useState(false);

  // Simulate real-time micro-fluctuations in vital signs
  useEffect(() => {
    const interval = setInterval(() => {
      setBpm((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next >= 68 && next <= 76 ? next : 72;
      });
      setSpo2((prev) => {
        const delta = Math.random() > 0.8 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        const next = prev + delta;
        return next >= 97 && next <= 100 ? next : 99;
      });
      setRr((prev) => {
        const delta = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
        const next = prev + delta;
        return next >= 12 && next <= 16 ? next : 14;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Heartbeat beep animation sync
  useEffect(() => {
    const heartBeatInterval = setInterval(() => {
      setIsBeeping(true);
      setTimeout(() => setIsBeeping(false), 200);
    }, (60 / bpm) * 1000 * 2); // Simulates every second heartbeat peak

    return () => clearInterval(heartBeatInterval);
  }, [bpm]);

  // SVG paths for ECG and SpO2 waveforms
  const ecgPath = "M 0,50 L 50,50 L 60,50 L 65,30 L 70,80 L 75,20 L 80,60 L 85,50 L 100,50 L 150,50 L 160,50 L 165,30 L 170,80 L 175,20 L 80,60 L 185,50 L 200,50 L 250,50 L 260,50 L 265,30 L 270,80 L 275,20 L 280,60 L 285,50 L 300,50 L 350,50 L 360,50 L 365,30 L 370,80 L 375,20 L 380,60 L 385,50 L 400,50 L 450,50 L 460,50 L 465,30 L 470,80 L 475,20 L 480,60 L 485,50 L 500,50";
  const plethPath = "M 0,50 Q 15,10 30,50 T 60,50 T 90,50 T 120,50 T 150,50 T 180,50 T 210,50 T 240,50 T 270,50 T 300,50 T 330,50 T 360,50 T 390,50 T 420,50 T 450,50 T 480,50 T 500,50";

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-800 bg-[#070D19] p-6 shadow-2xl neon-glow-primary text-left">
      {/* Background grid line matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1c35_1px,transparent_1px),linear-gradient(to_bottom,#0f1c35_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-40" />

      {/* Screen Glare glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-[380px]">
        {/* Header telemetry status */}
        <div className="flex justify-between items-center border-b border-slate-850 pb-3">
          <div className="flex items-center gap-2">
            <Radio size={16} className="text-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">ICU Bedside Monitor (Live Telemetry)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <ShieldCheck size={12} className="text-green-400" />
              <span className="text-[9px] font-bold text-green-400 uppercase tracking-widest">SLA Active</span>
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Model: OMNIVIEW X12</span>
          </div>
        </div>

        {/* Waves display section */}
        <div className="flex-grow py-4 grid grid-rows-2 gap-4">
          
          {/* Wave 1: ECG trace */}
          <div className="relative overflow-hidden bg-slate-950/40 border border-slate-900 rounded-xl p-3 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] font-bold tracking-wider text-green-400">
              <span className="flex items-center gap-1">
                <Activity size={12} /> HR (ECG Lead II)
              </span>
              <span className="text-xs">{bpm} BPM</span>
            </div>
            
            <div className="relative h-16 w-full mt-1 flex items-center">
              <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                <path
                  d={ecgPath}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  className="opacity-20"
                />
                <motion.path
                  d={ecgPath}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Wave 2: SpO2 trace */}
          <div className="relative overflow-hidden bg-slate-950/40 border border-slate-900 rounded-xl p-3 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] font-bold tracking-wider text-[#00AEEF]">
              <span>SpO2 Pleth wave</span>
              <span className="text-xs">{spo2}%</span>
            </div>

            <div className="relative h-16 w-full mt-1 flex items-center">
              <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                <path
                  d={plethPath}
                  fill="none"
                  stroke="#00AEEF"
                  strokeWidth="2.5"
                  className="opacity-20"
                />
                <motion.path
                  d={plethPath}
                  fill="none"
                  stroke="#00AEEF"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              </svg>
            </div>
          </div>

        </div>

        {/* Footer digital counters */}
        <div className="grid grid-cols-3 gap-3 border-t border-slate-850 pt-3">
          <div className="p-3 bg-slate-900/60 border border-slate-850 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Pulse rate</p>
              <p className="text-lg font-extrabold text-green-400 font-display mt-0.5">{bpm}</p>
            </div>
            <motion.div
              animate={{ scale: isBeeping ? 1.3 : 1 }}
              transition={{ duration: 0.1 }}
              className="p-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
            >
              <Heart size={12} fill={isBeeping ? '#10b981' : 'none'} />
            </motion.div>
          </div>

          <div className="p-3 bg-slate-900/60 border border-slate-850 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">SpO2 Oxygen</p>
              <p className="text-lg font-extrabold text-accent font-display mt-0.5">{spo2}%</p>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          </div>

          <div className="p-3 bg-slate-900/60 border border-slate-850 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Resp Rate</p>
              <p className="text-lg font-extrabold text-slate-200 font-display mt-0.5">{rr}</p>
            </div>
            <span className="text-[9px] font-bold text-slate-400">RPM</span>
          </div>
        </div>

      </div>
    </div>
  );
}
