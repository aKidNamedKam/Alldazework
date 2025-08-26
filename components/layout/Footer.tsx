import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            AllDazeWork
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            Transforming ideas into winning digital experiences
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2024 AllDazeWork. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}