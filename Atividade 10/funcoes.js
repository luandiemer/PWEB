// Função para encontrar o maior número entre três números
function encontrarMaiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

// Função para ordenar três números em ordem crescente
function ordenarNumeros(num1, num2, num3) {
    const numeros = [num1, num2, num3];
    numeros.sort(function(a, b) {
        return a - b;
    });
    return numeros;
}
