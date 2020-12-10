const Banco_Search = require("../model/SearchModel");
const banco_search = new Banco_Search();

class Search {

    Search_Filter(campo, busca) {
        const result = banco_search.search_filter(campo, busca)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }

    Search_Filter_Company(busca) {
        const result = banco_search.search_filter_company(busca)
            .then(function (results) {
                return results.rows
            })
            .catch((e) => {
                return { "teste": "Ocorreu um erro inesperado Codigo #115987" }
            })
        return result
    }
}

module.exports = Search;
