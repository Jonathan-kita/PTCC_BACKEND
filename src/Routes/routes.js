const ValidaSession = require('../Validacao/ValidaSession');
const Valida = new ValidaSession();
const ListController = require('../controller/ListController');
const listController = new ListController;
const CompanyController = require('../controller/CompanyController');
const companyController = new CompanyController;
const OrderController = require('../controller/OrderController');
const orderController = new OrderController;
const ProductController = require('../controller/ProductController');
const productController = new ProductController;
const SearchController = require('../controller/SearchController');
const searchController = new SearchController;

const express = require("express");
const routes = express.Router();

module.exports = {

  async login(req, res) {
    const { Email } = req.body
    const { Pass } = req.body

    Valida.Valida_login(Email, Pass).then(
      function (results) {
        res.send(results)
      }
    )
  },
  async company_login(req, res) {
    const { Email } = req.body
    const { Pass } = req.body

    Valida.Valida_login_empresa(Email, Pass).then(
      function (results) {
        res.send(results)
      }
    )
  },

  async company_register(req, res) {
    const { nome } = req.body
    const { cnpj } = req.body
    const { email } = req.body
    const { senha } = req.body
    const { plano } = req.body
    const { celular } = req.body
    const { telefone } = req.body
    const { endereco } = req.body
    const { numero } = req.body
    const { cep } = req.body
    const { cidade } = req.body
    const { bairro } = req.body
    const { estado } = req.body
    const { complemento } = req.body

    companyController.Company_Register(nome, cnpj, email, senha, plano, celular, telefone, endereco, numero, cep, cidade, bairro, estado, complemento).then(
      results => res.send(results)
    )
  },

  async company(req, res) {
    const { idempresa } = req.body
    companyController.Company(idempresa).then(
      results => res.send(results)
    )
  },

  async partnerships(req, res) {
    companyController.Partnerships().then(
      results => res.send(results)
    )
  },

  async company_update(req, res) {
    const { idempresa } = req.body
    const { nome } = req.body
    const { cnpj } = req.body
    const { email } = req.body
    const { senha } = req.body
    const { telefone } = req.body
    const { celular } = req.body
    const { plano } = req.body
    const { frete } = req.body
    companyController.Company_Update(idempresa, nome, cnpj, email, senha, telefone, celular, plano, frete).then(
      results => res.send(results)
    )
  },

  async company_address_update(req, res) {
    const { idempresa } = req.body
    const { endereco } = req.body
    const { numero } = req.body
    const { cep } = req.body
    const { complemento } = req.body
    const { cidade } = req.body
    const { bairro } = req.body
    const { estado } = req.body
    companyController.Company_Address_Update(idempresa, endereco, numero, cep, complemento, cidade, bairro, estado).then(
      results => res.send(results)
    )
  },

  async company_photo_update(req, res) {
    const { idempresa } = req.body
    const { foto } = req.body
    companyController.Company_Photo_Update(idempresa, foto).then(
      results => res.send(results)
    )
  },

  async List_Lojas(req, res) {
    listController.User_Login().then(
      results => res.send(results)
    )
  },

  async List_Pedidos(req, res) {
    const { id } = req.body
    listController.List_pedido(id).then(
      results => res.send(results)
    )
  },

  async order_details(req, res) {
    const { id } = req.body
    orderController.Order_Details(id).then(
      results => res.send(results)
    )
  },

  async order_status_create(req, res) {
    const { id } = req.body
    const { detalhe } = req.body
    const { data } = req.body
    orderController.Order_Status_Create(id, detalhe, data).then(
      results => res.send(results)
    )
  },

  async order_status(req, res) {
    const { id } = req.body
    orderController.Order_Status(id).then(
      results => res.send(results)
    )
  },

  async order_status_update(req, res) {
    const { id } = req.body
    orderController.Order_Status_Update(id).then(
      results => res.send(results)
    )
  },

  async List_Product(req, res) {
    const { idempresa } = req.body
    productController.List_Product(idempresa).then(
      results => res.send(results)
    )
  },

  async List_Product_Details(req, res) {
    const { idproduto } = req.body
    productController.List_Product_Details(idproduto).then(
      results => res.send(results)
    )
  },

  async List_Product_Category(req, res) {
    const { idempresa } = req.body
    const { categoria } = req.body
    productController.List_Product_Category(idempresa, categoria).then(
      results => res.send(results)
    )
  },

  async product_create(req, res) {
    const { nome } = req.body
    const { preco } = req.body
    const { empresa } = req.body
    const { marca } = req.body
    const { peso } = req.body
    const { descricao } = req.body
    const { um } = req.body
    const { foto } = req.body
    productController.Product_Create(nome, preco, empresa, marca, peso, descricao, um, foto).then(
      results => res.send(results)
    )
  },
  async Last_Product(req, res) {
    const { id } = req.body
    productController.Last_Product(id).then(
      results => res.send(results)
    )
  },

  async product_update(req, res) {
    const { idprod } = req.body
    const { nome } = req.body
    const { preco } = req.body
    const { empresa } = req.body
    const { marca } = req.body
    const { peso } = req.body
    const { descricao } = req.body
    const { um } = req.body
    const { status } = req.body
    productController.Product_Update(idprod, nome, preco, empresa, marca, peso, descricao, um, status).then(
      results => res.send(results)
    )
  },

  async product_update_photo(req, res) {
    const { foto } = req.body
    const { id } = req.body
    const { idprod } = req.body
    productController.Product_Update_Photo(foto, id, idprod).then(
      results => res.send(results)
    )
  },

  async category(req, res) {
    productController.Category().then(
      results => res.send(results)
    )
  },

  async category_current(req, res) {
    const { idproduto } = req.body
    productController.Category_Current(idproduto).then(
      results => res.send(results)
    )
  },

  async species(req, res) {
    productController.Species().then(
      results => res.send(results)
    )
  },

  async breed(req, res) {
    const { id_species } = req.body
    productController.Breed(id_species).then(
      results => res.send(results)
    )
  },

  async category_create(req, res) {
    const { categoria } = req.body
    const { produto } = req.body
    const { raca } = req.body
    productController.Category_Create(categoria, produto, raca).then(
      results => res.send(results)
    )
  },

  async category_update(req, res) {
    const { categoria } = req.body
    const { produto } = req.body
    const { raca } = req.body
    productController.Category_Update(categoria, produto, raca).then(
      results => res.send(results)
    )
  },

  async Search_Filter(req, res) {
    const { campo } = req.body
    const { busca } = req.body
    searchController.Search_Filter(campo, busca).then(
      results => res.send(results)
    )
  },

  async Search_Filter_Company(req, res) {
    const { busca } = req.body
    searchController.Search_Filter_Company(busca).then(
      results => res.send(results)
    )
  },
}

