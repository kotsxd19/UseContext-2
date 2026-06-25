import React from 'react';
import useFetchData from '../hooks/useFetchData';

const DogPage = () => {
  const { data, loading, error } = useFetchData('https://dog.ceo/api/breeds/image/random');

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>Perrito Aleatorio</h2>
      {loading && <p style={{ fontSize: '1.2rem', color: '#666' }}>Cargando...</p>}
      {error && <p style={{ fontSize: '1.2rem', color: 'red' }}>Error: {error}</p>}
      {data && data.status === 'success' && (
        <div style={{ marginTop: '2rem' }}>
          <img 
            src={data.message} 
            alt="Random Dog" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '400px', 
              borderRadius: '12px', 
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)' 
            }} 
          />
        </div>
      )}
    </div>
  );
};

export default DogPage;
