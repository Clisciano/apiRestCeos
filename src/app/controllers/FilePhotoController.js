import FilePhoto from '../models/FilePhoto.js';

class FileController {
    async store(req, res) {
        const { originalname: nome, filename: path } = req.file;

        const file = await FilePhoto.create({
            nome,
            path,
        });
        return res.json(file);
    }

    async show(req, res) {
        const { id } = req.params;

        const personPhoto = await FilePhoto.findAll({ where: { id } });

        return res.json(personPhoto);
    }

    async index(req, res) {
        const photo = await FilePhoto.findAll({});

        return res.json(photo);
    }

    async update(req, res) {
        const { id } = req.params;

        const { nome, path } = req.file;

        const photoPersonExists = await FilePhoto.findOne({
            where: { id },
        });

        if (!photoPersonExists) {
            return res.status(400).json({ error: 'Photo already exists.' });
        }

        const response = await photoPersonExists.update({
            nome,
            path,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await FilePhoto.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new FileController();
