//! A finalidade deste arquivo normalmente é para especificarmos quando o projeto esta ou não em modo de produção ou em homologação.
const devArea = {
    version: "033cd",
    production: true,
}

//! Mais exemplo para utilização.
const client = {
    device: "web",
};

//! Quando temos apenas um conteudo podemos exportar sem necessariamente utilizar um escopo. Porém caso precise utilizar mais de uma exportação devo utilziar o escopo.
module.exports = {
    devArea,
    client,
};
