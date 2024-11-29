import React from 'react';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: March 2024</p>
        </div>
        
        <div className="prose prose-invert max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-400">
                We collect information you provide directly to us when using TravelFi Flights, including:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mt-2">
                <li>Personal identification information</li>
                <li>Travel preferences and history</li>
                <li>Blockchain wallet addresses</li>
                <li>Transaction data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-400">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mt-2">
                <li>Process your travel bookings</li>
                <li>Manage your TFF token transactions</li>
                <li>Provide customer support</li>
                <li>Send important updates about our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-400">
                We implement robust security measures to protect your personal information and blockchain transactions. 
                All data is encrypted and stored securely following industry best practices.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}