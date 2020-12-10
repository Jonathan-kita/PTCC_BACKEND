const SessionController = require("../controller/SessionController");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();

class Banco_Search extends Conexao {

    async search_filter(campo, busca) {
        const text = "select * from cat_prod_empresa where " + campo + " like '%" + busca + "%'"
        console.log(text);
        const client = await con.Open(text).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse search_filter");
            }, 1000)
        });
    }

    async search_filter_company(busca) {
        const text = "select * from empresa where nome like '%" + busca + "%'"
        console.log(text);
        const client = await con.Open(text).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse search_filter");
            }, 1000)
        });
    }
}

module.exports = Banco_Search;