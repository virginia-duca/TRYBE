let pecaXadrez;
pecaXadrez = "bispo";

switch (pecaXadrez){
    case "peao":
    console.log ("uma casa para frente");
    break;

    case "torre":
    console.log ("varias casas em direcoes retas");
    break;

    case "cavalo":
    console.log ("move em L");
    break;

    case "bispo":
    console.log ("move varias casas na diagonal");
    break;

    case "rainha":
    console.log ("move varias casas em qualquer direcao");
    break;

    case "rei":
    console.log ("move uma casa em qualquer direcao");
    break;

    default:
    console.log ("erro");
    break;
}