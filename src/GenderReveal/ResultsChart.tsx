import React from 'react';

interface ResultsChartProps {
  votes: {
    boy: number;
    girl: number;
  };
}

const ResultsChart: React.FC<ResultsChartProps> = ({ votes }) => {
  const total = votes.boy + votes.girl;
  const boyPercentage = total > 0 ? Math.round((votes.boy / total) * 100) : 0;
  const girlPercentage = total > 0 ? Math.round((votes.girl / total) * 100) : 0;

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">The Results Are In!</h2>
      
      {total === 0 ? (
        <p className="text-lg mb-8">No votes yet! Be the first to make a guess.</p>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2">
            <span className="text-blue-600 font-bold">Boy: {votes.boy} votes</span>
            <span className="text-pink-600 font-bold">Girl: {votes.girl} votes</span>
          </div>
          
          <div className="h-16 bg-gray-200 rounded-full overflow-hidden mb-6 relative">
            <div 
              className="h-full bg-blue-500 absolute left-0 top-0"
              style={{ width: `${boyPercentage}%` }}
            >
              {boyPercentage > 10 && (
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-bold">
                  {boyPercentage}%
                </span>
              )}
            </div>
            <div 
              className="h-full bg-pink-500 absolute right-0 top-0"
              style={{ width: `${girlPercentage}%` }}
            >
              {girlPercentage > 10 && (
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white font-bold">
                  {girlPercentage}%
                </span>
              )}
            </div>
          </div>
          
          <div className="mt-8 bg-purple-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4">Current Prediction</h3>
            {votes.boy > votes.girl ? (
              <p className="text-2xl">Most people think it's a <span className="text-blue-600 font-bold">BOY</span>!</p>
            ) : votes.girl > votes.boy ? (
              <p className="text-2xl">Most people think it's a <span className="text-pink-600 font-bold">GIRL</span>!</p>
            ) : (
              <p className="text-2xl">It's a tie! The votes are split evenly!</p>
            )}
          </div>
        </>
      )}
      
      <div className="mt-12">
        <h3 className="font-bold text-xl mb-4">The Big Reveal</h3>
        <p className="text-lg">Join us at the party to find out if our guests guessed correctly!</p>
        <div className="flex justify-center space-x-8 mt-6">
          <div className="text-5xl">👶</div>
          <div className="text-5xl">❓</div>
        </div>
      </div>
    </div>
  );
};

export default ResultsChart;