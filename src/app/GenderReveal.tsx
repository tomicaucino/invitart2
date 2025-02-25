import React, { useState, useEffect } from 'react';
import InvitationCard from '@/GenderReveal/InvitationCard';
import GenderGuessForm from '@/GenderReveal/GenderGuessForm';
import ResultsChart from '@/GenderReveal/ResultsChart';
import Navbar from '@/components/Navbar';

const GenderReveal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'invitation' | 'guess' | 'results'>('invitation');
  const [votes, setVotes] = useState<{ boy: number; girl: number }>({ boy: 0, girl: 0 });
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  // Simulate loading votes from localStorage or a backend
  useEffect(() => {
    const savedVotes = localStorage.getItem('genderRevealVotes');
    if (savedVotes) {
      setVotes(JSON.parse(savedVotes));
    }
    
    const userVoted = localStorage.getItem('userHasVoted');
    if (userVoted) {
      setHasVoted(true);
    }
  }, []);

  const handleVote = (gender: 'boy' | 'girl') => {
    const newVotes = {
      ...votes,
      [gender]: votes[gender] + 1
    };
    
    setVotes(newVotes);
    setHasVoted(true);
    localStorage.setItem('genderRevealVotes', JSON.stringify(newVotes));
    localStorage.setItem('userHasVoted', 'true');
    
    // Automatically switch to results after voting
    setActiveTab('results');
  };

  return (
    <main>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-100 p-4 flex flex-col items-center w-screen">
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Navigation Tabs */}
            <div className="flex border-b">
            <button 
                className={`py-4 px-6 font-medium text-lg ${activeTab === 'invitation' ? 'bg-pink-100 text-pink-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('invitation')}
            >
                Invitation
            </button>
            <button 
                className={`py-4 px-6 font-medium text-lg ${activeTab === 'guess' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('guess')}
            >
                Make Your Guess
            </button>
            <button 
                className={`py-4 px-6 font-medium text-lg ${activeTab === 'results' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`}
                onClick={() => setActiveTab('results')}
            >
                Results
            </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
            {activeTab === 'invitation' && <InvitationCard />}
            {activeTab === 'guess' && <GenderGuessForm onVote={handleVote} hasVoted={hasVoted} />}
            {activeTab === 'results' && <ResultsChart votes={votes} />}
            </div>
        </div>
        </div>
    </main>
  );
}

export default GenderReveal;