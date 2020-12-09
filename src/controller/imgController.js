class Perfil {


}

module.exports = {
    async ProdTemp(req, res) {
        console.log(req.file.mimetype)
        let arquivo = req.file.mimetype;
        const tipoArquivo = arquivo.substr(6);
        console.log(tipoArquivo)
        let nomeimg = req.params.nome;
        const img = nomeimg + '.' + tipoArquivo;
        console.log(img)
        const url = 'http://localhost:3333/uploads/product/temporary/' + img;
        console.log(url)
        return res.json({ "url": url, "img": img })
    },

    async ProdSave(req, res) {
        console.log(req.file.mimetype)
        let arquivo = req.file.mimetype;
        const tipoArquivo = arquivo.substr(6);
        console.log(tipoArquivo)
        let nomeimg = req.params.nome;
        const img = nomeimg + '.' + tipoArquivo;
        console.log(img)
        const url = 'http://localhost:3333/uploads/product/save/' + img;
        console.log(url)
        return res.json({ "url": url, "img": img })
    },

    async CompTemp(req, res) {
        console.log(req.file.mimetype)
        let arquivo = req.file.mimetype;
        const tipoArquivo = arquivo.substr(6);
        console.log(tipoArquivo)
        let nomeimg = req.params.nome;
        const img = nomeimg + '.' + tipoArquivo;
        console.log(img)
        const url = 'http://localhost:3333/uploads/company/temporary/' + img;
        console.log(url)
        return res.json({ "url": url, "img": img })
    },

    async CompSave(req, res) {
        console.log(req.file.mimetype)
        let arquivo = req.file.mimetype;
        const tipoArquivo = arquivo.substr(6);
        console.log(tipoArquivo)
        let nomeimg = req.params.nome;
        const img = nomeimg + '.' + tipoArquivo;
        console.log(img)
        const url = 'http://localhost:3333/uploads/company/save/' + img;
        console.log(url)
        return res.json({ "url": url, "img": img })
    }
}