import { useState } from 'react';

function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <p>Nombre de clics : {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>Ajouter un clic</button>
    </div>
  );
}

export default ClickCounter;