"use client";

import { useState, useEffect } from "react";

const GROWTH_STAGES = [
  // Stage 0: Seed
  (
    <g key="seed">
      <ellipse cx="50" cy="88" rx="6" ry="4" fill="#32161F" />
    </g>
  ),
  // Stage 1: Sprout
  (
    <g key="sprout">
      <path d="M50 88 Q50 78 50 72" stroke="#0A210F" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M50 76 Q44 70 40 66 Q46 69 50 73" fill="#0A210F" />
      <path d="M50 76 Q56 70 60 66 Q54 69 50 73" fill="#0A210F" />
    </g>
  ),
  // Stage 2: Small plant
  (
    <g key="small">
      <path d="M50 88 Q50 68 50 58" stroke="#0A210F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M50 72 Q40 62 36 56 Q44 61 50 68" fill="#0A210F" />
      <path d="M50 66 Q60 56 64 50 Q56 55 50 62" fill="#0A210F" />
      <path d="M50 60 Q42 52 38 46 Q45 50 50 56" fill="#0A210F" />
    </g>
  ),
  // Stage 3: Medium plant
  (
    <g key="medium">
      <path d="M50 88 Q50 58 50 42" stroke="#0A210F" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M50 78 Q38 66 32 58 Q42 64 50 74" fill="#0A210F" />
      <path d="M50 68 Q62 56 68 48 Q58 54 50 64" fill="#0A210F" />
      <path d="M50 58 Q38 46 32 38 Q42 44 50 54" fill="#0A210F" />
      <path d="M50 48 Q62 36 68 28 Q58 34 50 44" fill="#0A210F" />
      <path d="M50 42 Q44 34 40 28 Q46 33 50 38" fill="#0A210F" />
    </g>
  ),
  // Stage 4: Full plant with flower
  (
    <g key="full">
      <path d="M50 88 Q50 50 50 30" stroke="#0A210F" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M50 80 Q36 66 28 56 Q40 64 50 76" fill="#0A210F" />
      <path d="M50 70 Q64 56 72 46 Q60 54 50 66" fill="#0A210F" />
      <path d="M50 60 Q36 46 28 36 Q40 44 50 56" fill="#0A210F" />
      <path d="M50 50 Q64 36 72 26 Q60 34 50 46" fill="#0A210F" />
      <path d="M50 40 Q38 28 32 20 Q42 26 50 36" fill="#0A210F" />
      <path d="M50 40 Q62 28 68 20 Q58 26 50 36" fill="#0A210F" />
      {/* Flower */}
      <circle cx="50" cy="15" r="3.5" fill="#32161F" opacity="0.8" />
      <circle cx="44" cy="19" r="3.5" fill="#32161F" opacity="0.8" />
      <circle cx="56" cy="19" r="3.5" fill="#32161F" opacity="0.8" />
      <circle cx="46" cy="26" r="3.5" fill="#32161F" opacity="0.8" />
      <circle cx="54" cy="26" r="3.5" fill="#32161F" opacity="0.8" />
      <circle cx="50" cy="21" r="2.5" fill="#FFFCF2" />
    </g>
  ),
];

const DROPS = [
  { left: "35%", delay: 0, size: 7 },
  { left: "42%", delay: 0.06, size: 5 },
  { left: "50%", delay: 0.12, size: 6 },
  { left: "46%", delay: 0.1, size: 4 },
  { left: "58%", delay: 0.15, size: 5 },
  { left: "54%", delay: 0.04, size: 7 },
  { left: "40%", delay: 0.18, size: 4 },
  { left: "62%", delay: 0.08, size: 6 },
];

function WaterDrops() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {DROPS.map((drop, i) => (
        <span
          key={i}
          className="absolute animate-[drop_0.8s_ease-in_forwards]"
          style={{
            left: drop.left,
            top: 20,
            animationDelay: `${drop.delay}s`,
          }}
        >
          {/* Teardrop shape using SVG */}
          <svg width={drop.size} height={drop.size * 1.5} viewBox="0 0 10 15">
            <path d="M5 0 Q8 5 8 9 A3 3 0 0 1 2 9 Q2 5 5 0Z" fill="#5b9bd5" opacity="0.85" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function PlantGame() {
  const [stage, setStage] = useState(0);
  const [watering, setWatering] = useState(false);
  const [waterCount, setWaterCount] = useState(0);
  const [message, setMessage] = useState("Click the watering can!");

  const maxStage = GROWTH_STAGES.length - 1;

  useEffect(() => {
    const saved = localStorage.getItem("plant-stage");
    if (saved) setStage(Math.min(Number(saved), maxStage));
  }, [maxStage]);

  useEffect(() => {
    localStorage.setItem("plant-stage", String(stage));
  }, [stage]);

  function water() {
    if (watering) return;
    setWatering(true);
    setWaterCount((c) => c + 1);

    if (stage >= maxStage) {
      setMessage("Fully grown! Beautiful!");
      setTimeout(() => setWatering(false), 800);
      return;
    }

    setMessage("Watering...");
    setTimeout(() => {
      setStage((s) => Math.min(s + 1, maxStage));
      setWatering(false);
      if (stage + 1 >= maxStage) {
        setMessage("Fully grown!");
      } else {
        setMessage("It grew! Keep watering!");
      }
    }, 800);
  }

  function reset() {
    setStage(0);
    setMessage("Click the watering can!");
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-sm text-foreground/60">{message}</p>
      <div className="relative">
        <svg viewBox="0 0 100 100" className="h-40 w-40">
          {/* Pot */}
          <path d="M34 88 L38 98 L62 98 L66 88 Z" fill="#32161F" />
          <rect x="32" y="85" width="36" height="4" rx="1" fill="#32161F" />
          {/* Soil */}
          <ellipse cx="50" cy="88" rx="16" ry="3" fill="#0A210F" opacity="0.5" />
          {/* Plant */}
          {GROWTH_STAGES[stage]}
        </svg>
        {watering && stage < maxStage && <WaterDrops key={waterCount} />}
      </div>
      <div className="flex gap-3">
        {stage < maxStage && (
          <button
            onClick={water}
            className="flex items-center gap-1.5 rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40"
            aria-label="Water the plant"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 2C12 2 6 8 6 13a6 6 0 0 0 12 0c0-5-6-10-6-10z" />
            </svg>
            Water
          </button>
        )}
        {stage > 0 && (
          <button
            onClick={reset}
            className="rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-foreground/60 transition-colors hover:bg-secondary/40 hover:text-foreground"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
