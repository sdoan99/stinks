import React, { useState } from 'react';

const TradingJournal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('General');
  const [trade, setTrade] = useState({
    market: 'STOCK',
    symbol: '',
    target: '',
    stopLoss: '',
    action: 'BUY',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().split(' ')[0].slice(0, 5),
    quantity: '',
    price: '',
    fee: '0',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrade({ ...trade, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trade submitted:', trade);
    setIsOpen(false);
  };

  return (
    <div className="font-sans">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        New Trade
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">New Trade</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="flex mb-4">
              <button
                className={`flex-1 py-2 ${activeTab === 'General' ? 'bg-gray-700' : 'bg-gray-600'}`}
                onClick={() => setActiveTab('General')}
              >
                General
              </button>
              <button
                className={`flex-1 py-2 ${activeTab === 'Journal' ? 'bg-gray-700' : 'bg-gray-600'}`}
                onClick={() => setActiveTab('Journal')}
              >
                Journal
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Market</label>
                  <select
                    name="market"
                    value={trade.market}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 rounded px-3 py-2"
                  >
                    <option value="STOCK">STOCK</option>
                    <option value="CRYPTO">CRYPTO</option>
                    <option value="FOREX">FOREX</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Symbol</label>
                  <input
                    type="text"
                    name="symbol"
                    value={trade.symbol}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Target</label>
                  <input
                    type="text"
                    name="target"
                    value={trade.target}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Stop-Loss</label>
                  <input
                    type="text"
                    name="stopLoss"
                    value={trade.stopLoss}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 mb-4">
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1">Action</label>
                  <select
                    name="action"
                    value={trade.action}
                    onChange={handleInputChange}
                    className="w-full bg-green-500 text-white rounded px-3 py-2"
                  >
                    <option value="BUY">BUY</option>
                    <option value="SELL">SELL</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">Date/Time</label>
                  <div className="flex">
                    <input
                      type="date"
                      name="date"
                      value={trade.date}
                      onChange={handleInputChange}
                      className="w-1/2 bg-gray-700 rounded-l px-3 py-2"
                    />
                    <input
                      type="time"
                      name="time"
                      value={trade.time}
                      onChange={handleInputChange}
                      className="w-1/2 bg-gray-700 rounded-r px-3 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={trade.quantity}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={trade.price}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button type="button" className="text-blue-400">
                  + Add another
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingJournal;