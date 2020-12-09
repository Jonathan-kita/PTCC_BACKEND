const multer = require('multer')
const path = require('path')

console.log(path.resolve(__dirname, '..', 'uploads', 'Perfils'))

module.exports = multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'public', 'uploads', 'company', 'save'),
    filename: (req, file, cb) => {
        const tipo = file.mimetype;
        const resultado = tipo.substr(6);
        cb(null, `${req.params.nome}.${resultado}`);

    },
});
