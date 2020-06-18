let produto = 100;
let venda = -1;
let lucro = (venda - produto) * 0.2 * 1000 

if ( produto < 0 && venda < 0) {
    console.log ("erro")
} else {
    console.log(lucro)
}