let idades = [];
let opinioes = [];
let mulheres = 0;
let homens = 0;

function adicionarResposta() {
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const opiniao = parseInt(document.getElementById("opiniao").value);

    idades.push(idade);
    opinioes.push(opiniao);

    if (sexo === "feminino") {
        mulheres++;
    } else {
        homens++;
    }

    calcularEstatisticas();
}

function calcularEstatisticas() {
    const mediaIdade = idades.reduce((a, b) => a + b, 0) / idades.length;
    document.getElementById("mediaIdade").textContent = mediaIdade.toFixed(2);

    const idadeMaisVelha = Math.max(...idades);
    document.getElementById("maisVelha").textContent = idadeMaisVelha;

    const idadeMaisNova = Math.min(...idades);
    document.getElementById("maisNova").textContent = idadeMaisNova;

    const pessimoCount = opinioes.filter(opiniao => opiniao === 1).length;
    document.getElementById("pessimo").textContent = pessimoCount;

    const otimoBomCount = opinioes.filter(opiniao => opiniao === 4 || opiniao === 3).length;
    const porcentagemOtimoBom = (otimoBomCount / opinioes.length) * 100;
    document.getElementById("otimoBom").textContent = porcentagemOtimoBom.toFixed(2);

    document.getElementById("mulheres").textContent = mulheres;
    document.getElementById("homens").textContent = homens;
}
