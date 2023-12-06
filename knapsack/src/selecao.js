import React, { useState } from 'react';

function App() {
  const [selectedCapacity, setSelectedCapacity] = useState(null);

  const handleCapacitySelection = (capacity) => {
    setSelectedCapacity(capacity);
  };

  const handleCalculate = () => {
    // Aqui você pode chamar a função knapsackDinamico ou qualquer outra lógica necessária
    console.log("Capacidade selecionada:", selectedCapacity);
    // Coloque aqui a lógica de cálculo com a capacidade selecionada
  };

  return (
    <div>
      <h1>Selecione a Capacidade da Mochila:</h1>
      <div>
        {[10, 20, 30, 40, 50].map((capacity) => (
          <button
            key={capacity}
            onClick={() => handleCapacitySelection(capacity)}
            style={{ marginRight: '10px' }}
          >
            {capacity}
          </button>
        ))}
      </div>
      <br />
      <button onClick={handleCalculate} disabled={!selectedCapacity}>
        Calcular
      </button>
    </div>
  );
}

export default App;
