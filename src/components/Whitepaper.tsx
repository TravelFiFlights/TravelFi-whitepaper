import React from 'react';
import { FileText, Shield, Coins, Globe } from 'lucide-react';

export default function Whitepaper() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">TravelFi Token (TFF)</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Redefining the Future of Travel with Blockchain Technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-xl">
            <Shield className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Secure Transactions</h3>
            <p className="text-gray-400">
              Built on robust blockchain technology ensuring secure, transparent, and instant transactions worldwide.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Coins className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Earn While You Travel</h3>
            <p className="text-gray-400">
              Accumulate TFF tokens with every booking and unlock premium benefits that grow with your portfolio.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <Globe className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Global Ecosystem</h3>
            <p className="text-gray-400">
              Access a worldwide network of travel services, from flights to luxury experiences, all through TFF.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">All-in-One Travel Solution</h4>
              <p className="text-gray-400">Book flights, hotels, and premium services seamlessly with TFF tokens.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Smart Contract Travel Insurance</h4>
              <p className="text-gray-400">Automated claims and instant payouts through blockchain technology.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">NFTs & Digital Collectibles</h4>
              <p className="text-gray-400">Collect and trade unique travel memories as NFTs, redeemable for real experiences.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Governance Rights</h4>
              <p className="text-gray-400">Shape the platform's future through community voting and proposals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}