const ValidaSession = require('../Validacao/ValidaSession');
const Valida = new ValidaSession();
const ListController = require('../controller/ListController');
const listController = new ListController;
const CompanyController = require('../controller/CompanyController');
const companyController = new CompanyController;
const OrderController = require('../controller/OrderController');
const orderController = new OrderController;

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
  }

}

