import React from 'react';
import { MessageSquare, Users } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "Introducing TravelFi's Reward System",
    author: "TravelFi Team",
    date: "March 15, 2024",
    excerpt: "Learn how you can earn TFF tokens by booking flights and referring friends."
  },
  {
    id: 2,
    title: "Partnership Announcement",
    author: "TravelFi Team",
    date: "March 14, 2024",
    excerpt: "We're excited to announce our new partnership with major airlines."
  }
];

export default function Community() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Community</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our growing community and stay updated with the latest news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <MessageSquare className="w-4 h-4 mr-2" />
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}