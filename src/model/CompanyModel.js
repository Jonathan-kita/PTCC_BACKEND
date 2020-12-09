const SessionController = require("../controller/SessionController");
const Conexao = require("../database/Conexao");
const erros = require("../Validacao/Erros");
const con = new Conexao();

class Banco_Company extends Conexao {

    async login(email, senha) {
        const text = "Select * from empresa where email = $1 and senha = $2"
        const values = [email, senha]
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
                console.log(valor.rows)
                resolve(valor)
                reject("Erro na promisse login");
            }, 1000)
        });
    }

    async register(nome, cnpj, email, senha, plano, celular, telefone, endereco, numero, cep, cidade, bairro, estado, complemento) {
        const text = "insert into empresa (nome,cnpj,email,senha,telefone,celular,endereco,numero,cep,complemento,plano_escolhido,cidade,bairro,estado) values('" +
            nome + "','" + cnpj + "','" + email + "','" + senha + "','" + telefone + "','"
            + celular + "','" + endereco + "','" + numero + "','" + cep + "','" + complemento
            + "','" + plano + "','" + cidade + "','" + bairro + "','" + estado + "')"
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
                reject("Erro na promisse register");
            }, 1000)
        });
    }

    async company(idempresa) {
        const text = "Select * from empresa where idempresa = $1"
        const values = [idempresa]
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
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse company");
            }, 1000)
        });
    }

    async partnerships() {
        const text = "Select * from parcerias"
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
                reject("Erro na promisse company");
            }, 1000)
        });
    }
    async update_company(idempresa, nome, cnpj, email, senha, telefone, celular, plano, frete) {
        const text = "update empresa set nome = $2, cnpj = $3, email = $4, senha = $5, telefone = $6, celular = $7, plano_escolhido = $8, frete = $9 where idempresa = $1"
        const values = [idempresa, nome, cnpj, email, senha, telefone, celular, plano, frete]
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
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse company");
            }, 1000)
        });
    }
    async update_address_company(idempresa, endereco, numero, cep, complemento, cidade, bairro, estado) {
        const text = "update empresa set endereco = $2, numero = $3, cep = $4, complemento = $5, cidade = $6, bairro = $7, estado = $8 where idempresa = $1"
        const values = [idempresa, endereco, numero, cep, complemento, cidade, bairro, estado]
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
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse company");
            }, 1000)
        });
    }
    async update_photo_company(idempresa, foto) {
        const text = "update empresa set foto_perfil = $2 where idempresa = $1"
        const values = [idempresa, foto]
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
                console.log(valor)
                resolve(valor)
                reject("Erro na promisse company");
            }, 1000)
        });
    }



}

module.exports = Banco_Company


