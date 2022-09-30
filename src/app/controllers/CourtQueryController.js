import CourtQuery from '../models/CourtQuery';
import PhysicalPerson from '../models/PhysicalPerson';

class CourtQueryController {
    async store(req, res) {
        const {
            id,
            num_processo,
            capitulacao_penal,
            vara_responsavel,
            status_processo,
            participacao,
            person_pf_id,
        } = await CourtQuery.create(req.body);

        return res.json({
            id,
            num_processo,
            capitulacao_penal,
            vara_responsavel,
            status_processo,
            participacao,
            person_pf_id,
        });
    }

    async show(req, res) {
        const { id } = req.params;

        const courtquery = await CourtQuery.findAll({
            attributes: [
                'id',
                'num_processo',
                'capitulacao_penal',
                'vara_responsavel',
                'status_processo',
                'participacao',
            ],
            where: { person_pf_id: id },
        });

        return res.json(courtquery);
    }

    async index(req, res) {
        const courtquery = await CourtQuery.findAll({
            include: [
                {
                    model: PhysicalPerson,
                    attributes: ['id', 'nome'],
                },
            ],
        });

        return res.json(courtquery);
    }

    async update(req, res) {
        const { id } = req.params;

        const {
            num_processo,
            capitulacao_penal,
            vara_responsavel,
            status_processo,
            participacao,
        } = req.body;

        const courtQueryExists = await CourtQuery.findOne({
            where: { id },
        });

        if (!courtQueryExists) {
            return res
                .status(400)
                .json({ error: 'physical person already exists.' });
        }

        const response = await courtQueryExists.update({
            num_processo,
            capitulacao_penal,
            vara_responsavel,
            status_processo,
            participacao,
        });

        return res.json(response);
    }

    async delete(req, res) {
        const { id } = req.params;

        const response = await CourtQuery.destroy({
            where: { id },
        });

        return res.json(response);
    }
}

export default new CourtQueryController();
