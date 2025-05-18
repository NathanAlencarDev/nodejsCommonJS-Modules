//! exportação dos arquivos. Neste caso estou requerendo ou solicitando o arquivo ou função que esta em outro arquivo.
//? Devo utilizar a palavra reservada "require" e assim dentro dos "()" passar o caminho do arquivo que queremos utilziar.
const product = require("./services/products"); //<-- PARA ESTE TIPO DE IMPORTAÇÃO ESTOU TRAZENDO TODAS AS FUNCIONALIDADES DO MEU MODULO.
//! Arquivo de configuração.
const config = require("./services/config");
//! Exports padrão.
const database = require("./services/database");

//! Em alguns casos queremos utilizar apenas uma função do modulo em especifico, e para isso devemos declara-lo da seguinte maneira.
const {getFullName, productType } = require("./services/products");



//! Todas as funções que lidam com o produto.
async function main() {
    console.log("Carrinho:");


    //* Assunto focado na tecnica "Destructuring".
    //! neste exemplo estou utilizando apenas a função getFullName que está dentro do meu modulo.
    getFullName("1", "ACTION FIGURE - GOKU BLACK");

    //! neste exemplo preciso especificar o que quero ou preciso utilizar:
    product.getFullName("1", "ACTION FIGURE - JIREN (UTILIZANDO A CHAMADA DO MODULO COM TODAS AS FUNÇÕES DENTRO DO MODULO).");

    console.log(productType);

    database.connectToDatabase("my-data");


    //! Após a invocação da linha 3 posso utilizar as funções que foram construidas no arquivo products.js
    //! p.getFullName("89", "Action Figure - Sheilong");
    //! p.getFullName("100", "Action Figure - Vegeta");
    //! p.getProductLabel("Action Figure - Sheilong");

    //! console.log(product.productType.version);
    
    //! console.log(product.productType.tax);
    
    //! console.log(config.production);
    
    //! console.log(config.client);
}

main();