import React, { useState, useEffect } from 'react';

const DealsSection = () => {
  const [currentDeal, setCurrentDeal] = useState(0);

  const deals = [
    {
      id: 1,
      title: 'DEAL 1',
      price: '$14.99',
      items: [
        'Small Chicken Calzone',
        'Small Fries',
        'Can of Pop',
        'Dipping Sauce'
      ]
    },
    {
      id: 2,
      title: 'DEAL 2',
      price: '$18.99',
      items: [
        'Medium Chicken Calzone',
        'Medium Fries',
        '2 Can of Pop',
        '2 Dipping Sauce'
      ]
    },
    {
      id: 3,
      title: 'DEAL 3',
      price: '$23.99',
      items: [
        'Large Chicken Calzone',
        'Large Fries',
        '2L Pop',
        '3 Dipping Sauce'
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % deals.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentDeal(index);
  };

  const handlePrevDeal = () => {
    setCurrentDeal((prev) => (prev - 1 + deals.length) % deals.length);
  };

  const handleNextDeal = () => {
    setCurrentDeal((prev) => (prev + 1) % deals.length);
  };

  return (
    <section id="deals" className="py-20 bg-gradient-to-b from-black to-orange-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Special </span>
          <span className="text-orange-500">Deals</span>
        </h2>

        <div className="relative max-w-md mx-auto">
          {/* Cards Container */}
          <div className="relative h-[400px] perspective-1000">
            {deals.map((deal, index) => (
              <div
                key={deal.id}
                className={`absolute inset-0 bg-gradient-to-br from-black to-orange-900/50 rounded-2xl p-8 shadow-xl border border-orange-500/20 backdrop-blur-sm transition-all duration-500 transform-gpu ${
                  index === currentDeal
                    ? 'opacity-100 translate-y-0 rotate-0'
                    : index < currentDeal
                    ? 'opacity-0 -translate-y-8 rotate-3'
                    : 'opacity-0 translate-y-8 -rotate-3'
                }`}
              >
                <div className="h-full flex flex-col">
                  <h3 className="text-3xl font-bold text-orange-500 mb-4">{deal.title}</h3>
                  <div className="flex-grow">
                    <ul className="space-y-4 text-lg text-white">
                      {deal.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="h-2 w-2 bg-orange-500 rounded-full mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <div className="text-4xl font-bold text-white mb-4">{deal.price}</div>
                    <button className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition-colors text-lg font-semibold">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevDeal}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-orange-500/20 hover:bg-orange-500 text-white p-3 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNextDeal}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-orange-500/20 hover:bg-orange-500 text-white p-3 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {deals.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentDeal ? 'bg-orange-500' : 'bg-orange-500/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;