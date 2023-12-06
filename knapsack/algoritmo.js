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
    { name: "Filé Mignon", value: 250, weight: 38},
    { name: "Costela Bovina", value: 270, weight: 43},
    { name: "Picanha Bovina", value: 260, weight: 47},
    { name: "Contrafilé Bovino", value: 290, weight: 36},
    { name: "Alcatra Bovina", value: 280, weight: 50},
    
    { name: "Lombo Suíno", value: 210, weight: 39},
    { name: "Costeleta Suína", value: 230, weight: 45},
    { name: "Pernil Suíno", value: 240, weight: 37},
    { name: "Bacon Suíno", value: 200, weight: 42},
    { name: "Copa Lombo Suína", value: 220, weight: 48},
    
    { name: "Frango a Passarinho", value: 320, weight: 33},
    { name: "Coxinha da Asa", value: 340, weight: 31},
    { name: "Sobrecoxa de Frango", value: 300, weight: 34},
    { name: "Asa de Frango", value: 350, weight: 18},
    { name: "Espetinho de Frango", value: 330, weight: 19},
    
    { name: "Salmão", value: 190, weight: 40},
    { name: "Tilápia", value: 150, weight: 44},
    { name: "Atum", value: 260, weight: 35},
    { name: "Linguado", value: 160, weight: 46},
    { name: "Truta", value: 180, weight: 41},
    
    { name: "Ovo Branco", value: 180, weight: 25},
    { name: "Omelete", value: 140, weight: 20},
    { name: "Ovos de Codorna", value: 150, weight: 17},
    { name: "Ovos Caipira", value: 120, weight: 30},
    { name: "Testículo Bovino", value: 200, weight: 25},
    
    { name: "Soja", value: 240, weight: 16},
    { name: "Tofu", value: 280, weight: 22},
    { name: "Tempeh", value: 210, weight: 29},
    { name: "Edamame", value: 250, weight: 26},
    { name: "Proteína de Soja Texturizada", value: 290, weight: 21}
];

document.getElementById('botaoUm').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoUm").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})


  document.getElementById('botaoDois').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoDois").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
  
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})

  document.getElementById('botaoTres').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoTres").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
  
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})
  
  document.getElementById('botaoQuatro').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoQuatro").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
  
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})

  document.getElementById('botaoCinco').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoCinco").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
  
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})

  document.getElementById('botaoSeis').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoSeis").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
  
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})

  document.getElementById('botaoSete').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoSete").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
  
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})

  document.getElementById('botaoOito').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoOito").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
  
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})

  document.getElementById('botaoNove').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoNove").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
  
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})

  document.getElementById('botaoDez').addEventListener('click', function() {
    const capacidade = document.getElementById("botaoDez").value
  
    const resultado = knapsackDinamico(items, capacidade);
    let resultadoDiv = document.getElementById("resultado");
  
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<p>Valor de proteínas máximo colocado no carrinho: ${resultado.maxValue} gramas</p>
    <br>`
    resultado.selectedItems.forEach(item => {
      const selectedItem = items.find(i => i.name === item);
      resultadoDiv.innerHTML += `- ${item} (Proteínas: ${selectedItem.value} g; Valor: R$${selectedItem.weight})
      <br>
      <br>`
    });
})

  