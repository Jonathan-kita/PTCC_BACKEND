const Banco_Product = require("../model/ProductModel");
const banco_product = new Banco_Product();

class Product {

    Last_Product(id) {
        const result = banco_product.last_product(id)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Product_Create(nome, preco, empresa, marca, peso, descricao, um, foto) {
        const result = banco_product.create(nome, preco, empresa, marca, peso, descricao, um, foto)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    List_Product(idempresa) {
        const result = banco_product.list_product(idempresa)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    List_Product_Details(idproduto) {
        const result = banco_product.list_product_details(idproduto)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    List_Product_Category(idempresa, categoria) {
        const result = banco_product.list_product_category(idempresa, categoria)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Product_Update(idprod, nome, preco, empresa, marca, peso, descricao, um, status) {
        const result = banco_product.update(idprod, nome, preco, empresa, marca, peso, descricao, um, status)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Product_Update_Photo(foto, id, idprod) {
        const result = banco_product.update_photo(id, foto, idprod)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Category() {
        const result = banco_product.category()
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Category_Current(idproduto) {
        const result = banco_product.category_current(idproduto)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Species() {
        const result = banco_product.species()
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Breed(id_species) {
        const result = banco_product.breed(id_species)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Category_Create(categoria, produto, raca) {
        const result = banco_product.create_category(categoria, produto, raca)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Category_Update(categoria, produto, raca) {
        const result = banco_product.update_category(categoria, produto, raca)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }
}

module.exports = Product
