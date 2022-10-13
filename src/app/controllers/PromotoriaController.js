import Promotorias from '../models/Promotoria.js';

class PromotoriaController {
    async store(req, res) {
        const { id, nome, cidade, bairro, endereco, cep, telefone, email } =
            await Promotorias.create(req.body);

        return res.json({
            id,
            nome,
            cidade,
            bairro,
            endereco,
            cep,
            telefone,
            email,
        });
    }

    async index(req, res) {
        const promotorias = await Promotorias.findAll();

        return res.json(promotorias);
    }

    async update(req, res) {
        const { id } = req.params;

        const { nome, cidade, bairro, endereco, cep, telefone, email } =
            req.body;

        const promotoriaExists = await Promotorias.findOne({
            where: { id },
        });

        if (!promotoriaExists) {
            return res
                .status(400)
                .json({ error: 'Promotoria already exists.' });
        }

        const response = await promotoriaExists.update({
            nome,
            cidade,
            bairro,
            endereco,
            cep,
            telefone,
            email,
        });

        return res.json(response);
    }
}

export default new PromotoriaController();
