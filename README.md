Por que devemos modularizar?
    --> Codigo vai se tornando complexo.
    --> dificil de dar manutenção.
    --> dificil de fazer mudanças.

Exemplo teorico de modulzariação.
    --> um bloco.
    --> em outro arquivo outra parte do sistema em outro bloco.
    --> e em outro arquivo mais um bloco de funcionalidade.
    //! para este caso o ideal para um desenvolvedor seria deixar a logica principal da funcionalidade em um arquivo, para arquivos complementares utilizar outros arquivos,
    assim melhorando a manutabilidade do codigo e melhorando tambem a agilidade de refatoração.


* Para estes casos temos dois tipos de Modulos no Node JS
    --> CommonJS ou CJS
        --* const elem = require('module');
            module.exports = {
                *MODULOS...*
            };
        //* O CommonJS utiliza uma sintaxe mais simples com as palavras-chave require para carregar modulos e module.exports para exportar funcionalidades.
        *CommonJS*
            *Síncrono por Padrão.* (TUDO ACONTECE AO MESMO TEMPO, NESTE CASO TODOS OS MODULOS ESTÃO SENDO CARREGADOS AO MESMO TEMPO.)
            *Uso Princial em Servidor(Node.JS).*
            *Sintaxe: `require` e `module.exports`.*
            *Carregamento Dinâmico.*

    --> ESM
        --> import { elem } from './module.js';
            export const elem = {
                imports...
            };
        //* Os módulos ESM intoduzem uma sintaxe unificada com as palavras-chaves import e export alinhada com padrões de outras linguagens modernas.
            *Assíncono por Padrão.* (NESTE CASO PODEMOS UTILIZAR OS MODULOS SEPARADAMENTE)
            *Suportado nativamento em Navegadores.*
            *Sintaxe: `import` e `export`.*
            *Carregamento Estático (Análise Estática).*
        
