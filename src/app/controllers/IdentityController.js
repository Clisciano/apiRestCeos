import Identity from '../models/Identity';
import PhysicalPerson from '../models/PhysicalPerson';

class IdentityController {
    async store(req, res) {
        const { id, identidade, orgao_expedidor, person_pf_id } =
            await Identity.create(req.body);

        return res.json({
            id,
            identidade,
            orgao_expedidor,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const person = await PhysicalPerson.findOne({
            attributes: ['nome'],
            where: { id },
            include: [
                {
                    model: Identity,
                    where: { person_pf_id: id },
                    attributes: ['id', 'identidade', 'orgao_expedidor'],
                },
            ],
        });

        return res.json(person);
    }

    async index(req, res) {
        const identificacao = await Identity.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(identificacao);
    }

    async update(req, res) {
        const { id } = req.params;

        const { identidade, orgao_expedidor } = req.body;

        const identificacaoExists = await Identity.findOne({
            where: { id },
        });

        if (!identificacaoExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await identificacaoExists.update({
            identidade,
            orgao_expedidor,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await Identity.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new IdentityController();
