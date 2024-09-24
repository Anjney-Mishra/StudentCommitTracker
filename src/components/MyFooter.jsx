import React from 'react';

const MyFooter = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="border-b border-gray-600 mb-4"></div>

      <h1 className="font-bold text-center text-xl mb-4">
        Created by
      </h1>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
        {['Anjney Mishra', 'Aniket', 'Mohammad Atif', 'Yash'].map((name, index) => (
          <p 
            key={index} 
            className="text-lg hover:underline cursor-pointer transition-colors duration-300"
          >
            {name}
          </p>
        ))}
      </div>

      <div className="border-t border-gray-600 mt-4"></div>
      
      <p className="text-center mt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default MyFooter;
