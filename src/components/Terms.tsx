import React from 'react';
import { ScrollText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: March 2024</p>
        </div>
        
        <div className="prose prose-invert max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-400">
                By accessing and using TravelFi Flights, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">TFF Token Usage</h2>
              <p className="text-gray-400">
                The TFF token is integral to our platform's functionality. Users must:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mt-2">
                <li>Comply with all applicable cryptocurrency regulations</li>
                <li>Maintain security of their wallet credentials</li>
                <li>Accept the risks associated with cryptocurrency transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Travel Services</h2>
              <p className="text-gray-400">
                Our platform facilitates travel bookings through blockchain technology. Users acknowledge:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mt-2">
                <li>Booking confirmations are final once recorded on the blockchain</li>
                <li>Refunds and changes are subject to smart contract conditions</li>
                <li>Travel insurance terms are governed by separate smart contracts</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}