// Lógica principal da aplicação
document.addEventListener('DOMContentLoaded', function() {
    // Elementos da interface
    const numbersInput = document.getElementById('numbers');
    const bubbleSortBtn = document.getElementById('bubbleSort');
    const selectionSortBtn = document.getElementById('selectionSort');
    const insertionSortBtn = document.getElementById('insertionSort');
    const mergeSortBtn = document.getElementById('mergeSort');
    const originalListDisplay = document.getElementById('originalList');
    const sortedListDisplay = document.getElementById('sortedList');
    
    // Função para converter string de números em array
    function parseNumbers(input) {
        return input.split(',')
            .map(num => num.trim())
            .filter(num => num !== '')
            .map(num => {
                const parsed = parseFloat(num);
                if (isNaN(parsed)) {
                    throw new Error(`"${num}" não é um número válido`);
                }
                return parsed;
            });
    }
    
    // Função para exibir arrays formatados
    function displayArray(array, element) {
        if (array.length === 0) {
            element.textContent = '-';
        } else {
            element.textContent = '[' + array.join(', ') + ']';
        }
    }
    
    // Função para executar e exibir um algoritmo de ordenação
    function executeSort(algorithm, algorithmName) {
        try {
            const input = numbersInput.value;
            if (!input.trim()) {
                alert('Por favor, digite alguns números para ordenar.');
                return;
            }
            
            const originalArray = parseNumbers(input);
            displayArray(originalArray, originalListDisplay);
            
            const startTime = performance.now();
            const sortedArray = algorithm(originalArray);
            const endTime = performance.now();
            
            displayArray(sortedArray, sortedListDisplay);
            
            console.log(`${algorithmName} executado em ${(endTime - startTime).toFixed(2)}ms`);
        } catch (error) {
            alert(`Erro: ${error.message}`);
        }
    }
    
    // Event listeners para os botões
    bubbleSortBtn.addEventListener('click', () => {
        executeSort(bubbleSort, 'Bubble Sort');
    });
    
    selectionSortBtn.addEventListener('click', () => {
        executeSort(selectionSort, 'Selection Sort');
    });
    
    insertionSortBtn.addEventListener('click', () => {
        executeSort(insertionSort, 'Insertion Sort');
    });
    
    mergeSortBtn.addEventListener('click', () => {
        executeSort(mergeSort, 'Merge Sort');
    });
    
});