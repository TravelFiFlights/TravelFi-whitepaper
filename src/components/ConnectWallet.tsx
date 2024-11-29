import React from 'react';
import { useWeb3Context } from '../context/Web3Context';
import { Wallet } from 'lucide-react';

export default function ConnectWallet() {
  const { account, error, isConnecting, connectWallet } = useWeb3Context();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="relative">
      {error && (
        <div className="absolute bottom-full mb-2 w-full">
          <div className="bg-red-500 text-white text-sm rounded-lg p-2">
            {error}
          </div>
        </div>
      )}
      
      {account ? (
        <button
          className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-colors"
        >
          <Wallet className="w-4 h-4" />
          {formatAddress(account)}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          <Wallet className="w-4 h-4" />
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
}