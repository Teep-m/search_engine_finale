import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // /videos, /search, /imagesを代入
  const getResults = async (url) => {
    setLoading(true);

    const response = await fetch(`${baseUrl}${url}`, {
      method: 'GET', 
      headers: {
        'X-RapidAPI-Key': '1588f04360msh52a6d8dbcf573c0p10dac8jsneed0cd3f0bc5',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      },
    });

    const data = await response.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);