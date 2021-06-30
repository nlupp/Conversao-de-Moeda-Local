//variaveis globais 
var texto = $("#valores").val();
var seletor1 = $("#moeda1").val();
var seletor2 = $("#moeda2").val();

$(document).ready(function () {
    form =  $('#formConversao');
    form.submit(converter);
});

function converter(){
    //let valAConv = texto.val();

    // apos verificar as condições imprime num p a resposta.
    // adicionar variavel $("<p>").text("O valor convertido fica em: " adiconar variavel);

    return false;
}

// o que fazer primeiro? Pegar o valor adicionado ao input
function valorInical( texto, seletor1) {

    let moedaInicial;

        switch (seletor1) {
        case"BRL":
           
            break;
        case"EUA":
            
            break;
        case"EUR":
           
            break;
        case"LIB":
            
            break;

            break;
        case"RMB":
            
            break;

        default:
            console.log('Não sei que tipo de moeda é essa');
            break;
    }
    
    return moedaInicial;
}

