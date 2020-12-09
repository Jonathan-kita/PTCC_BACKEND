const Banco_Company = require("../model/CompanyModel");
const banco_company = new Banco_Company();

class Company {

    Company_Login(Email, Pass) {
        const result = banco_company.login(Email, Pass)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result.then((result) => {
            if (result[0].email == Email) {
                return result
            } else {
                return { "Login_Status": "invalido" }
            }

        }).catch(e => {
            console.log("Erro ao verificar login solicitado Tela CompanyController linha 15")
            console.log("---------------------------------------------------------------")
            console.log(e)
            console.log("---------------------------------------------------------------")
            return { "Erro": "Não localizado #115988" }
        })



    }
    Company_Register(nome, cnpj, email, senha, plano, celular, telefone, endereco, numero, cep, cidade, bairro, estado, complemento) {
        const result = banco_company.register(nome, cnpj, email, senha, plano, celular, telefone, endereco, numero, cep, cidade, bairro, estado, complemento)
            .then(function (results) {
                return results
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }
    Company(idempresa) {
        const result = banco_company.company(idempresa)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }
    Partnerships() {
        const result = banco_company.partnerships()
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }
    Company_Update(idempresa, nome, cnpj, email, senha, telefone, celular, plano, frete) {
        const result = banco_company.update_company(idempresa, nome, cnpj, email, senha, telefone, celular, plano, frete)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }
    Company_Address_Update(idempresa, endereco, numero, cep, complemento, cidade, bairro, estado) {
        const result = banco_company.update_address_company(idempresa, endereco, numero, cep, complemento, cidade, bairro, estado)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }
    Company_Photo_Update(idempresa, foto) {
        const result = banco_company.update_photo_company(idempresa, foto)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }
}

module.exports = Company
