import React from 'react';
import { Milestone, Rocket, Globe, Mobile, Cpu, Shield, Coins, Building, Glasses } from 'lucide-react';

const roadmapData = [
  {
    quarter: 'Q1 2025',
    title: 'AI-Powered Travel Recommendations',
    description: 'Launch personalized AI travel assistant with blockchain-verified reviews',
    icon: Cpu,
    features: [
      'Machine learning travel predictions',
      'Personalized itinerary creation',
      'Blockchain-verified review system'
    ]
  },
  {
    quarter: 'Q2 2025',
    title: 'Cross-Chain Integration & Partnerships',
    description: 'Expand blockchain compatibility and establish major airline partnerships',
    icon: Shield,
    features: [
      'Multi-chain support for payments',
      'Strategic airline partnerships',
      'Enhanced security protocols'
    ]
  },
  {
    quarter: 'Q3 2025',
    title: 'TravelFi DeFi Suite',
    description: 'Launch comprehensive DeFi services for travel financing',
    icon: Coins,
    features: [
      'Travel staking pools',
      'Flight ticket NFT marketplace',
      'Travel insurance smart contracts'
    ]
  },
  {
    quarter: 'Q4 2025',
    title: 'Metaverse Travel Experience',
    description: 'Revolutionary virtual travel planning and experiences',
    icon: Glasses,
    features: [
      'Virtual destination previews',
      'Metaverse travel agencies',
      'Digital travel collectibles'
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">2025 Vision</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our roadmap to revolutionize the travel industry through cutting-edge blockchain technology
          </p>
        </div>

        <div className="grid gap-8 relative">
          {roadmapData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-blue-400 font-semibold">{item.quarter}</span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
        </div>
      </div>
    </div>
  );
}