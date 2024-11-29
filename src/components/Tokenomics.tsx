import React from 'react';
import { PieChart, Wallet, Users, Code, Megaphone, Users2 } from 'lucide-react';

const tokenomicsData = [
  { title: 'Public Sale', percentage: 40, icon: Users },
  { title: 'Community Rewards', percentage: 20, icon: Users2 },
  { title: 'Development', percentage: 20, icon: Code },
  { title: 'Marketing', percentage: 10, icon: Megaphone },
  { title: 'Team Allocation', percentage: 10, icon: Wallet },
];

export default function Tokenomics() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <PieChart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Tokenomics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The TFF token is the backbone of our ecosystem, powering transactions and rewards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenomicsData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-gray-800 p-6 rounded-xl">
                <Icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-3xl font-bold text-blue-400">{item.percentage}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}