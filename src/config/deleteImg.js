const fs = require('fs')
const path = require('path');

module.exports = {
    async deleteCompTemp(req, res) {
        const { file } = req.body;
        console.log(file);
        fs.unlink(path.resolve(__dirname, '..', '..', 'public', 'uploads', 'company', 'temporary', file), (err) => {
            if (err) {
                console.error(err)
                return res.json({ "erro ao deletar": err })
            }

            return res.json({ "status": "ok" })
        })
    },
    async deleteCompSave(req, res) {
        const { file } = req.body;
        console.log(file);
        fs.unlink(path.resolve(__dirname, '..', '..', 'public', 'uploads', 'company', 'save', file), (err) => {
            if (err) {
                console.error(err)
                return res.json({ "erro ao deletar": err })
            }

            return res.json({ "status": "ok" })
        })
    },
    async deleteProdTemp(req, res) {
        const { file } = req.body;
        console.log(file);
        fs.unlink(path.resolve(__dirname, '..', '..', 'public', 'uploads', 'product', 'temporary', file), (err) => {
            if (err) {
                console.error(err)
                return res.json({ "erro ao deletar": err })
            }

            return res.json({ "status": "ok" })
        })
    },
    async deleteProdSave(req, res) {
        const { file } = req.body;
        console.log(file);
        fs.unlink(path.resolve(__dirname, '..', '..', 'public', 'uploads', 'product', 'save', file), (err) => {
            if (err) {
                console.error(err)
                return res.json({ "erro ao deletar": err })
            }

            return res.json({ "status": "ok" })
        })
    }
}