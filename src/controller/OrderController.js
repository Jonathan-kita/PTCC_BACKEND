const Banco_Order = require("../model/OrderModel");
const banco_order = new Banco_Order();

class Order {

    Order_Details(id) {
        const result = banco_order.details(id)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Order_Status_Create(id, detalhe, data) {
        const result = banco_order.status_create(id, detalhe, data)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Order_Status(id) {
        const result = banco_order.status(id)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Order_Status_Update(id) {
        const result = banco_order.order_status_update(id)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }
}

module.exports = Order
