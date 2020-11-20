const express = require("express");
const multer = require('multer');
const storage = require('./config/upload')
const imgController = require("./controller/imgController");
const routes = express.Router();
const upload = multer({ storage });
const rotas = require('./Routes/routes')

routes.post('/Img', upload.single('Foto_cadeado'), imgController.store);

routes.post('/Login', async (req, res) => { rotas.login(req, res); });

routes.post('/Login_Empresa', async (req, res) => { rotas.company_login(req, res); });

routes.post('/List_Lojas', (req, res) => { return rotas.List_Lojas(req, res); });

routes.post('/List_Pedidos', (req, res) => { rotas.List_Pedidos(req, res); });

routes.post('/Company_Register', (req, res) => { rotas.company_register(req, res); });

routes.post('/Order_Details', (req, res) => { rotas.order_details(req, res); });

routes.post('/Order_Status_Create', (req, res) => { rotas.order_status_create(req, res); });

routes.post('/Order_Status', (req, res) => { rotas.order_status(req, res); });

routes.post('/Order_Status_Update', (req, res) => { rotas.order_status_update(req, res); });

module.exports = routes;