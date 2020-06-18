//Crie uma função que receba uma frase e retorne qual a maior palavra.
//Exemplo:
//longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") 
// retorna 'aconteceu'

function longestWord(frase) {
    let array = frase.split(" ");
    let maiorPalavra = "";
    for (word of array) {
        if (word.trim().length > maiorPalavra.length) {
          maiorPalavra = word.trim();
        }
    }  
    console.log(maiorPalavra);
}

longestWord("adoro um perigo meu deus");
    
