import Header from './components/Header';
import StayList from './components/StayList';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [searchParams, setSearchParams] = useState({ location: '', guests: 0 });
  const [staysData, setStaysData] = useState([]);

  useEffect(() => {
    axios.get('/stays.json')
      .then((response) => {
        setStaysData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const handleSearch = (params) => {  
    setSearchParams(params);
  };

  const filteredStays = staysData.filter(stay => {
    const locationIsProvided = searchParams.location.trim() !== '';
    const totalGuests = searchParams.guests;


    const matchesLocation = locationIsProvided 
      ? (() => {
          const [cityPart, countryPart] = searchParams.location.split(',').map(part => part.trim());              
          return (
            ((stay.city.toLowerCase() === cityPart.toLowerCase() && 
             stay.country.toLowerCase() === countryPart.toLowerCase())|| (cityPart==="Whole") && 
             stay.country.toLowerCase() === countryPart.toLowerCase())
          );
        })()
      : true;


    const matchesGuests = totalGuests === 0 || (stay.maxGuests || 0) >= totalGuests;
  
    return matchesLocation && matchesGuests;
  });

  console.log(filteredStays);

  return (
    <div className='min-h-screen min-w-full flex justify-center items-center'>
      <div className="App bg-white min-h-screen px-10 max-w-7xl">
      <Header onSearch={handleSearch} />
      <StayList stays={filteredStays} />
   
    </div>
    </div>
    
  );
}

export default App;
