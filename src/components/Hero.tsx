import React from 'react';
import { Plane, Rocket } from 'lucide-react';
import ConnectWallet from './ConnectWallet';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="absolute top-4 right-4">
          <ConnectWallet />
        </div>
        <div className="bg-blue-500/20 p-4 rounded-full mb-8 animate-bounce">
          <Rocket className="w-16 h-16 text-blue-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Travel<span className="text-blue-400">Fi</span> Flights
        </h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-4 font-semibold">
          The Future of Global Travel! 🌍
        </p>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl">
          Say goodbye to outdated systems and hello to a revolutionary travel experience powered by blockchain technology. 
          Earn rewards, enjoy seamless bookings, and become part of a decentralized travel ecosystem where your voice shapes the future.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-4xl">
          <div className="bg-blue-900/50 p-4 rounded-lg">
            <h3 className="text-blue-400 font-semibold mb-2">Blockchain-Powered</h3>
            <p className="text-sm text-gray-300">No borders, no fees, just seamless travel</p>
          </div>
          <div className="bg-blue-900/50 p-4 rounded-lg">
            <h3 className="text-blue-400 font-semibold mb-2">Earn Rewards</h3>
            <p className="text-sm text-gray-300">Get TFF tokens for every booking</p>
          </div>
          <div className="bg-blue-900/50 p-4 rounded-lg">
            <h3 className="text-blue-400 font-semibold mb-2">Community-Driven</h3>
            <p className="text-sm text-gray-300">Your input shapes our future</p>
          </div>
          <div className="bg-blue-900/50 p-4 rounded-lg">
            <h3 className="text-blue-400 font-semibold mb-2">Premium Access</h3>
            <p className="text-sm text-gray-300">Exclusive VIP travel perks</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Download Whitepaper
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors">
            Buy TFF Tokens
          </button>
        </div>
      </div>
    </div>
  );
}