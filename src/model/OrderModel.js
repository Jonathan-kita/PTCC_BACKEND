const SessionController = require("../controller/SessionController");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();

class Banco_Order extends Conexao {

    async details(id) {
        const text = "select * from lista_pedido_produto where idpedido = $1"
        const values = [id]
        const client = await con.Open(text, values).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text, values)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(valor)
                reject("Erro na promisse detalhes");
            }, 1000)
        });
    }

    async status_create(id, detalhe, data) {
        const text = "insert into status_pedido (pedido_id_status,status_detalhe,data_status,status) values ('"
            + id + "', '" + detalhe + "', '" + data + "')"
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
                resolve(valor)
                reject("Erro na promisse status");
            }, 1000)
        });
    }

    async status(id) {
        const text = "select status_detalhe from status_pedido where pedido_id_status = $1 order by data_status"
        const values = [id]
        const client = await con.Open(text, values).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text, values)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(valor)
                reject("Erro na promisse status");
            }, 1000)
        });
    }

    async order_status_update(id) {
        const text = "update pedido set status = 0 where idpedido = $1"
        const values = [id]
        const client = await con.Open(text, values).catch(e => console.error("erro na query"))

        if (!client) {
            return erros.Client;
        }

        const valor = await client
            .query(text, values)
            .then(token => { return token })
            .catch(e => console.error("Não foi possivel" + e.stack))
            .finally(() => con.End(client))

        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(valor)
                reject("Erro na promisse status_update");
            }, 1000)
        });
    }

}

module.exports = Banco_Order


