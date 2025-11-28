// Bubble Sort - Ordenação por Bolha
function bubbleSort(arr) {
    const array = [...arr]; // Cria uma cópia do array original para não alterá-lo
    const n = array.length; // Pega o tamanho do array
    
    // Primeiro loop: controla quantas vezes vamos percorrer o array
    for (let i = 0; i < n - 1; i++) {
        // Segundo loop: percorre o array comparando elementos vizinhos
        for (let j = 0; j < n - i - 1; j++) {
            // Compara o elemento atual com o próximo elemento
            if (array[j] > array[j + 1]) {
                // Se o elemento atual for MAIOR que o próximo, TROCA eles
                // Usando destructuring assignment para trocar os valores
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
            // Se não for maior, não faz nada e continua
        }
        // A cada passagem completa, o maior elemento "flutua" para o final
    }
    
    return array; // Retorna o array ordenado
}

// Selection Sort - Ordenação por Seleção
function selectionSort(arr) {
    const array = [...arr]; // Cria uma cópia do array original
    const n = array.length; // Pega o tamanho do array
    
    // Primeiro loop: percorre cada posição do array
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume que o menor elemento está na posição atual
        
        // Segundo loop: procura o menor elemento no resto do array
        for (let j = i + 1; j < n; j++) {
            // Compara o elemento atual com nosso "menor candidato"
            if (array[j] < array[minIndex]) {
                minIndex = j; // Encontrou um elemento menor, atualiza a posição
            }
        }
        
        // Depois de encontrar o menor elemento, troca com a posição atual
        if (minIndex !== i) {
            // Troca o elemento atual com o menor elemento encontrado
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
        // Agora a posição 'i' tem o menor elemento possível
    }
    
    return array; // Retorna o array ordenado
}

// Insertion Sort - Ordenação por Inserção
function insertionSort(arr) {
    const array = [...arr]; // Cria uma cópia do array original
    const n = array.length; // Pega o tamanho do array
    
    // Começa do segundo elemento (índice 1) porque o primeiro já está "ordenado"
    for (let i = 1; i < n; i++) {
        const key = array[i]; // Guarda o elemento atual que vamos inserir
        let j = i - 1; // Começa comparando com o elemento anterior
        
        // Enquanto não chegou no início E o elemento anterior é MAIOR que a chave
        while (j >= 0 && array[j] > key) {
            // Move o elemento maior uma posição para a direita
            array[j + 1] = array[j];
            j--; // Volta mais uma posição para comparar
        }
        
        // Encontrou a posição correta! Insere a chave aqui
        array[j + 1] = key;
        // Agora os primeiros 'i+1' elementos estão ordenados
    }
    
    return array; // Retorna o array ordenado
}

// Merge Sort - Ordenação por Mesclagem
function mergeSort(arr) {
    // CASO BASE: se o array tem 0 ou 1 elemento, já está ordenado
    if (arr.length <= 1) {
        return arr; // Retorna o array como está
    }
    
    // ENCONTRAR O MEIO: divide o array em duas partes iguais
    const mid = Math.floor(arr.length / 2); // Pega o índice do meio
    
    // DIVIDIR: quebra o array em duas metades
    const left = mergeSort(arr.slice(0, mid));   // Metade esquerda (recursão)
    const right = mergeSort(arr.slice(mid));     // Metade direita (recursão)
    
    // CONQUISTAR: junta as duas metades ordenadas
    return merge(left, right); // Retorna o array mesclado e ordenado
}

// Função auxiliar que junta dois arrays ORDENADOS em um único array ORDENADO
function merge(left, right) {
    const result = []; // Array onde vamos colocar o resultado
    let leftIndex = 0; // Índice para percorrer o array left
    let rightIndex = 0; // Índice para percorrer o array right
    
    // Compara elementos de ambos os arrays enquanto houver elementos em ambos
    while (leftIndex < left.length && rightIndex < right.length) {
        // Compara o elemento atual de left com o de right
        if (left[leftIndex] < right[rightIndex]) {
            // Se left é menor, coloca ele no resultado
            result.push(left[leftIndex]);
            leftIndex++; // Avança no array left
        } else {
            // Se right é menor ou igual, coloca ele no resultado
            result.push(right[rightIndex]);
            rightIndex++; // Avança no array right
        }
    }
    
    // SOBRA: adiciona os elementos que restaram (se houver)
    // Concatena o que sobrou do left + o que sobrou do right
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}