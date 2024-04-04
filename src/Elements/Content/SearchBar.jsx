import React, { useState } from 'react';

const SearchBar = ({ getImages }) => {
  const [q, setQ] = useState('');
  const [imageType, setImageType] = useState('all');

  const handleSearch = () => {
    getImages(q, imageType);
  };

  return (
    <div className="bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
      <button onClick={handleSearch} className="outline-none focus:outline-none">
        <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Search for Restaurants"
        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
      />
      <div className="select">
        <select
          value={imageType}
          onChange={(e) => setImageType(e.target.value)}
          className="text-sm outline-none focus:outline-none bg-transparent"
        >
          <option value="all">All</option>
          <option value="photo">Photo</option>
          <option value="illustration">Illustration</option>
          <option value="vector">Vector</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
