const multer = require('multer')
const path = require('path')

module.exports = multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'public', 'uploads', 'product', 'temporary'),
    filename: (req, file, cb) => {
        const tipo = file.mimetype;
        const resultado = tipo.substr(6);
        cb(null, `${req.params.nome}.${resultado}`);

    },
});
