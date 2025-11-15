import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Donate: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number | string>(50);
  const [isMonthly, setIsMonthly] = useState(false);

  const donationOptions = [25, 50, 100, 250];

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(e.target.value);
  };

  return (
    <section id="donate" className="py-20 bg-earth-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-forest-700 text-white">
              <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
              <p className="mb-6 text-forest-100">
                Your donation directly supports our conservation programs and helps protect Maryland's 
                natural heritage for future generations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-earth-300 flex-shrink-0 mt-0.5" />
                  <p>Fund critical habitat restoration projects</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-earth-300 flex-shrink-0 mt-0.5" />
                  <p>Support wildlife conservation initiatives</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-earth-300 flex-shrink-0 mt-0.5" />
                  <p>Enable environmental education programs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-earth-300 flex-shrink-0 mt-0.5" />
                  <p>Strengthen advocacy for environmental policies</p>
                </div>
              </div>
              
              <div className="bg-forest-800 p-4 rounded-lg">
                <p className="text-sm mb-2 font-medium">Your donation is tax-deductible</p>
                <p className="text-sm text-forest-100">
                  Maryland Keystone Conservation Alliance is a 501(c)(3) nonprofit organization. 
                  Your contribution is tax-deductible to the extent allowed by law.
                </p>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-forest-800">Select Donation Amount</h3>
                  <div className="flex items-center">
                    <label className="flex items-center cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isMonthly}
                          onChange={() => setIsMonthly(!isMonthly)}
                        />
                        <div className={`block w-10 h-6 rounded-full transition ${isMonthly ? 'bg-forest-600' : 'bg-gray-300'}`}></div>
                        <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${isMonthly ? 'translate-x-4' : ''}`}></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">Monthly</span>
                    </label>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {donationOptions.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-2 rounded-md border transition-colors ${
                        donationAmount === amount
                          ? 'bg-forest-600 text-white border-forest-600'
                          : 'bg-white text-forest-800 border-gray-300 hover:border-forest-500'
                      }`}
                      onClick={() => setDonationAmount(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50 py-2 border"
                      placeholder="Enter amount"
                      value={typeof donationAmount === 'string' ? donationAmount : ''}
                      onChange={handleCustomAmount}
                      min="1"
                    />
                  </div>
                </div>
              </div>
              
              <button
                type="button"
                className="w-full bg-forest-600 hover:bg-forest-700 text-white font-medium py-3 px-4 rounded-md shadow-sm transition-colors mb-4"
              >
                {isMonthly ? 'Donate Monthly' : 'Make One-Time Donation'}
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                Secure payment processing. Your information is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;