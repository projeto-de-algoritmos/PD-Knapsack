function knapsackDinamico(items, capacity) {
    const n = items.length;
    const dpTable = [];

    for (let i = 0; i <= n; i++) {
        dpTable[i] = [];
        for (let w = 0; w <= capacity; w++) {
        if (i === 0 || w === 0) {
            dpTable[i][w] = 0;
        } else if (items[i - 1].weight <= w) {
            const remainingCapacity = w - items[i - 1].weight;
            dpTable[i][w] = Math.max(
            items[i - 1].value + dpTable[i - 1][remainingCapacity],
            dpTable[i - 1][w]
            );
        } else {
            dpTable[i][w] = dpTable[i - 1][w];
        }
        }
    }

    let remainingCapacity = capacity;
    const selectedItems = [];

    for (let i = n; i > 0 && remainingCapacity > 0; i--) {
        if (dpTable[i][remainingCapacity] !== dpTable[i - 1][remainingCapacity]) {
        selectedItems.push(items[i - 1].name);
        remainingCapacity -= items[i - 1].weight;
        }
    }

    return {
        maxValue: dpTable[n][capacity],
        selectedItems: selectedItems.reverse()
    };
}

//peso = preço em reais
//valor = proteina em gramas

const items = [
    { name: "Filé Mignon", value: 25, weight: 38},
    { name: "Costela Bovina", value: 27, weight: 43},
    { name: "Picanha Bovina", value: 26, weight: 47},
    { name: "Contrafilé Bovino", value: 29, weight: 36},
    { name: "Alcatra Bovina", value: 28, weight: 50},
    
    { name: "Lombo Suíno", value: 21, weight: 39},
    { name: "Costeleta Suína", value: 23, weight: 45},
    { name: "Pernil Suíno", value: 24, weight: 37},
    { name: "Bacon Suíno", value: 20, weight: 42},
    { name: "Copa Lombo Suína", value: 22, weight: 48},
    
    { name: "Frango a Passarinho", value: 32, weight: 33},
    { name: "Coxinha da Asa (Drumette)", value: 34, weight: 31},
    { name: "Sobrecoxa de Frango", value: 30, weight: 34},
    { name: "Asa de Frango", value: 35, weight: 18},
    { name: "Espetinho de Frango", value: 33, weight: 19},
    
    { name: "Salmão", value: 19, weight: 40},
    { name: "Tilápia", value: 15, weight: 44},
    { name: "Atum", value: 26, weight: 35},
    { name: "Linguado", value: 16, weight: 46},
    { name: "Truta", value: 18, weight: 41},
    
    { name: "Ovo de Galinha", value: 13, weight: 28},
    { name: "Omelete", value: 14, weight: 20},
    { name: "Ovos Mexidos", value: 15, weight: 17},
    { name: "Ovos Benedict", value: 12, weight: 30},
    { name: "Huevos Rancheros", value: 20, weight: 25},
    
    { name: "Soja", value: 24, weight: 16},
    { name: "Tofu", value: 28, weight: 22},
    { name: "Tempeh", value: 21, weight: 29},
    { name: "Edamame", value: 25, weight: 26},
    { name: "Proteína de Soja Texturizada", value: 29, weight: 21}
];
  
const resultado = knapsackDinamico(items, 1000);
console.log("Valor máximo:", resultado.maxValue);
console.log("Itens selecionados:", resultado.selectedItems);
resultado.selectedItems.forEach(item => {
    const selectedItem = items.find(i => i.name === item);
    console.log(`- ${item} (Porteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})`);
  });

  