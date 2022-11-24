import FileSignature from '../models/FileSignature.js';
import PhysicalPerson from '../models/PhysicalPerson.js';

class FileSignaturesController {
    async store(req, res) {
        const { originalname: nome, filename: path } = req.file;
        const { person_pf_id } = req.body;

        const file = await FileSignature.create({
            nome,
            path,
            person_pf_id,
        });

        console.log('dados do files', file);
        return res.json(file);
    }

    async show(req, res) {
        const { id } = req.params;

        const personSignature = await FileSignature.findAll({
            where: { person_pf_id: id },

            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(personSignature);
    }

    async index(req, res) {
        const signature = await FileSignature.findAll({});

        return res.json(signature);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await FileSignature.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new FileSignaturesController();
