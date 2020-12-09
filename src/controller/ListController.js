

const Banco_List = require("../model/ListModel");
const banco_List = new Banco_List();

class List {

   User_Login() {
      const result = banco_List.List_Lojas()
         .then(function (results) {
            return results.rows.map((({ idempresa, nome, foto_perfil }) => {
               return {
                  "id": idempresa, "name": nome, "url": "http://192.168.15.11:3333/uploads/company/save/" + foto_perfil,
                  "color": "#f76abc"
               }
            }))
         })
         .catch((e) => {
            return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
         })
      return result

   }
   List_pedido(id) {
      const result = banco_List.List_Pedidos(id)
         .then(function (results) {
            return results.rows;
         })
         .catch((e) => {
            return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
         })

      return result

   }

}

module.exports = List


/* const teste = new List()
teste.User_Login().then(results => (console.log(results)))  */

