const express = require("express");
const rotas = require('./Routes/routes');
const imgController = require("./controller/imgController");
const deleteImg = require("./config/deleteImg");
const routes = express.Router();

function prodTemp() {
    const multer = require('multer');
    const storage = require('./config/uploadProductTemporary');
    const upload = multer({ storage });
    return upload.single('temp');
}

function prodSave() {
    const multer = require('multer');
    const storage = require('./config/uploadProduct');
    const upload = multer({ storage });
    return upload.single('img');
}

function companyTemp() {
    const multer = require('multer');
    const storage = require('./config/uploadCompanyTemporary');
    const upload = multer({ storage });
    return upload.single('temp');
}

function companySave() {
    const multer = require('multer');
    const storage = require('./config/uploadCompany');
    const upload = multer({ storage });
    return upload.single('img');
}

routes.post('/ProdImg:nome', prodSave(), imgController.ProdSave);

routes.post('/ProdTemp:nome', prodTemp(), imgController.ProdTemp);

routes.post('/CompImg:nome', companySave(), imgController.CompSave);

routes.post('/CompTemp:nome', companyTemp(), imgController.CompTemp);

routes.post('/DelTempProd', async (req, res) => { deleteImg.deleteProdTemp(req, res); });

routes.post('/DelSaveProd', async (req, res) => { deleteImg.deleteProdSave(req, res); });

routes.post('/DelTempComp', async (req, res) => { deleteImg.deleteCompTemp(req, res); });

routes.post('/DelSaveComp', async (req, res) => { deleteImg.deleteCompSave(req, res); });

routes.post('/Login', async (req, res) => { rotas.login(req, res); });

routes.post('/Login_Empresa', async (req, res) => { rotas.company_login(req, res); });

routes.post('/Last_Product', async (req, res) => { rotas.Last_Product(req, res); });

routes.get('/Category', async (req, res) => { rotas.category(req, res); });

routes.get('/Species', async (req, res) => { rotas.species(req, res); });

routes.get('/Partnerships', async (req, res) => { rotas.partnerships(req, res); });

routes.post('/Category_Current', async (req, res) => { rotas.category_current(req, res); });

routes.post('/Breed', async (req, res) => { rotas.breed(req, res); });

routes.post('/List_Lojas', (req, res) => { return rotas.List_Lojas(req, res); });

routes.post('/List_Pedidos', (req, res) => { rotas.List_Pedidos(req, res); });

routes.post('/List_Product', (req, res) => { rotas.List_Product(req, res); });

routes.post('/List_Product_Details', (req, res) => { rotas.List_Product_Details(req, res); });

routes.post('/List_Product_Category', (req, res) => { rotas.List_Product_Category(req, res); });

routes.post('/Company_Register', (req, res) => { rotas.company_register(req, res); });

routes.post('/Order_Status_Create', (req, res) => { rotas.order_status_create(req, res); });

routes.post('/Product_Create', (req, res) => { rotas.product_create(req, res); });

routes.post('/Category_Create', (req, res) => { rotas.category_create(req, res); });

routes.post('/Order_Details', (req, res) => { rotas.order_details(req, res); });

routes.post('/Order_Status', (req, res) => { rotas.order_status(req, res); });

routes.post('/Order_Status_Update', (req, res) => { rotas.order_status_update(req, res); });

routes.post('/Product_Update', (req, res) => { rotas.product_update(req, res); });

routes.post('/Product_Update_Photo', (req, res) => { rotas.product_update_photo(req, res); });

routes.post('/Category_Update', (req, res) => { rotas.category_update(req, res); });

routes.post('/Company_Update', (req, res) => { rotas.company_update(req, res); });

routes.post('/Company_Address_Update', (req, res) => { rotas.company_address_update(req, res); });

routes.post('/Company_Photo_Update', (req, res) => { rotas.company_photo_update(req, res); });

routes.post('/Company', (req, res) => { rotas.company(req, res); });

routes.post('/Search_Filter', (req, res) => { rotas.Search_Filter(req, res); });

routes.post('/Search_Filter_Company', (req, res) => { rotas.Search_Filter_Company(req, res); });

module.exports = routes;