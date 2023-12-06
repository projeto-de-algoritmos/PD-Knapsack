import React, { useState } from 'react';
// import { knapsackDinamico } from './algoritmo';

function App() {
  const [selectedCapacity, setSelectedCapacity] = useState(null);
  const [result, setResult] = useState(null);

  const items = [
    { name: "Cama King Size", value: 3000, weight: 30 },
    { name: "TV 70 polegadas", value: 2500, weight: 7 },
    { name: "Fogão 6 bocas", value: 3210, weight: 25 },
    { name: "Lava Roupa", value: 1000, weight: 18 },
    { name: "Mesa", value: 750, weight: 4 },
    { name: "Notebook", value: 4000, weight: 2 }
  ];

  const handleCapacitySelection = (capacity) => {
    setSelectedCapacity(capacity);
  };

  // const handleCalculate = () => {
  //   if (selectedCapacity !== null) {
  //     const result = knapsackDinamico(items, selectedCapacity);
  //     setResult(result);
  //   }
  // };

  return (
    <div>
      <h1>Selecione a Capacidade da Mochila:</h1>
      <div>
        {[10, 20, 30, 40, 50].map((capacity) => (
          <button
            key={capacity}
            onClick={() => handleCapacitySelection(capacity)}
            className={selectedCapacity === capacity ? 'selected' : ''}
            style={{ marginRight: '10px' }}
          >
            {capacity}
          </button>
        ))}
      </div>
      <br />
      <button  disabled={!selectedCapacity}>
        Calcular
      </button>

      {result && (
        <div>
          <h2>Resultado:</h2>
          <p>Valor máximo colocado na mochila: {result.maxValue}</p>
          <p>Itens selecionados: {result.selectedItems.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;
