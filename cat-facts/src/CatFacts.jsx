import React from 'react';

function CatFact({ fact }) {
  return <p>{fact || 'Loading...'}</p>;
}

export default CatFact;