//! Para este arquivo quero que ele seja exportado por padrão. SUA EXPORTAXÃO DEVE OCORRER!
//? E para este tipo de exportação tem um nome que é: export default.

//! Para que funcione devemos utilizar a palavra reservada exports.NOME_DA_FUNCAO.
exports.connectToDatabase = (dataName) => {
    console.log("Conexão com o banco:" + dataName);
}

exports.disconnectDatabase = () => {
    //! Teria a logica para desconectar do banco.
    console.log("desconectando.");
}

//! PARA UTILIZARMOS FUNÇÕES "EXPORT DEFAULT" DE FORMA ASYNC DEVMOS DECLARA-LAS DA SEGUINTE MANEIRA:
        //? Lembrete = Funções async são funções que o node espera serem executadas para depois executar tudo.
//* Nome tecnico = export default async.

exports.connectToDatabase = async (dataName) => {
    console.log("Conectando ao banco de dados: " + dataName);
}

exports.connectToDatabase = async () => {
    // Logica.
    console.log("Desconectando");
}


//! O QUE MUDA DA DEFAULT PARA AS OUTRAS E QUE NAO PRECISO CRIAR O "MODULE.EXPORTS".