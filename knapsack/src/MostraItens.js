import React, { useState } from 'react';
// import { knapsackDinamico } from './algoritmo';

function MostraItens() {
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
      <h1>Mr Olympia Store</h1>
      <h2>Aqui estão os itens com base na quantia disponível:</h2>
      <div>
        <h3>Costeleta Suína: R$45, 23g de Proteínas</h3>
        <h3>Frango a Passarinho: R$33, 32g de Proteínas</h3>
        <h3>Coxinha da Asa (Drumette): R$31, 34g de Proteínas</h3>
        <h3>Salmão: R$40, 19g de Proteínas</h3>
        <h3>Ovo de Galinha: R$28, 13g de Proteínas</h3>
      </div>
      <br />
      <button  disabled={!selectedCapacity}>
        Voltar ao início
      </button>
    </div>
  );
}

export default MostraItens;
