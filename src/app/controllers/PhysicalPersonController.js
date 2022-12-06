import FilePhoto from '../models/FilePhoto.js';
import FileSignature from '../models/FileSignature.js';
import PhysicalPerson from '../models/PhysicalPerson.js';

class PhysicalPersonController {
    async store(req, res) {
        const userExists = await PhysicalPerson.findOne({
            where: { cpf: req.body.cpf },
        });

        if (userExists) {
            return res
                .status(400)
                .json({ error: 'Já existe um investigado com este CPF.' });
        }
        const {
            id,
            nome,
            cpf,
            situacao,
            nascimento,
            naturalidade,
            titulo_eleitor,
            pis,
            rais,
            cnh,
            mae,
            pai,
            conjuge,
            file_photo_id,
        } = await PhysicalPerson.create(req.body);

        return res.json({
            id,
            nome,
            cpf,
            situacao,
            nascimento,
            naturalidade,
            titulo_eleitor,
            pis,
            rais,
            cnh,
            mae,
            pai,
            conjuge,
            file_photo_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const person = await PhysicalPerson.findAll({
            where: { id },
            include: [
                {
                    model: FilePhoto,
                    attributes: ['id', 'nome', 'path', 'url'],
                },
                {
                    where: { person_pf_id: id},
                    model: FileSignature,
                    attributes: ['id', 'nome', 'path','person_pf_id', 'url']
                },
            ],

        });

        return res.json(person);
    }

    async index(req, res) {
        const physical_persons = await PhysicalPerson.findAll({
            include: [
                {
                    model: FilePhoto,
                    attributes: ['id', 'nome', 'path', 'url'],
                },
            ],
        });

        return res.json(physical_persons);
    }

    async update(req, res) {
        const { id } = req.params;

        const {
            nome,
            cpf,
            situacao,
            nascimento,
            naturalidade,
            titulo_eleitor,
            pis,
            rais,
            cnh,
            mae,
            pai,
            conjuge,
            file_photo_id,
            user_id,
        } = req.body;

        const physicalPersonExists = await PhysicalPerson.findOne({
            where: { id },
        });

        if (!physicalPersonExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await physicalPersonExists.update({
            nome,
            cpf,
            situacao,
            nascimento,
            naturalidade,
            titulo_eleitor,
            pis,
            rais,
            cnh,
            mae,
            pai,
            conjuge,
            file_photo_id,
            user_id,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await PhysicalPerson.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new PhysicalPersonController();
