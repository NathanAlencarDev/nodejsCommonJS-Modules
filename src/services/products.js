//? Um export pode e caso necessario devemos exportar mais de uma função.
//! OBS: As exportações inteligentes é uma tecnica utilizada para separarmos o que deve ou nao ser exportado um exemplo seria a função doBreakLine.

//! O node considera um modulo todo e qualquer arquivo separado. Não importa se é JavaScript ou TypeScript.
const productType ={
    version: "Digital",
    tax: "x1",
}

//! Está é uma Hidden Const. Ele so faz sentido existir aqui, logo nao faz sentido ser exportado.
const apiURL = {
    url: 'www.google.com/api',
}

//! --Arquivo responsável por lidar diretamente com os produtos.
async function getFullName(codeId, productName){
    console.log("\nproductX: " + codeId + " -- " + productName);
    await doBreakLine;
}

//! Exemplo de como podemos criar qualquer tipo de função desde simples à complexas.
//? Neste exemplo estou criando uma função muito simples, apenas para adicionar um \n(quebra de linha).
//* No caso desta função simples não é necessario exportala, já que estou utilizando aqui no proprio arquivo, dentro da função getFullName. 
//* Este tipo de função tambem é conhecida como Hidden Members.
async function doBreakLine(){
    console.log("\n");
}


//! -- Exemplo para retornar apenas o nome do produto.
async function getProductLabel(productName){
    console.log("Product" + productName);
}

//! --Antes de realizar a exportação deste arquivo e suas funcionalidades preciso realizar a seguinte configuração.
module.exports = {
    getFullName,
    getProductLabel,
    productType,
};