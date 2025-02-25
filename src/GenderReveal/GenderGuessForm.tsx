import React, { useState } from 'react';

interface GenderGuessFormProps {
  onVote: (gender: 'boy' | 'girl') => void;
  hasVoted: boolean;
}

const GenderGuessForm: React.FC<GenderGuessFormProps> = ({ onVote, hasVoted }) => {
  const [name, setName] = useState('');
  const [selectedGender, setSelectedGender] = useState<'boy' | 'girl' | null>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedGender) {
      onVote(selectedGender);
    }
  };

  if (hasVoted) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Thanks for your guess!</h2>
        <p className="text-lg">Your prediction has been recorded.</p>
        <p className="mt-4">Click on "Results" to see what everyone thinks!</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">What do you think we're having?</h2>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        
        <div className="mb-8">
          <p className="block text-gray-700 mb-4">Your Guess</p>
          
          <div className="flex space-x-4 justify-center">
            <div
              className={`flex-1 p-6 rounded-lg border-2 cursor-pointer text-center ${
                selectedGender === 'boy' 
                ? 'border-blue-500 bg-blue-100' 
                : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => setSelectedGender('boy')}
            >
              <div className="text-5xl mb-2">👦</div>
              <h3 className="font-bold text-blue-600">It's a Boy!</h3>
            </div>
            
            <div
              className={`flex-1 p-6 rounded-lg border-2 cursor-pointer text-center ${
                selectedGender === 'girl' 
                ? 'border-pink-500 bg-pink-100' 
                : 'border-gray-200 hover:border-pink-300'
              }`}
              onClick={() => setSelectedGender('girl')}
            >
              <div className="text-5xl mb-2">👧</div>
              <h3 className="font-bold text-pink-600">It's a Girl!</h3>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="message">Leave a Message (Optional)</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={3}
          />
        </div>
        
        <button
          type="submit"
          disabled={!selectedGender || !name}
          className={`w-full py-3 rounded-lg font-bold text-white ${
            selectedGender && name
            ? 'bg-purple-600 hover:bg-purple-700'
            : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Submit Your Guess
        </button>
      </form>
    </div>
  );
};

export default GenderGuessForm;