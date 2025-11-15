import React from 'react';
import { DollarSign, Trees, Layers, Megaphone } from 'lucide-react';

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="flex-1 bg-white/95 dark:bg-gray-800/95 rounded-xl p-4 md:p-6 shadow-lg transform hover:-translate-y-1 transition-transform">
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mr-4">
        {icon}
      </div>
      <div className="text-left">
        <div className="text-2xl md:text-3xl font-extrabold text-black dark:text-white">{value}</div>
        <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{label}</div>
      </div>
    </div>
  </div>
);

const SiteBanner: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 pointer-events-auto">
      <div className="backdrop-blur-sm bg-white/40 dark:bg-gray-900/60 rounded-2xl p-3 md:p-4 shadow-2xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            <StatCard
              icon={<DollarSign size={20} />}
              value="$20k+"
              label="raised"
            />
            <StatCard
              icon={<Trees size={20} />}
              value="400+"
              label="trees planted"
            />
            <StatCard
              icon={<Layers size={20} />}
              value="8+ acres"
              label="restored"
            />
            <StatCard
              icon={<Megaphone size={20} />}
              value="10k+"
              label="people reached"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteBanner;
