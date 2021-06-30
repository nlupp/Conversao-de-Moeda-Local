//variaveis globais 
$(document).ready(function () {
    form = $('#formConversao');
    form.submit(converter);
 
});

const moedas = [
    {
        "EUA": {
            "EUR": 0.84,
            "LIB": 0.72,
            "RMB": 6.46,
            "BRL": 4.93
        }
    },
    {
        "BRL": {
            "EUA": 0.20,
            "EUR": 0.17,
            "LIB": 0.15,
            "RMB": 1.31
        }
    },
    {
        "EUR": {
            "LIB": 0.86,
            "RMB": 7.71,
            "BRL": 5.88,
            "EUA": 1.19
        }
    },
    {
        "LIB": {
            "RMB": 8.97,
            "BRL": 6.84,
            "EUA": 1.39,
            "EUR": 1.16
        }
    },
    {
        "RMB": {
            "BRL": 0.76,
            "EUA": 0.15,
            "EUR": 0.13,
            "LIB": 0.11
        }
    }
];

function converter() {
    var valor = $("#valores").val();
    var seletor1 = $("#moeda1").val();
    var seletor2 = $("#moeda2").val();
   



    moedas.forEach(function (item ) {
        var moedaOrigem = item[seletor1];
        if (moedaOrigem) {
            var moedaDestino = moedaOrigem[seletor2];
            var resultado = parseFloat(valor) * moedaDestino;
            console.log(resultado);
               
        }
    });
    

    console.log(seletor1);
    console.log(seletor2);
    /*
        // passo pra se orientar e ideias (erradas)
        let valAConv = texto.val();
        apos verificar as condições imprime num p a resposta. (final)
        adicionar variavel $("<p>").text("O valor convertido fica em: " adiconar variavel); (final)
        o que fazer primeiro? Pegar o valor adicionado no seletor de moeda inicial (ok fiz isso)
        identificado a opção da moeda inicial, selecionar o valor da conversão (não sei se uso um array if)
    */

    return false;
}

/*
// o que fazer primeiro? Pegar o valor adicionado no seletor de moeda inicial
function moedaInicial(valor, seletor1) {
    console.log(valor);
    let moedaInicial;

    switch (seletor1) {
        case "BRL":
            moedaInicial = valor;
            break;
        case "EUA":
            moedaInicial = valor;
            break;
        case "EUR":
            moedaInicial = valor;
            break;
        case "LIB":
            moedaInicial = valor;
            break;
        case "RMB":
            moedaInicial = valor;
            break;
        default:
            console.log('Não sei que tipo de moeda é essa');
            break;
    }
    console.log(resultado);
    return moedaInicial;
}

    // identificado a opção da moeda inicial, selecionar o valor da conversão
*/

