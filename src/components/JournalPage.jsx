import React from 'react';
import TradingJournal from './TradingJournal';

const JournalPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Stock Trading Journal</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Trades</h2>
          <p className="mb-4">Keep track of your stock trades and analyze your performance.</p>
          <TradingJournal />
        </div>
      </main>
    </div>
  );
};

export default JournalPage;