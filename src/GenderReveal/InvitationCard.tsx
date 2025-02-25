import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const InvitationCard: React.FC = () => {
  return (
    <div className="text-center">
      <div className="animate-bounce mb-4">
        <span className="text-blue-500 text-6xl font-bold">Boy</span>
        <span className="text-gray-500 text-6xl mx-2 font-bold">or</span>
        <span className="text-pink-500 text-6xl font-bold">Girl</span>
        <span className="text-gray-500 text-6xl font-bold">?</span>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Join Us for Our Gender Reveal Party!</h1>
      
      <div className="my-12 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-300 to-pink-300 flex items-center justify-center mb-4">
          <span className="text-4xl">👶</span>
        </div>
        
        <p className="text-lg text-gray-700 mb-8">
          Help us celebrate the upcoming arrival of our little one!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
          <Calendar className="w-10 h-10 text-purple-500 mb-2" />
          <h3 className="font-bold">Date</h3>
          <p>Saturday, March 15, 2025</p>
        </div>
        
        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
          <Clock className="w-10 h-10 text-purple-500 mb-2" />
          <h3 className="font-bold">Time</h3>
          <p>3:00 PM - 6:00 PM</p>
        </div>
        
        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
          <MapPin className="w-10 h-10 text-purple-500 mb-2" />
          <h3 className="font-bold">Location</h3>
          <p>123 Celebration Avenue</p>
          <p>Baby Town, BT 12345</p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-purple-50 rounded-lg">
        <h2 className="font-bold text-xl mb-2">Special Notes</h2>
        <p>Please wear blue or pink to show your prediction!</p>
        <p className="mt-2">Light refreshments will be served.</p>
      </div>
      
      <div className="mt-8">
        <p className="text-lg italic">Click "Make Your Guess" to predict if we're having a boy or girl!</p>
      </div>
    </div>
  );
};

export default InvitationCard;