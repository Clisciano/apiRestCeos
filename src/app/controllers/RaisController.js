import Rais from '../models/Rais';
import PhysicalPerson from '../models/PhysicalPerson';

class RaisController {
    async store(req, res) {
        const {
            id,
            empresa_orgao,
            cnpj,
            tipo_vinculo,
            admissao,
            situacao,
            person_pf_id,
        } = await Rais.create(req.body);

        return res.json({
            id,
            empresa_orgao,
            cnpj,
            tipo_vinculo,
            admissao,
            situacao,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const rais = await Rais.findAll({
            attributes: [
                'id',
                'empresa_orgao',
                'cnpj',
                'tipo_vinculo',
                'admissao',
                'situacao',
            ],
            where: { person_pf_id: id },
        });

        return res.json(rais);
    }

    async index(req, res) {
        const rais = await Rais.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(rais);
    }

    async update(req, res) {
        const { id } = req.params;

        const { empresa_orgao, cnpj, tipo_vinculo, admissao, situacao } =
            req.body;

        const raisExists = await Rais.findOne({
            where: { id },
        });

        if (!raisExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await raisExists.update({
            empresa_orgao,
            cnpj,
            tipo_vinculo,
            admissao,
            situacao,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Rais.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new RaisController();
