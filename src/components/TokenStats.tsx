import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function TokenStats() {
  const { data, error } = useSWR(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true',
    fetcher,
    { refreshInterval: 30000 }
  );

  const loading = !data && !error;

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Live Token Stats</h3>
      {loading ? (
        <p className="text-gray-400">Loading stats...</p>
      ) : error ? (
        <p className="text-red-400">Error loading stats</p>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-gray-400">Current Price</p>
            <p className="text-2xl font-bold text-blue-400">
              ${data?.bitcoin?.usd.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-gray-400">24h Change</p>
            <p className={`text-xl font-bold ${
              data?.bitcoin?.usd_24h_change > 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {data?.bitcoin?.usd_24h_change.toFixed(2)}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
}